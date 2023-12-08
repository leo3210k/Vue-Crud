<template>
  <transition-group>
    <PageHeader title="Usuários"
      subtitle="Cadastro de usuários: Incluir, Listar, Alterar e Excluir!"
      icon="users"
    />
    <div class="main">
      <div class="card">
        <form method="POST" class="form">
          <div class="form-inputs">
            <div class="field">
              <label class="field__label">Nome</label>
              <input type="text" 
                name="name"
                class="field__input"
                placeholder="Digite o nome..."
                v-model="state.user.name"/>
            </div>
            <div class="field">
              <label class="field__label">E-mail</label>
              <input type="text" 
                name="email"
                class="field__input"
                placeholder="Digite o e-mail..."
                v-model="state.user.email"/>
            </div>
          </div>
          <hr/>
          <div class="form-actions">
            <button class="form-actions--blue"
              @click="save($event)">Salvar</button>
            <button class="form-actions--gray"
              @click="clear($event)">Cancelar</button>
          </div>
        </form>
        <hr />
        <table className="table">
          <thead className="table-head">
            <tr>
              <th className="table-head__element">ID</th>
              <th className="table-head__element">Nome</th>
              <th className="table-head__element">E-mail</th>
              <th className="table-head__element">Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in state.list" :key="user.id">
              <td>{{user.id}}</td>
              <td>{{user.name}}</td>
              <td>{{user.email}}</td>
              <td className="table-actions">
                <button className="table-action table-action--edit"
                  @click="load(user)">
                  <i className="fa-solid fa-pen"></i>
                </button>
                <button className="table-action table-action--delete"
                  @click="deleteUser(user)">
                  <i className="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </transition-group>
</template>

<script>
import axios from 'axios'
import PageHeader from '../template/PageHeader'

export default {
  name: 'UserCrud',
  components: {
    PageHeader
  },
  data: function() {
    return {
      baseUrl: "http://localhost:3002/users",
      initialState: { 
        user: { name: '', email: '' },
        list: []
      },
      state: {
        user: { name: '', email: '' },
        list: []
      }
    }
  },
  mounted() {
    axios(`${this.baseUrl}`)
      .then(resp => this.state.list = [... resp.data])
  },
  methods: {
    save(event) {
      event.preventDefault()

      const user = this.state.user
      const method = user.id ? 'put' : 'post'
      const url = user.id ? `${this.baseUrl}/${user.id}` : this.baseUrl

      axios[method](`${url}`, user)
        .then(resp => this.getUpdatedList(resp.data))
        .then(list => {
          this.state.user = { ...this.initialState.user }
          this.state.list = [ ...list ]
        })
    },
    clear(event) {
      event.preventDefault()
      this.state.user = {...this.initialState.user}
    },
    load(user) {
      this.state.user = { ...user }
    },
    deleteUser(user) {
      axios.delete(`${this.baseUrl}/${user.id}`)
        .then(resp => console.log(resp))
        // .then(list => {
        //   this.state.user = { ...this.initialState.user }
        //   this.state.list = list 
        // })
    },
    getUpdatedList(user, add = true) {
      const list = this.state.list.filter(u => u.id !== user.id)
      console.log(user)

      if(add) list.unshift(user)

      return list  
    }
  }
}
</script>

<style>
.form > * {
  margin: 20px 0px;
}

.form-inputs {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.field {
  display: flex;
  flex-direction: column;
}

.field__label {
  margin-bottom: 10px;
}

.field__input {
  width: 38vw;
  height: 4vh;
  padding: 0px 10px;
  
  border-radius: 3px;
  border: var(--input-border);
}

.field__input::placeholder {
  font-size: 1rem;
  align-self: flex-start;
}

hr {
  border-color: var(--hr-border-color);
}

.form-actions {
  display: flex;
  justify-content: end;
}

.form-actions > button {
  margin: 0px 5px;
  padding: 10px 15px;

  font-size: 1rem;
  color: var(--white);
  border: none;
  border-radius: 4px;
}

.form-actions--blue {
  background-color: var(--deep-sky-blue);
}

.form-actions--gray {
  background-color: var(--pale-sky);
}

.form-actions > *:hover {
  cursor: pointer;
}

table {
  width: 100%;
}

.table-head > tr {
  padding-bottom: 10px;

  border-bottom: 2px solid rgba(203, 197, 197, 0.674);
}

tr { 
  text-align: center;
}

tbody > tr:nth-child(even) {
  background-color: #fcfdff;
}

tbody > tr:nth-child(odd) {
  background-color: #cfd5e1;
}

th, td {
  padding: 20px 0px;
}

.table-action {
  padding: 10px;
  border: none;
  border-radius: 5px;
}

.table-action--edit {
  background-color: #ffd000;
}

.table-action--delete {
  margin-left: 20px;
  background-color: #ff0800;
}

.table-action:hover {
  cursor: pointer;
}

@media (max-width: 450px) {
  .table-actions {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .table-action--delete {
    margin-left: 0;
    margin-top: 10px;
  }
}

</style>
<template>
  <footer className="footer">
    <span>
      Desenvolvido com <i className="fa-solid fa-heart"></i> por <strong>Leo</strong>
    </span>
  </footer>
</template>

<script>
export default {

}
</script>

<style>
.footer {
  grid-area: footer;

  display: flex;
  justify-content: end;
  align-items: center;
  padding-right: 20px;
  
  box-shadow: 
        0 2px 23px 0 rgba(0, 0, 0, 0.1),
        0 2px 49px 0 rgba(0, 0, 0, 0.06);
}

.footer i {
  color: var(--red);
}
</style>
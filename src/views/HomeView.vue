<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Hola Mundo</h1>

    <button @click="goToDayBook" class="btn btn-primary">Primary</button>
    <button @click="goToDayBook" class="btn btn-secondary">Secondary</button>
    <button @click="goToDayBook" class="btn btn-success">Success</button>
  </div>
</template>

<script>
export default {
  methods:{
    goToDayBook(){
      //Para solucionar el bug/glitch de que no aparece el componente hijo al entrar desde el boton llamamos directamente al hijo
      // this.$router.push({name: 'daybook'})
      this.$router.push({name: 'no-entry'})
    }
  }
}
</script>
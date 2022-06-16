<template>
  <div class="entry-list-container">
    <div class="px-2 pt-2">
      <input 
        type="text"
        class="form-control"
        placeholder="Buscar entrada"
        v-model="term"
      />
    </div>
    <div class="entry-scrollarea">
      <DayBookEntries
        v-for="entry in entriesByTerm"
        :key="entry.id"
        :entry="entry"
      />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapGetters } from 'vuex'
export default {
  components:{
    DayBookEntries: defineAsyncComponent( () => import('./DayBookEntries.vue') )
  },
  //Si se añade una propiedad reactiva de la data dentro de una propiedad computada, la propiedad computada se llamara cada vez que la propiedad de la data cambie (no se si funciona con los metodos, creo que no)
  computed:{
    ...mapGetters( 'journal', ['getEntriesByTerm']),
    entriesByTerm(){

      return this.getEntriesByTerm( this.term )
    },
  },
  data: () => ({
    term: '',
  })
}
</script>

<style lang="scss" scope>
.entry-list-container{
  border-right: 1px solid #2c3e50;
  height: calc(100vh - 56px)
}
.entry-scrollarea{
  height: calc( 100vh - 102px );
  overflow-y: scroll;
}
</style>
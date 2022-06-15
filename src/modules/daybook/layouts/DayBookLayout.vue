<template>
    <DayBookNavbar/>

    <div class="d-flex">
        <div class="col-4">
            <EntryList/>
        </div>
        <!-- Si se pone unicamente "col" ocupa el tamaño restante -->
        <div class="col">
            <router-view/>
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
export default {
    components:{
        DayBookNavbar: defineAsyncComponent(() => import('../components/DayBookNavbar.vue')),
        EntryList: defineAsyncComponent(() => import('../components/EntryList.vue'))
    }
}
</script>
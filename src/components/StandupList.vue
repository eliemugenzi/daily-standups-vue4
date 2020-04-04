<template>
  <main class="todo__list--main">
    <ul v-for="standup in standups" :key="standup.id" class="todo__list">
        <Standup
        :item="standup"
         />
    </ul>
  </main>
</template>

<script>
import Standup from './Standup.vue';
import { computed } from '@vue/composition-api';
import { useStore } from '../helpers/useStore';
export default {
   name: 'StandupList',
   setup(){

       const store = useStore();
       const standups = computed(()=> store.getters.standups );

      return {
          standups,
      }
   },
   components: {
       Standup,
   }
}
</script>

<style lang="scss">
  .todo{
      &__list{
          list-style: none;
          &--item{
              margin-bottom: 10px;
              border: 1px solid #CCC;
              padding: 10px;
          }

          &--main{
              margin: 30px 40px;
              height: 100vh;
              overflow: scroll;
          }

      }
  }
</style>
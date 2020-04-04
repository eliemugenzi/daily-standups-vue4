<template>
  <div id="app">
    <h3 class="center">Welcome to Standup Aline</h3>
    <div class="standup__container">
      <standup-list />
      <new-standup />
    </div>
  </div>
</template>

<script>
import StandupList from './components/StandupList.vue';
import NewStandup from './components/NewStandup.vue';

import { provideStore } from './helpers/useStore';

export default {
  name: 'App',
  components: {
    StandupList,
    NewStandup,
  },
  setup(props, { root: { $store: store } }){
    provideStore(store);
  }
}
</script>

<style lang="scss">
#app {
  
  margin: 20px 10%;

  .message{
    margin: auto 10%;
  }

  .center{
    text-align: center;
  }

  .standup__container{
    display: flex;
    justify-content: space-around;
  }
}
</style>

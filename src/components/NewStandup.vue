<template>
  <main class="new-standup">
      <div class="new-standup__container">
          <form @submit.prevent="submitStandup">
              <b-field label="Remind me your name" label-position="on-border">
                  <b-input type="text" v-model="state.author"></b-input>
              </b-field>
              <b-field label="What did you complete yesterday?" label-position="on-border">
                  <b-input type="textarea" v-model="state.done"></b-input>
              </b-field>
              <b-field label="What do you commit to do today?" label-position="on-border">
                  <b-input type="textarea" v-model="state.todo"></b-input>
              </b-field>
              <b-field label="Any Blockers?" label-position="on-border">
                  <b-input type="textarea" v-model="state.blockers"></b-input>
              </b-field>
              <b-button native-type="submit">Submit</b-button>
          </form>
      </div>
  </main>
</template>

<script>

import { reactive } from '@vue/composition-api';

export default {
  name: 'NewStandup',
  setup(){
     const state= reactive({
         author: null,
         done: null,
         todo: null,
         blockers: null
     });

     const submitStandup = ()=>{
       console.log(state.author);
     }

     return {
         state,
         submitStandup,
     }
  }
}
</script>

<style lang="scss">
  .new-standup{
      margin: 30px 0;
      width: 70%;
  }
</style>
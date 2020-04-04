<template>
  <main class="new-standup">
      <div class="new-standup__container">
          <form @submit.prevent="submitStandup">
              <b-field 
              label="Remind me your name" 
              label-position="on-border"
              :type="errorMessages.author.isDanger ? 'isDanger': ''"
              >
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
import { useStore } from '../helpers/useStore';

export default {
  name: 'NewStandup',
  setup(){
      const store = useStore();
      const { dispatch } = store;
     const state= reactive({
         author: null,
         done: null,
         todo: null,
         blockers: null
     });

     const errorMessages = reactive({
         author: {
             isDanger: false,
             message: null
         },
         done: {
             isDanger: false,
             message: null,
         },
         todo: {
             isDanger: false,
             message: null,
         },
         blockers: {
             isDanger: false,
             message: null,
         },
     });



     const submitStandup = ()=>{
       if(!state.author){
           errorMessages.author.isDanger=true;
           errorMessages.author.message="This field is required"
       }

       else if(!state.done){
           errorMessages.done.isDanger=true;
           errorMessages.done.message="This field is required";
       }

       else if(!state.todo){
           errorMessages.todo.isDanger=true;
           errorMessages.todo.message="This field is required";
       }

       else if(!state.blockers){
           errorMessages.blockers.isDanger=true;
           errorMessages.blockers.message="This field is required";
       }

       else{
          dispatch('setNewStandup', {
           ...state,
       });
       }
     }

     return {
         state,
         submitStandup,
         errorMessages,
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
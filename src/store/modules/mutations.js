import { STANDUP_SUBMITTED } from './mutationTypes';

const mutations = {
  [STANDUP_SUBMITTED]:(state, payload) =>{
      state.standups = [ {
          author: payload.author,
          done: payload.done,
          todo: payload.todo,
          blockers: payload.blockers,
          id: state.standups.length +1,
      } , ...state.standups];
      console.log(state.standups);
  }
};

export default mutations;

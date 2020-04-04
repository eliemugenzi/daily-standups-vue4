import { STANDUP_SUBMITTED } from './mutationTypes';

const mutations = {
  [STANDUP_SUBMITTED]:(state, payload) =>{
      state.standups = [ {
          ...payload,
          id: state.standups.length +1,
      } , ...state.standups];
  }
};

export default mutations;

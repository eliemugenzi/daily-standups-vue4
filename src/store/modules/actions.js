
const actions = {
  setNewStandup(standup, {commit}){
      commit('STANDUP SUBMITTED', standup);
  },
};

export default actions;

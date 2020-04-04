
const actions = {
  setNewStandup({commit}, standup){
      commit('STANDUP_SUBMITTED', standup);
  },
};

export default actions;

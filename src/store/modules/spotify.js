
const state = { token: null }
const mutations = {

    loginSucces(state, response) {
        console.log(response);
        state.token = response.token
    }
}
export default {
    state,
    mutations
}
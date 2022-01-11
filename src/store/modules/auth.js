import axios from 'axios';
const state = {
    token: null,
    user: {
        id: null,
        name: null,
        email: null
    },
    cave: {
        name: null
    },
};

const getters = {
    isAuthenticated: state => !!state.token,
    StateUser: state => state.user,
    StateToken: state => state.token,
};
const actions = {


    async LogIn({commit}, User) {
        try {
            const response = await axios.post(
                'user/login', 
                {
                    username: User.username, 
                    password: User.password
                }
            )
            await commit('setToken', response.data.token)
            await commit('setUser', response.data.user)
        } catch (error) {
            console.error(error);
            return [];
        }
    },

    async LogOut({commit}){
        let user = {
            id: null,
            name: null,
            email: null
        };
        commit('setUser', user);
        commit('setToken', null);
    },

    async getCave({commit}, CaveID) {
        try {
            const response = await axios.get('/cave/'+ CaveID)
            await commit('setCave', response.data)
        } catch (error) {
            console.error(error);
            return [];
        }
    }
    


};
const mutations = {

    setToken(state, token) {
        state.token = token;
    },

    setUser(state, User) {
        state.id = User.id;
        state.user = User.name;
        state.email = User.email;
    },

    setCave(state, cave) {
        state.cave.name = cave
    }

};
export default {
  state,
  getters,
  actions,
  mutations
};

import axios from "axios"
const URL = "https://api.unsplash.com/"

const state = {
    navBar : false,
    splash : []
};

const getters = {
getNav: state => state.navBar,
getSplash: state => state.splash
};

const actions = {
    toggleNavbar({commit}, title) {
        commit('navToggle', title)
    },

    async fetchData({commit}) {
        try {
          
        const {data} = await axios.get(`${URL}/photos?client_id=${process.env.VUE_APP_CLIENT_ID}`)

        const modifiedData = data.map((item) => ({
                 id:item.id,
                 name: item.user.first_name,
                 location: item.user.location,
                 photos_no: item.user.total_photos,
                 image: item.user.profile_image.large,
                 display: false
      
        }));

               commit('setSplash', modifiedData )
         
        } catch (error) {
            console.log(error);
        }
    },

    async searchData({commit}, search) {
        try {
          
        const {data} = await axios.get(`${URL}//search/photos?page=1&query=${search}&client_id=${process.env.VUE_APP_CLIENT_ID}`)

        const modifiedData = data.results.map((item) => ({
                 id:item.id,
                 name: item.user.first_name,
                 location: item.user.location,
                 photos_no: item.user.total_photos,
                 image: item.urls.small,
                 display: false
      
        }));

            commit('editSplash', modifiedData )
         
        } catch (error) {
            console.log(error);
        }
    },

    toggleCard({commit},id) {
       commit('editState', id )
    }
};

const mutations = {
    navToggle: (state, title)=>{
        state.navBar = title
    },

    setSplash: (state, data) => {
        state.splash = [...data]
    },

    editSplash: (state, data) => {
        state.splash = [...data]
    },

    editState: (state, id) => {
        let val_edit = [...state.splash];
        let cItem = val_edit.findIndex((t) => t.id === id);
        val_edit[cItem].display = !val_edit[cItem].display;
        state.splash=[...val_edit]

    },

}




export default {
    state,
    mutations,
    actions,
    getters,
}

import { createStore } from 'vuex'
export default createStore({
    state: {
        playList: [{//默认歌曲
            al: {
                id: 145303495,
                name: "记念",
                pic: 109951167466878400,
                picUrl: "http://p4.music.126.net/czSu2Irehg4h_H0urEGEPQ==/109951167466878408.jpg",
                pic_str: "109951167466878408",
            },
            id: 145303495,
        }],
        playIndex: 0,
    },
    mutations: {
        updatePlayList: function (state, value) {
            state.playList = value
            console.log(state.playList);
        },
        updatePlayListIndex: function (state, value) {
            state.playListIndex = value
        },
    },
    actions: {},
    modules: {}
})
import { loginByUsername } from '@/api/login'
import { getHistoryMsg, addHistoryMsg } from '@/api/msg'
import { setUserName } from '@/utils/localStorage'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // 存放用户连接
    socket: '',
    // 存放历史记录
    msgHistory: {
      info: [],
      allmessage: []
    },
    // 存放房间信息，为了方便以后做多房间
    roomDetail: {
      id: '',
      users: {},
      info: []
    }
  },

  getters: {
    getSocket: state => state.socket,
    getUsers: state => state.roomDetail.users,
    getInfo: state => state.roomDetail.info,
    getMsgHistoryInfo: state => state.msgHistory.info
  },

  mutations: {
    SET_SOCKET (state, socket) {
      state.socket = socket
    },
    SET_USERS: (state, user) => {
      state.roomDetail.users = user
    },
    ADD_ROOM_DETAIL_INFO: (state, info) => {
      state.roomDetail.info.push(info)
    },
    SET_ROOM_DETAIL_INFO: (state) => {
      state.roomDetail.info = []
    },
    SET_MSG_HISTORY_INFO: (state, info) => {
      state.msgHistory.info = info
    }
  },

  actions: {
    LoginByUsername ({ commit }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        loginByUsername(username, userInfo.password).then(response => {
          const data = response.data
          commit('SET_USERS', data.username)
          setUserName(data.username)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    SetWebSocket ({ commit }, wsocket) {
      commit('SET_SOCKET', wsocket)
    },
    GetMessHistory ({ commit }) {
      return new Promise((resolve, reject) => {
        getHistoryMsg().then(response => {
          const data = response.data
          commit('SET_MSG_HISTORY_INFO', data)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    AddMessHistory ({ commit }, data) {
      return new Promise((resolve, reject) => {
        addHistoryMsg(data).then(response => {
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    AddChatMsg ({ commit }, msg) {
      commit('ADD_ROOM_DETAIL_INFO', msg)
    },
    SetChatMsg ({ commit }) {
      commit('SET_ROOM_DETAIL_INFO')
    }
  }
})

export default store

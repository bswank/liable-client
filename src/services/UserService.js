import Api from '@/services/Api'

export default {
  register (data) {
    return Api().post('/account/register', data)
  },
  login (data) {
    return Api().post('/account/login', data)
  },
  logout () {
    return Api().get('/account/logout')
  },
  edit (data) {
    return Api().post('/account/edit', data)
  },
  forgot (data) {
    return Api().post('/account/forgot', data)
  },
  reset (token) {
    return Api().post('/account/reset', token)
  },
  update (passwords) {
    return Api().post('/account/reset/update', passwords)
  },
  updateCard (card) {
    return Api().post('/account/card/update', card)
  },
  removeCard () {
    return Api().post('/account/card/remove')
  }
}

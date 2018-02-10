import Api from '@/services/Api'

export default {
  create (data) {
    return Api().post('/goals/create', data)
  },
  list () {
    return Api().get('/goals')
  },
  checkin (result) {
    return Api().post('/goals/checkin', result)
  },
  getGoalForCheckin (goal) {
    return Api().post('/goals/checkin/goal', goal)
  }
}

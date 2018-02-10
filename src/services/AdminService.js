import Api from '@/services/Api'

export default {
  listUnpublished () {
    return Api().get('/admin/ideas/unpublished')
  }
}

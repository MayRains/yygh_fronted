import request from '@/utils/request'


// admin/hosp/hospitalSet/findPageHospSet/1/3

export default {

  getAllList() {
    return request({
      url: '/admin/hosp/hospitalSet/findAll',
      method: 'GET',
      params: {}
    })
  },

  getPageList(cur, limit, hospObj) {
    return request({
      url: `/admin/hosp/hospitalSet/findPageHospSet/${cur}/${limit}`,
      method: 'post',
      params: hospObj
    })
  }
}

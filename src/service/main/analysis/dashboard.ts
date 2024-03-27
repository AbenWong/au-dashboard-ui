import hyRequest from '../../index'

enum DashboardAPI {
  categoryGoodsCount = '/trending/all/day?api_key=394b314a52015ef04d8e3112971c2980&language=en-US',
  categoryGoodsSale = '/trending/all/day?api_key=394b314a52015ef04d8e3112971c2980&language=en-US',
  categoryGoodsFavor = '/trending/all/day?api_key=394b314a52015ef04d8e3112971c2980&language=en-US',
  addressGoodsSale = '/trending/all/day?api_key=394b314a52015ef04d8e3112971c2980&language=en-US'
}

export function getCategoryGoodsCount() {
  return hyRequest.get({
    url: DashboardAPI.categoryGoodsCount
  })
}

export function getCategoryGoodsSale() {
  return hyRequest.get({
    url: DashboardAPI.categoryGoodsSale
  })
}

export function getCategoryGoodsFavor() {
  return hyRequest.get({
    url: DashboardAPI.categoryGoodsFavor
  })
}

export function getAddressGoodsSale() {
  return hyRequest.get({
    url: DashboardAPI.addressGoodsSale
  })
}

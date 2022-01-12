var nameList = [
  'John', 'Mike', 'Lisa', 'Yeshile', 'Rick', 'Ionie', 'Franklin', 'Honkie', 'Mogen', 'Elizabeth',
  '陈耿', '刘翔', '郝丽', '吴达之', '琳纱', '李德福', '林安东', '莫齐生', '艾克', '房思琪'
]

var addressList = [
  'Room 403, No.37,ShiFan Residential Quarter,BaoShan District', 
  'Room 201, No.34,Lane 125,XiKang Road(South),HongKou District', 
  'Room 42, Zhongzhou Road，Nanyang City,Henan Prov',
  'Hongyuan Hotel, Jingzhou city, Hubei Prov',
  'Special Steel Corp，No.272, Bayi Road, Nanyang City, Henan Prov',
  'Room 702, 7th Building, Hengda Garden, East District, Zhongshan',
  'Room 601, No.34 Long Chang Li, Xiamen, Fujian',
  'Cheng Nuo Ban, Gong Jiao Zong Gong Si, Xiamen, Fujian',
  'NO. 204,Entrance A, Building NO. 1, The 2nd Dormitory of the NO. 4 State-owned Textile Factory, 53 Kaiping Road, Qingdao, Shandong',
  'Room 501，Unit 6，Building 20 North Donghuashi Residential BeiJing City'
]


var faker = {
  getName: () => { //名字
    return nameList[Math.floor(Math.random() * nameList.length)]
  },
  getAge: () => { // 年龄
    return Math.floor(Math.random() * 100)
  },
  getAddress: () => { //地址
    return addressList[Math.floor(Math.random() * addressList.length)]
  }
}

export default faker
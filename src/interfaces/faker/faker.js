let nameList = [
  'John', 'Mike', 'Lisa', 'Yeshile', 'Rick', 'Ionie', 'Franklin', 'Honkie', 'Mogen', 'Elizabeth',
  '陈耿', '刘翔', '郝丽', '吴达之', '琳纱', '李德福', '林安东', '莫齐生', '艾克', '房思琪',
  '石野真子', 'いしのようこ', '石原さとみ', '泉ピン子', '尾崎千瑛', '乙羽信子', '一戸奈未', '伊藤かずえ', '今井美树', '上戸彩',
  'Александр', 'Алексей', 'Илья', 'Степан', 'Яковь', 'Валентина', 'Вика', 'Екатерина', 'Катерина ', 'Марина',
  '민미진', '신은수', '이지은', '재미혜', '민지은', '사체부', '이나영', '엄정화', '제기아', '전도연',
  '	A Do Bu', 'An Dong' , 'Dae Pung Ga', 'Gong Hoe Dan', 'A Chal Che', 'Gal Ae Jung', 'Im Seong Bu', 'Gan Hwa Wang', 'Tam Heul Gwi', 'Gaek Rae Bok',
]

let addressList = [
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

let dateList = [ // 格式：yyyy-mm-dd
  '2007-02-06', '2018-03-14', '1998-02-21', '1985-12-12', '1996-05-20',
  '1960-01-35', '2019-12-25', '2002-01-24', '2018-09-08', '2011-08-30',
  '1920-10-30', '1991-05-31', '1987-02-25', '1996-11-12', '2013-08-22',
  '2008-12-28', '2014-06-30', '1980-03-30', '1969-12-16', '2000-03-03'
]

let emailList = [
  '123123@qq.com', '3412331123@qq.com', '15235231@163.com', '612367223@163.com', '93411325@sina.com', 
  '43824711@sina.com', '123123@qq.com', '123123@qq.com', '123123@qq.com', '123123@qq.com',
  'toocle01@netsun.com', 'chuangling@chuangling.net', 'saw@cnsaw.com', 'tianyi0205@163.com', 'webmaster@hfmachine.com.cn',
  'mfjx@21cn.com', 'qiu3443@yahoo.com.cn', 'jhjx@jhjx.com', 'info@haixia.cc', 'doorsales@hotai.cc', 
]

let telephoneList = [
  '13123125123', '13517920511', '13998976564', '15160313211', '19087675660',
  '07913544151', '18787890980', '15676544567', '14534545321', '13456546432'
]


let faker = {
  getName: () => { //名字
    return nameList[Math.floor(Math.random() * nameList.length)]
  },
  getAge: () => { // 年龄
    return Math.floor(Math.random() * 100)
  },
  getAddress: () => { // 地址
    return addressList[Math.floor(Math.random() * addressList.length)]
  },
  getDate: () => { // 日期
    return dateList[Math.floor(Math.random() * dateList.length)]
  },
  getEmail: () => { // 邮件地址
    return emailList[Math.floor(Math.random() * emailList.length)]
  },
  getTelephone: () => { // 电话号码
    return telephoneList[Math.floor(Math.random() * telephoneList.length)]
  }
}

export default faker
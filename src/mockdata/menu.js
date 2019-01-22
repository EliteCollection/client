module.exports = 
  [
    {
      title: '基础',
      children: [
        { title: '个人中心', path: '/personal'},
        { title: '加班管理', path: '/overtime'},
        { title: '微博周报', path: '/weekly'}
      ]
    },
    {
      title: '人事', 
      children: [
        { title: '人事统计', path: '/personnelCount'},
        { title: '员工异动', path: '/employeeTurnover'},
        { title: '离职管理', path: '/leaveManage'},
        { title: '转正管理', path: '/positiveManage'},
      ]
    },
    {
      title: '项目', 
      children: [
        { title: '项目统计', path: '/projectCount'},
        { title: '项目申请', path: '/projectApply'},
        { title: '项目列表', path: '/projectList'},
        { title: '归档项目', path: '/projectFinish'},
      ]
    }
  ]

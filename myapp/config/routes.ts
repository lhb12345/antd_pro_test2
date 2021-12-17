export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    name: 'dashboard',
    icon: 'dashboard',
    path: '/dashboard',
    routes: [
      {
        name: 'analysis',
        // icon: 'smile',
        path: '/dashboard/analysis',
        component: './Dashboard/DashboardAnalysis',
      },
      {
        name: 'monitor',
        // icon: 'smile',
        path: '/dashboard/monitor',
        component: './Dashboard/DashboardMonitor',
      },
      {
        name: 'analysis-page',
        // icon: 'smile',
        path: '/dashboard/analysis2',
        component: './Dashboard/DashboardAnalysis2',
      },
    ]
  },
  {
    component: './404',
  },
];

import { TableOutlined } from '@ant-design/icons'

export default {
  route: {
    path: '/',
    routes: [
      {
        path: '/translation',
        name: '多语言翻译',
        icon: <TableOutlined />,
      },
      {
        path: '/translation/:id',
        name: '详情',
        hideInMenu: true,
      },
    ],
  },
  location: {
    pathname: '/#/',
  },
}

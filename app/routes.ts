import {
  type RouteConfig,
  index,
  layout,
  route,
} from '@react-router/dev/routes';

export default [
  layout('layout.tsx', [
    index('routes/home.tsx'),

    // React Router 不允许两个路由指向同一个文件，所以我们要用两个组件
    route('404', 'routes/404.tsx'), // 让 React Router 知道要输出 404.html
    route('*', 'routes/404-dynamic.tsx'), // 确保所有未匹配路径都使用404路由
  ]),
] satisfies RouteConfig;

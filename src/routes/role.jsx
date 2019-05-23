import Bundle from '@/components/bundle';

const Role = () => (
  <Bundle load={require('bundle-loader?lazy!@/pages/back/role/index.jsx')} />
);
export default {
  path: '/back/role',
  title: '角色管理',
  icon: 'mobile',
  component: Role,
  meta: {
    auths: ['receichain/finance'],
  },
};

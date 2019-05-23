import Bundle from '@/components/bundle';

const App = () => (
  <Bundle load={require('bundle-loader?lazy!@/pages/back/app/index.jsx')} />
);
export default {
  path: '/back/index',
  title: '首页',
  icon: 'mobile',
  component: App,
  meta: {
    auths: ['receichain/finance'],
  },
};

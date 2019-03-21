import Bundle from '@/components/bundle';
const Login = () => (
  <Bundle load={require('bundle-loader?lazy!@/pages/common/login/index.jsx')} />
);
export default {
  Login
};

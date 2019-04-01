import Bundle from '@/components/bundle'
const About = () => (
  <Bundle load={require('bundle-loader?lazy!@/pages/back/about/index.jsx')} />
)
const AboutDetail = () => (
  <Bundle load={require('bundle-loader?lazy!@/pages/back/about/detail.jsx')} />
)
const App = () => (
  <Bundle load={require('bundle-loader?lazy!@/pages/back/app/index.jsx')} />
)
const User = () => (
  <Bundle load={require("bundle-loader?lazy!@/pages/back/user/index.jsx")} />
)
const Role = () => (
  <Bundle load={require("bundle-loader?lazy!@/pages/back/role/index.jsx")} />
)
export default {
  App,
  About,
  User,
  Role,
  AboutDetail
}

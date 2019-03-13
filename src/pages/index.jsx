import Bundle from "@/components/bundle";
const About = () => (
  <Bundle load={require("bundle-loader?lazy!@/pages/about/index.jsx")} />
);
const AboutDetail = () => (
  <Bundle load={require("bundle-loader?lazy!@/pages/about/detail.jsx")} />
);
const App = () => (
  <Bundle load={require("bundle-loader?lazy!@/pages/app/index.jsx")} />
);
const Login = () => (
  <Bundle load={require("bundle-loader?lazy!@/pages/login/index.jsx")} />
);
export default {
  App,
  About,
  AboutDetail,
  Login
};

import Bundle from "@/component/bundle";
const About = () => (
  <Bundle load={require("bundle-loader?lazy!@/pages/about/index.jsx")} />
);
const App = () => (
  <Bundle load={require("bundle-loader?lazy!@/pages/app/index.jsx")} />
);
export default {
  App,
  About
};

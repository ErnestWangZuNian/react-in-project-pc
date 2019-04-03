import Bundle from "@/components/bundle";
const User = () => (
  <Bundle load={require("bundle-loader?lazy!@/pages/back/user/index.jsx")} />
);
export default {
  path: "/back/user",
  title: "用户管理",
  icon: "mobile",
  component: User,
  meta: {
    auths: ["receichain/finance"]
  }
};

import { Layout, Menu, Icon } from "antd";
import Routes from "@/routes";
import SiderCustom from "@/component/bussiness/slidercustom";
import page from "@/component/page";
const { Header, Sider, Content } = Layout;
@page({
    style: require("./style")
})

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    };
  }
  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}
  render() {
    return (
      <Layout className="page-container">
        <SiderCustom {...this.props} collapsed={this.state.collapsed} />
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.toggle}
            />
          </Header>
          <Content className="page-content-container">
            <Routes />
          </Content>
        </Layout>
      </Layout>
    );
  }
}
export default App;

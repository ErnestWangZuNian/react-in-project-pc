import url from "./api.action";
import { Layout, Menu, Icon } from "antd";
import page from "@/component/page";
import SiderCustom from "@/component/bussiness/slidercustom";
const { Header, Sider, Content } = Layout;
@page({
  style: require("./style.scss")
})
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    };
  }
  componentWillMount() {}
  componentDidMount() {}
  componentWillReceiveProps() {}
  componentWillUpdate() {}
  componentDidUpdate() {}
  componentWillUnmount() {}
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  render() {
    console.log(this.props, "wwww");
    return (
      <Layout className="home-container">
        <SiderCustom collapsed={this.state.collapsed} />
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.toggle}
            />
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              background: "#fff",
              minHeight: 280
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    );
  }
}
export default App;

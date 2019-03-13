import page from "@/components/page";
import Routes from "@/routes";
import SiderCustom from "@/components/layout/slidercustom";
import SelectedMenu from "@/components/layout/selectedmenu";
import {
  COMMON_ADDMENU,
  COMMON_DELETEMENU,
  COMMON_GETMENU
} from "@/store/common/action";
import { Layout, Icon } from "antd";
const { Header, Footer, Sider, Content } = Layout;
@page({
  style: require("./style"),
  connect: {
    mapStateToProps: state => {
      return {
        commonData: state.commonData
      };
    },
    mapDispatchToProps: {
      COMMON_ADDMENU,
      COMMON_DELETEMENU,
      COMMON_GETMENU
    }
  }
})
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      currentMenuKey: props.location.pathname,
      changeMenuKey: props.location.pathname
    };
  }
  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}
  //  是否收缩左侧菜单
  toggle() {
    const { collapsed } = this.state;
    this.setState({
      collapsed: !collapsed
    });
  }
  //  点击菜单
  onMenuClick(item) {
    const { COMMON_ADDMENU, location } = this.props;
    COMMON_ADDMENU(item);
    this.props.history.push(item.path);
    this.setState({
      currentMenuKey: item.path
    });
  }
  //  切换选中的菜单
  changeSelectedMenu(activeKey) {
    this.props.history.push(activeKey);
    this.setState({
      currentMenuKey: activeKey,
      changeMenuKey: Util.getRandomString()
    });
  }
  //   先删除选中的菜单 => 跳转到当前所有菜单中的最后一个
  async deleteSelectedMenu(item) {
    const { COMMON_DELETEMENU, COMMON_GETMENU } = this.props;
    await COMMON_DELETEMENU(item, this.changeSelectedMenu);
    const { commonData } = this.props;
    const { selectedMenu } = commonData;
    let lastOneMenu = selectedMenu[selectedMenu.length - 1];
    this.changeSelectedMenu(lastOneMenu.path);
  }
  //   路由render的回调
  routeEnter(item) {}
  render() {
    const { commonData } = this.props;
    const { selectedMenu } = commonData;
    const { currentMenuKey, changeMenuKey, collapsed } = this.state;
    return (
      <Layout className="page-container">
        <SiderCustom
          key={changeMenuKey}
          {...this.props}
          onMenuClick={this.onMenuClick.bind(this)}
          collapsed={collapsed}
        />
        <Layout>
          <Header>
            <Icon
              className="trigger"
              type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.toggle.bind(this)}
            />
          </Header>
          <Content className="page-content-container">
            <SelectedMenu
              menuList={selectedMenu}
              currentMenuKey={currentMenuKey}
              changeSelectedMenu={activeKey => {
                this.changeSelectedMenu(activeKey);
              }}
              deleteSelectedMenu={item => {
                this.deleteSelectedMenu(item);
              }}
            />
            <Routes routeEnter={this.routeEnter.bind(this)} />
          </Content>
        </Layout>
      </Layout>
    );
  }
}
export default App;

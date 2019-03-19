import page from "@/components/page";
import Routes from "@/routes";
import SiderCustom from "@/components/layout/slidercustom";
import SelectedMenu from "@/components/layout/selectedmenu";
import DocumentTitle from "react-document-title";
import { COMMON_ADDMENU, COMMON_DELETEMENU } from "@/store/common/action";
const { Header, Footer, Sider, Content } = antd.Layout;
@page({
  style: require("./style.scss"),
  connect: {
    mapStateToProps: state => {
      return {
        commonData: state.commonData
      };
    },
    mapDispatchToProps: {
      COMMON_ADDMENU,
      COMMON_DELETEMENU
    }
  }
})
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      currentMenuKey: props.location.pathname,
      changeMenuKey: props.location.pathname,
      title: ""
    };
  }
  componentDidMount() {
    const { history } = this.props;
    this.setSelectedMenActive(history.location);
    this.unListen = history.listen(this.setSelectedMenActive);
  }
  componentDidUpdate() {}
  componentWillUnmount() {
    this.unListen && this.unListen();
  }
  //  是否收缩左侧菜单
  toggle() {
    const { collapsed } = this.state;
    this.setState({
      collapsed: !collapsed,
      changeMenuKey: Util.getRandomString()
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
      currentMenuKey: activeKey
    });
  }
  //   设置选中的菜单高亮
  setSelectedMenActive(location) {
    const pathname = location ? location.pathname : null;
    const { commonData } = this.props;
    const { selectedMenu } = commonData;
    if (pathname && selectedMenu && selectedMenu.length) {
      for (let menuItem of selectedMenu) {
        const isActivePath = new RegExp(`^${menuItem.path}`).test(pathname);
        if (isActivePath) {
          this.setState({
            currentMenuKey: menuItem.path
          });
        }
      }
    }
  }
  //   先删除选中的菜单 => 跳转到当前所有菜单中的最后一个
  async deleteSelectedMenu(item) {
    const { COMMON_DELETEMENU } = this.props;
    await COMMON_DELETEMENU(item, this.changeSelectedMenu);
    const { commonData } = this.props;
    const { selectedMenu } = commonData;
    let lastOneMenu = selectedMenu[selectedMenu.length - 1];
    this.changeSelectedMenu(lastOneMenu.path);
  }
  //   路由render的回调
  routeEnter(item) {
    const { title } = this.state;
    if (title === item.title) return;
    this.setState({ title: item.title });
  }
  render() {
    const { commonData } = this.props;
    const { selectedMenu } = commonData;
    const { currentMenuKey, changeMenuKey, collapsed, title } = this.state;
    return (
      <DocumentTitle title={title}>
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
      </DocumentTitle>
    );
  }
}
export default App;

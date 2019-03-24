import page from "@/components/page";
import Routes from "@/routes";
import SiderCustom from "@/components/layout/app/slidercustom";
import SelectedMenu from "@/components/layout/app/selectedmenu";
import DocumentTitle from "react-document-title";
import { MENU_ADDMENU, MENU_DELETEMENU } from "@/store/menu/action";
const { Header, Footer, Sider, Content } = antd.Layout;
@page({
  style: require("./style.scss"),
  connect: {
    mapStateToProps: state => {
      return {
        menuData: state.menuData
      };
    },
    mapDispatchToProps: {
      MENU_ADDMENU,
      MENU_DELETEMENU
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
    const { history, location } = this.props;
    this.setSelectedMenActive(location);
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
  async onMenuClick(item) {
    const { MENU_ADDMENU, location } = this.props;
    await MENU_ADDMENU(item);
    this.setState(
      {
        currentMenuKey: item.path
      },
      () => {
        this.props.history.push(item.path);
      }
    );
  }
  //  切换选中的菜单
  changeSelectedMenu(activeKey) {
    this.props.history.push(activeKey);
    this.setState({
      currentMenuKey: activeKey
    });
  }
  //   设置选中的菜单高亮
  setSelectedMenActive = location => {
    const { menuData } = this.props;
    const pathname = location ? location.pathname : null;
    const { selectedMenu } = menuData;
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
  };
  //   先删除选中的菜单 => 跳转到当前所有菜单中的最后一个
  async deleteSelectedMenu(item) {
    const { MENU_DELETEMENU } = this.props;
    await MENU_DELETEMENU(item, this.changeSelectedMenu);
    const { menuData } = this.props;
    const { selectedMenu } = menuData;
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
    const { menuData } = this.props;
    const { selectedMenu } = menuData;
    const { currentMenuKey, changeMenuKey, collapsed, title } = this.state;
    return (
      <DocumentTitle title={title}>
        <Layout className="page-container">
          <SiderCustom
            key={changeMenuKey}
            {...this.props}
            collapsed={collapsed}
            onMenuClick={this.onMenuClick.bind(this)}
          />
          <Layout>
            <Header>
              <Icon
                className="trigger"
                onClick={this.toggle.bind(this)}
                type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
              />
            </Header>
            <Content className="page-content-container">
              <SelectedMenu
                changeSelectedMenu={activeKey => {
                  this.changeSelectedMenu(activeKey);
                }}
                currentMenuKey={currentMenuKey}
                deleteSelectedMenu={item => {
                  this.deleteSelectedMenu(item);
                }}
                menuList={selectedMenu}
              />
              <Breadcrumb>
                <Breadcrumb.Item>信用通</Breadcrumb.Item>
                <Breadcrumb.Item>账户管理</Breadcrumb.Item>
                <Breadcrumb.Item>用户管理</Breadcrumb.Item>
              </Breadcrumb>
              <Routes routeEnter={this.routeEnter.bind(this)} />
            </Content>
          </Layout>
        </Layout>
      </DocumentTitle>
    );
  }
}
export default App;

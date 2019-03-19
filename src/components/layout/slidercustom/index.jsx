import routes from "@/routes/config";
import SiderMenu from "./slidermenu";
const { Sider } = antd.Layout;
class MenuNode {
  constructor(menuItem, parent = null) {
    this.key = menuItem.path;
    this.title = menuItem.title;
    this.parent = parent;
  }
}
class SiderCustom extends React.Component {
  static defaultProps = {};
  static propTypes = {};
  constructor(props) {
    const { pathname } = props.location;
    super(props);
    this.state = {
      mode: "inline",
      openKeys: [],
      selectedKeys: []
    };
    this.menusTree = [];
  }
  componentDidMount() {
    const { history,collapsed } = this.props;
    if (collapsed) {
      this.setState({
        openKeys: []
      });
    } else {
      this.initMenuList(routes.menus);
      this.setActiveMenu(history.location);
      this.unListen = history.listen(this.setActiveMenu);
    }
  }
  componentDidUpdate(props) {}
  componentWillUnmount() {
    this.unListen && this.unListen();
  }
  //  切换菜单上下级
  openMenu = curentOpenkey => {
    this.setState({
      openKeys: curentOpenkey
    });
  };
  //  处理菜单路由列表
  initMenuList = (menus, parent = null) => {
    for (let menuItem of menus) {
      if (menuItem.children) {
        this.initMenuList(menuItem.children, new MenuNode(menuItem, parent));
      } else {
        this.menusTree.push(new MenuNode(menuItem, parent));
      }
    }
  };
  //  浏览器路由对应的菜单高亮
  setActiveMenu = location => {
    const pathname = location.pathname;
    for (let node of this.menusTree) {
      const isActivePath = new RegExp(`^${node.key}`).test(pathname);
      if (isActivePath) {
        const openKeys = [];
        const selectedKeys = [node.key];
        while (node.parent) {
          openKeys.push(node.parent.key);
          node = node.parent;
        }
        this.setState({
          openKeys,
          selectedKeys
        });
        return;
      }
    }
    this.setState({
      openKeys: [],
      selectedKeys: []
    });
  };
  render() {
    const { selectedKeys, openKeys } = this.state;
    const { collapsed } = this.props;
    return (
      <Sider breakpoint="lg"
          collapsed={collapsed}
          trigger={null}
      >
        <div className="logo" />
        <SiderMenu
            {...this.props}
          // theme="dark"
            menus={routes.menus}
            mode="inline"
            onOpenChange={this.openMenu}
            openKeys={openKeys}
            selectedKeys={selectedKeys}
        />
      </Sider>
    );
  }
}

export default SiderCustom;

import routes from "@/routes/config";
import SiderMenu from "./slidermenu";
const { Sider } = antd.Layout;
class MenuNode {
  constructor(menuItem, parent = null) {
    this.key = menuItem.key || menuItem.path;
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
      collapsed: false,
      mode: "inline",
      openKeys: [],
      selectedKeys: []
    };
    this.menusTree = [];
  }
  componentDidMount() {
    const { history } = this.props;
    this.initMenuList(routes.menus);
    this.setActiveMenu(history.location);
    this.unListen = history.listen(this.setActiveMenu);
  }
  componentDidUpdate() {}
  componentWillUnmount() {
    this.unListen();
  }
  //  切换菜单上下级
  openMenu = v => {
    this.setState({
      openKeys: v[v.length - 1]
    });
  };
  //  处理菜单路由列表
  initMenuList = (menus, parent = null) => {
    for (let menuItem of menus) {
      if (menuItem.subs) {
        this.initMenuList(menuItem.subs, new MenuNode(menuItem, parent));
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
      <Sider trigger={null} breakpoint="lg" collapsed={collapsed}>
        <div className="logo" />
        <SiderMenu
          {...this.props}
          theme="dark"
          menus={routes.menus}
          mode="inline"
          selectedKeys={selectedKeys}
          openKeys={openKeys}
          onOpenChange={this.openMenu}
        />
      </Sider>
    );
  }
}

export default SiderCustom;

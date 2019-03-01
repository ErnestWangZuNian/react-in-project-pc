import page from "@/component/page";
import { Layout } from "antd";
import SiderMenu from "./slidermenu";
const { Sider } = Layout;
// 菜单相关路由
const menus = [
  {
    key: "/app/dashboard/index",
    title: "首页",
    icon: "mobile",
    component: "Dashboard"
  },
  {
    key: "/app/ui",
    title: "UI",
    icon: "scan",
    subs: [
      { key: "/app/ui/buttons", title: "按钮", component: "Buttons" },
      { key: "/app/ui/icons", title: "图标", component: "Icons" },
      { key: "/app/ui/spins", title: "加载中", component: "Spins" },
      { key: "/app/ui/modals", title: "对话框", component: "Modals" },
      {
        key: "/app/ui/notifications",
        title: "通知提醒框",
        component: "Notifications"
      },
      { key: "/app/ui/tabs", title: "标签页", component: "Tabs" },
      { key: "/app/ui/banners", title: "轮播图", component: "Banners" },
      { key: "/app/ui/wysiwyg", title: "富文本", component: "WysiwygBundle" },
      { key: "/app/ui/drags", title: "拖拽", component: "Drags" },
      { key: "/app/ui/gallery", title: "画廊", component: "Gallery" },
      { key: "/app/ui/map", title: "地图", component: "MapUi" }
    ]
  }
];
@page({
  style: require("./style.scss")
})
class SiderCustom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      openKey: "",
      mode: "inline",
      selectedKey: "",
      firstHide: false
    };
  }
  static setMenuOpen = props => {
    const { pathname } = props.location;
    return {
      openKey: pathname.substr(0, pathname.lastIndexOf("/")),
      selectedKey: pathname
    };
  };
  static onCollapse = collapsed => {
    return {
      collapsed,
      mode: collapsed ? "vertical" : "inline"
    };
  };
  static defaultProps = {};
  static propTypes = {};
  componentWillMount() {}
  componentDidMount() {
    const state = SiderCustom.setMenuOpen(this.props);
    this.setState(state);
  }
  componentWillReceiveProps(props, state) {
    // console.log(props, state, "4444");
    // if (props.collapsed !== state.collapsed) {
    //   const state1 = SiderCustom.setMenuOpen(props);
    //   const state2 = SiderCustom.onCollapse(props.collapsed);
    //   return {
    //     ...state1,
    //     ...state2,
    //     firstHide: state.collapsed !== props.collapsed && props.collapsed,
    //     openKey: state.openKey || (!props.collapsed && state1.openKey)
    //   };
    // }
    // return null;
  }
  shouldComponentUpdate() {
    return true;
  }
  componentWillUpdate() {}
  componentDidUpdate() {}
  componentWillUnmount() {}
  menuClick = e => {
    this.setState({
      selectedKey: e.key
    });
  };
  openMenu = v => {
    this.setState({
      openKey: v[v.length - 1],
      firstHide: false
    });
  };
  render() {
    const { selectedKey, firstHide, openKey } = this.state;
    return (
      <Sider
        trigger={null}
        breakpoint="lg"
        collapsed={this.props.collapsed}
        style={{ overflowY: "auto" }}
      >
        <div className="logo" />
        <SiderMenu
          menus={menus}
          onClick={this.menuClick}
          mode="inline"
          selectedKeys={[selectedKey]}
          openKeys={firstHide ? null : [openKey]}
          onOpenChange={this.openMenu}
        />
      </Sider>
    );
  }
}

export default SiderCustom;

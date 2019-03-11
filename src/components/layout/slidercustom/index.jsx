import routes from "@/routes/config";
import SiderMenu from "./slidermenu";
const { Sider } = antd.Layout;
class SiderCustom extends React.Component {
  static defaultProps = {};
  static propTypes = {};
  constructor(props) {
    const { pathname } = props.location;
    console.log(props.location,'www')
    super(props);
    this.state = {
      collapsed: false,
      mode: "inline",
      openKey: pathname.substr(0, pathname.lastIndexOf("/")),
      selectedKey: /`${pathname}`/,
      firstHide: false
    };
  }
  componentDidMount() {
    const state = this.setMenuOpen(this.props);
    this.setState(state);
  }
  componentDidUpdate() {}
  setMenuOpen() {
    const { pathname } = this.props.location;
    return {
      openKey: pathname.substr(0, pathname.lastIndexOf("/")),
      selectedKey: pathname
    };
  }
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
    const { collapsed } = this.props;
    return (
      <Sider trigger={null} breakpoint="lg" collapsed={collapsed}>
        <div className="logo" />
        <SiderMenu
          {...this.props}
          theme="dark"
          menus={routes.menus}
          onClick={this.menuClick}
          mode="inline"
          // selectedKeys={[selectedKey]}
          // openKeys={firstHide ? null : [openKey]}
          // onOpenChange={this.openMenu}
        />
      </Sider>
    );
  }
}

export default SiderCustom;

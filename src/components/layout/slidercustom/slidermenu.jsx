import page from "@/components/page";
import { Link } from "react-router-dom";
const { SubMenu, MenuItem } = antd.Menu;
@page({
  style: require("./style.scss")
})
class SliderMenu extends React.Component {
  static defaultProps = {};
  static propTypes = {
    onMenuClick: PropTypes.func.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}
  onMenuClick = item => {
    const { onMenuClick } = this.props;
    onMenuClick && Util.isFunction(onMenuClick) && onMenuClick(item);
  };
  // renderMenuItem = item => (
  //   <Menu.Item key={item.key}>
  //     <div
  //       onClick={() => {
  //         this.onMenuClick(item);
  //       }}
  //     >
  //       {item.icon && <Icon type={item.icon} />}
  //       <span className="nav-text">{item.title}</span>
  //     </div>
  //   </Menu.Item>
  // );
  // renderSubMenu = item => (
  //   <Menu.SubMenu
  //     key={item.key}
  //     title={
  //       <span>
  //         {item.icon && <Icon type={item.icon} />}
  //         <span className="nav-text">{item.title}</span>
  //       </span>
  //     }
  //   >
  //     {item.subs.map(item => this.renderMenuItem(item))}
  //   </Menu.SubMenu>
  // );
  renderMenuItem = menuArr => {
    const ret = menuArr.map(item => {
      if (item.subs) {
        return (
          <Menu.SubMenu title={item.title} key={item.key || item.title}>
            {this.renderMenuItem(item.subs)}
          </Menu.SubMenu>
        );
      } else {
        return (
          <Menu.Item title={item.title} key={item.key}>
            <Link to={item.key}>{item.title}</Link>
          </Menu.Item>
        );
      }
    });
    return ret;
  };
  render() {
    const { menus } = this.props;
    return (
      <Menu {...this.props}>
        {/* {menus &&
          menus.map(item =>
            item.subs ? this.renderSubMenu(item) : this.renderMenuItem(item)
          )} */}
           {this.renderMenuItem(menus)}
      </Menu>
    );
  }
}

export default SliderMenu;

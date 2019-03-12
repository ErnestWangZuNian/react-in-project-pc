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
  renderMenuItem = menus => {
    let result = menus.map(item => {
      if (item.subs) {
        return (
          <Menu.SubMenu title={item.title} key={item.key || item.title}>
            {this.renderMenuItem(item.subs)}
          </Menu.SubMenu>
        );
      } else {
        return (
          <Menu.Item title={item.title} key={item.key}>
            <div
              onClick={() => {
                this.onMenuClick(item);
              }}
            >
              {item.icon && <Icon type={item.icon} />}
              <span className="nav-text">{item.title}</span>
            </div>
          </Menu.Item>
        );
      }
    });
    return result;
  };
  render() {
    const { menus } = this.props;
    return <Menu {...this.props}>{this.renderMenuItem(menus)}</Menu>;
  }
}

export default SliderMenu;

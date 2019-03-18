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
      if (item.children) {
        return (
          <Menu.SubMenu
            title={
              <div>
                {item.icon ? (
                  <span>
                    <Icon type={item.icon} />
                  </span>
                ) : null}
                <span>{item.title}</span>
              </div>
            }
            key={item.path}
          >
            {this.renderMenuItem(item.children)}
          </Menu.SubMenu>
        );
      } else {
        return (
          <Menu.Item key={item.path}>
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

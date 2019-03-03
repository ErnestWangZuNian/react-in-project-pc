import page from "@/component/page";
import { Menu, Icon } from "antd";
import { Link } from "react-router-dom";
@page({
  style: require("./style.scss")
})
class SliderMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static defaultProps = {};
  static propTypes = {};
  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}
  renderMenuItem = item => (
    <Menu.Item key={item.key}>
      <Link to={(item.route || item.key) + (item.query || "")}>
        {item.icon && <Icon type={item.icon} />}
        <span className="nav-text">{item.title}</span>
      </Link>
    </Menu.Item>
  );
  renderSubMenu = item => (
    <Menu.SubMenu
      key={item.key}
      title={
        <span>
          {item.icon && <Icon type={item.icon} />}
          <span className="nav-text">{item.title}</span>
        </span>
      }
    >
      {item.subs.map(item => this.renderMenuItem(item))}
    </Menu.SubMenu>
  );
  render() {
    const { menus } = this.props;
    return (
      <Menu {...this.props}>
        {menus &&
          menus.map(item =>
            item.subs ? this.renderSubMenu(item) : this.renderMenuItem(item)
          )}
      </Menu>
    );
  }
}

export default SliderMenu;

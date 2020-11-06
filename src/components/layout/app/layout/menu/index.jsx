import { Component } from 'wzn-base-components';
import { LayoutContext } from '../layout-context';
import IconText from '@/components/icon-text';

const { Menu } = antd;

@Component({
  style: require('./style.scss'),
})
class MenusComponent extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  static contextType = LayoutContext;

  //  递归遍历菜单
  recurseMenus(menus, menusConfig) {
    let result = null;
    if (menus && menus.length) {
      result = menus.map((item) => {
        let menuResult = null;
        if (item.children && item.children.length) {
          menuResult = (
            <Menu.SubMenu
              title={item.icon ? <IconText type={item.icon} text={item.name} /> : item.name}
              key={item.path}
            >
              {this.recurseMenus(item.children, menusConfig)}
            </Menu.SubMenu>
          );
        } else {
          menuResult = (
            <Menu.Item
              key={item.path}
              onClick={(menuItemInfo) => {
                menusConfig.onClick(menuItemInfo, item);
              }}
            >
              {item.icon ? <IconText type={item.icon} text={item.name} /> : item.name}
            </Menu.Item>
          );
        }
        return menuResult;
      });
    }
    return result;
  }

  render() {
    return (
      <LayoutContext.Consumer>
        {({ menusList, menusConfig }) => {
          const result = (
            <Menu
              className="menus-container"
              theme={menusConfig.theme}
              mode={menusConfig.mode}
              onOpenChange={menusConfig.onOpenChange}
              selectedKeys={menusConfig.selectedKeys}
              openKeys={menusConfig.openKeys}
            >
              {this.recurseMenus(menusList, menusConfig)}
            </Menu>
          );
          return result;
        }}
      </LayoutContext.Consumer>
    );
  }
}
export default MenusComponent;

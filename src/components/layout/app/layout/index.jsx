import { Route, Switch } from 'react-router-dom';
import { LayoutContext, routeConfig, menusConfig, sliderConfig } from './layout-context';
import LayoutSlider from './slider';
import LayoutHeader from './header';

require('./style.scss');

const { Layout } = antd;
const { findParentsByPath, menus: menusList = [] } = routeConfig;

//  根据path获取路径
const getOpenkeys = (path) => {
  let result = [];
  const parents = findParentsByPath(menusList, path);
  if (parents && parents.length) {
    result = Array.from(parents, (item) => {
      const final = item.path;
      return final;
    });
  }
  return result;
};

//  遍历路由
const recurseRoute = (routesList) => {
  let result = null;
  if (routeConfig && routesList.length) {
    result = routesList.map((item) => {
      let routeResult = null;
      if (item.children && item.children.length) {
        routeResult = (
          <Route path={item.path} component={item.component}>
            {recurseRoute(item.children)}
          </Route>
        );
      } else {
        routeResult = <Route path={item.path} exact component={item.component} />;
      }
      return routeResult;
    });
  }
  return result;
};

class LayoutComponent extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.changeMenuItem = this.changeMenuItem.bind(this);
    this.onOpenChange = this.onOpenChange.bind(this);
    this.toggleCollapsed = this.toggleCollapsed.bind(this);
    this.state = {
      contextSliderConfig: {
        ...sliderConfig,
        toggleCollapsed: this.toggleCollapsed,
      },
      contextMenusConfig: {
        ...menusConfig,
        selectedKeys: [props.location.pathname],
        openKeys: getOpenkeys(props.location.pathname),
        onClick: this.changeMenuItem,
        onOpenChange: this.onOpenChange,
      },
    };
  }

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  //  切换二级菜单
  onOpenChange(openKeys) {
    const { contextMenusConfig } = this.state;
    this.setState({
      contextMenusConfig: {
        ...contextMenusConfig,
        openKeys,
      },
    });
  }

  //  切换左边slider展开与否
  toggleCollapsed() {
    const { contextSliderConfig } = this.state;
    const { collapsed } = contextSliderConfig;
    this.setState({
      contextSliderConfig: {
        ...contextSliderConfig,
        collapsed: !collapsed,
      },
    });
  }

  //  切换菜单
  changeMenuItem(items) {
    const { history } = this.props;
    const { contextMenusConfig } = this.state;
    history.push(items.key);
    this.setState({
      contextMenusConfig: {
        ...contextMenusConfig,
        selectedKeys: items.keyPath,
        openKeys: getOpenkeys(items.key),
      },
    });
  }

  render() {
    const { contextMenusConfig, contextSliderConfig } = this.state;
    return (
      <LayoutContext.Provider
        value={{
          menusList,
          menusConfig: contextMenusConfig,
          sliderConfig: contextSliderConfig,
        }}
      >
        <Layout className="layout-container">
          <LayoutSlider />
          <Layout>
            <LayoutHeader />
            <div className="layout-content-container">
              <Switch>{recurseRoute(menusList)}</Switch>
            </div>
          </Layout>
        </Layout>
      </LayoutContext.Provider>
    );
  }
}
export default LayoutComponent;

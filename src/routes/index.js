import { Route, Redirect, Switch } from "react-router-dom";
import AllComponents from "@/pages";
import routesConfig from "./config";
import queryString from "query-string";
class Router extends React.Component {
  static defaultProps = {
    routeEnter: []
  };
  static propTypes = {
    routeEnter: PropTypes.func
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}
  //  输入某个地址判断是否需要权限然后跳转
  isRequireAuth(component, auth) {
    let authFlag = false;
    let authList = [
      "receichain/finance",
      "receichain/progress",
      "receichain/repay"
    ];
    if (auth && auth.length) {
      for (let authItem of auth) {
        authFlag = authList.find(item => {
          return item === authItem;
        });
      }
    }
    return authFlag ? component : <Redirect to="/403" />;
  }
  // 判断是否需要登录
  isRequireLogin(component, item) {
    let isLogin = true;
    let auth = item.meta ? item.meta.auths : null;
    if (!isLogin) {
      return <Redirect to="/login" />;
    }
    return auth ? this.isRequireAuth(component, auth) : component;
  }
  //  根绝单个memuItem生成route
  generateItemRoute(menuItem) {
    const Component = AllComponents[menuItem.component];
    const routeEnter = this.props.routeEnter;
    let result = null;
    return Component ? (
      <Route
        key={menuItem.path}
        exact={!menuItem.matchs}
        path={menuItem.path}
        render={props => {
          const merge = {
            ...props
          };
          routeEnter && Util.isFunction(routeEnter) && routeEnter(menuItem);
          let resultMatchs = [];
          if (menuItem.matchs) {
            resultMatchs = resultMatchs.concat(menuItem.matchs);
            resultMatchs.push({
              path: menuItem.path,
              title: menuItem.title,
              icon: menuItem.icon,
              component: menuItem.component
            });
          }
          return menuItem.matchs && resultMatchs.length ? (
            <div>
              {resultMatchs.map(item => {
                const Component = AllComponents[item.component];
                return Component ? (
                  <Route
                    key={item.path}
                    path={item.path}
                    exact
                    render={props => {
                      const merge = {
                        ...props
                      };
                      routeEnter &&
                        Util.isFunction(routeEnter) &&
                        routeEnter(menuItem);
                      return this.isRequireLogin(
                        <Component {...merge} />,
                        item
                      );
                    }}
                  />
                ) : null;
              })}
            </div>
          ) : (
            this.isRequireLogin(<Component {...merge} />, menuItem)
          );
        }}
      />
    ) : null;
  }
  // 根据路由配置渲染组件
  renderComponentByRoute(menus) {
    return menus.map(item => {
      if (item.children) {
        return this.renderComponentByRoute(item.children);
      } else {
        return this.generateItemRoute(item);
      }
    });
  }
  render() {
    const { onRouterChange } = this.props;
    return (
      <Switch>
        {this.renderComponentByRoute(routesConfig.menus)}
        <Route render={() => <Redirect to="/404" />} />
      </Switch>
    );
  }
}
export default Router;

import { Route, Redirect, Switch } from "react-router-dom";
import AllComponents from "@/pages";
import routesConfig from "./config";
import queryString from "query-string";
class Router extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.menus = [];
  }
  componentDidMount() {
    // this.renderComponentByRoute(routesConfig.menus)
  }
  requireAuth = (permission, component) => {
    // const { auth } = this.props;
    // const { permissions } = auth.data;
    // // const { auth } = store.getState().httpData;
    // if (!permissions || !permissions.includes(permission))
    //   return <Redirect to={"404"} />;
    return component;
  };
  requireLogin = (component, permission) => {
    // const { auth } = this.props;
    // const { permissions } = auth.data;
    // if (process.env.NODE_ENV === "production" && !permissions) {
    //   // 线上环境判断是否登录
    //   return <Redirect to={"/login"} />;
    // }ogin"} />;
    // }
    return permission ? this.requireAuth(permission, component) : component;
  };
  //  根绝单个memuItem生成route
  generateItemRoute(menuItem){
    const Component = AllComponents[menuItem.component];
    let result = null;
    return Component ? 
      <Route
      key={menuItem.key}
      exact
      path={menuItem.key}
      render={props => {
        const merge = {
          ...props
        };
        return menuItem.matchs && menuItem.matchs.length ? (
          <Switch>
            {menuItem.matchs.map(item => {
              const Component = AllComponents[item.component];
              return (
                Component ? 
                <Route
                  key={item.path || item.key}
                  path={item.path || item.key}
                  exact
                  render= {props => {
                    const merge = {
                      ...props
                    };
                    return  <Component {...merge} />
                  }}
                /> : null
              );
            })}
          </Switch>
        ) : (
          <Component {...merge}/>
        );
      }}
    />
    :null
  }
  // 根据路由配置渲染组件
  renderComponentByRoute(menus){
       return menus.map(item => {
         if(item.subs){
          return this.renderComponentByRoute(item.subs)
         }else{
          return this.generateItemRoute(item)
         }
      })
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

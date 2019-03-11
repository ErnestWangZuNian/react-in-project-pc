import { Route, Redirect, Switch } from "react-router-dom";
import AllComponents from "@/pages";
import routesConfig from "./config";
import queryString from "query-string";
class Router extends React.Component {
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
  render() {
    const { onRouterChange } = this.props;
    return (
      <Switch>
        {Object.keys(routesConfig).map(key =>
          routesConfig[key].map(r => {
            const route = r => {
              const Component = AllComponents[r.component];
              return Component ? (
                <Route
                  key={r.route || r.key}
                  exact={!r.matchs}
                  path={r.route || r.key}
                  render={props => {
                    const merge = {
                      ...props,
                      openkey: r.key
                    };
                    console.log(merge,'wwww')
                    // 回传route配置
                    onRouterChange && onRouterChange(r);
                    return r.matchs && r.matchs.length ? (
                      <Switch>
                        {r.matchs.map(item => {
                          return (
                            <Route
                              key={item.route || item.key}
                              exact
                              path={item.route || item.key}
                              render= {props => {
                                const merge = {
                                  ...props,
                                  openkey: item.key
                                };
                                return  <Component {...merge} />
                              }}
                              component={AllComponents[item.component]}
                            />
                          );
                        })}
                      </Switch>
                    ) : (
                      <Component {...merge} a={1234}/>
                    );
                  }}
                />
              ) : null;
            };
            return r.component && route(r)
              ? route(r)
              : r.subs.map(r => route(r));
          })
        )}
        <Route render={() => <Redirect to="/404" />} />
      </Switch>
    );
  }
}
export default Router;

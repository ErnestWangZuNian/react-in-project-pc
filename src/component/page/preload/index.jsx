import createReactClass from "create-react-class";
import hoistNonReactStatics from "hoist-non-react-statics";

let __defaultPreload__ = {};

let __defaultReject__ = function() {};

let __onReady__ = Promise.resolve();

let __defaultMinLoadTime__ = 0;

import "./style";

const preload = (target, loadComponent, minLoadTime) => {
  return Component =>
    hoistNonReactStatics(
      createReactClass({
        getInitialState() {
          return {
            isReady: false,
            data: {}
          };
        },
        componentWillMount() {
          if (target) {
            target = target === true ? {} : target;
            const beginTime = Date.now();
            minLoadTime =
              typeof minLoadTime !== "undefined" && minLoadTime !== null
                ? minLoadTime
                : __defaultMinLoadTime__;
            new Promise(resolve => {
              if (Util.isObject(target)) {
                resolve({
                  ...__defaultPreload__,
                  ...target
                });
              } else {
                __onReady__.then(() => {
                  resolve({
                    ...__defaultPreload__,
                    ...target(this.props)
                  });
                });
              }
            }).then(target => {
              const props = this.props;
              const __indexName__ = {};
              let i = 0,
                tmp = null;
              Promise.all(
                Object.keys(target).map(key => {
                  __indexName__[i] = key;
                  if (props[key]) {
                    console.warn(
                      `预加载数据${key}与props冲突，会覆盖props数据`
                    );
                  }
                  tmp = target[key];
                  i++;
                  if (Util.isPromise(tmp)) {
                    return tmp;
                  } else {
                    tmp = Util.isFunction(tmp) ? tmp(this.props) : tmp;
                    return tmp ? Promise.resolve(tmp) : Promise.reject(tmp);
                  }
                })
              )
                .then(datas => {
                  const data = {};
                  datas.forEach((item, index) => {
                    data[__indexName__[index]] = item;
                  });
                  const endTime = Date.now();
                  const diffTime = endTime - beginTime;
                  if (diffTime >= minLoadTime) {
                    this.setState({
                      data,
                      isReady: true
                    });
                  } else {
                    this.ID = setTimeout(
                      () =>
                        this.setState({
                          data,
                          isReady: true
                        }),
                      minLoadTime - diffTime
                    );
                  }
                })
                .catch(() =>
                  this.setState(
                    {
                      isReady: true
                    },
                    __defaultReject__
                  )
                );
            });
          } else {
            this.setState({
              isReady: true
            });
          }
        },
        componentWillUnmount() {
          clearTimeout(this.ID);
        },
        render() {
          const { ref } = React.forwardRef((props, ref) => ({ ref }));
          return this.state.isReady || loadComponent === false ? (
            <Component ref={ref} {...this.props} {...this.state.data} />
          ) : (
            <div className="_preload_full-screen center">
              {loadComponent ? loadComponent : <Spin />}
            </div>
          );
        }
      }),
      Component
    );
};

preload.setDefaultPreload = target => {
  __defaultPreload__ = {
    ...__defaultPreload__,
    ...target
  };
};

preload.setDefaultReject = (fn = function() {}) => {
  if (Util.isFunction(fn)) {
    __defaultReject__ = fn;
  }
};

preload.setOnReady = p => {
  if (Util.isPromise(p)) {
    __onReady__ = p;
  }
};

preload.setDefaultMinLoadTime = time => {
  if (!isNaN(time)) {
    __defaultMinLoadTime__ = parseInt(time);
  }
};

export default preload;

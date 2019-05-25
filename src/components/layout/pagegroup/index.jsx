import page from '@/components/page';
import { createStore, combineReducers } from 'redux';
import { pageGroupData } from '../store/pagegroup/reducer';
import { menuData } from '../store/menu/reducer';
import {
  PAGEGROUP_LOAD,
  PAGEGROUP_GOTO,
  PAGEGROUP_BACK,
  PAGEGROUP_NEXT,
  PAGEGROUP_INIT,
} from '../store/pagegroup/action';
import Node from './node';

const store = createStore(
  combineReducers({
    pageGroupData,
    menuData,
  }),
);
@page({
  style: require('./style.scss'),
})
class PageGroup extends React.Component {
  static defaultProps = {};

  static propTypes = {
    activekey: PropTypes.string,
  };

  static Node = Node;

  constructor(props) {
    super(props);
    this.state = {
      activekey: null,
      currentKeyIsReload: false,
    };
    store.subscribe(() => {
      const { pageGroupData } = store.getState();
      this.setState({
        activekey: pageGroupData.activekey,
        currentKeyIsReload: pageGroupData.currentInfo.isReload,
      });
    });
  }

  componentDidMount() {
    this.load();
  }

  // shouldComponentUpdate(newProps, newState) {
  //   console.log(store.getState(), "123456768");
  //   let pageGroupData = store.getState().pageGroupData;
  //   let currentKey = newState.activekey;
  //   let { history } = pageGroupData;
  //   let result = history.some(item => {
  //     return item.activekey === currentKey;
  //   });
  //   console.log(history);
  //   return true;
  // }
  componentDidUpdate() {}

  componentWillUnmount() {
    store.dispatch(PAGEGROUP_INIT());
  }

  //  首次加载
  load = () => {
    const { children, activekey } = this.props;
    const keyList = [];
    let resultActiveKey = null;
    if (children && children.length) {
      children.forEach((item) => {
        if (item.key) {
          keyList.push(item.key);
        } else {
          console.error('组件没有key值');
        }
      });
    }
    if (activekey) {
      resultActiveKey = activekey;
    } else {
      children.length && children[0].key
        ? (resultActiveKey = children[0].key)
        : (resultActiveKey = null);
    }
    store.dispatch(PAGEGROUP_LOAD(resultActiveKey, keyList));
  };

  //  跳转页面
  go = (key, parmas = null, isReload = false) => {
    store.dispatch(PAGEGROUP_GOTO(key, parmas, isReload));
  };

  //  返回上一步
  back = () => {
    store.dispatch(PAGEGROUP_BACK());
  };

  //  前进一步
  next = (...args) => {
    store.dispatch(PAGEGROUP_NEXT(...args));
  };

  render() {
    const { children } = this.props;
    const { activekey, currentKeyIsReload } = this.state;
    return (
      <div className="component-pagegroup-container">
        <Tabs
          activeKey={activekey}
          className="component-pagegroup-tabs"
          animated={false}
        >
          {activekey
            && children
            && children.length
            && children.map((child) => {
              const { key, props } = child;
              const { component } = props;
              const Component =
                typeof component === "object"
                  ? component.default
                    ? component.default
                    : () => component
                  : component;
              const pageProps = {
                page: {
                  history: {
                    go: this.go,
                    back: this.back,
                    next: this.next,
                  },
                  data: store.getState().pageGroupData,
                },
              };
              return (
                <Tabs.TabPane key={key}>
                  <Component
                    {...pageProps}
                    key={
                      activekey === key && currentKeyIsReload
                        ? Util.getRandomString()
                        : null
                    }
                  />
                </Tabs.TabPane>
              );
            })}
        </Tabs>
      </div>
    );
  }
}
export default PageGroup;

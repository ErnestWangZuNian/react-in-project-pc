import page from "@/components/page";
import { createStore, combineReducers } from "redux";
import { pageGroupData } from "../store/pagegroup/reducer";
import { menuData } from "../store/menu/reducer";
import {
  PAGEGROUP_LOAD,
  PAGEGROUP_GOTO,
  PAGEGROUP_BACK,
  PAGEGROUP_NEXT,
  PAGEGROUP_INIT
} from "../store/pagegroup/action";
import Node from "./node";
const store = createStore(
  combineReducers({
    pageGroupData,
    menuData
  })
);
@page({
  style: require("./style.scss")
})
class PageGroup extends React.Component {
  static defaultProps = {};
  static propTypes = {
    activekey: PropTypes.string
  };
  static Node = Node;
  constructor(props) {
    super(props);
    this.state = {
      activekey: null
    };
    store.subscribe(() => {
      let pageGroupData = store.getState().pageGroupData;
      this.setState({
        activekey: pageGroupData.activekey
      });
    });
  }
  componentDidMount() {
    this.load();
  }
  componentDidUpdate() {}
  componentWillUnmount() {
    const { PAGEGROUP_INIT } = this.props;
    PAGEGROUP_INIT();
  }
  //  首次加载
  load = () => {
    const { children, activekey } = this.props;
    let keyList = [];
    let resultActiveKey = null;
    if (children && children.length) {
      children.forEach(item => {
        if (item.key) {
          keyList.push(item.key);
        } else {
          console.error("组件没有key值");
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
  go = (...args) => {
    store.dispatch(PAGEGROUP_GOTO(...args));
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
    const { activekey } = this.state;
    return (
      <div>
        {activekey &&
          children &&
          children.length &&
          children
            .filter(item => {
              return item.key === activekey;
            })
            .map(child => {
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
                    next: this.next
                  },
                  data: store.getState().pageGroupData
                }
              };
              return (
                <div>
                  <Component {...pageProps} />
                </div>
              );
            })}
      </div>
    );
  }
}
export default PageGroup;

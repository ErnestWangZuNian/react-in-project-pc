import page from "@/components/page";
import {
  PAGEGROUP_LOAD,
  PAGEGROUP_GOTO,
  PAGEGROUP_BACK,
  PAGEGROUP_NEXT,
  PAGEGROUP_INIT
} from "../layoutstore/pagegroup/action";
import Node from "./node";
@page({
  style: require("./style.scss"),
  connect: {
    mapStateToProps: state => {
      return {
        pageGroupData: state.pageGroupData
      };
    },
    mapDispatchToProps: {
      PAGEGROUP_LOAD,
      PAGEGROUP_GOTO,
      PAGEGROUP_BACK,
      PAGEGROUP_NEXT,
      PAGEGROUP_INIT
    }
  }
})
class PageGroup extends React.Component {
  static defaultProps = {};
  static propTypes = {
    activekey: PropTypes.string
  };
  static Node = Node;
  constructor(props) {
    super(props);
    this.state = {};
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
    const { children, activekey, PAGEGROUP_LOAD } = this.props;
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
    PAGEGROUP_LOAD(resultActiveKey, keyList);
  };
  //  跳转页面
  go = (...args) => {
    const { PAGEGROUP_GOTO } = this.props;
    PAGEGROUP_GOTO(...args);
  };
  //  返回上一步
  back = () => {
    const { PAGEGROUP_BACK } = this.props;
    PAGEGROUP_BACK();
  };
  //  前进一步
  next = (...args) => {
    const { PAGEGROUP_NEXT } = this.props;
    PAGEGROUP_NEXT(...args);
  };
  render() {
    const { children, pageGroupData } = this.props;
    console.log(this.props,'ww')
    const { activekey } = pageGroupData;
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
                go: this.go,
                back: this.back,
                next: this.next,
                pageGroupData
              };
              return (
                <div>
                  <Component {...pageProps} />;
                </div>
              );
            })}x
      </div>
    );
  }
}

export default PageGroup;

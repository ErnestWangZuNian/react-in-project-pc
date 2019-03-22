import page from "@/components/page";
import { PAGE_GOTO } from "@/store/page/action";
@page({
  style: require("./style.scss"),
  connect: {
    mapStateToProps: state => {
      return {
        pageData: state.pageData
      };
    },
    mapDispatchToProps: {
      PAGE_GOTO
    }
  }
})
class PageStatusChange extends React.Component {
  static defaultProps = {};
  static propTypes = {
    activekey: PropTypes.string
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const { children, activekey } = this.props;
    if (activekey) {
      this.go(activekey);
    } else {
      children.length && children[0].key
        ? this.go(children[0].key)
        : this.go(null);
    }
  }
  componentDidUpdate() {}
  componentWillUnmount() {}
  //  跳转页面
  go = (...args) => {
    const { PAGE_GOTO } = this.props;
    PAGE_GOTO(...args);
  };
  render() {
    const { children, pageData } = this.props;
    const { activekey } = pageData;
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
                pageData
              };
              return <Component {...pageProps} />;
            })}
      </div>
    );
  }
}
export default PageStatusChange;

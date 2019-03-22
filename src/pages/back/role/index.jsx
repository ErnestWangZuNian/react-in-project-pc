import page from "@/components/page";
import Detail from "./detail";
import Form from "./form";
import List from "./list";
import PageStatusChange from "@/components/layout/pagestatuschange";
@page({
  style: require("./style.scss"),
  connect: {
    mapStateToProps: state => {
      return {
        pageData: state.pageData
      };
    },
    mapDispatchToProps: {}
  }
})
class User extends React.Component {
  static defaultProps = {};
  static propTypes = {};
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}
  render() {
    return (
      <div>
        <PageStatusChange activekey="roleList">
          <div component={List} key="roleList" />
          <div component={Form} key="roleForm" />
          <div component={Detail} key="roleDetail" />
        </PageStatusChange>
      </div>
    );
  }
}
export default User;

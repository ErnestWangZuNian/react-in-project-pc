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
        <PageStatusChange activekey="list">
          <div component={List} key="list" />
          <div component={Form} key="form" />
          <div component={Detail} key="detail" />
        </PageStatusChange>
      </div>
    );
  }
}
export default User;

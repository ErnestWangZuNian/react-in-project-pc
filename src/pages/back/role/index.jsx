import page from "@/components/page";
import Detail from "./detail";
import Form from "./form";
import List from "./list";
import PageGroup from "@/components/layout/pagegroup";
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
        <PageGroup activekey="roleList">
          <PageGroup.Node component={List} key="roleList" />
          <PageGroup.Node component={Form} key="roleForm" />
          <PageGroup.Node component={Detail} key="roleDetail" />
        </PageGroup>
      </div>
    );
  }
}
export default User;

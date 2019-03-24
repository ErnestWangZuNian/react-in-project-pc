import page from "@/components/page";
import { TEST_INIT } from "@/store/test/action";
@page({
  style: require("./style.scss"),
  connect: {
    mapStateToProps: state => {
      return {
        testData: state.testData
      };
    },
    mapDispatchToProps: {
      TEST_INIT
    }
  }
})
class User extends React.Component {
  static defaultProps = {};
  static propTypes = {};
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const { TEST_INIT } = this.props;
    TEST_INIT();
  }
  componentDidUpdate() {}
  componentWillUnmount() {}
  gotoDetail = () => {
    const { page } = this.props;
    const { go } = page.history;
    go(
      "form",
      {
        id: 2
      },
      {
        isLoad: false
      }
    );
  };
  render() {
    console.log(this.props,'wwww')
    return (
      <div>
        这是用户列表界面
        <div>
          <Button type="primary" onClick={this.gotoDetail}>
            {this.props.page.data.activekey}
          </Button>
        </div>
      </div>
    );
  }
}
export default User;

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
  gotoDetail = () => {
    const { go } = this.props;
    console.log(go,'www')
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
    return (
      <div>
        这是用户列表界面
        <div>
          <Button type="primary" onClick={this.gotoDetail}>
            跳转去详请
          </Button>
        </div>
      </div>
    );
  }
}
export default User;

import page from "@/components/page";
@page({
  style: require("./style.scss"),
  connect: {
    mapStateToProps: state => {
      return {
        menuData: state.menuData
      };
    },
    mapDispatchToProps: {
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
    console.log(this.props,'www')
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

import page from "@/components/page";
@page({
  style: require("./style.scss"),
  connect: {
    mapStateToProps: state => {
      return {};
    },
    mapDispatchToProps: {}
  }
})
class User extends React.Component {
  static defaultProps = {};
  static propTypes = {};
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    };
  }
  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}
  render() {
    return (
      <div>
        这是用户列表详情界面，上个页面的参数是{this.props.page.data.currentInfo.parmas.id}
        <div>
          <Button
            type="primary"
            onClick={() => {
              this.props.page.history.go("form", {}, true);
            }}
          >
            跳转去详请
          </Button>
        </div>
      </div>
    );
  }
}
export default User;

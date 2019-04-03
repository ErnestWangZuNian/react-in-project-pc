import page from "@/components/page"
@page({
  style: require("./style.scss"),
  connect: {
    mapStateToProps: state => {
      return {
        pageData: state.pageData
      }
    },
    mapDispatchToProps: {}
  }
})
class User extends React.Component {
  static defaultProps = {};
  static propTypes = {};
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false
    }
  }
  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}
  render() {
    return (
      <div>

        这是角色管理详情界面
        <div>
          <Button type="primary">跳转去详请</Button>
        </div>
      </div>
    )
  }
}
export default User

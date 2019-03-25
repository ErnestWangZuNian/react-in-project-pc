import page from "@/components/page";
@page({
  style: require("./style.scss")
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
        这是用户列表表单界面,上个页面的参数是{this.props.page.data.currentInfo.parmas.id}
        <div>
          <Input
            onBlur={() => {
              this.props.page.history.go(
                "detail",
                {
                  id: 3
                }
              );
            }}
          />
        </div>
      </div>
    );
  }
}
export default User;

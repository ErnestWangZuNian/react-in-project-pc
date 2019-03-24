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
        这是用户列表表单界面
        <div>
          <Input
            onBlur={() => {
              this.props.page.history.back();
            }}
          />
        </div>
      </div>
    );
  }
}
export default User;

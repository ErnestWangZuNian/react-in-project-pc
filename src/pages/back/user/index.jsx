import page from "@/components/page";
import Detail from "./detail";
import Form from "./form";
import List from "./list";
@page({
  style: require("./style.scss")
})
class User extends React.Component {
  static defaultProps = {};
  static propTypes = {};
  constructor(props) {
    super(props);
    this.state = {
      page: 2
    };
  }
  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}
  //  生成页面
  renderPage = () => {
    const { page } = this.state;
    let result = null;
    switch (page) {
      case 0:
        result = <List />;
        break;
      case 1:
        result = <Form />;
        break;
      case 2:
        result = <Detail />;
        break;
    }
    return result;
  };
  render() {
    return <div>{this.renderPage()}</div>;
  }
}
export default User;

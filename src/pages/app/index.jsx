import url from "./api.action";
import { Layout, Menu, Icon } from "antd";
import page from "@/component/page";
const { Header, Sider, Content } = Layout;
@page({
  style: require("./style.scss")
})
class App extends React.Component {
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
      1111
    );
  }
}
export default App;

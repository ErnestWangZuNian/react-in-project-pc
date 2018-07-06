import url from "./api.action";
import { Button } from "antd";
import page from "../../component/page"
@page({
  style: require("./test.less")
})
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      page: 1,
      totalPage: 1
    };
  }
  componentWillMount() {
  }
  componentDidMount() {}
  componentWillReceiveProps() {}
  componentWillUpdate() {}
  componentDidUpdate() {}
  componentWillUnmount() {}
  render() {
    return (
      <div>
        <Button type="primary">111</Button>;
        <div className="test">2222</div>
      </div>
    );
  }
}
export default App;

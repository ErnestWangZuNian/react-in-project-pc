import url from "./api.action";
import { Button } from "antd";
import Test from "@/component/bussiness/test";
import page from "../../component/page";
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
  componentWillMount() {}
  componentDidMount() {}
  componentWillReceiveProps() {}
  componentWillUpdate() {}
  componentDidUpdate() {}
  componentWillUnmount() {}
  render() {
    return (
      <div>
        <Test list={[{id:2}]}></Test>
        <Button
          type="primary"
          onClick={() => {
            this.props.history.push("/about");
          }}
        >
          跳转路由
        </Button>
        ;<div className="test">2222</div>
      </div>
    );
  }
}
export default App;

import url from "./api.action";
import { Button } from "antd";
import createReactClass from "create-react-class";
let style = target => {
  return Component =>
    createReactClass({
      componentWillMount() {
        if (target && target.use) {
          console.log(target, "1111");
          target.use();
        }
      },
      componentWillUnmount() {
        if (target && target.unuse) {
          target.unuse();
        }
      },
      render() {
        return <Component {...this.props} />;
      }
    });
};
let page = options => {
  return function(Component) {
    if (options && options.style) {
      Component = style(options.style)(Component);
    }
    return Component;
  };
};
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
    console.log(require("./style"), 2222);
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

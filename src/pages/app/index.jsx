import url from "./api.action";
import { Button } from "antd";
import createReactClass from 'create-react-class';

let style = target => {
  return Component => createReactClass({
  	componentWillMount() {
      console.log(target,'1111')
  		if(target && target.use){
  			target.use();
  		}
  	},
  	componentWillUnmount() {
  		if(target && target.unuse){
  			target.unuse();
  		}
  	},
  	render() {
  		return <Component {...this.props}/>
  	}
  })
}
let page = options => {
 
  return function(Component) {
     if(options && options.style) {
      Component = style(options.style)(Component);
     }
     return Component;
  };
};
@page({
  style: require("./style")
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

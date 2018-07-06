import urlList from "./api.actions";
import page from "../../component/page";
@page({
  style: require("./style")
})
class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }
  componentWillMount() {}
  componentDidMount() {
    Api.get(urlList.list).then(data => {
      this.setState({
        data
      });
    });
  }
  componentWillReceiveProps() {}
  componentWillUpdate() {}
  componentDidUpdate() {}
  componentWillUnmount() {}
  render() {
    const { data } = this.state;
    return (
      <div>
        <div className="test">111</div>
      </div>
    );
  }
}
export default About;

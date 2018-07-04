import "./style.scss";
import urlList from "./api.actions";
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
        <div styleName="test">111</div>
        <div >111</div>
      </div>
    );
  }
}
export default About;

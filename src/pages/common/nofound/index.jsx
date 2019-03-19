import page from "@/components/page";
@page({
  style: require("./style.scss")
})
class NoFound extends React.Component {
  static defaultProps = {};
  static propTypes = {};
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}
  render() {
    return <div>改页面不存在</div>;
  }
}
export default NoFound;

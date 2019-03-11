import page from "@/components/page";
@page({
  style: require("./style.scss")
})
class App extends React.Component {
  static defaultProps = {};
  static propTypes = {};
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
    console.log(this.props,'123456')
    return <div>这是app界面</div>;
  }
}
export default App;

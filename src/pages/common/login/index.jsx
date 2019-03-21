import page from '@/components/page';
@page({
  style: require('./style.scss')
})
class Login extends React.Component {
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
    return <div>这是登录界面</div>;
  }
}
export default Login;

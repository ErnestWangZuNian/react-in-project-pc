import page from '@/components/page';
@page({
  style: require('./style.scss')
})
class Noauth extends React.Component {
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
    return <div>你没有权限访问</div>;
  }
}
export default Noauth;

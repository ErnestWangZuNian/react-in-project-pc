import page from '@/components/page';
import { Button } from 'antd';
@page({
  style: require('./style.scss')
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
    return <div><Button type="primary">这是app界面</Button></div>;
  }
}
export default App;

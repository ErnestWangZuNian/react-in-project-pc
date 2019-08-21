
/*eslint-disable*/
import page from '../../components/page';
import { NumberInput } from 'wzn-extendantd-components'

const style = require('./style.scss');

const { Button } = antd;

@page({
  style,
  preload: async () => {
    const result = {
      a: await Api.get('/v2/music/search'),
    };
    return result;
  },
})
class App extends React.Component {
  static defaultProps = {};

  static propTypes = {
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() { }

  componentDidUpdate() { }

  componentWillUnmount() { 
    console.log('我卸载了')
  }

  render() {
    return (
      <div>
        <NumberInput></NumberInput>
        <Button type="primary">2222</Button>
      </div>
    );
  }
}
export default App;

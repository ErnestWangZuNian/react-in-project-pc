import { NumberInput } from 'wzn-extendantd-components';
import { Page } from 'wzn-base-components';

const { Button } = antd;

@Page({
  style: require('./style.scss'),
  preload: async () => {
    const result = {
      a: await Api.get('/v2/music/search'),
    };
    return result;
  },
})
class App extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    return (
      <div>
        <NumberInput />
        <Button type="primary">111</Button>
      </div>
    );
  }
}
export default App;

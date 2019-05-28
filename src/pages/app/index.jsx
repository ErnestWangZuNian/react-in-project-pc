import page from '../../components/page';

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

  static propTypes = {};

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
        <Button type="primary">这是app</Button>
      </div>
    );
  }
}
export default App;

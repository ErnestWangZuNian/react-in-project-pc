import page from '../../components/page';

const style = require('./style.scss');

const { Button } = antd;

@page({
  style,
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

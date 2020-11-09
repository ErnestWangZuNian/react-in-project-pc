
import Layout from './layout/index';

require('./style.scss');

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
      <div className="app-container">
        <Layout {...this.props} />
      </div>
    );
  }
}
export default App;

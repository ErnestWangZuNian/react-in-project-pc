import styles from './style.scss';

const { Button } = antd;

class App extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {
    console.log('我卸载了');
  }

  render() {
    return (
      <div className={styles.homeContainer}>
        <Button type="primary">demo</Button>
      </div>
    );
  }
}
export default App;

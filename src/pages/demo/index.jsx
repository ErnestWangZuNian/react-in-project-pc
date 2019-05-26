import page from '../../components/page';

const style = require('./style.scss');

const { Button } = antd;

@page({
  style,
})
class Demo extends React.Component {
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
      <div className="home-container">
        <Button type="primary">这是demo界面</Button>
      </div>
    );
  }
}
export default Demo;

class Bundle extends React.Component {
  static defaultProps = {};

  static propTypes = {
    load: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.state = {
      mod: null,
    };
  }

  componentWillMount() {
    this.load(this.props);
  }

  componentWillReceiveProps(nextProps) {
    const { load } = this.props;
    if (nextProps.load !== load) {
      this.load(nextProps);
    }
  }

  load(props) {
    this.setState({
      mod: null,
    });
    props.load((mod) => {
      this.setState({
        // handle both es imports and cjs
        mod: mod.default ? mod.default : mod,
      });
    });
  }

  render() {
    const { mod } = this.state;
    return mod ? <mod /> : null;
  }
}

export default Bundle;

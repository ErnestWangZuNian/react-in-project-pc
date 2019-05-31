const preload = target => (Component, Loading = '加载中') => class Preload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoadSuceess: false,
    };
    this.preload = {};
  }

  async componentDidMount() {
    let { isLoadSuceess } = this.state;
    const promiseResult = [];
    if (target && Util.isBoolean(target)) {
      isLoadSuceess = true;
      this.setState({
        isLoadSuceess,
      });
    }
    if (Util.isObject(target) || Util.isFunction(target)) {
      let newTarget = { ...target };
      if (Util.isFunction(target)) {
        newTarget = await target(this.props);
      }
      if (!Util.isEmoptyObject(newTarget)) {
        Object.keys(newTarget).forEach((key) => {
          promiseResult.push(Promise.resolve(newTarget[key]));
        });
        try {
          const data = await Promise.all(promiseResult);
          Object.keys(newTarget).forEach((key, index) => {
            this.preload[key] = data[index];
          });
          isLoadSuceess = true;
          this.setState({
            isLoadSuceess,
          });
        } catch (err) {
          console.error(err);
        }
      }
    }
  }

  componentWillUnmount() {}

  render() {
    const { isLoadSuceess } = this.state;
    return isLoadSuceess ? <Component preloadData={this.preload} {...this.props} /> : Loading;
  }
};
export default preload;

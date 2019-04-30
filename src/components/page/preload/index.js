const preload = (target) => {
  return (Component) =>
    class Style extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          isLoadSuceess: false,
        };
      }
      componentWillMount() {}
      async componentDidMount() {
        let { isLoadSuceess } = this.state;
        let promiseResult = [];
        if (Util.isBoolean(target) && target) {
          isLoadSuceess = true;
          this.setState({
            isLoadSuceess,
          });
        }
        if (Util.isObject(target)) {
          if (!Util.isEmoptyObject(target)) {
            Object.keys(target).forEach((key) => {
              promiseResult.push(Promise.resolve(target[key]));
            });
            try {
              const data = await Promise.all(promiseResult);
              console.log(data, '789');
              isLoadSuceess = true;
              this.setState({
                isLoadSuceess,
              });
            } catch (err) {
              console.log(err);
            }
          }
        }
      }
      componentWillUnmount() {}
      render() {
        const { isLoadSuceess } = this.state;
        return isLoadSuceess ? <Component {...this.props} /> : null;
      }
    };
};
export default preload;

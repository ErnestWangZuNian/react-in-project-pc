
const asyncComponent = (importComponent, placeholder = '拼命加载中...') => class AsyncComponent extends React.Component {
    unmount = false;

    constructor() {
      super();
      this.state = {
        Child: null,
      };
    }

    async componentDidMount() {
      console.log(placeholder, 'www');
      const { default: Child } = await importComponent();
      if (this.unmount) return;
      this.setState({
        Child,
      });
    }

    componentWillUnmount() {
      this.unmount = true;
    }

    render() {
      const { Child } = this.state;
      return Child ? <Child {...this.props} /> : placeholder;
    }
};
export default asyncComponent;

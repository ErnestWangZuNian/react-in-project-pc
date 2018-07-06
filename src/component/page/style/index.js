import createReactClass from "create-react-class";
let style = target => {
    return Component =>
      createReactClass({
        componentWillMount() {
          if (target && target.use) {
            console.log(target, "1111");
            target.use();
          }
        },
        componentWillUnmount() {
          if (target && target.unuse) {
            target.unuse();
          }
        },
        render() {
          return <Component {...this.props} />;
        }
      });
  };
export default style;
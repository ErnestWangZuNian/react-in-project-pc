let style = target => {
  return Component =>
    class Style extends React.Component {
      componentWillMount() {
        if (target && target.use) {
          target.use();
        }
      }
      componentWillUnmount() {
        if (target && target.unuse) {
          target.unuse();
        }
      }
      render() {
        return <Component {...this.props} />;
      }
    };
};
export default style;

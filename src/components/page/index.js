import { Form } from 'antd';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import preload from './preload';
import style from './style';

const page = (options) => {
  options = { withRouter: true, ...options };
  return function (Component) {
    if (options && options.style) {
      Component = style(options.style)(Component);
    }
    if (options && options.preload) {
      Component = preload(options.preload)(Component);
    }
    if (options && options.withRouter) {
      Component = withRouter(Component);
    }
    if (options && options.form) {
      Component = Form.create()(Component);
    }
    if (options && options.connect) {
      const { mapStateToProps, mapDispatchToProps } = options.connect;
      Component = connect(
        mapStateToProps,
        mapDispatchToProps,
      )(Component);
    }
    return Component;
  };
};
export default page;

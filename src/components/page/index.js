import { Form } from 'antd';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import preload from './preload';
import style from './style';

const Page = (params) => {
  const options = { withRouter: true, ...params };
  const resultComponent = (Component) => {
    let newComponent = Component;
    if (options && options.style) {
      newComponent = style(options.style)(Component);
    }
    if (options && options.preload) {
      newComponent = preload(options.preload)(Component);
    }
    if (options && options.withRouter) {
      newComponent = withRouter(Component);
    }
    if (options && options.form) {
      newComponent = Form.create()(Component);
    }
    if (options && options.connect) {
      const { mapStateToProps, mapDispatchToProps } = options.connect;
      newComponent = connect(
        mapStateToProps,
        mapDispatchToProps,
      )(Component);
    }
    return newComponent;
  };
  return resultComponent;
};
export default Page;

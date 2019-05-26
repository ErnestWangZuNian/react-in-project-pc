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
      newComponent = style(options.style)(newComponent);
    }
    if (options && options.preload) {
      newComponent = preload(options.preload)(newComponent);
    }
    if (options && options.withRouter) {
      newComponent = withRouter(newComponent);
    }
    if (options && options.form) {
      newComponent = Form.create()(newComponent);
    }
    if (options && options.connect) {
      const { mapStateToProps, mapDispatchToProps } = options.connect;
      newComponent = connect(
        mapStateToProps,
        mapDispatchToProps,
      )(newComponent);
    }
    return newComponent;
  };

  return resultComponent;
};
export default Page;

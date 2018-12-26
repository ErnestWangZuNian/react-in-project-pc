import style from "./style";
import { Form } from "antd";
import { connect } from "react-redux";
let page = options => {
  return function(Component) {
    if (options && options.style) {
      Component = style(options.style)(Component);
    }
    if (options && options.form) {
      Component = Form.create()(Component);
    }
    if(options && options.connect){
      const {mapStateToProps, mapDispatchToProps } = options.connect;
      Component = connect(mapStateToProps, mapDispatchToProps)(Component);
    }
    return Component;
  };
};
export default page;



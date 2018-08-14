import style from "./style";
import { Form } from "antd";
let page = options => {
  return function(Component) {
    if (options && options.style) {
      Component = style(options.style)(Component);
    }
    if (options && options.form) {
      Component = Form.create()(Component);
    }
    return Component;
  };
};
export default page;

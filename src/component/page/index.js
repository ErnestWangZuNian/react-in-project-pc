import style from "./style"
let page = options => {
  return function(Component) {
    if (options && options.style) {
      Component = style(options.style)(Component);
    }
    return Component;
  };
};
export default page;
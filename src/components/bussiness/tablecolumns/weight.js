const weightDeal = text => {
  return  <span className="table-weight">{text}</span>
};
const weight = (columns = []) => {
  columns.forEach(column => {
    if (column.weight) {
      if (column.render && Util.isFunction(column.render)) {
        let __render__ = column.render;
        column.render = (text, row, index) =>
          weightDeal(__render__(text, row, index));
      } else {
        column.render = (text, row, index) => weightDeal(text);
      }
    }
  });
  return columns;
};
export default weight;

import "./style"
import weight from "./weight";
const columnMoerAttr = {
  weight
};
let tableColumns = {
  dealColumns: (columns = []) => {
    if (!Util.isArray(columns)) {
      columns = [];
      console.warn("columns必须是一个数组");
    } else {
      columns.forEach(item => {
        Object.keys(columnMoerAttr).forEach(key => {
          if (item[key]) {
            columns = columnMoerAttr[key](columns);
          }
        });
      });
    }
    return columns;
  }
};
export default {
  ...columnMoerAttr,
  ...tableColumns
};

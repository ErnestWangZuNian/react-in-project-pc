import { Table } from "antd";
import page from "@/component/page";
import { Nodata,TableColumns } from "@/component/bussiness";
@page({
  style: require("./style.scss")
})
class ZTable extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {}
  componentDidMount() {}
  componentWillReceiveProps() {}
  componentWillUpdate() {}
  componentDidUpdate() {}
  componentWillUnmount() {}
  render() {
    const {columns} = this.props;
    console.log(columns,'123344')
    return (
      <Table
        locale={{
          emptyText: <Nodata />
        }}
        columns={TableColumns.dealColumns(columns)}
        className="component-table"
        {...this.props}
      />
    );
  }
}
export default ZTable;

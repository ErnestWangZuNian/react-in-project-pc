import page from "@/component/page";
import { ZTable } from "@/component/bussiness";
import { Button } from "antd/lib/radio";
@page({
  style: require("./style.scss")
})
class ZSearchTable extends React.Component {
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
    return (
      <ZTable
        dataSource={[
          {
            key: "1",
            name: "胡彦斌",
            age: 32,
            address: "西湖区湖底公园1号"
          },
          {
            key: "2",
            name: "胡彦祖",
            age: 42,
            address: "西湖区湖底公园1号"
          }
        ]}
        columns={[
          {
            title: "姓名",
            dataIndex: "name",
            weight: true,
            render(text, row, index) {
              return  text = "test";
            }
          },
          {
            title: "年龄",
            dataIndex: "age"
          },
          {
            title: "住址",
            dataIndex: "address"
          }
        ]}
      />
    );
  }
}
export default ZSearchTable;

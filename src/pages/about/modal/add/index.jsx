import { Form, Button, Modal, Input } from "antd";
import { confirmModal, cancelModal } from "@/store/about/action";
import page from "@/component/page";
const FormItem = Form.Item;
@page({
  style: require("./style.scss"),
  form: true,
  connect: {
    mapStateToProps: state => ({
      aboutData: state.aboutData
    }),
    mapDispatchToProps: {
      confirmModal,
      cancelModal
    }
  }
})
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {}
  componentDidMount() {}
  componentWillReceiveProps() {}
  componentWillUpdate() {}
  componentDidUpdate() {}
  componentWillUnmount() {}
  render() {
    const { aboutData, confirmModal, cancelModal, form } = this.props;
    return (
      <div>
        <Modal
          title="redux弹窗"
          visible={aboutData.modal.add.visible}
          onOk={() => {
            form.validateFields((err, values) => {
              if (err) {
                console.log("Received values of form: ", values);
              } else {
                confirmModal(values);
              }
            });
          }}
          onCancel={cancelModal}
        >
          <FormItem
            label="名称"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 16 }}
          >
            <Input
              {...form.getFieldProps("name", {
                rules: [{ required: true, message: "请输入名称" }]
              })}
            />
          </FormItem>
          ,
          <FormItem
            label="分类名称"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 16 }}
          >
            <Input
              {...form.getFieldProps("categoryName", {
                rules: [{ required: true, message: "请输入分类名称" }]
              })}
            />
          </FormItem>
        </Modal>
      </div>
    );
  }
}
export default App;

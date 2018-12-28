import urlList from "./api.actions";
import page from "@/component/page";
import ZSearchTable from "@/component/bussiness/zsearchtable";
import PropTypes from "prop-types";
import { clickButton, getInfo, openModal, reload } from "@/store/about/action";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import AddModal from "./modal/add";
const FormItem = Form.Item;
@page({
  style: require("./style"),
  form: true,
  connect: {
    mapStateToProps: state => ({
      aboutData: state.aboutData
    }),
    mapDispatchToProps: {
      clickButton,
      getInfo,
      openModal
    }
  }
})
class About extends React.Component {
  static propTypes = {
    aboutData: PropTypes.object.isRequired,
    clickButton: PropTypes.func.isRequired,
    getInfo: PropTypes.func.isRequired,
    openModal: PropTypes.func
  };
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }
  componentWillMount() {
    let { getInfo } = this.props;
    getInfo();
  }
  componentDidMount() {}
  componentWillReceiveProps() {}
  componentWillUpdate() {}
  componentDidUpdate() {}
  componentWillUnmount() {}
  //  验证表单信息
  validateForm = () => {
    const { form } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        console.log(values, "ww");
      }
    });
  };
  //  刷新页面
  reload = () => {
    alert("reload");
  };
  render() {
    const { data } = this.state;
    const { aboutData, clickButton, getInfo, form, openModal } = this.props;
    return (
      <div className="about-container">
        <ZSearchTable
          url="/v1/consumable"
          data={{}}
          reload={aboutData.tableReload}
          toolbar={
            <Button
              type="primary"
              onClick={() => {
                openModal();
              }}
            >
              新增
            </Button>
          }
          search={form => {
            return [
              <FormItem
                label="名称"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 16 }}
              >
                <Input {...form.getFieldProps("name")} />
              </FormItem>,
              <FormItem
                label="分类名称"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 16 }}
              >
                <Input {...form.getFieldProps("categoryName")} />
              </FormItem>,
              <FormItem
                label="店铺名称"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 16 }}
              >
                <Input {...form.getFieldProps("storeName")} />
              </FormItem>,
              <FormItem
                label="店铺名称"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 16 }}
              >
                <Input {...form.getFieldProps("storeName")} />
              </FormItem>
            ];
          }}
          onResponse={data => {
            return data;
          }}
          onPage={data => {
            console.log(`翻页了`);
          }}
          onQuery={data => {
            console.log(`我被点击查询了参数是${data}`);
          }}
          onReset={() => {
            console.log(`我被重置了`);
          }}
          columns={[
            {
              title: "名称",
              dataIndex: "name"
            },
            {
              title: "分类名称",
              dataIndex: "category_name"
            },
            {
              title: "店铺名称",
              dataIndex: "store_name"
            }
          ]}
        />
        <Button
          type="primary"
          onClick={() => {
            clickButton();
          }}
        >
          {aboutData.count}
        </Button>
        <div>1234566</div>
        {aboutData.testList.map((item, index) => {
          console.log(item, "wewwe");
          return <div key={index}>{item.name}</div>;
        })}
        <FormItem>
          <Input
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Username"
            {...form.getFieldProps("userName", {
              initialValue: 123,
              rules: [
                {
                  required: true,
                  message: "请输入用户名"
                }
              ]
            })}
          />
        </FormItem>
        <div>
          {aboutData.dataList.map(item => {
            return <div key={item.name}>{item.name}</div>;
          })}
        </div>
        <Button
          type="primary"
          onClick={() => {
            this.validateForm();
          }}
        >
          表单验证
        </Button>
        <AddModal />
      </div>
    );
  }
}
export default About;

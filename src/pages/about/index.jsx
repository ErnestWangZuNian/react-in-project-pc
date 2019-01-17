import urlList from "./api.actions";
import page from "@/component/page";
import ZSearchTable from "@/component/bussiness/zsearchtable";
import Test from "@/component/bussiness/test";
import PropTypes from "prop-types";
import { clickButton, getInfo, openModal, cancelModal,reloadTable } from "@/store/about/action";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import AddModal from "./modal/add";
import utils from "../../utils";
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
      cancelModal,
      openModal,
      reloadTable
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
  componentWillMount() {}
  componentDidMount() {
    let { getInfo ,clickButton,openModal,cancelModal,reloadTable} = this.props;
    getInfo();
    clickButton();
    openModal("ADD");
    cancelModal('ADD');
    let a = {};
    let readFilePromise = utils.promisify(this.reload,a);
    var obj = {'0':"zero",'1':"one",'2':'two',length:3};
    [].slice.call(obj,{...arguments});
    readFilePromise('test').then(data => {
      console.log(data);
      console.log(a,'11222')
    }).catch(err => {
      console.log(err);
    })
    
    // this.reload("test",(err,success) => {
    //    console.log(err,success)
    // })
  }
  componentWillReceiveProps(props) {
    const { aboutData } = props;
    if (aboutData.tableReload) {
      this.reload();
    }
  }
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
  reload = (a,callback) => {
    console.log(a);
    callback && utils.isFunction(callback) && callback(false,"success")
  };
  render() {
    const { data } = this.state;
    const { aboutData, clickButton, getInfo, form, openModal } = this.props;
    return (
      <div className="about-container">
        <Test list={aboutData.dataList} {
          ...form.getFieldProps("userName", {
              initialValue: 123,
              rules: [
                {
                  required: true,
                  message: "请输入用户名"
                }
              ]
            })}></Test>
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

import urlList from "./api.actions";
import page from "@/component/page";
import ZSearchTable from "@/component/bussiness/zsearchtable";
import PropTypes from "prop-types";
import { clickButton, getInfo } from "@/store/about/action";
import { Form, Icon, Input, Button, Checkbox } from "antd";
const FormItem = Form.Item;
@page({
  style: require("./style"),
  form: true,
  connect: {
    mapStateToProps: state => ({
       aboutData: state.aboutData
    }),
    mapDispatchToProps:  {
       clickButton,
       getInfo
    }
  }
})
class About extends React.Component {
  static propTypes = {
    aboutData: PropTypes.object.isRequired,
    clickButton: PropTypes.func.isRequired,
    getInfo: PropTypes.func.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }
  componentWillMount() {
    let { getInfo } = this.props;
    console.log(Utils.isArray([1,2,4]))
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
  render() {
    const { data } = this.state;
    const { aboutData, clickButton, getInfo, form } = this.props;
    return (
      <div>
        <ZSearchTable></ZSearchTable>
        <Button
          type="primary"
          onClick={() => {
            clickButton();
          }}
        >
          {aboutData.count}
        </Button>
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
      </div>
    );
  }
}
export default About;

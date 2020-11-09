

const { Button, Form, Input } = antd;
const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 18,
  },
};

class Login extends React.Component {
  static propTypes = {
    form: PropTypes.object.isRequired,
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
    this.login = this.login.bind(this);
  }

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  login() {
    const { form } = this.props;
    form.validateFields(async (err, values) => {
      if (!err) {
        await Api.post('/api/user', values);
      }
    });
  }

  render() {
    const { form } = this.props;
    return (
      <div className="login-container">
        <div className="login-content">
          <Form.Item {...formItemLayout} label="用户名" required>
            <Input
              placeholder="请输入用户名"
              {...form.getFieldProps('name', {
                rules: [
                  {
                    required: true,
                  },
                ],
              })}
            />
          </Form.Item>
          <Form.Item {...formItemLayout} label="密码" required>
            <Input
              placeholder="请输入密码"
              type="password"
              {...form.getFieldProps('password', {
                rules: [
                  {
                    required: true,
                  },
                ],
              })}
            />
          </Form.Item>
          <Button type="primary" size="large" block onClick={this.login}>
            登录
          </Button>
        </div>
      </div>
    );
  }
}
export default Login;

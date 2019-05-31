import page from '../../components/page';

const style = require('./style.scss');

const { Button, Input, Form } = antd;

@page({
  style,
  form: true,
  preload: async () => {
    const result = {
      a: await Api.get('/v2/music/search'),
    };
    return result;
  },
})
class App extends React.Component {
  static defaultProps = {};

  static propTypes = {
    form: PropTypes.objectOf(PropTypes.object).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    const { form } = this.props;
    console.log(form, 'wwww');
    return (
      <div>
        <div>
          <Button
            type="primary"
            onClick={() => {
              // form.validateFields((err, values) => {
              //   console.log(err, values);
              // });
              console.log(form.isPass(), 'www');
            }}
          >
            确定
          </Button>
        </div>
        <div>
          <Form.Item>
            <Input
              {...form.getFieldProps('name', {
                rules: [
                  {
                    required: true,
                    message: '请输入姓名',
                  },
                ],
              })}
            />
          </Form.Item>
        </div>
      </div>
    );
  }
}
export default App;

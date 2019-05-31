// const { Form } = antd;
import { createForm } from 'rc-form';
const formWrap = () => {
  const resultComponent = (Component) => {
    const resultForm = class FormWrap extends React.Component {
      static defaultProps = {};

      static propTypes = {
        form: PropTypes.objectOf(PropTypes.object).isRequired,
      };

      constructor(props) {
        super(props);
        this.state = {};
        this.isPass = this.isPass.bind(this);
      }

      componentWillMount() {}

      componentWillUnmount() {}

      isPass() {
        const { form } = this.props;
        let result = false;
        form.validateFields((error) => {
          if (!error) {
            result = true;
          }
        });
        return result;
      }

      render() {
        const { form } = this.props;
        const formProps = {
          ...form,
          isPass: this.isPass,
        };
        return <Component form={formProps} />;
      }
    };
    return createForm()(resultForm);
  };
  return resultComponent;
};
export default formWrap;

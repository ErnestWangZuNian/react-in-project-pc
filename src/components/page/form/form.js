import createDOMForm from 'rc-form/lib/createDOMForm';
import omit from 'omit.js';
import classnames from 'classnames';
import { FIELD_META_PROP, FIELD_DATA_PROP } from './constants';

const FormLayouts = ['horizontal', 'inline', 'vertical'];
class CusFrorm extends React.Component {
  static defaultProps = {
    colon: true,
    layout: 'horizontal',
    prefixCls: 'wzn-form',
    hideRequiredMark: false,
    onSubmit(e) {
      e.preventDefault();
    },
  };

  static propTypes = {
    layout: PropTypes.oneOf(FormLayouts),
    onSubmit: PropTypes.func,
    style: PropTypes.any.isRequired,
    children: PropTypes.any.isRequired,
    className: PropTypes.string.isRequired,
    prefixCls: PropTypes.string,
    hideRequiredMark: PropTypes.bool,
    wrapperCol: PropTypes.object.isRequired,
    labelCol: PropTypes.object.isRequired,
    colon: PropTypes.bool,
  };

  static create = (options = {}) => createDOMForm({
    fieldNameProp: 'id',
    ...options,
    fieldMetaProp: FIELD_META_PROP,
    fieldDataProp: FIELD_DATA_PROP,
  });

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    const {
      prefixCls, hideRequiredMark, className = '', layout, children,
    } = this.props;
    const formClassName = classnames(
      prefixCls,
      {
        [`${prefixCls}-horizontal`]: layout === 'horizontal',
        [`${prefixCls}-vertical`]: layout === 'vertical',
        [`${prefixCls}-inline`]: layout === 'inline',
        [`${prefixCls}-hide-required-mark`]: hideRequiredMark,
      },
      className,
    );

    const formProps = omit(this.props, [
      'prefixCls',
      'className',
      'layout',
      'inline',
      'horizontal',
      'vertical',
      'form',
      'hideRequiredMark',
    ]);
    return (
      <form className={formClassName} {...formProps}>
        {children}
      </form>
    );
  }
}
export default CusFrorm;

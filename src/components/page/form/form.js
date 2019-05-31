import createDOMForm from 'rc-form/lib/createDOMForm';
import omit from 'omit.js';
import { FIELD_META_PROP, FIELD_DATA_PROP } from './constants';

const FormLayouts = ['horizontal', 'inline', 'vertical'];
class Form extends React.Component {
  static defaultProps = {
    colon: true,
    layout: 'horizontal',
    hideRequiredMark: false,
    onSubmit(e) {
      e.preventDefault();
    },
  };

  static propTypes = {
    prefixCls: PropTypes.string.isRequired,
    layout: PropTypes.oneOf(FormLayouts),
    children: PropTypes.any,
    onSubmit: PropTypes.func,
    hideRequiredMark: PropTypes.bool,
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
      prefixCls,
      hideRequiredMark,
      className = '',
      layout,
      inline,
      horizontal,
      vertical,
    } = this.props;
    console.warn(
      !inline && !horizontal && !vertical,
      '`Form[inline|horizontal|vertical]` is deprecated, please use `Form[layout]` instead.',
    );
    const formClassName = classnames(
      prefixCls,
      {
        [`${prefixCls}-horizontal`]:
          (!inline && !vertical && layout === 'horizontal') || horizontal,
        [`${prefixCls}-vertical`]: layout === 'vertical' || vertical,
        [`${prefixCls}-inline`]: layout === 'inline' || inline,
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
    return <form {...formProps} />;
  }
}
export default Form;

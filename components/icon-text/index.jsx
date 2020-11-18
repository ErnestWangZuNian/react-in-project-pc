import classnames from 'classnames';
import './style.scss';

const { Icon } = antd;

class IconText extends React.Component {
  static propTypes = {
    text: PropTypes.any.isRequired,
    className: PropTypes.string.isRequired,
    style: PropTypes.object.isRequired,
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    const { text, className, style, ...moreProps } = this.props;
    return (
      <div
        className={classnames(className, 'icon-text-container')}
        style={style}
      >
        <Icon {...moreProps} />
        {text ? <span styleName="text-container">{text}</span> : null}
      </div>
    );
  }
}
export default IconText;

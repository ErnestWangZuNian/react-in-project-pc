import IconText from '@/components/icon-text';
import { LayoutContext } from '../layout-context';

import './style.scss';

const { Layout } = antd;
const { Header } = Layout;

class LayoutHeaderComponent extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    return (
      <LayoutContext.Consumer>
        {(value) => {
          const { sliderConfig } = value;
          const { collapsed, toggleCollapsed } = sliderConfig;
          const result = (
            <Header styleName="layout-header-container">
              <div styleName="trigger-container" onClick={toggleCollapsed}>
                <IconText type={collapsed ? 'menu-unfold' : 'menu-fold'} />
              </div>
              <div styleName="right-container">
                <div styleName="user-container">
                  <IconText type="user" text="wzn" />
                </div>
              </div>
            </Header>
          );
          return result;
        }}
      </LayoutContext.Consumer>
    );
  }
}
export default LayoutHeaderComponent;

import { Component } from 'wzn-base-components';
import IconText from '@/components/icon-text';
import { LayoutContext } from '../layout-context';

const { Layout } = antd;
const { Header } = Layout;

@Component({
  style: require('./style.scss'),
})
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
            <Header className="layout-header-container">
              <div className="trigger-container" onClick={toggleCollapsed}>
                <IconText type={collapsed ? 'menu-unfold' : 'menu-fold'} />
              </div>
              <div className="right-container">
                <div className="user-container">
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

import layoutStore from "@/components/layout/store";
import { Provider } from "react-redux";
import App from "./main";
class AppWraper extends React.Component {
  static defaultProps = {};
  static propTypes = {};
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}
  render() {
    return (
      // <Provider store={layoutStore}>
        <App {...this.props} />
      // </Provider>
    );
  }
}
export default AppWraper;

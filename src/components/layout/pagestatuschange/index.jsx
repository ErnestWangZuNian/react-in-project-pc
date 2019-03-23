import pageGroupStore from "../componentstore/store";
import { Provider } from "react-redux";
import Main from "./main";
class PageGroupWraper extends React.Component {
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
      <Provider store={pageGroupStore}>
        <Main {...this.props} />
      </Provider>
    );
  }
}
export default PageGroupWraper;

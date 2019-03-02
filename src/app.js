
import { Layout, Menu, Icon } from "antd";
import Routes from './routes';
const { Header, Sider, Content } = Layout;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    };
  }
  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}
  render() {
    return (
        <Layout>
            2222
            <Header></Header>
            <Content>
               <Routes/>
            </Content>
        </Layout>
    );
  }
}
export default App;

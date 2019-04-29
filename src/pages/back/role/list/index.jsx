import page from '@/components/page';
@page({
  style: require('./style.scss'),
  connect: {},
})
class User extends React.Component {
  static defaultProps = {};
  static propTypes = {};
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    Api.post('index.php/ProxyToLiteApp', {
      mo: 'client',
      co: 'Member',
      ac: 'getUserInfo',
      clientId: 41,
    });
  }
  componentDidUpdate() {}
  componentWillUnmount() {}
  gotoDetail = () => {
    const { go } = this.props.page.history;
    go(
      'roleForm',
      {
        id: 2,
      },
      {
        isLoad: false,
      },
    );
  };
  render() {
    return (
      <div>
        这是角色管理列表界面
        <div>
          <Button type="primary" onClick={this.gotoDetail}>
            跳转去详请
          </Button>
        </div>
      </div>
    );
  }
}
export default User;

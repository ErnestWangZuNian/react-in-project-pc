import page from '@/components/page';
import Detail from './detail';
import Form from './form';
import List from './list';
import RoleList from '../role/list';
import PageGroup from '@/components/layout/pagegroup/index.jsx';

@page({
  style: require('./style.scss'),
})
class User extends React.Component {
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
      <div>
        <PageGroup activekey="list">
          <PageGroup.Node component={List} key="list" />
          <PageGroup.Node component={Form} key="form" />
          <PageGroup.Node component={Detail} key="detail" />
          <PageGroup.Node component={RoleList} key="roleList" />
        </PageGroup>
      </div>
    );
  }
}
export default User;

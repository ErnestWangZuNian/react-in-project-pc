import page from '@/components/page';
// import Detail from './detail';
// import Form from './form';
// import List from './list';
// import PageGroup from '@/components/layout/pagegroup';
@page({
  style: require('./style.scss'),
  preload: (props) => {
    console.log(props, '123456');
    const result = {
      a: Api.get('/v2/music/search'),
      b: Api.get('/v2/music/search'),
    };
    return result;
  },
  connect: {
    mapStateToProps: state => ({
      pageData: state.pageData,
    }),
    mapDispatchToProps: {},
  },
})
class User extends React.Component {
  static defaultProps = {};

  static propTypes = {};

  constructor(props) {
    super(props);
    console.log(props, 'qwwww');
    this.state = {
      test: props.preload.a.musics,
    };
  }

  componentDidMount() {
    console.log(this.props, '1234567');
  }

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    const { test } = this.state;
    return (
      <div>
        {test.length
          && test.map(item => <div>{item.title}</div>)}
      </div>
    );
  }
}
export default User;

import page from '@/components/page';
// import Detail from './detail';
// import Form from './form';
// import List from './list';
// import PageGroup from '@/components/layout/pagegroup';
@page({
  style: require('./style.scss'),
  preload: {
    a: Api.get('/movie/in_theaters'),
    b: Api.get('/movie/in_theaters'),
  },
  connect: {
    mapStateToProps: (state) => {
      return {
        pageData: state.pageData,
      };
    },
    mapDispatchToProps: {},
  },
})
class User extends React.Component {
  static defaultProps = {};
  static propTypes = {};
  constructor(props) {
    super(props);
    this.state = {
      test: [],
    };
  }
  async componentDidMount() {
    const data = await Api.get('/movie/in_theaters');
    this.setState({
      test: data.subjects,
    });
  }
  componentDidUpdate() {}
  componentWillUnmount() {}
  render() {
    const { test } = this.state;
    console.log(test, 'www');
    return (
      <div>
        {test.length &&
          test.map((item) => {
            return <div>{item.title}</div>;
          })}
      </div>
    );
  }
}
export default User;

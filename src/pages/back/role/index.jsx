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
      test: props.preload.a.subjects,
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
        {test.length &&
          test.map((item) => {
            return <div>{item.title}</div>;
          })}
      </div>
    );
  }
}
export default User;

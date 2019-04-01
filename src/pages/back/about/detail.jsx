import page from '@/components/page'
@page({
  style: require('./style.scss')
})
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false
    }
  }
  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}
  render() {
    return <div>这是about详情界面</div>
  }
}
export default App

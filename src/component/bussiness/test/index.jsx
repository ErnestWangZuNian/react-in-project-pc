
import page from "@/component/page";
import {Button} from "antd"
@page({
  style: require("./style.scss")
})
class NoData extends React.Component {
  constructor(props) {
    super(props);
    this.count =0;
    this.state = {
      list:props.list || []
    };
  }
  static defaultProps = {};
  static propTypes = {};
  componentWillMount() {
    console.log('组件挂载之前')
  }
  componentDidMount() {
    console.log('组件挂载')
  }
  componentWillReceiveProps(props) {
    console.log('props变化')
    let {list} = props;
    this.setState({
      list
    })
  }
  componentWillUpdate() {
    console.log('组件更新')
  }
  componentDidUpdate() {
    console.log('组件更新完成')
  }
  componentWillUnmount() {
    console.log('组件卸载')
  }
  //  新增
  add(){
    let {list} = this.state;
    list.push({
      id: ++this.count,
      name: `wangzunian${this.count}`
    })
    this.setState({
      list
    },() => {this.onChange()})
  }
  //  减法
  sub(item){
    let {list} = this.state;
    list = Utils.array.deleteValue(list,item)
    this.setState({
      list
    },() => {this.onChange()})
  }
   //  隐藏域
   onChange(value) {
    const { onChange } = this.props;
    onChange && Utils.isFunction(onChange) && onChange(456);
  }
  render() {
    const {list} = this.state;
    console.log(this.props,'wwww')
    return (
      <div className="conponent-nodata-container">
        
        {list.length>0 && list.map((item,index) => {
          return <Button type="primary" key={index} onClick={() => {
            this.sub(item)
          }}>{item.name}</Button>
        })}
        <Button type="primary" onClick={() => {
          this.add()
        }}>加</Button>
      </div>
    );
  }
}

export default NoData;

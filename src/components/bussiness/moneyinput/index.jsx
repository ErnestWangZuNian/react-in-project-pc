import { Input, Slider, Switch } from "antd";
import page from "@/components/page";
import { Nodata, TableColumns } from "@/components/bussiness";
@page({
  style: require("./style.scss")
})
class SliderChange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [20, 50]
    };
  }
  componentWillMount() {}
  componentDidMount() {}
  componentWillReceiveProps() {}
  componentWillUpdate() {}
  componentDidUpdate() {}
  componentWillUnmount() {}
  render() {
    const { value } = this.state;
    return (
      <Slider
        range
        value={value}
        defaultValue={[20, 50]}
        disabled={false}
        onChange={value => {
          this.setState({
              value
          },() => {
              this.props.onChange(value)
          })
        }}
      />
    );
  }
}
export default SliderChange;

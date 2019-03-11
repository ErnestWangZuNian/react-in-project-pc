import nodata from "./images/nodata.png";
import page from "@/components/page";
@page({
  style: require("./style.scss")
})
class NoData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static defaultProps = {};
  static propTypes = {};
  componentWillMount() {}
  componentDidMount() {}
  render() {
    return (
      <div className="conponent-nodata-container">
        <span>
          <img src={nodata} alt="" />
          <div>{this.props.emptyText || "暂时没有内容哦~"}</div>
        </span>
      </div>
    );
  }
}

export default NoData;

import page from "@/component/page";
import PropTypes from "prop-types";
import { ZTable } from "@/component/bussiness";
import { Button, Row, Col } from "antd";
@page({
  style: require("./style.scss"),
  form: true
})
class ZSearchTable extends React.Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    data: PropTypes.object,
    onResponse: PropTypes.func,
    onQuery: PropTypes.func,
    onReset: PropTypes.func,
    search: PropTypes.func,
    toolbar: PropTypes.node
  };
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      loading: true
    };
  }
  componentWillMount() {}
  componentDidMount(props) {
    this.getDataFromApi();
  }
  componentWillReceiveProps(props) {
    console.log(props)
    if (props.reload) {
      this.reload();
    }
  }
  componentWillUpdate() {}
  componentDidUpdate() {}
  componentWillUnmount() {}
  //  从后端接口拿取数据
  async getDataFromApi(requestData = {}) {
    const { url, data, search, onResponse } = this.props;
    const { loading } = this.state;
    let defaultPage = { page: 1, pageSize: 2 };
    requestData = data
      ? { ...defaultPage, ...data, ...requestData }
      : { ...defaultPage, ...requestData };
    try {
      let res = await Api.get(url, requestData);
      if (onResponse && !Utils.isFunction(onResponse)) {
        console.warn("onResponse必须是一个函数");
      }
      res.body.list =
        (onResponse && (await onResponse(res.body.list))) || res.body.list;
      this.setState({
        dataSource: res.body.list,
        loading: false
      });
    } catch (error) {
      console.error(error);
    }
  }
  //  查询table
  async queryTable() {
    const { form, onQuery } = this.props;
    const requestData = form.getFieldsValue();
    onQuery && (await onQuery(requestData));
    let res = await this.getDataFromApi(requestData);
  }
  //  重置table
  async resetTable() {
    const { form, onReset } = this.props;
    form.resetFields();
    let res = await this.getDataFromApi({});
    onReset && (await onReset());
  }
  //  分页操作
  async changePage(page, pageSize) {
    const { onPage } = this.props;
    let res = await this.getDataFromApi({
      page,
      pageSize
    });
    onPage && (await onPage());
  }
  //  刷新页面
  async reload() {
    this.getDataFromApi();
  }
  render() {
    const { dataSource, loading } = this.state;
    const { search, form, toolbar } = this.props;
    const isShowSearch =
      search && Utils.isArray(search(form)) && search(form).length > 0
        ? true
        : false;
    const searchItemLength =
      search && Utils.isArray(search(form)) ? search(form).length : 0;
    return (
      <div className="componet-zsearchtable-container">
        {isShowSearch ? (
          <Row className="search-container">
            {searchItemLength >= 3 ? (
              <Row>
                <Col span={21}>
                  {search(form).map((item, index) => {
                    return (
                      <Col span={7} key={index}>
                        {item}
                      </Col>
                    );
                  })}
                </Col>
                <Col span={3}>
                  <Button
                    type="primary"
                    className="mr20"
                    onClick={this.queryTable.bind(this)}
                  >
                    查询
                  </Button>
                  <Button onClick={this.resetTable.bind(this)}>重置</Button>
                </Col>
              </Row>
            ) : (
              <Row>
                {search(form).map((item, index) => {
                  return (
                    <Col span={7} key={index}>
                      {item}
                    </Col>
                  );
                })}
                <Col span={3}>
                  <Button
                    type="primary"
                    className="mr20"
                    onClick={this.queryTable.bind(this)}
                  >
                    查询
                  </Button>
                  <Button onClick={this.resetTable.bind(this)}>重置</Button>
                </Col>
              </Row>
            )}
          </Row>
        ) : null}
        {toolbar ? <Row className="toolbar-container">{toolbar}</Row> : null}
        <ZTable
          dataSource={dataSource}
          loading={loading}
          pagination={{
            onChange: this.changePage.bind(this)
          }}
          {...this.props}
        />
      </div>
    );
  }
}
export default ZSearchTable;

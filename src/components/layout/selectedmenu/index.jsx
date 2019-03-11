import page from "@/components/page";
const TabPane = antd.Tabs.TabPane;
@page({
  style: require("./style")
})
class SelectedMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static defaultProps = {
    menuList: []
  };
  static propTypes = {
    menuList: PropTypes.array.isRequired,
    changeSelectedMenu: PropTypes.func.isRequired,
    deleteSelectedMenu: PropTypes.func.isRequired,
    currentMenuKey: PropTypes.string
  };
  componentDidMount() {}
  componentDidUpdate() {}
  render() {
    const {
      menuList,
      currentMenuKey,
      changeSelectedMenu,
      deleteSelectedMenu
    } = this.props;
    return (
      <div className="selected-menu-container">
        <Tabs
          type="card"
          activeKey={currentMenuKey}
          onChange={activeKey => {
            changeSelectedMenu(activeKey);
          }}
        >
          {menuList &&
            menuList.length &&
            menuList.map(item => {
              return (
                <TabPane
                  tab={
                    <div className="selected-menu-tab-item">
                      <span>{item.title}</span>
                      {item.key !== "/back/index" ? (
                        <span
                          className="close-tab"
                          onClick={e => {
                            e.stopPropagation();
                            deleteSelectedMenu(item);
                          }}
                        >
                          <Icon type="close" />
                        </span>
                      ) : null}
                    </div>
                  }
                  key={item.key}
                />
              );
            })}
        </Tabs>
      </div>
    );
  }
}

export default SelectedMenu;

import page from "@/components/page";
const TabPane = antd.Tabs.TabPane;
@page({
  style: require("./style")
})
class SelectedMenu extends React.Component {
  static defaultProps = {
    menuList: []
  };
  static propTypes = {
    menuList: PropTypes.array.isRequired,
    changeSelectedMenu: PropTypes.func.isRequired,
    deleteSelectedMenu: PropTypes.func.isRequired,
    currentMenuKey: PropTypes.string
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
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
                      {item.path !== "/back/index" ? (
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

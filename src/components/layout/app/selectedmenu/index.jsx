import page from '@/components/page'
import routeConfig from '@/routes/config'
const TabPane = antd.Tabs.TabPane
const DEFAULT_SELECTED_MENU =
  routeConfig.menus && routeConfig.menus.length
    ? routeConfig.menus[0].path
    : null
@page({
  style: require('./style')
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
    super(props)
    this.state = {}
  }
  componentDidMount() {}
  componentDidUpdate() {}
  render() {
    const {
      menuList,
      currentMenuKey,
      changeSelectedMenu,
      deleteSelectedMenu
    } = this.props
    return (
      <div className="selected-menu-container">
        <Tabs
            activeKey={currentMenuKey}
            onChange={activeKey => {
            changeSelectedMenu(activeKey)
          }}
            type="card"
        >
          {menuList &&
            menuList.length &&
            menuList.map(item => {
              return (
                <TabPane
                    key={item.path}
                    tab={
                    <div className="selected-menu-tab-item">
                      <span>{item.title}</span>
                      {item.path !== DEFAULT_SELECTED_MENU ? (
                        <span
                            className="close-tab"
                            onClick={e => {
                            e.stopPropagation()
                            deleteSelectedMenu(item)
                          }}
                        >
                          <Icon type="close" />
                        </span>
                      ) : null}
                    </div>
                  }
                />
              )
            })}
        </Tabs>
      </div>
    )
  }
}

export default SelectedMenu

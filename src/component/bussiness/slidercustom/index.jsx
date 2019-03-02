import React, { Component } from "react";
import { Layout } from "antd";
import routes from "@/routes/config";
import SiderMenu from "./slidermenu";
const { Sider } = Layout;
class SiderCustom extends Component {
  state = {
    collapsed: false,
    mode: "inline",
    openKey: "",
    selectedKey: "",
    firstHide: true 
  };
  componentDidMount() {
    const state = this.setMenuOpen(this.props);
    this.setState(state);
  }
  componentDidUpdate() {}
  setMenuOpen(){
    const { pathname } = this.props.location;
    return {
      openKey: pathname.substr(0, pathname.lastIndexOf("/")),
      selectedKey: pathname
    };
  }
  menuClick = e => {
    this.setState({
      selectedKey: e.key
    });
  };
  openMenu = v => {
    console.log(v);
    this.setState({
      openKey: v[v.length - 1],
      firstHide: false
    });
  };
  render() {
    const { selectedKey, firstHide, openKey } = this.state;
    const { collapsed } = this.props;
    return (
      <Sider trigger={null} breakpoint="lg" collapsed={this.props.collapsed}>
        <div className="logo" />
        <SiderMenu
          theme="dark"
          menus={routes.menus}
          onClick={this.menuClick}
          mode="inline"
          selectedKeys={[selectedKey]}
          openKeys={firstHide ? null : [openKey]}
          onOpenChange={this.openMenu}
        />
      </Sider>
    );
  }
}

export default SiderCustom;

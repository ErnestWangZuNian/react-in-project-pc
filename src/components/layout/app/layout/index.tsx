import { Layout } from "antd";

import {
  LayoutContext,
  menusConfig,
  sliderConfig,
} from "./layout-context";

import style from "./style.scss";

function LayoutComponent() {
  return (
    <LayoutContext.Provider
      value={{
        menusConfig,
        sliderConfig,
        menusList: []
      }}
    >
      <Layout className={style["layout-container"]}>
        <Layout>
          <div className={style["layout-content-container"]}>1111</div>
        </Layout>
      </Layout>
    </LayoutContext.Provider>
  );
}

LayoutComponent.propTypes = {};
LayoutComponent.defaultProps = {};
export default LayoutComponent;

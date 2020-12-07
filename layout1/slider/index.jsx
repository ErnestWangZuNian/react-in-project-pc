import Menu from '../menu';
import { LayoutContext } from '../layout-context';

import './style.scss';

const { Layout } = antd;
const { Sider } = Layout;

class LayoutSliderComponent extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  static contextType = LayoutContext;

  render() {
    return (
      <LayoutContext.Consumer>
        {(value) => {
          const { sliderConfig } = value;
          const result = (
            <Sider styleName="layout-slider-container" {...sliderConfig}>
              <div styleName="slider-logo-container">
                <div styleName="logo-container">
                  <div styleName="logo-img">
                    <img
                      alt="logo"
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PHRpdGxlPkdyb3VwIDI4IENvcHkgNTwvdGl0bGU+PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXJHcmFkaWVudC0xIiB4MT0iNjIuMTAyJSIgeDI9IjEwOC4xOTclIiB5MT0iMCUiIHkyPSIzNy44NjQlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjNDI4NUVCIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMkVDN0ZGIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhckdyYWRpZW50LTIiIHgxPSI2OS42NDQlIiB4Mj0iNTQuMDQzJSIgeTE9IjAlIiB5Mj0iMTA4LjQ1NyUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMyOUNERkYiLz48c3RvcCBvZmZzZXQ9IjM3Ljg2JSIgc3RvcC1jb2xvcj0iIzE0OEVGRiIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzBBNjBGRiIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXJHcmFkaWVudC0zIiB4MT0iNjkuNjkxJSIgeDI9IjE2LjcyMyUiIHkxPSItMTIuOTc0JSIgeTI9IjExNy4zOTElIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjRkE4MTZFIi8+PHN0b3Agb2Zmc2V0PSI0MS40NzMlIiBzdG9wLWNvbG9yPSIjRjc0QTVDIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRjUxRDJDIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhckdyYWRpZW50LTQiIHgxPSI2OC4xMjglIiB4Mj0iMzAuNDQlIiB5MT0iLTM1LjY5MSUiIHkyPSIxMTQuOTQzJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0ZBOEU3RCIvPjxzdG9wIG9mZnNldD0iNTEuMjY0JSIgc3RvcC1jb2xvcj0iI0Y3NEE1QyIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI0Y1MUQyQyIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnIGlkPSJQYWdlLTEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiPjxnIGlkPSJsb2dvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjAuMDAwMDAwLCAtMjAuMDAwMDAwKSI+PGcgaWQ9Ikdyb3VwLTI4LUNvcHktNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAuMDAwMDAwLCAyMC4wMDAwMDApIj48ZyBpZD0iR3JvdXAtMjctQ29weS0zIj48ZyBpZD0iR3JvdXAtMjUiIGZpbGwtcnVsZT0ibm9uemVybyI+PGcgaWQ9IjIiPjxwYXRoIGlkPSJTaGFwZSIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0xKSIgZD0iTTkxLjU4ODA4NjMsNC4xNzY1MjgyMyBMNC4xNzk5NjU0NCw5MS41MTI3NzI4IEMtMC41MTkyNDA2MDUsOTYuMjA4MTE0NiAtMC41MTkyNDA2MDUsMTAzLjc5MTg4NSA0LjE3OTk2NTQ0LDEwOC40ODcyMjcgTDkxLjU4ODA4NjMsMTk1LjgyMzQ3MiBDOTYuMjg3MjkyMywyMDAuNTE4ODE0IDEwMy44NzczMDQsMjAwLjUxODgxNCAxMDguNTc2NTEsMTk1LjgyMzQ3MiBMMTQ1LjIyNTQ4NywxNTkuMjA0NjMyIEMxNDkuNDMzOTY5LDE1NC45OTk2MTEgMTQ5LjQzMzk2OSwxNDguMTgxOTI0IDE0NS4yMjU0ODcsMTQzLjk3NjkwMyBDMTQxLjAxNzAwNSwxMzkuNzcxODgxIDEzNC4xOTM3MDcsMTM5Ljc3MTg4MSAxMjkuOTg1MjI1LDE0My45NzY5MDMgTDEwMi4yMDE5MywxNzEuNzM3MzUyIEMxMDEuMDMyMzA1LDE3Mi45MDYwMTUgOTkuMjU3MTYwOSwxNzIuOTA2MDE1IDk4LjA4NzUzNTksMTcxLjczNzM1MiBMMjguMjg1OTA4LDEwMS45OTMxMjIgQzI3LjExNjI4MzEsMTAwLjgyNDQ1OSAyNy4xMTYyODMxLDk5LjA1MDc3NSAyOC4yODU5MDgsOTcuODgyMTExOCBMOTguMDg3NTM1OSwyOC4xMzc4ODIzIEM5OS4yNTcxNjA5LDI2Ljk2OTIxOTEgMTAxLjAzMjMwNSwyNi45NjkyMTkxIDEwMi4yMDE5MywyOC4xMzc4ODIzIEwxMjkuOTg1MjI1LDU1Ljg5ODMzMTQgQzEzNC4xOTM3MDcsNjAuMTAzMzUyOCAxNDEuMDE3MDA1LDYwLjEwMzM1MjggMTQ1LjIyNTQ4Nyw1NS44OTgzMzE0IEMxNDkuNDMzOTY5LDUxLjY5MzMxIDE0OS40MzM5NjksNDQuODc1NjIzMiAxNDUuMjI1NDg3LDQwLjY3MDYwMTggTDEwOC41ODA1NSw0LjA1NTc0NTkyIEMxMDMuODYyMDQ5LC0wLjUzNzk4Njg0NiA5Ni4yNjkyNjE4LC0wLjUwMDc5NzkwNiA5MS41ODgwODYzLDQuMTc2NTI4MjMgWiIvPjxwYXRoIGlkPSJTaGFwZSIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0yKSIgZD0iTTkxLjU4ODA4NjMsNC4xNzY1MjgyMyBMNC4xNzk5NjU0NCw5MS41MTI3NzI4IEMtMC41MTkyNDA2MDUsOTYuMjA4MTE0NiAtMC41MTkyNDA2MDUsMTAzLjc5MTg4NSA0LjE3OTk2NTQ0LDEwOC40ODcyMjcgTDkxLjU4ODA4NjMsMTk1LjgyMzQ3MiBDOTYuMjg3MjkyMywyMDAuNTE4ODE0IDEwMy44NzczMDQsMjAwLjUxODgxNCAxMDguNTc2NTEsMTk1LjgyMzQ3MiBMMTQ1LjIyNTQ4NywxNTkuMjA0NjMyIEMxNDkuNDMzOTY5LDE1NC45OTk2MTEgMTQ5LjQzMzk2OSwxNDguMTgxOTI0IDE0NS4yMjU0ODcsMTQzLjk3NjkwMyBDMTQxLjAxNzAwNSwxMzkuNzcxODgxIDEzNC4xOTM3MDcsMTM5Ljc3MTg4MSAxMjkuOTg1MjI1LDE0My45NzY5MDMgTDEwMi4yMDE5MywxNzEuNzM3MzUyIEMxMDEuMDMyMzA1LDE3Mi45MDYwMTUgOTkuMjU3MTYwOSwxNzIuOTA2MDE1IDk4LjA4NzUzNTksMTcxLjczNzM1MiBMMjguMjg1OTA4LDEwMS45OTMxMjIgQzI3LjExNjI4MzEsMTAwLjgyNDQ1OSAyNy4xMTYyODMxLDk5LjA1MDc3NSAyOC4yODU5MDgsOTcuODgyMTExOCBMOTguMDg3NTM1OSwyOC4xMzc4ODIzIEMxMDAuOTk5ODY0LDI1LjYyNzE4MzYgMTA1Ljc1MTY0MiwyMC41NDE4MjQgMTEyLjcyOTY1MiwxOS4zNTI0NDg3IEMxMTcuOTE1NTg1LDE4LjQ2ODUyNjEgMTIzLjU4NTIxOSwyMC40MTQwMjM5IDEyOS43Mzg1NTQsMjUuMTg4OTQyNCBDMTI1LjYyNDY2MywyMS4wNzg0MjkyIDExOC41NzE5OTUsMTQuMDM0MDMwNCAxMDguNTgwNTUsNC4wNTU3NDU5MiBDMTAzLjg2MjA0OSwtMC41Mzc5ODY4NDYgOTYuMjY5MjYxOCwtMC41MDA3OTc5MDYgOTEuNTg4MDg2Myw0LjE3NjUyODIzIFoiLz48L2c+PHBhdGggaWQ9IlNoYXBlIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTMpIiBkPSJNMTUzLjY4NTYzMywxMzUuODU0NTc5IEMxNTcuODk0MTE1LDE0MC4wNTk2IDE2NC43MTc0MTIsMTQwLjA1OTYgMTY4LjkyNTg5NCwxMzUuODU0NTc5IEwxOTUuOTU5OTc3LDEwOC44NDI3MjYgQzIwMC42NTkxODMsMTA0LjE0NzM4NCAyMDAuNjU5MTgzLDk2LjU2MzYxMzMgMTk1Ljk2MDUyNyw5MS44Njg4MTk0IEwxNjguNjkwNzc3LDY0LjcxODExNTkgQzE2NC40NzIzMzIsNjAuNTE4MDg1OCAxNTcuNjQ2ODY4LDYwLjUyNDE0MjUgMTUzLjQzNTg5NSw2NC43MzE2NTI2IEMxNDkuMjI3NDEzLDY4LjkzNjY3NCAxNDkuMjI3NDEzLDc1Ljc1NDM2MDcgMTUzLjQzNTg5NSw3OS45NTkzODIxIEwxNzEuODU0MDM1LDk4LjM2MjM3NjUgQzE3My4wMjM2Niw5OS41MzEwMzk2IDE3My4wMjM2NiwxMDEuMzA0NzI0IDE3MS44NTQwMzUsMTAyLjQ3MzM4NyBMMTUzLjY4NTYzMywxMjAuNjI2ODQ5IEMxNDkuNDc3MTUsMTI0LjgzMTg3IDE0OS40NzcxNSwxMzEuNjQ5NTU3IDE1My42ODU2MzMsMTM1Ljg1NDU3OSBaIi8+PC9nPjxlbGxpcHNlIGlkPSJDb21iaW5lZC1TaGFwZSIgY3g9IjEwMC41MTkiIGN5PSIxMDAuNDM3IiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTQpIiByeD0iMjMuNiIgcnk9IjIzLjU4MSIvPjwvZz48L2c+PC9nPjwvZz48L3N2Zz4="
                    />
                  </div>
                  {!sliderConfig.collapsed ? <div styleName="logo-name">Antd Demo</div> : null}
                </div>
              </div>
              <Menu />
            </Sider>
          );
          return result;
        }}
      </LayoutContext.Consumer>
    );
  }
}
export default LayoutSliderComponent;

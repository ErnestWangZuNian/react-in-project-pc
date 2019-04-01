import Api from './api/index'
import Util from '@/utils'
import store from '@/store/store'
import { Provider } from 'react-redux'
import LayoutContainer from '@/components/layout/index.jsx'
import '@/styles/main.less'
Object.assign(global, antd)
global.Api = Api
global.Util = Util
ReactDOM.render(
  <Provider store={store}>
    <LayoutContainer store={store}/>
  </Provider>,
  document.getElementById('app')
)

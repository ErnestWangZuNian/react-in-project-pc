/*
 * @Description:
 * @Author: Ernestwang
 * @Date: 2020-02-01 23:01:00
 * @LastEditTime: 2020-12-05 11:24:31
 * @LastEditors: Ernestwang
 */
import Util from '@/utils';
import Router from '@/components/layout/index.tsx';
import 'antd/dist/antd.less';
import './styles/common.scss';

Object.assign(global, antd);
global.Util = Util;

ReactDOM.render(Router, document.getElementById('app'));

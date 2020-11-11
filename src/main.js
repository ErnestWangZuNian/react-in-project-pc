/*
 * @Description:
 * @Author: Ernestwang
 * @Date: 2020-02-01 23:01:00
 * @LastEditTime: 2020-11-11 23:29:47
 * @LastEditors: Ernestwang
 */
import Router from '@components/layout';
import Api from '@/api';
import Util from '@/utils';
import 'antd/dist/antd.css';
import './styles/common.scss';

Object.assign(global, antd);
global.Api = Api;
global.Util = Util;

ReactDOM.render(Router, document.getElementById('app'));

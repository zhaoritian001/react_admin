/*
 * @Author: 赵东升
 * @Date: 2022/10/17
 */

// 所有模块统一处理
// 导出useStore

import React from 'react';
import LoginStore from "./login.Store";
import UserStore from "./user.Stroe";

class RootStore {
    constructor() {
        this.loginStore = new LoginStore();
        this.userStore = new UserStore();
    }
}

// 根实例化
const rootStore = new RootStore();

const context = React.createContext(rootStore);

const useStore = () => React.useContext(context)
export { useStore }
/*
 * @Author: 赵东升
 * @Date: 2022/10/17
 */

import { makeAutoObservable } from "mobx";
import { request, setToken, getToken, removeToken } from "../utils";

// login module

class LoginStore {
    token = getToken() || ''

    constructor() {
        makeAutoObservable(this)
        // 响应式
    }

    // 操作方法
    getToken = async (data) => {
        // 调用接口， 存入token
        const res = await request.post('http://geek.itheima.net/v1_0/authorizations', {
            mobile: data.username,
            code: data.password
        });
        console.log('resresres', res);
        this.token = res.data.token
        setToken(res.data.token)
    }

    clearToken = () => {
        this.token = ''
        removeToken()
    }
}

export default LoginStore
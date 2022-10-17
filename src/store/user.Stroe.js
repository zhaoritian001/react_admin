/*
 * @Author: 赵东升
 * @Date: 2022/10/17
 */

import {makeAutoObservable} from "mobx";
import { request } from '../utils'

class UserStore {
    userInfo = {}
    constructor () {
        makeAutoObservable(this)
    }
    getUserInfo = async () => {
        const res = await request.get('/user/profile')
        this.userInfo = res.data
    }
}

export default UserStore
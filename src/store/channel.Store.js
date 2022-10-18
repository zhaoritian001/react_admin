/*
 * @Author: 赵东升
 * @Date: 2022/10/18
 */

import {makeAutoObservable} from "mobx";
import {request} from "../utils";

class ChannelStore {
    channelList = []

    constructor() {
        makeAutoObservable(this)
    }

    getChannelList = async () => {
        const res = await request.get('/channels')
        this.channelList = res.data.channels
    }
}

export default ChannelStore
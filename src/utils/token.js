/*
 * @Author: 赵东升
 * @Date: 2022/10/17
 */

const key = 'pc-key'

const setToken = (token) => {
    return window.localStorage.setItem(key, token)
}

const getToken = () => {
    return window.localStorage.getItem(key)
}

const removeToken = () => {
    return window.localStorage.removeItem(key)
}

export {
    setToken,
    getToken,
    removeToken
}
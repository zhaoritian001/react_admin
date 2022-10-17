/*
 * @Author: 赵东升
 * @Date: 2022/10/17
 */

import { Button } from 'antd';
import { useState } from 'react'

const Layout = () => {
    const [size, setSize] = useState('large');

    return(
        <div>
            <Button type="primary" size={size}>
                Download
            </Button>
            Layout
        </div>
    )
}

export default Layout
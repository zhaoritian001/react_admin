/*
 * @Author: 赵东升
 * @Date: 2022/10/17
 */

import { Button } from 'antd';
import { useState } from 'react'
import { AuthComponent } from "../../cmps/AuthComponent";

const Layout = () => {
    const [size, setSize] = useState('large');

    return(
        <AuthComponent>
            <div>
                <Button type="primary" size={size}>
                    Download
                </Button>
                Layout
            </div>
        </AuthComponent>
    )
}

export default Layout
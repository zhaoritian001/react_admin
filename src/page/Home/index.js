/*
 * @Author: 赵东升
 * @Date: 2022/10/17
 */
import * as echarts from 'echarts';
import { useEffect, useState, useRef } from "react";
import Bar from "../../cmps/Bar";

const Home = () => {
    return (
        <div>
            <Bar
                title='echarts使用'
                yData={[1, 2, 3]}
                style={{width: '500px', height: '400px'}}
                xData={['vue', 'react', 'angular']}
            />
            <Bar
                title='对比'
                xData={['aa', 'bbb', 'ccc', 'ddd']}
                yData={[1, 2, 3, 4, 5]}
                style={{width: '500px', height: '400px'}}
            />
        </div>
    )
}

export default Home
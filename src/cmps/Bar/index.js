/*
 * @Author: 赵东升
 * @Date: 2022/10/18
 */

import { useEffect, useRef } from "react";
import * as echarts from "echarts";

const Bar = ({title, xData, yData, style}) => {
    // 基于准备好的dom，初始化echarts实例
    const domRef = useRef()
    const chartInit = () => {
        const myChart = echarts.init(domRef.current)
        console.log('myChart', myChart);
        myChart.setOption({
            title: {
                text: title
            },
            tooltip: {},
            xAxis: {
                data: xData
            },
            yAxis: {},
            series: [
                {
                    name: '销量',
                    type: 'bar',
                    data: yData
                }
            ]
        });
        // myChart.resize({
        //     width: 800,
        //     height: 400
        // })
    }

    useEffect(() => {
        chartInit()
    }, [])
    // 绘制图表
    return(
        <div>
            <div ref={domRef} style={style} />
        </div>
    )
}

export default Bar
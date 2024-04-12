import { useEffect } from "react"
import * as echarts from 'echarts';
import './index.less'

const CustomData = () => {

    useEffect(() => {
        initData()
    }, [])

    const initData = ()=> {
        let dom = document.getElementById('custom-data-container');
        let myChart = echarts.init(dom, 'dark', {
            renderer: 'canvas',
            useDirtyRect : false,
            width: 1100,
            height: 340,
        });
        let app = {};

        let option;

        const yearCount = 7;
        const categoryCount = 30;

        const xAxisData: string[] = [];
        const customData: number[][] = [];
        const legendData: string[] = [];
        const dataList: number[][] = [];

        legendData.push('trend');
        const encodeY = [];
        for (let i = 0; i < yearCount; i++) {
            legendData.push(2010 + i + '');
            dataList.push([]);
            encodeY.push(1 + i);
        }

        for (let i = 0; i < categoryCount; i++) {
            let val = Math.random() * 1000;
            xAxisData.push('category' + i);
            let customVal = [i];
            customData.push(customVal);

            for (let j = 0; j < dataList.length; j++) {
                let value =
                j === 0
                    ? echarts.number.round(val, 2)
                    : echarts.number.round(
                        Math.max(0, dataList[j - 1][i] + (Math.random() - 0.5) * 200),
                        2
                    );
                dataList[j].push(value);
                customVal.push(value);
            }
        }

        option = {
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: legendData
            },
            dataZoom: [
                {
                    type: 'slider',
                    start: 50,
                    end: 70
                },
                {
                    type: 'inside',
                    start: 50,
                    end: 70
                }
            ],
            xAxis: {
                data: xAxisData
            },
            yAxis: {},
            series: [
                {
                type: 'custom',
                name: 'trend',
                renderItem: function (params: any, api: any) {
                    let xValue = api.value(0);
                    let currentSeriesIndices = api.currentSeriesIndices();
                    let barLayout = api.barLayout({
                        barGap: '30%',
                        barCategoryGap: '20%',
                        count: currentSeriesIndices.length - 1
                    });

                    let points = [];
                    for (let i = 0; i < currentSeriesIndices.length; i++) {
                        let seriesIndex = currentSeriesIndices[i];
                        if (seriesIndex !== params.seriesIndex) {
                            let point = api.coord([xValue, api.value(seriesIndex)]);
                            point[0] += barLayout[i - 1].offsetCenter;
                            point[1] -= 20;
                            points.push(point);
                        }
                    }
                    let style = api.style({
                        stroke: api.visual('color') as string,
                        fill: 'none'
                    });

                    return {
                        type: 'polyline',
                        shape: {
                            points: points
                        },
                        style: style
                    };
                },
                itemStyle: {
                    borderWidth: 2
                },
                encode: {
                    x: 0,
                    y: encodeY
                },
                data: customData,
                    z: 100
                },
                ...dataList.map(function (data, index) {
                    return {
                        type: 'bar',
                        animation: false,
                        name: legendData[index + 1],
                        itemStyle: {
                        opacity: 0.5
                        },
                        data: data
                    } as echarts.BarSeriesOption;
                })
            ]
        };

        if (option && typeof option === 'object') {
            myChart.setOption(option);
        }

        window.addEventListener('resize', (myChart as any).resize);
    }

    return <div className="custom-data-container" id="custom-data-container">
    </div>
}

export default CustomData
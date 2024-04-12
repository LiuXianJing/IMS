import { useEffect } from 'react';
import * as echarts from 'echarts';
import './index.less'

type EChartsOption = echarts.EChartsOption;

interface IProps {
    idNumber: number; 
}

const GaugeData = (props: IProps) => {

    const { idNumber } = props

    useEffect(() => {
        initData()
    }, [])

    const initData = () => {
        let dom = document.getElementById('gauge-data-container-' + idNumber);
        let myChart = echarts.init(dom, 'dark', {
            renderer: 'canvas',
            useDirtyRect: false,
            width: 300,
            height: 280,
        });
        let app = {};

        let option;

        const gaugeData = [
            {
                value: 20,
                name: 'Good',
                title: {
                    offsetCenter: ['-40%', '80%']
                },
                detail: {
                    offsetCenter: ['-40%', '95%']
                }
            },
            {
                value: 40,
                name: 'Better',
                title: {
                    offsetCenter: ['0%', '80%']
                },
                detail: {
                    offsetCenter: ['0%', '95%']
                }
            },
            {
                value: 60,
                name: 'Perfect',
                title: {
                    offsetCenter: ['40%', '80%']
                },
                detail: {
                    offsetCenter: ['40%', '95%']
                }
            }
        ];

        option = {
            series: [
                {
                    type: 'gauge',
                    anchor: {
                        show: true,
                        showAbove: true,
                        size: 18,
                        itemStyle: {
                        color: '#FAC858'
                        }
                    },
                    pointer: {
                        icon: '',
                        width: 8,
                        length: '80%',
                        offsetCenter: [0, '8%']
                    },

                    progress: {
                        show: true,
                        overlap: true,
                        roundCap: true
                    },
                    axisLine: {
                        roundCap: true
                    },
                    data: gaugeData,
                    title: {
                        fontSize: 14
                    },
                    detail: {
                        width: 40,
                        height: 14,
                        fontSize: 14,
                        color: '#fff',
                        backgroundColor: 'inherit',
                        borderRadius: 3,
                        formatter: '{value}%'
                    }
                }
            ]
        };

        setInterval(function () {
            gaugeData[0].value = +(Math.random() * 100).toFixed(2);
            gaugeData[1].value = +(Math.random() * 100).toFixed(2);
            gaugeData[2].value = +(Math.random() * 100).toFixed(2);
            myChart.setOption<echarts.EChartsOption>({
                series: [
                    {
                        data: gaugeData
                    }
                ]
            });
        }, 2000);

        if (option && typeof option === 'object') {
            myChart.setOption(option);
        }

        window.addEventListener('resize', (myChart as any).resize);
    }

    return <div id={`gauge-data-container-${idNumber}`}>
    </div>
}

export default GaugeData
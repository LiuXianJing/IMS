import React, { useEffect, useRef } from "react"
import './index.less'
import { message } from "antd"

interface IProps {
    isTrue?: boolean
    text?: string
    opacity?: number
    density?: number // 水印密度: 1, 2, 3
    children: React.ReactNode
}
const WaterMark = (props: IProps) => {

    const time = Date.now().toString()

    const { isTrue = true, text = `User-${time.slice(-5, -1)}`, opacity = 1, density = 1, children } = props

    const waterMarkRef = useRef(null)

    const generateWaterMark = () => {
        const canvas = document.createElement('canvas')
        const context = canvas.getContext('2d')
        if(!context) {
            return
        }
        canvas.width = density * 200
        canvas.height = density * 200
        context.rotate(- 45 * Math.PI / 180)
        context.fillText(text, 20, density * 100)
        context.fillStyle = `rgba(100, 100, 100, ${opacity})`
        context.font = '16px'
        return canvas.toDataURL('image/png')
    }

    // 禁止用户删除水印
    const initObserve = () => {
        const observer = new MutationObserver((mutations: MutationRecord[]) => {
            mutations.forEach((mutation: MutationRecord) => {
                const removedNodes = mutation.removedNodes
                if(removedNodes.length) {
                    const removedNodesArr = Array.from(removedNodes)
                    if(removedNodesArr.some(node => node === waterMarkRef.current)) {
                        if(waterMarkRef.current) {
                            document.body.appendChild(waterMarkRef.current)
                            message.warning('Dont delete water mark!')
                        }
                    }
                }
            })
        })
        observer.observe(document.body, {childList: true, subtree: true})
    }

    useEffect(() => {
        initObserve()
    }, [])

    if(!isTrue) {
        return <></>
    }

    return <>
        <div 
        className="water-mark" 
        style={{
            backgroundImage: `url(${generateWaterMark()})`,
            opacity
        }}
        ref={waterMarkRef}>
            {children}
        </div> 
    </>
}

export default WaterMark
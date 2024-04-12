import { useEffect, useRef } from "react"
import { OtherInfoType } from "../../types"
import './index.less'

interface IProps {
    data: OtherInfoType[],
    listHeight?: number;
    itemHeight?: number,
    isScroll?: boolean,
    style?: Record<string, string | number>,
}

const MyList = (props: IProps) => {

    const { data, listHeight = 600, itemHeight = 40, isScroll = false, style = {} } = props
    const myListRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        let timer = setInterval(() => {
            if (isScroll && myListRef.current) {
                if(myListRef.current.scrollTop >= 540) {
                    myListRef.current.scrollTop = 0
                } else {
                    myListRef.current.scrollTop += (itemHeight + 20) / 10
                }
            }
        }, 100)
        return () => {
            clearInterval(timer)
        }
    }, [])

    return <div className="my-list-container" ref={myListRef} style={{height: listHeight, ...style}}>
        <div className="list" style={{height: itemHeight * 15}}>
        {
            data.map((item: OtherInfoType, index: number) => {
                return <div className="item" key={index} style={{height: itemHeight,}}>
                    <span className="label">
                        {item.name}:
                    </span>
                    <span className="value">
                        {item.description}
                    </span>
                </div>
            })
        }
        </div>
    </div>
}

export default MyList
import { useEffect, useState } from 'react'
import MyList from '../../components/MyList'
import CustomData from './CustomData'
import GaugeData from './GaugeData'
import { OtherInfoType } from '../../types'
import './index.less'
import { getVisualListAPI } from '../../api'

const VisualLargeScreen = () => {

    const [listData, setListData] = useState<OtherInfoType[]>([])

    useEffect(() => {
        const obj: OtherInfoType = {
            id: 'id-1',
            name: 'Visual-',
            description: '但是v发，方式v官方'
        }
        const arr: OtherInfoType[] = []
        for (let i = 1; i < 20; i++) {
            let newObj = {...obj}
            newObj.name = newObj.name + '0' + i
            newObj.description = newObj.description + '0' + i
            arr.push(newObj)            
        }
        //setListData(arr)
        getListData()
    }, [])

    const getListData = async () => {
        const resData = await getVisualListAPI()
        setListData(resData.data)
    }

    return <div className="visual-large-screen-container">
        <div className='title'>Visual Large Screen</div>
        <div className="main">
            <div className="left">
                <div style={{display: 'flex', justifyContent: "space-between"}}>
                    <GaugeData idNumber={1} />
                    <GaugeData idNumber={2} />
                    <GaugeData idNumber={3} />
                </div>
                <CustomData />
            </div>
            <div className="right">
                <MyList data={listData} isScroll />
            </div>
        </div>
    </div>
}

export default VisualLargeScreen
import { useEffect, useState } from "react";
import { Image } from 'antd'
import { ApiTwoTone } from "@ant-design/icons";
import { WebsitesDataType } from "../../../../types";
import mdnPNG from '../../../../assets/images/logo/technology/mdn.png'
import './index.less'

const TFWebsites = () => {

    const [websitesData, setWebsitesData] = useState<WebsitesDataType[]>([])

    useEffect(() => {
        const obj: WebsitesDataType = {
            name: 'MDN',
            url: 'https://developer.mozilla.org/en-US/',
            logo: '',
            description: 'Documenting web technologies, including CSS, HTML, and JavaScript, since 2005.',
        }
        const data: WebsitesDataType[] = []
        for (let i = 0; i < 20; i++) {
            data.push(obj)
        }
        setWebsitesData(data)
    }, [])

    const handleEnterDetail = (website: WebsitesDataType) => {

    }

    return <div className="websites-container">
        <h2>Technology Frontend Websites</h2>
        <div className="websites-list">
            {
                websitesData.map((website: WebsitesDataType, index :number) => {
                    return <div className="website-item" key={index}>
                        <h4>{website.name}</h4>
                        <Image src={website.logo || mdnPNG}  />
                        <div><ApiTwoTone /><a href={website.url} target="_blank">To Website</a></div>
                        <p onClick={() => {handleEnterDetail(website)}}>{website.description}</p>
                    </div>
                })
            }
        </div>
    </div>
}

export default TFWebsites;
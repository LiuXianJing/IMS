import { useState, useEffect,  } from "react";
import { getIPInfoAPI } from "../../api";
import { DescriptionsProps, Descriptions, message, Result, Button, } from "antd";

const IpInfo = () => {

    const [ipInfo, setIpInfo] = useState<Record<string, any>>({});
    const [ipInfoItems, setIpInfoItems] = useState<DescriptionsProps['items']>([]);

    useEffect(() => {
        getIP()
    }, [])

    const getIP = async () => {
       const param = {
        ip: ""
       }
       try {
           const resData = await getIPInfoAPI(param)
           const ipInfoItems_: DescriptionsProps['items'] = []
           Object.keys(ipInfo).forEach((key: string) => {
                ipInfoItems_.push({
                    key: key,
                    label: key,
                    children: ipInfo[key] || '--',
                })
           })
           setIpInfo(resData.data)
           setIpInfoItems(ipInfoItems_)
       } catch (error: any) {
           message.error(error.message)
       }
    }

    return <div>
        <div>
            {
                ipInfoItems?.length ?
                <Descriptions title="Ip Info" layout="vertical" items={ipInfoItems} />
                :
                <Result
                status="500"
                title=""
                subTitle="Sorry, something went wrong."
                extra={<Button type="primary" onClick={() => {location.reload()}}>Refresh Page</Button>}
                />
            }
        </div>
    </div>
}

export default IpInfo
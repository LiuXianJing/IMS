import { useEffect, useState } from "react"
import { message } from "antd"
import Chat from "../../components/Chat"
import { ChatDataType } from "../../types"
import { getChatMessagesAPI, sendChatMessageAPI, } from "../../api"
import { getUserAvatarUrl, } from "../../utils"
import { useAppDispatch } from "../../hooks"
import { changeSignModalVisible } from "../../store/slices"
import './index.less'

const ChatChat = () => {

    const dispatch = useAppDispatch()

    const [chatData, setChatData] = useState<ChatDataType[]>([])

    useEffect(() => {
        getChatData()
        /* let timer = setInterval(() => {
            getChatData()
        }, 2 * 1000)
        return () => {
            clearInterval(timer)
        } */
    }, [])

    const sendMessage = async (message: string,) => {
        console.log('message', message);
        const param: Pick<ChatDataType, 'name' | 'type' | 'message' | 'logo'> = {
            name: 'Charlie Chaplin',
            type: 'user',
            message,
            logo: getUserAvatarUrl(1)
        }
        let resData
        try {
            resData = await sendChatMessageAPI(param);
            if(resData.status) {
                getChatData()
            }
        } catch (error) {
            
        }
    }

    const getChatData = async () => {
        let resData
        try {
            resData = await getChatMessagesAPI()
            setChatData(resData.data)
        } catch (error: any) {
            const errResData: any = error.response?.data || {}
            if(errResData.code == 401) {
                message.error(errResData.msg)
                dispatch(changeSignModalVisible(true))
            }
        }
    }

    return <div className="chat-chat-container">
        <Chat 
        data={chatData} 
        onEnterMessage={() => {}} 
        onSendMessage={(message: string,) => {sendMessage(message)}} 
        />
    </div>
}

export default ChatChat
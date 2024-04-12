import { useEffect, useState } from "react"
import Chat from "../../components/Chat"
import { ChatDataType } from "../../types"
import { getChatMessagesAPI, sendChatMessageAPI, } from "../../api"
import { getUserAvatarUrl, playMusic } from "../../utils"
import './index.less'

const ChatChat = () => {

    const [chatData, setChatData] = useState<ChatDataType[]>([])

    useEffect(() => {
        getChatData()
        playMusic()
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
        const resData = await getChatMessagesAPI()
        setChatData(resData.data)
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
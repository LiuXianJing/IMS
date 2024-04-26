import { ChangeEvent, useEffect, useRef, useState, } from 'react'
import { AllMessageValueType, ChatDataType } from '../../types';
import MultifunctionalInput from '../MultifunctionalInput';
import './index.less'

interface IProps {
    data: ChatDataType[];
    style?: Record<string, string | number>;
    onEnterMessage?: (message: AllMessageValueType[]) => void;
    onSendMessage?: (message: AllMessageValueType[],) => void;
}

const Chat = (props: IProps) => {

    const { data, style, onEnterMessage, onSendMessage, } = props

    const [value, setValue] = useState<AllMessageValueType[]>([])

    const chatContentRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        let timer = setInterval(() => {
            if (chatContentRef.current) {
                chatContentRef.current.scrollTop = chatContentRef.current.clientHeight
            }
        }, 2 * 1000)
        return () => {
            clearInterval(timer)
        }
    }, [])

    const changeEnterMessage = (value: AllMessageValueType[]) => {
        setValue(value)
        onEnterMessage?.(value)
    }

    const handleSend = () => {
        if(value) {
            onSendMessage?.(value,)
        }
    }
    console.log(data);
    

    const renderMessage = (messageStr: AllMessageValueType[] | string) => {
        if(typeof messageStr == 'string') {
            console.log(messageStr[0]);
            if(messageStr[0] === '[') {
                const messageArr = JSON.parse(messageStr)
                messageArr.map((message: AllMessageValueType) => {
                    if(message.type === 'image') {
                        return <img src={message.value} alt={message.name} />
                    }
                    if(message.type === 'text') {
                        return <span>{message.value}</span>
                    }
                })
            } else {
                return messageStr
            }
        } else {
            return '--'
        }
    }

    return <div className="chat-container" style={style}>
        <div className="chat-content" ref={chatContentRef}>
        {
            data.map((item, index) => {
                return <div className={`chat-item ${['admin', 'user'].includes(item.type) ? 'is-me' : 'is-other'}`}>
                    <div className="avatar">
                        <img src={item.logo} alt="avatar" width={32} />
                        <span className='name'>{item.name}</span>
                    </div>
                    <div className="content">
                        <div className="message">
                            {renderMessage(item.message)}
                        </div>
                        <div className="time">
                            {item.time.replace('GMT', '')}
                        </div>
                        {
                            item.type === 'user' ? 
                            <div className='message-item-operate'>
                                {
                                    index === data.length - 1 ?
                                    <span className="edit">
                                        edit
                                    </span>
                                    : null
                                }
                                <span className="withdraw">
                                    withdraw
                                </span>
                            </div>
                            : null
                        }
                    </div>
                </div>
            })
        }
        </div>
        {
            onEnterMessage ?
            <div className="operate">
                <div className="input-message">
                    <MultifunctionalInput 
                    changeEnterMessage={changeEnterMessage} 
                    />
                </div>
                <button className='send-btn' onClick={handleSend}>
                    Send
                </button>
            </div>
            : null
        }
    </div>
}

export default Chat
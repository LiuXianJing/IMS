import { ChangeEvent, useEffect, useRef, useState, } from 'react'
import { ChatDataType } from '../../types';
import MultifunctionalInput from '../MultifunctionalInput';
import './index.less'

interface IProps {
    data: ChatDataType[];
    style?: Record<string, string | number>;
    onEnterMessage?: (message: string) => void;
    onSendMessage?: (message: string,) => void;
}

const Chat = (props: IProps) => {

    const { data, style, onEnterMessage, onSendMessage, } = props

    const [value, setValue] = useState<string>('')

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

    const changeEnterMessage = (value: string) => {
        setValue(value)
        onEnterMessage?.(value)
    }

    const handleSend = () => {
        if(value.length) {
            onSendMessage?.(value,)
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
                            {item.message}
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
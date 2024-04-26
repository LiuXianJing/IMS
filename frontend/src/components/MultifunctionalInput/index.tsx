import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { AudioTwoTone, FileTwoTone, PictureTwoTone, VideoCameraTwoTone } from '@ant-design/icons';
import { AllMessageValueType, } from '../../types';
import './index.less'
import { message } from 'antd';

interface IProps {
    style?: Record<string, any>;
    changeEnterMessage: (value: AllMessageValueType[]) => void;
}

const iconFontsize = 22

const MultifunctionalInput = (props: IProps) => {

    const { style, changeEnterMessage, } = props;

    const [allMessageValues, setAllMessageValues] = useState<AllMessageValueType[]>([])
    const [textareaValue, setTextareaValue] = useState<string>('')

    const textareaRef = useRef<HTMLTextAreaElement>(null)

    useEffect(() => {
        const textareaDom = textareaRef.current as HTMLTextAreaElement
        if(textareaDom) {
            textareaDom.addEventListener('keydown', (event: KeyboardEvent) => {
                if (event.keyCode == 8) { // press down backspace
                    const target = event.target as HTMLTextAreaElement
                    let value = target.value
                    if(!value) {
                        allMessageValues.pop()
                        setAllMessageValues([...allMessageValues])
                        changeEnterMessage?.(allMessageValues)
                    }
                }
            })
        }
    }, [])

    const onChangeEnterMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const { value, } = e.target;
        if(value) {
            let item = allMessageValues.find(v => v.type === 'text')
            if(item) {
                item.value = value
            } else {
                item = {
                    type: 'text',
                    value,
                    name: '',
                    url: '',
                    lastModified: ''
                }
                allMessageValues.push({...item})
            }
        } else {
            let itemIndex = allMessageValues.findIndex(v => v.type === 'text')
            allMessageValues.splice(itemIndex, 1)
        }
        setAllMessageValues([...allMessageValues])
        setTextareaValue(value)
        changeEnterMessage?.(allMessageValues)
    }

    const handleClickPicture = () => {
        message.info('Sorry, sending content other than text is not supported at this time')
        return
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.style.display = 'none';
        document.body.appendChild(input);
        input.click();
        input.onchange = (e) => {
            const target = e.target as HTMLInputElement;
            const file =  target.files?.[0]
            if(file) {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = (e) => {
                    let url = e.target?.result as string
                    const info: AllMessageValueType = {
                        name: file.name,
                        size: file.size,
                        type: 'image',
                        url,
                        value: url,
                        lastModified: file.lastModified,
                    }
                    allMessageValues.push({...info})
                    changeEnterMessage?.(allMessageValues)
                }
            }
        }
    }

    return <div 
    className='multifunctional-input-container' 
    style={style}
    >
        <div className="message-container">
            {
                allMessageValues.length ?
                <div className='all-messages'>
                    {
                        allMessageValues.map((item: AllMessageValueType, index) => {
                            if(item.type.startsWith('image')) {
                                return <div className='other-file-message'>
                                    <img src={item.url || ''} alt={item.name} key={index} />
                                </div>
                            }
                            if(item.type.startsWith('text')) {
                                return null;
                            }
                        })
                    }
                </div>
                : null
            }
            <textarea 
            ref={textareaRef}
            className='message-textarea' 
            placeholder='Please enter your message' 
            value={textareaValue}
            onChange={onChangeEnterMessage}
            />
        </div>
        <div className="other-file-input">
            <span className='item' onClick={handleClickPicture}>
                <PictureTwoTone style={{fontSize: iconFontsize}} />
            </span>
            <span className='item'>
                <AudioTwoTone style={{fontSize: iconFontsize}} />
            </span>
            <span className='item'>
                <VideoCameraTwoTone style={{fontSize: iconFontsize}} />
            </span>
            <span className='item'>
                <FileTwoTone style={{fontSize: iconFontsize}} />
            </span>
        </div>                                             
    </div>
}

export default MultifunctionalInput;
import { ChangeEvent, useEffect } from 'react';
import { AudioTwoTone, FileTwoTone, PictureTwoTone, VideoCameraTwoTone } from '@ant-design/icons';
import './index.less'

interface IProps {
    style?: Record<string, any>;
    changeEnterMessage: (value: string) => void;
}

const iconFontsize = 22

const MultifunctionalInput = (props: IProps) => {

    const { style, changeEnterMessage, } = props;

    useEffect(() => {
    }, [])

    const onChangeEnterMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const { value, } = e.target;
        changeEnterMessage?.(value)
    }

    return <div 
    className='multifunctional-input-container' 
    style={style}
    >
        <textarea 
        className='message-textarea' 
        placeholder='Please enter your message' 
        onChange={onChangeEnterMessage}
        />
        <div className="other-file-input">
            <span className='item'>
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
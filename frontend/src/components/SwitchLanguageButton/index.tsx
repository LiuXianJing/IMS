import { useState } from 'react'
import classnames from 'classnames'
import { Tooltip } from 'antd'
import './index.less'

const SwitchLanguageButton = () => {

    const [iSZhLanguage, setIsZhLanguage] = useState<boolean>(true)

    const handleSwitchLanguage = () => {
        setIsZhLanguage(!iSZhLanguage)
    }

    return <button 
    className="switch-language-button-container"
    onClick={handleSwitchLanguage}
    >
        <Tooltip title="English / Chinese">
            <div className="container">
                <span className={classnames(['zh', {'active': iSZhLanguage}])}>中</span>
                <span className={classnames(['en', {'active': !iSZhLanguage}])}>En</span>
            </div>
        </Tooltip>
    </button>
}

export default SwitchLanguageButton
import { Avatar } from 'antd'
import { useNavigate, } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { changeSignModalVisible, selectUserSignedInfo, } from '../../store/slices'
import SignInOrUp from '../SignInOrUp'
import { UserOutlined } from '@ant-design/icons'
import { getUserAvatarUrl } from '../../utils'
import './index.less'

const Header = () => {

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const userSignedInfo =  useAppSelector(selectUserSignedInfo)

    const handleEnterChat = () => {
        navigate('/chat_chat')
    }

    const handleEnterVisualLargeScreen = () => {
        navigate('/visual_large_screen')
    }

    const handleSignInOrUp = () => {
        dispatch(changeSignModalVisible(true))
    }

    return <div className="header-container">
        <div className="logo">
            <img 
            src="https://gw.alipayobjects.com/zos/rmsportal/LyTPSGknLUlxiVdwMWyu.gif" 
            height="80%" 
            />
            <span className='name'>IMS</span>
        </div>
        <div className='operate'>
            <div className="item" onClick={handleEnterChat}>
                <span>To Chat</span>
            </div>
            <div className="item" 
            onClick={handleEnterVisualLargeScreen}
            >
                <span className="label">Visual Large Screen</span>
            </div>
            {
                userSignedInfo && userSignedInfo.account ?
                <div className="account-item">
                    <Avatar 
                    src={getUserAvatarUrl()}
                    style={{ backgroundColor: '#87d068' }} 
                    icon={<UserOutlined 
                    />}
                    >
                    </Avatar>
                    &nbsp;
                    {userSignedInfo.account}
                </div>
                :
                <div className="item" onClick={handleSignInOrUp}>Sign In/Up</div>
            }
        </div>
        <SignInOrUp />
    </div>
}

export default Header
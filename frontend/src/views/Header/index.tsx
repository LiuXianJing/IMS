import { useAppDispatch } from '../../hooks'
import { chnageSignModalVisible, } from '../../store/slices'
import SignInOrUp from '../SignInOrUp'
import './index.less'

const Header = () => {

    const dispatch = useAppDispatch()

    const handleSignInOrUp = () => {
        dispatch(chnageSignModalVisible(true))
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
            <div className="item">Operate1</div>
            <div className="item" onClick={handleSignInOrUp}>Sign In/Up</div>
        </div>
        <SignInOrUp />
    </div>
}

export default Header
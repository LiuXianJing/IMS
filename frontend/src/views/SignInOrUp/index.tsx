import { ChangeEvent, useMemo, useState } from "react";
import { Button, Input, Modal, QRCode, Select, Space, message } from "antd";
import MyInput from "../../components/MyInput";
import { useAppSelector, useAppDispatch } from '../../hooks'
import { changeSignModalVisible, selectVisible, setUserSignedInfo } from "../../store/slices";
import { SignErrType } from "../../types";
import { phoneAreaCodesByWorld } from "../../utils";
import { addUserAPI, getUserAPI, signInOrUpAPI } from "../../api";
import './index.less'

interface IProps {}

const SignInOrUp = (_props: IProps) => {

    const dispatch = useAppDispatch()
    const visible =  useAppSelector(selectVisible)

    const [account, setAccount] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [errType, setErrType] = useState<SignErrType | undefined>()
    const [isVerificationCodeSign, setIsVerificationCodeSign] = useState<boolean>(false)
    const [VCodeCountdown, setVCodeCountdown] = useState<number>(61)

    const isGetVCodeBtnDisabled = useMemo(() => {
        return VCodeCountdown > -1 && VCodeCountdown < 61
    }, [VCodeCountdown])

    const handleCancel = () => {
        dispatch(changeSignModalVisible(false))
    }

    const handleChangeAccount = (e: ChangeEvent<HTMLInputElement>) => {
        setAccount(e.target.value)
    }

    const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const signFun = async () => {
        const param = {
            account: account,
            password: password,
        }
        try {
            const res: any = await signInOrUpAPI(param)
            if(res.code == 200) {
                message.success(res.msg)
                const userInfo = {
                    account: account,
                    token: res.data?.token,
                }
                dispatch(setUserSignedInfo(userInfo))
                dispatch(changeSignModalVisible(false))
                location.reload()
            }
        } catch (error: any) {
            message.error(error.message)
        }
    }

    const handleLogin = () => {
        if(!account) {
            setErrType('account')
            Modal.error({
                title: 'Account cannot be empty',
                content: 'Please input Account',
            })
            return
        }
        if(!password || password.length < 8) {
            setErrType('password')
            Modal.error({
                title: 'Password cannot be empty, and password length must be greater than 8',
                content: 'Please input right password',
            })
            return
        }
        signFun()
    }

    const handleSwitchSign = () => {
        setErrType(undefined)
        setIsVerificationCodeSign(!isVerificationCodeSign)
    }

    const handleClickGetVCode = () => {
        if(!account) {
            setErrType('account')
            Modal.error({
                title: 'Account cannot be empty',
                content: 'Please input Account',
            })
            return
        }
        let num = 60
        const timer = setInterval(() => {
            if(num > 0) {
                num--
                setVCodeCountdown(num - 1)
            } else {
                clearInterval(timer)
            }
        }, 1000)
    }

    return visible && <Modal 
    title="Sign In Or Up" 
    open={visible} 
    footer={null} 
    centered
    width={'36vw'}
    onCancel={handleCancel}
    >
        <div className="sign-modal-content">
            <div className="sign-by-account">
            {
                isVerificationCodeSign ?
                <>
                <p>Verification Code Sign 😂😂😂</p>
                <div className="item">
                <Space.Compact style={{width: '100%'}}>
                    <Select size="large" defaultValue="+86" style={{width: 300}}>
                        {
                            phoneAreaCodesByWorld.map((item, index) => {
                                return <Select.Option key={index} value={item.value}>
                                    <div className="phone-area-cede-option">
                                    <span>
                                         +{item.value}
                                    </span>
                                    <span>
                                        {item.label}
                                    </span>
                                    </div>
                                </Select.Option>
                            })
                        }
                    </Select>
                    <Input size="large" value={account}
                    onChange={handleChangeAccount}
                    placeholder="Please input Phone" />
                </Space.Compact>
                {
                    errType === 'account' ?
                    <div className="err">
                        <span>Account can not be empty</span>
                    </div>
                    : null
                }
                </div>
                <div className="item">
                <Space.Compact style={{ width: '100%' }}>
                    <Input size="large" defaultValue="" placeholder="Please enter verification code" />
                    <Button 
                    size="large" 
                    type="primary" 
                    disabled={isGetVCodeBtnDisabled}
                    onClick={handleClickGetVCode}
                    >
                        {
                            isGetVCodeBtnDisabled ?
                            `Try again in ${VCodeCountdown} second`
                            :
                            'Get Verification Code'
                        }
                    </Button>
                </Space.Compact>
                </div>
                </>
                :
                <>
                <p>Password Login</p>
                <div className="item">
                    <MyInput 
                    value={account}
                    onChange={handleChangeAccount}
                    placeholder="Please input Username/Phone/Email" 
                    />
                    {
                        errType === 'account' ?
                        <div className="err">
                            <span>Account can not be empty</span>
                        </div>
                        : null
                    }
                </div>
                <div className="item">
                    <MyInput 
                    value={password}
                    onChange={handleChangePassword}
                    type="password" 
                    placeholder="Please enter Password" 
                    />
                    {
                        (password && password.length < 8) || errType === 'password' ?
                        <div className="err">
                            <span>Password length must be greater than 8</span>
                        </div>
                        : null
                    }
                </div>
                </>
                }
                {
                    <div className="operate">
                        <Button type="primary" onClick={handleLogin}>Sign In/Up</Button>
                        {
                            isVerificationCodeSign ?
                            <Button type="text" onClick={() => {handleSwitchSign()}}>Password Sign</Button>
                            :
                            <Button type="text" onClick={() => {handleSwitchSign()}}>Verification Code Sign</Button>
                        }
                    </div>
                }
            </div>
            <div className="sign-by-scanning-code">
                <h5>Sign in by scanning code</h5>
                <QRCode value={'https://ant.design/' || '-'} color="blue" />
            </div>
        </div>
        <div className="sign-modal-footer">
            <Button type="primary" onClick={handleCancel} style={{width: '100%'}}>Cancel</Button>
        </div>
    </Modal>
}

export default SignInOrUp;
import React from "react";
import './index.less'

interface IProps extends React.AllHTMLAttributes<HTMLInputElement> {

}

const MyInput = (props: IProps) => {

    return <div className="my-input-container">
        <input 
        className="input" 
        {...props}
        />
    </div>
}

export default MyInput;
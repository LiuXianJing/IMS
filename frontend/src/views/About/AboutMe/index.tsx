import { Space } from 'antd';
import './index.less'

const AboutMe = () => {

    return <div className="about-me-container">
        <h3>Introdution</h3>
        <div className="infomation">
            <div className="item">
                <span className="label">
                    English Name: 
                </span>
                <span className="value">
                    Luxangn
                </span>
            </div>
            <div className="item">
                <span className="label">
                    Chinese Name: 
                </span>
                <span className="value">
                    刘贤金
                </span>
            </div>
            <div className="item">
                <span className="label">
                    Profession: 
                </span>
                <span className="value">
                    IT practitioners
                </span>
            </div>
            <div className="item">
                <span className="label">
                    Graduation University: 
                </span>
                <span className="value">
                    UESTC (电子科技大学)
                </span>
            </div>
            <div className="item">
                <span className="label">
                    Email: 
                </span>
                <span className="value">
                    <Space split={', '}>
                        <span><a href="mailto:2311486045@qq.com">2311486045@qq.com</a> (Used in China)</span>
                        <span><a href="mailto:xianjin404@gmail.com">xianjin404@gmail.com</a> (Used in All Area)</span>
                        <span><a href="mailto:dahufa2100@gmail.com">dahufa2100@gmail.com</a> (Used in All Area)</span>
                    </Space>
                </span>
            </div>
            <div className="item">
                <span className="label">
                    GitHub: 
                </span>
                <span className="value">
                    <a href="https://github.com/LiuXianJing?tab=repositories">
                        https://github.com/LiuXianJing?tab=repositories
                    </a>
                </span>
            </div>
            <div className="item">
                <span className="label">
                    Description: 
                </span>
                <span className="value">
                    I am an IT practitioner with strong full-stack development capabilities, Have many years of development experience. 
                    My technical expertise includes front-end/back-end/operation and maintenance/algorithms, etc.
                    Technology stack:
                    React, Vue, HTML, CSS, JavaScript, Node.js, Golang, Java, Python, C/C++, MySQL, Redis, and more.
                    And I can also do hardware related work.
                </span>
            </div>
        </div>
    </div>
}

export default AboutMe;
import './index.less'

const AboutIMS = () => {

    return <div className="about-ims-container">
        <h4>The full name of IMS is Integrated management System.</h4>
        <p className="content">
            <p className="title">Technology Stack:</p>
            <h3 className="sub-title">Frontend: </h3>
            <ul>
                <li>React</li>
                <li>react-redux</li>
                <li>react-router-dom</li>
                <li>Vite</li>
                <li>Typescript</li>
                <li>antd</li>
                <li>axios</li>
                <li>ehcarts</li>
            </ul>

            <h3 className="sub-title">Backend: </h3>
            <ul>
                <li>Python</li>
                <li>Flask</li>
                <li>MySQL</li>
            </ul>
        </p>
    </div>
}

export default AboutIMS
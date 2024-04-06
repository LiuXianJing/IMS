import { Divider } from 'antd'
import GraphglGpuLayout from '../../../components/GraphglGpuLayout'
import SummaryGraph from '../../../components/SummaryGraph'
import './index.less'

const DashBoardOverview = () => {

    return <div className="dash-board-overview-container">
        <h3>Dash Board Overview</h3>
        <Divider orientation="left">Nested Pies</Divider>
        <SummaryGraph />
        <Divider orientation="left">Position</Divider>
        <GraphglGpuLayout />
    </div>
}

export default DashBoardOverview
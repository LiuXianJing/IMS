import { useEffect, useState } from "react"
import { AIGCMechanismDataType } from "../../../types"
import MechanismDataForm from "./MechanismDataForm"
import MechanismTable from "./MechanismTable"
import AddModal from "./AddModal"
import './inex.less'

const AIGCBusinessLayout = () => {

    const [AIGCMechanismData, setAIGCMechanismData] = useState<AIGCMechanismDataType[]>([])

    useEffect(() => {
        const data: AIGCMechanismDataType[] = []
        setAIGCMechanismData(data)
    }, [])

    return <div className="AIGC-business-layout">
        <div className="search">
            <MechanismDataForm formType="search" />
        </div>
        <div className="table">
            <MechanismTable />
        </div>
        <div className="operate">
            <AddModal />
        </div>

    </div>
}

export default AIGCBusinessLayout
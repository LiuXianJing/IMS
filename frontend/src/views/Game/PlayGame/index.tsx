import { useEffect } from "react"
import { message } from "antd"
import { gameKeycodeMap } from "../../../utils"
import './index.less'

const PlayGame = () => {

    useEffect(() => {
        document.addEventListener('keydown', handleListenKey)
        return () => {
            document.removeEventListener('keydown', handleListenKey)
        }
    }, [])

    const handleListenKey = (event: KeyboardEvent) => {
        const keyCode: number = event.keyCode
        const keyLetter: string | undefined = gameKeycodeMap.get(keyCode)
        if(keyLetter === undefined) {
            return
        }
        const dom: HTMLElement | null = document.querySelector('#area-item')
        if(!dom) {
            message.error('ELement not found')
            return
        }
        dom.textContent = keyLetter
        const stepUnit: number = 50
        const translateInfoArr = dom.style.transform.split(',')
        const translateInfo = translateInfoArr.map(item => Number(item.replace(/\D/g, '')))
        if([87, 38].includes(keyCode)) { // W
            dom.style.transform = `translate(${translateInfo[0]}px, ${translateInfo[1] - stepUnit}px)`
        }
        if([65, 37].includes(keyCode)) { // A
            dom.style.transform = `translate(${translateInfo[0] - stepUnit}px, ${translateInfo[1]}px)`
        }
        if([83, 40].includes(keyCode)) { // S
            dom.style.transform = `translate(${translateInfo[0]}px, ${translateInfo[1] + stepUnit}px)`
        }
        if([68, 39].includes(keyCode)) { // D
            dom.style.transform = `translate(${translateInfo[0] + stepUnit}px, ${translateInfo[1]}px)`
        }
        const randomDomPositiom = renderRandomItem()
        if(!randomDomPositiom) {
            return
        }
        const x = dom.getBoundingClientRect().x
        const y = dom.getBoundingClientRect().y
        if(randomDomPositiom.x < x + 50 && randomDomPositiom.x > x &&
            randomDomPositiom.y < y + 50 && randomDomPositiom.y > y
        ) {
            message.warning('Two elements collide')
        }
    }

    const renderRandomItem = () => {
        const arr: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
        const randomItem = arr[Math.floor(Math.random() * arr.length)]
        const randomItemDom: HTMLElement | null= document.querySelector('#random-item')
        if(!randomItemDom) {
            message.error('ELement not found')
            return
        }
        randomItemDom.textContent = randomItem
        randomItemDom.style.width = '30px'
        randomItemDom.style.height = '30px'
        randomItemDom.style.lineHeight = '30px'
        randomItemDom.style.textAlign = 'center'
        randomItemDom.style.fontSize = '20px'
        randomItemDom.style.color = '#fff'
        randomItemDom.style.backgroundColor = 'red'
        const step = Math.floor(Math.random() * 500)
        randomItemDom.style.transform = `translate(${step}px, ${step}px)`
        const x: number = randomItemDom.getBoundingClientRect().x
        const y: number = randomItemDom.getBoundingClientRect().y
        return {x, y}
    }

    return <div className="play-game-container">
        <div className="operate">
            <div className="operate-item">
                <span>W</span>
                <span>A</span>
                <span>S</span>
                <span>D</span>
            </div>
            <div className="operate-item">
                <span>↑</span>
                <span>←</span>
                <span>↓</span>
                <span>→</span>
            </div>
        </div>
        <div className="play-game-area">
            <h2>Play Game</h2>
            <div className="area">
                <div 
                className="area-item" 
                id="area-item"
                style={{
                    transform: 'translate(0px, 0px)'
                }}
                >
                </div>
                <div id='random-item'></div>
            </div>
        </div>
    </div>
}

export default PlayGame
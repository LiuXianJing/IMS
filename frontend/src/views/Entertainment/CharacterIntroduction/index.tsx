import { useEffect, useState } from 'react'
import { Image } from 'antd'
import { CharacterIntroductionDataType } from '../../../types'
import './index.less'

const CharacterIntroduction = () => {

    const [characterIntroductionData, setCharacterIntroductionData] = useState<CharacterIntroductionDataType[]>([])

    useEffect(() => {
        const introductionData: CharacterIntroductionDataType[] = [
            {
                id: 'id-1',
                name: 'Jiafei',
                profession: 'Musical Artist',
                avatar: 'https://static.miraheze.org/flopediawiki/thumb/c/c2/Jiafei.jpg/300px-Jiafei.jpg',
                detail: 'https://flopedia.miraheze.org/wiki/Jiafei',
            },
            {
                id: 'id-2',
                name: 'Charlie Chaplin',
                profession: 'English actor and filmmaker',
                avatar: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSjPPQajzdVcA4pVFz9YkgqQENu4nePdHIN5YjSrueZ6D8mm-iSbAiT2A6VCvCVUxCWVf__WzujC-W9bVA',
                detail: 'https://en.wikipedia.org/wiki/Charlie_Chaplin'
            }
        ]
        setCharacterIntroductionData(introductionData)
    }, [])

    const handleEnterDetail = (info: CharacterIntroductionDataType) => {
        window.open(info.detail, '_blank')
    }

    return <div className="character-introduction-container">
        <h2>Character Introduction</h2>
        <div className="introduction">
            {
                characterIntroductionData.map((item) => {
                    return <div className="introduction-item" key={item.id}>
                        <Image 
                        src={item.avatar} 
                        alt={item.name} 
                        loading='lazy' 
                        placeholder 
                        width={300}
                        height={300}
                        />
                        <div 
                        className="introduction-item-content" 
                        onClick={() => {handleEnterDetail(item)}}
                        >
                            <h3>Name: <span className='name'>{item.name}</span></h3>
                            <p>Profession: {item.profession}</p>
                        </div>
                    </div>
                })
            }
        </div>
    </div>
}

export default CharacterIntroduction

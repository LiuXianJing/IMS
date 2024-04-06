import './index.less'

interface IProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
}

const Video = (props: IProps) => {

    const id: string | undefined = props.id
    const src: string | undefined = props.src
    const width: number | string | undefined = props.width
    const height: number | string | undefined = props.height

    return <div className="video-container">
        <video
        id={id} 
        src={src}
        width={width}
        height={height}
        {...props}
        >
        </video>
    </div>
}

export default Video
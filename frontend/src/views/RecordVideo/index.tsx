import { useLayoutEffect, useRef, useState } from "react";
import Video from "../../components/Video"
import { Button, Space } from "antd";
import './index.less'

const RecordVideo = () => {

    const [isShow, setIsShow] = useState<boolean>(true)
    const [isShowRecordVideo, setIsShowRecordVideo] = useState<boolean>(false)

    const mediaRecorderRef = useRef<MediaRecorder>()

    const initRecord = async () => {
        let recordVideo: any = document.querySelector('#recordVideo')
        let video: any = document.querySelector('#video')
        let chunks: BlobPart[] | undefined = [];

        const mediaStream: MediaStream = await navigator.mediaDevices.getUserMedia({ audio: true, video: true })
        if(recordVideo) {
            recordVideo.srcObject = mediaStream;
        }
        let mediaRecorder_ = new MediaRecorder(mediaStream);
        mediaRecorderRef.current = mediaRecorder_
        if(!mediaRecorder_) {
            return
        }
        mediaRecorder_.ondataavailable = function (e) {
            chunks && chunks.push(e.data);
        };
        mediaRecorder_.onstop = function () {
            let blob = new Blob(chunks, { type: 'video/mp4' });
            chunks = [];
            let videoURL = window.URL.createObjectURL(blob);
            video.src = videoURL;
            // 关闭摄像头和麦克风
            if (mediaStream) {
                mediaStream.getTracks().forEach(function(track) {
                    track.stop();
                });
            } else {
               console.log('尚未获取到摄像头和麦克风流');
            }
        };
    }

    const handleStartRecord = async () => {
        setIsShowRecordVideo(true)
        setTimeout(async () => {
            await initRecord()
            if(mediaRecorderRef.current) mediaRecorderRef.current.start();
        }, 0)
    }

    const handleStopRecord = () => {
        if(mediaRecorderRef.current) mediaRecorderRef.current.stop();
        close()
    }

    const close = () => {
        setIsShow(false)
        setIsShowRecordVideo(false)
    }

    const handleRestartRecord = () => {
        location.reload()
    }

    return <div>
        <div className="record-video-area">
            {
                isShowRecordVideo ?
                <Video 
                id="recordVideo" 
                width={600} 
                height={400} 
                autoPlay>
                </Video>
                : null
            }
            <Space>
            {
                isShow ?
                <Button 
                type="primary"
                onClick={handleStartRecord}
                >
                    Start Record
                </Button>
                : null
            } 
            {
                isShow ?
                <Button 
                onClick={handleStopRecord}
                >
                    Stop Record
                </Button>
                : null
            }
            </Space>
        </div>
        <div>
            <Video 
            id="video" 
            width={600} 
            height={400} 
            autoPlay 
            loop 
            controls>
            </Video>
        </div>
        <div>
        <Button 
        onClick={handleRestartRecord}
        >
            Re-Record
        </Button>
        </div>
    </div>
}

export default RecordVideo
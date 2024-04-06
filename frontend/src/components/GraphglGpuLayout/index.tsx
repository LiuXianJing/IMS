import { useEffect, useState } from 'react';
import * as echarts from 'echarts';
import 'echarts-gl';
import './index.less'

interface IProps {
    width?: number | string;
    height?: number | string;
}

type GeolocationType = {
    latitude: number;
    longitude: number;
    displayName: string;
    address: Record<string, any>;
}

const GraphglGpuLayout = (props: IProps) => {

    const width: number | string = props.width || '100%'
    const height: number | string = props.height || 400

    const [geolocation, setGeolocation] = useState<GeolocationType>()

    useEffect(() => {
        getLocation()
        initChart()
    }, [])

    const initChart = () => {
        
    }

    const getLocation = () => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function(position) {
                fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}`)
                    .then(response => response.json())
                    .then(data => {
                        console.log('data: ', data);
                        setGeolocation({
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude,
                            displayName: data.display_name,
                            address: data.address,
                        })
                    })
                    .catch(error => console.error(error));
            }, function(error) {
                console.error(error);
            });
        } else {
            console.log("Geolocation API is not supported in this browser.");
        }
    }

    return <div className='graphgl-layout' style={{width, height}}>
        <div className='geolocation-container'>
            <div className='geolocation-item'>
                <span className='label'>Country And City: </span>
                <span className='value'>{`${geolocation?.address?.country}, ${geolocation?.address?.city}` || '--'}</span>
            </div>
            <div className='geolocation-item'>
                <span className='label'>Address: </span>
                <span className='value'>{geolocation?.displayName || '--'}</span>
            </div>
            <div className='geolocation-item'>
                <span className='label'>Latitude: </span>
                <span className='value'>{geolocation?.latitude || '--'}</span>
            </div>
            <div className='geolocation-item'>
                <span className='label'>Longitude: </span>
                <span className='value'>{geolocation?.longitude || '--'}</span>
            </div>
        </div>
    </div>
}

export default GraphglGpuLayout
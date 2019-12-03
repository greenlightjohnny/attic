import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'


const Gmap = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 36.915519,
            lng: -80.321161
        },
        zoom: 17,
    };
    componentDidMount() {
       
    }
    render() {
        return (
            <div style={{ height: '50vh', width: '100%'}}>
                <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyDBdgZ7tWqmHbAsxP5fHM5gaP4CPY4994Q' }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
                >
                    <Gmap
                    lat={36.915519}
                    lng={-80.321161}
                    text={'Angels'}
                    zoom={11}
                    color='blue'
                    name='test'
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;
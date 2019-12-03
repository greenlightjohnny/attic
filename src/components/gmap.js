import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

const Gmap = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11,
    };

    render() {
        return (
            <div style={{ height: '100vh', width: '100%'}}>
                <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyDBdgZ7tWqmHbAsxP5fHM5gaP4CPY4994Q' }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
                >
                    <Gmap
                    lat={36.915519}
                    lng={80.321161}
                    text="Angels"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;
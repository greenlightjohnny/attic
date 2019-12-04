import React from "react"
import mapStyles from './somap2.module.scss'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react"

export class MapContainer extends React.Component {


  render() {

    return (
        <div className={mapStyles.mymap}>
              <Map google={this.props.google} zoom={15} initialCenter={{lat:36.915519, lng:-80.321161}}
      className={'map'}
      >
        <Marker onClick={this.onMarkerClick} title={'Donation Center'} name={"Angels Donation Center"} />
        <Marker onClick={this.onMarkerClick} name={"Angels Thrift STore"} position={{lat: 36.910259, lng: -80.320137}} />
        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
         
          </div>
        </InfoWindow>
      </Map>
        </div>
    
    )
  }
}

export default GoogleApiWrapper({
    apiKey: (`${process.env.GATSBY_API_KEY}`)
  })(MapContainer)
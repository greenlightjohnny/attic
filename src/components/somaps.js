import React from 'react';
import GoogleMapReact from 'google-map-react';

const isClient = typeof window !== 'undefined';

export const GoogleMap = (props) => {
  const {
    address,
    googleMapsApiKey
  } = props;
  const lat = parseFloat(address.lat);
  const lng = parseFloat(address.lng);
  return (
    <section className="google-map">
      <div className="map">
        { isClient && (
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyDBdgZ7tWqmHbAsxP5fHM5gaP4CPY4994Q' }}
            defaultCenter={[30, 20]}
            defaultZoom={14}
          >
            <div
              className="marker"
              lat={36.915519}
              lng={-80.321161} 
            />
          </GoogleMapReact>
        )}
      </div>
    </section>
  );
}
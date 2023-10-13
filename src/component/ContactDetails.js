import React from 'react';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
  } from "react-google-maps";

const ContactDetails = () => {
    
    const MapWithAMarker = withScriptjs(withGoogleMap(props => 
        <GoogleMap
          defaultZoom={14}
          defaultCenter={{ lat: 13.906513214111328, lng: 100.61347961425781 }}
        >
          <Marker
            position={{ lat: 13.906513214111328, lng: 100.61347961425781 }}
            title="My location"
          />
        </GoogleMap>
      ));
        return (
            <div>
                {/* You can embed your map and details here */}
                {/* This is just a placeholder and you can replace it with actual content */}
                <h2>Map Goes Here</h2>
                <div style={{ height: "100vh", width: "100%" }}>
<MapWithAMarker
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDgFMdvdOfKGGMTCq_-cn__DigQQxufomc&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
      </div>
                <div>
                    <p>Address: [Your Address]</p>
                    <p>Phone: [Your Phone]</p>
                    <p>Email: [Your Email]</p>
                </div>
            </div>
        );
    }
    

export default ContactDetails;
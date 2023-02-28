import React, { Component, useState } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  maxWidth: '100%',
  maxHeight: '100%',
  
};

export class MapContainer extends Component {
    
  render() {
    return (
        <div>
             <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: -1.2884,
            lng: 36.8233
          }
        }
      />
        </div>
     
    );
  }
}

export default GoogleApiWrapper(
    (props) => ({
      apiKey: props.apiKey
    }
  ))(MapContainer)

  function apikey(){
    
    return (
        <>
       <GoogleApiWrapper apiKey='AIzaSyDjKjm6vkNYt2AJPjKQoUhx4J3bl6sH2_A'/>
        </>
    )
  }
  


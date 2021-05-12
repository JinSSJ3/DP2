/* global google */
import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import InfoWindowEx from "./InfoWindowEx";
import Iconmap from '../../../assets/images/marker.png';

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props.place_,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };

  showDetails = place => {
  
  };

  render() {
    return (
      <div className="map-container">
        <Map
          google={this.props.google}
          className={"map"}
          zoom={4}
          initialCenter={this.props.center}
        >
          {this.props.places.map((place, i) => {
            return (
              <Marker
                icon={{ url: Iconmap}} 
                onClick={this.onMarkerClick}
                key={place.id}
                place_={place}
                position={{ lat: place.lat, lng: place.lng }}
              />
            );
          })}
          <InfoWindowEx
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
              <div className="profile-widget" style={{width: '100%', display: 'inline-block'}}>
        <div className="doc-img">
          <a href={this.state.selectedPlace.profile_link} tabIndex={0} target="_blank">
            <img style={{height:"auto",width:"200px"}}
             alt={this.state.selectedPlace.doc_name} src={this.state.selectedPlace.image} />
          </a>
        </div>
        <div className="pro-content">
          <h3 className="title">
            <a href={this.state.selectedPlace.profile_link} tabIndex={0}  target="_blank"> {this.state.selectedPlace.doc_name} </a>
            <i className="fas fa-check-circle verified" />
          </h3>
          <p className="speciality"> {this.state.selectedPlace.speciality} </p>
          <div className="rating">
            <i className="fas fa-star filled" />
            <i className="fas fa-star filled" />
            <i className="fas fa-star filled" />
            <i className="fas fa-star filled" />
            <i className="fas fa-star" />
            <span className="d-inline-block average-rating">( {this.state.selectedPlace.total_review} )</span>
          </div>
          <ul className="available-info">
            <li><i className="fas fa-map-marker-alt" />{this.state.selectedPlace.address}</li>
            <li><i className="far fa-clock" /> {this.state.selectedPlace.next_available} </li>
            <li><i className="far fa-money-bill-alt" /> {this.state.selectedPlace.amount} </li>
          </ul>
        </div>
      </div>
            {/* <div className="profile-widget" >
            <div className="doc-img">
            <a href="doctor-profile.html" tabindex="0" target="_blank">
            <img className="img-fluid" alt="Dr. Linda Tobin" src="assets/img/doctors/doctor-07.jpg"></a>
            </div>
            <div className="pro-content">
            <h3 className="title"><a href="doctor-profile.html" tabindex="0">Dr. Linda Tobin</a>
            <i className="fas fa-check-circle verified"></i></h3>
            <p className="speciality">{this.state.selectedPlace.speciality}</p>
            <div className="rating">
            <i className="fas fa-star filled"></i>
            <i className="fas fa-star filled"></i>
            <i className="fas fa-star filled">
            </i><i className="fas fa-star filled">
            </i><i className="fas fa-star"></i>
            <span className="d-inline-block average-rating"> ({this.state.selectedPlace.total_review})</span>
            </div>
            <ul className="available-info">
            <li><i className="fas fa-map-marker-alt"></i>{this.state.selectedPlace.address}</li>
            <li><i className="far fa-clock"></i> {this.state.selectedPlace.next_available}</li
            ><li><i className="far fa-money-bill-alt"></i>  {this.state.selectedPlace.amount}</li>
            </ul>
            </div>
            </div>*/}
          </InfoWindowEx>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ""
})(MapContainer);

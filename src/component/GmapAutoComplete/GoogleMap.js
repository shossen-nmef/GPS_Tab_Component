import React, { useState, useEffect } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import { TextField } from '@material-ui/core'

// import './map.css'

const MapContainer = (props) => {

    const [MapState, setMapState] = useState({
        location: '',
        streetNumber: '',
        street: '',
        city: '',
        stateCode: '',
        zipCode: ''
    });

    useEffect(() => {
        props.updateMapInfo(MapState); // pass data to the parent component
    }, [MapState]);


    const handleChange = (e) => {


        e.preventDefault();
        setMapState({ ...MapState, location: MapState.location });

        var Gmap_Address = "";

        function initAutocomplete() {
            var input = document.getElementById('map-input');

            var autoComplete = new window.google.maps.places.Autocomplete(input,
                { types: ["geocode"], }
            );

            autoComplete.setFields(["address_components", "formatted_address"]);
            autoComplete.addListener("place_changed", () => {

                var place = autoComplete.getPlace();

                for (var i = 0; i < place.address_components.length; i++) {

                    var addressType = place.address_components[i].types[0];
                    switch (addressType) {
                        case "street_number":
                            var streetNumber = place.address_components[i]["short_name"];
                            Gmap_Address += streetNumber + " ";
                            break;
                        case "route":
                            var street = place.address_components[i]["long_name"];
                            Gmap_Address += street + ", ";
                            break;
                        case "locality":
                            var city = place.address_components[i]["long_name"];
                            Gmap_Address += city + ", ";
                            break;
                        case "administrative_area_level_1":
                            var stateCode = place.address_components[i]["short_name"];
                            Gmap_Address += stateCode + " ";
                            break;
                        case "postal_code":
                            var zipCode = place.address_components[i]["short_name"];
                            Gmap_Address += zipCode;
                            break;
                        default:
                            break;
                    }
                }

                setMapState({
                    location: Gmap_Address,
                    streetNumber: streetNumber,
                    street: street,
                    city: city,
                    stateCode: stateCode,
                    zipCode: zipCode
                });

            });

        }

        initAutocomplete();

    }

    return (
        <div className="text-field">
            
            <TextField
                size="small"
                fullWidth
                variant="outlined"
                color="secondary"
                onFocus={handleChange}
                id="map-input"
                className={props.className}
                type="text"
                placeholder={props.placeholder}/>

        </div>
    );
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyBLVHqBpK4pTUHkxRLctTj6a3nHrt1d-uI')
})(MapContainer);
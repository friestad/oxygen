import * as React from "react";
import '../styles/DisplayMapClass.scss';

export class DisplayMapClass extends React.Component {
	mapRef = React.createRef();
	state = {
		map: null,
	};
	
	componentDidMount() {
		const H = window.H;
		const platform = new H.service.Platform({
			apikey: "Z-1I_UB2l6mcwc8Jnw4ViDdMVcNoIaQuv7gbU71j5KM",
		});
		var targetElement = document.getElementById('mapContainer');
		const defaultLayers = platform.createDefaultLayers();

		const map = new H.Map(
			this.mapRef.current,
			
			defaultLayers.vector.normal.map,
			document.getElementById('mapContainer'),
			{
				center: { lat: 50, lng: 50 },
				zoom: 4,
				pixelRatio: window.devicePixelRatio || 1,
			}
		);
		var routingParameters = {
			'routingMode': 'fast',
			'transportMode': 'car',
			// The start point of the route:
			'origin': '50.1120423728813,8.68340740740811',
			// The end point of the route:
			'destination': '52.5309916298853,13.3846220493377',
			// Include the route shape in the response
			'return': 'polyline'
		  };
		  
		  // Define a callback function to process the routing response:
		  var onResult = function(result) {
			// ensure that at least one route was found
			if (result.routes.length) {
			  result.routes[0].sections.forEach((section) => {
				   // Create a linestring to use as a point source for the route line
				  let linestring = H.geo.LineString.fromFlexiblePolyline(section.polyline);
		  
				  // Create a polyline to display the route:
				  let routeLine = new H.map.Polyline(linestring, {
					style: { strokeColor: 'blue', lineWidth: 3 }
				  });
		  
				  // Create a marker for the start point:
				  let startMarker = new H.map.Marker(section.departure.place.location);
		  
				  // Create a marker for the end point:
				  let endMarker = new H.map.Marker(section.arrival.place.location);
		  
				  // Add the route polyline and the two markers to the map:
				  map.addObjects([routeLine, startMarker, endMarker]);
		  
				  // Set the map's viewport to make the whole route visible:
				  map.getViewModel().setLookAtData({bounds: routeLine.getBoundingBox()});
			  });
			}
		  };

		  var router = platform.getRoutingService(null, 8);

		

		// MapEvents enables the event system
		// Behavior implements default interactions for pan/zoom (also on mobile touch environments)
		// This variable is unused and is present for explanatory purposes
		const behavior = new H.mapevents.Behavior(
			new H.mapevents.MapEvents(map)
		);

		// Create the default UI components to allow the user to interact with them
		// This variable is unused
		const ui = H.ui.UI.createDefault(map, defaultLayers);
		router.calculateRoute(routingParameters, onResult,
  function(error) {
    alert(error.message);
  });
		this.setState({ map });
	}

	componentWillUnmount() {
		this.state.map.dispose();
	}

	render() {
		return (
			<div
				className='map-div'
				ref={this.mapRef}
			/>
		);
	}
}

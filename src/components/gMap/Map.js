import React, { useState, useRef, useEffect } from "react";
import {
	GoogleMap,
	withScriptjs,
	withGoogleMap,
	Marker,
	Polyline,
} from "react-google-maps";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import "../../App.css";

const Map = (props) => {
	const icon1 = {
		url: "https://images.vexels.com/media/users/3/154573/isolated/preview/bd08e000a449288c914d851cb9dae110-hatchback-car-top-view-silhouette-by-vexels.png",
		scaledSize: new window.google.maps.Size(40, 40),
		anchor: new window.google.maps.Point(20, 20),
		scale: 0.7,
	};

	let centerPathLat = props.paths[0][0].lat;
	let centerpathLng = props.paths[0][0].lng;
	let [i, setI] = useState(1);
	const [progress, setProgress] = useState([
		{ lat: centerPathLat, lng: centerpathLng },
	]);
	const options = { strokeColor: "orange" };

	const handleClick = () => {
		if (i === props.paths.length) {
			setI(0);
			setProgress([]);
		}
		setProgress([...progress, props.paths[i]]);
		setI(i + 1);
	};

	return (
		<Card variant="outlined">
			<div className="gMapCont">
				<GoogleMap
					defaultZoom={17}
					defaultCenter={{ lat: centerPathLat, lng: centerpathLng }}
				>
					{/* {props.paths.map((path) => { */}
					<Poly path={props.paths[0]} options={options} icon={icon1} />
					{/* })} */}
				</GoogleMap>
			</div>
		</Card>
	);
};

const Poly = (props) => {
	const lat = props.path[0].lat;
	const lng = props.path[0].lng;
	const [progress, setProgress] = useState([
		{
			lat: lat,
			lng: lng,
		},
	]);
	const [i, setI] = useState(1);
	const polyRef = useRef();
	const handleClick = () => {
		if (i === props.path.length) {
			setI(0);
			setProgress([]);
			polyRef.current.props.path = [];
		}
		setProgress([...progress, props.path[i]]);
		setI(i + 1);
	};
	console.log(polyRef);
	return (
		<>
			<Polyline path={progress} options={props.options} ref={polyRef} />
			<Marker icon={props.icon1} position={progress[progress.length - 1]} />
			<div className="btn">
				<Button variant="container" onClick={handleClick}>
					Move
				</Button>
			</div>
		</>
	);
};

export default withScriptjs(withGoogleMap(Map));

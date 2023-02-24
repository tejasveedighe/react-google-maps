import React from 'react';
import './App.css';
import WrappedMap from './components/gMap/Map';

import config from './components/gMap/config';
import useFetch from './hooks/useFetch';
import Header from './components/Header/Header';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const path2 = [
	{ lat: 18.566516, lng: -68.435996 },
	{ lat: 18.5644, lng: -68.423036 },
	{ lat: 18.563586, lng: -68.418744 },
	{ lat: 18.562339, lng: -68.410725 },
	{ lat: 18.560927, lng: -68.402459 },
	{ lat: 18.559605, lng: -68.394354 },
	{ lat: 18.559028, lng: -68.391003 },
	{ lat: 18.558841, lng: -68.390594 },
	{ lat: 18.558795, lng: -68.390387 },
	{ lat: 18.558767, lng: -68.390312 },
	{ lat: 18.558744, lng: -68.390256 },
	{ lat: 18.558726, lng: -68.390202 },
	{ lat: 18.55867, lng: -68.390124 },
	{ lat: 18.558663, lng: -68.390111 },
	{ lat: 18.558602, lng: -68.389995 },
	{ lat: 18.5585, lng: -68.389867 },
	{ lat: 18.558462, lng: -68.389837 },
	{ lat: 18.558396, lng: -68.389781 },
	{ lat: 18.55828, lng: -68.389641 },
	{ lat: 18.558234, lng: -68.389557 },
	{ lat: 18.558143, lng: -68.389469 },
	{ lat: 18.558089, lng: -68.389362 },
	{ lat: 18.558062, lng: -68.389265 },
	{ lat: 18.558011, lng: -68.389069 },
	{ lat: 18.557985, lng: -68.388965 },
	{ lat: 18.557988, lng: -68.38879 },
	{ lat: 18.558032, lng: -68.388603 },
	{ lat: 18.55806, lng: -68.388525 },
	{ lat: 18.558113, lng: -68.388425 },
	{ lat: 18.558192, lng: -68.388297 },
	{ lat: 18.558301, lng: -68.388181 },
	{ lat: 18.558497, lng: -68.388045 },
	{ lat: 18.558571, lng: -68.388002 },
	{ lat: 18.558701, lng: -68.387927 },
	{ lat: 18.558863, lng: -68.387895 },
	{ lat: 18.559046, lng: -68.387887 },
	{ lat: 18.559308, lng: -68.387922 },
	{ lat: 18.559677, lng: -68.388185 },
	{ lat: 18.559824, lng: -68.388314 },
	{ lat: 18.559929, lng: -68.388397 },
	{ lat: 18.560018, lng: -68.388512 },
	{ lat: 18.560203, lng: -68.388607 },
	{ lat: 18.560472, lng: -68.388615 },
	{ lat: 18.560655, lng: -68.388613 },
	{ lat: 18.560957, lng: -68.388572 },
	{ lat: 18.561206, lng: -68.388521 },
];

function App() {
	const { data: paths } = useFetch(
		"https://61a4a0604c822c0017041d33.mockapi.io/shuttle/v1/path"
	);
	const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${config.mapsKey}`;

	return (
		<div className="App">
			<Header />

			{paths ? (
				<WrappedMap
					paths={[paths, path2]}
					googleMapURL={mapURL}
					loadingElement={<div style={{ height: `100%` }} />}
					containerElement={<div className="mapContainer" />}
					mapElement={<div style={{ height: `100%` }} />}
				/>
			) : (
				<Box sx={{ width: "100%" }}>
					<LinearProgress />
				</Box>
			)}
		</div>
	);
}

export default App;

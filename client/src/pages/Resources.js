import React from "react";
import "../styles/Resources.scss";
import "../utils/getNearby";

import {
	Tabs,
	Tab,
	ClickableTile,
	SkeletonPlaceholder,
} from "carbon-components-react";
import getNearby from "../utils/getNearby";

let localBusinesses = [];
let protestSupporters = [];
let allResources = [];

const response = [];

function addLocalBusiness(name, type, distance) {
	const business = (
		<ClickableTile>
			<div className="resource-entry">
				<span className="resource-name">{name}</span>
				<span className="resource-body">{type}</span>
				<span className="resource-body resource-distance">
					{distance}
				</span>
			</div>
		</ClickableTile>
	);

	localBusinesses.push(business);
	allResources.push(business);
}

function addProtestSupporter(name, supplies, distance) {
	const supporter = (
		<ClickableTile>
			<div className="resource-entry">
				<span className="resource-name">{name}</span>
				<span className="resource-body">{supplies}</span>
				<span className="resource-body resource-distance">
					{distance}
				</span>
			</div>
		</ClickableTile>
	);

	protestSupporters.push(supporter);
	allResources.push(supporter);
}

function renderLocalBusiness() {
	if (localBusinesses.length === 0) {
		return <span>Found no local business resources nearby!</span>;
	} else {
		return localBusinesses;
	}
}

function renderProtestSupporters() {
	if (protestSupporters.length === 0) {
		return <span>Found no protest supporter resources nearby!</span>;
	} else {
		return protestSupporters;
	}
}

function renderAllResources() {
	if (allResources.length === 0) {
		return <span>Found no resources nearby!</span>;
	} else {
		return allResources;
	}
}

export class Resources extends React.Component {
	constructor(props) {
		super(props);
		this.state = { businesses: [], supporters: [] };
	}

	rustonLat = 32.523205;
	rustonLong = -92.637924;

	vcuLat = 37.5468;
	vcuLong = -77.45202;

	componentDidMount() {
		getNearby(this.vcuLat, this.vcuLong).then((resp) => {
			resp.forEach((element) => {
				response.push(element);
			});
			this.setState({businesses: response})
		});
	}

	render() {
		addProtestSupporter("John Doe", "Water & Snacks", "distance?");
		addProtestSupporter("Some Name", "Gatorade", "distance?");

		this.state.businesses.forEach((place) => {
			addLocalBusiness(
				place.name,
				place.categories[0].title,
				place.distance
			);
			console.log("added ", place.name);
		});

		return (
			<div className="resource-list-container">
				<Tabs>
					<Tab id="tab-1" label="All Nearby Resources">
						<div className="some-content">
							{renderAllResources()}
						</div>
					</Tab>
					<Tab id="tab-2" label="Local Businesses">
						<div className="some-content">
							{renderLocalBusiness()}
						</div>
					</Tab>
					<Tab id="tab-3" label="Protest Supporters">
						<div className="some-content">
							{renderProtestSupporters()}
						</div>
					</Tab>
				</Tabs>
			</div>
		);
	}
}

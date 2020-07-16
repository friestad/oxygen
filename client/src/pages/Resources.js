import React from "react";
import "../styles/Resources.scss";
import '../utils/getNearby';

import { Tabs, Tab, ClickableTile } from "carbon-components-react";
import getNearby from "../utils/getNearby";

const localBusinesses = [];
const protestSupporters = [];
const allResources = [];

function addLocalBusiness(name, type, distance) {
	const business = (
		<ClickableTile>
			<div className="resource-entry">
				<span className="resource-name">{name}</span>
				<span className="resource-body">{type}</span>
				<span className="resource-body resource-distance">{distance}</span>
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
				<span className="resource-body resource-distance">{distance}</span>
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

	componentDidMount() {
		getNearby(32.523205, -92.637924).then((resp) => {
			resp.forEach((element) => {
				console.log(element.name, element.categories[0], `${element.distance} ft`);
			})
		});
	}
	render() {
		// addLocalBusiness("CVS", "Convenience Store", "400 feet");
		// addLocalBusiness("Walgreens", "Convenience Store", "670 feet");
		// addLocalBusiness("Some Store", "Convenience Store", "1.2 miles");

		addProtestSupporter("John Doe", "Water & Snacks", "distance?");
		addProtestSupporter("Some Name", "Gatorade", "distance?");

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

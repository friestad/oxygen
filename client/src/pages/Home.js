import React from "react";
import "../styles/Home.scss";

import {
	Button,
	Tile,
	ExpandableTile,
	TileAboveTheFoldContent,
	TileBelowTheFoldContent,
	StructuredListWrapper,
	StructuredListHead,
	StructuredListRow,
	StructuredListCell,
	StructuredListBody,
} from "carbon-components-react";

import { getEvents } from "../utils/getEvent";
import { DisplayMapClass } from "../components/DisplayMapClass";
import { Resources } from "./Resources";
import { ProtestInformationDisplay } from "../components/ProtestInformationDisplay";

let protestList = [];
export class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			protests: [],
			isProtestSelected: false,
			activeProtest: -1,
		};
		this.handleJoinClick = this.handleJoinClick.bind(this);
		this.handleExitEventClick = this.handleExitEventClick.bind(this);
	}

	async componentDidMount() {
		if (navigator.geolocation) {
			navigator.geolocation.watchPosition(function (position) {
				if (
					!localStorage.getItem("latitude") ||
					!localStorage.getItem("longitude")
				)
					window.location.reload();

				localStorage.setItem(
					"latitude",
					position.coords.latitude.toString()
				);
				localStorage.setItem(
					"longitude",
					position.coords.longitude.toString()
				);
			});
		}
		const locations = await getEvents(
			localStorage.getItem("latitude"),
			localStorage.getItem("longitude")
		);
		this.setState({ protests: locations });
	}

	generateProtestInfo() {
		const aProtest = {};
		let index = this.state.activeProtest;
		if (this.state.protests.length > 0) {
			aProtest.name = this.state.protests[index].name;
			aProtest.startAddress = this.state.protests[index].start_address;
			aProtest.endAddress = this.state.protests[index].end_address;
			aProtest.startTime = this.state.protests[index].start_time;

			const info = (
				<ProtestInformationDisplay
					protestName={aProtest.name}
					time={aProtest.startTime}
					startAddress={aProtest.startAddress}
					endAddress={aProtest.endAddress}
					handleExit={() => {
						this.handleExitEventClick();
					}}
				/>
			);
			return info;
		}
	}

	generateMap() {
		const aProtest = {};
		let index = this.state.activeProtest;
		if (this.state.protests.length > 0) {
			aProtest.name = this.state.protests[index].name;
			aProtest.startLong = this.state.protests[
				index
			].start_location.coordinates[0];
			aProtest.startLat = this.state.protests[
				index
			].start_location.coordinates[1];
			aProtest.endLong = this.state.protests[
				index
			].end_location.coordinates[0];
			aProtest.endLat = this.state.protests[
				index
			].end_location.coordinates[1];
			aProtest.startTime = this.state.protests[index].start_time;

			const map = (
				<DisplayMapClass
					originLat={aProtest.startLat}
					originLong={aProtest.startLong}
					destLat={aProtest.endLat}
					destLong={aProtest.endLong}
				/>
			);

			return map;
		}
	}

	handleJoinClick(index, name) {
		this.setState({ isProtestSelected: true, activeProtest: index });
	}

	handleExitEventClick() {
		this.setState({ isProtestSelected: false, activeProtest: -1 });
	}

	generateMenu() {
		protestList = [];
		const event = {};
		if (this.state.protests.length > 0) {
			for (let index = 0; index < this.state.protests.length; index++) {
				let protest = this.state.protests[index];
				event.name = protest.name;

				event.startAddress = protest.start_address;
				event.endAddress = protest.end_address;
				event.startLat = protest.start_location.coordinates[0];
				event.startLong = protest.start_location.coordinates[1];
				event.endLat = protest.end_location.coordinates[0];
				event.endLong = protest.end_location.coordinates[1];
				event.startTime = protest.start_time;

				const element = (
					<>
						<div className="protest-box-item">
							<ExpandableTile>
								<TileAboveTheFoldContent>
									<div className="protest-basic-info">
										<span className="protest-heading">
											{event.name}
										</span>
										<span className="protest-subheading">
											{event.startTime}
										</span>
									</div>
								</TileAboveTheFoldContent>

								<TileBelowTheFoldContent>
									<div className="protest-expanded-info">
										<Tile>
											<StructuredListWrapper ariaLabel="Structured list">
												<StructuredListBody>
													<StructuredListRow
														tabIndex={0}
													>
														<StructuredListCell>
															Start:
														</StructuredListCell>
														<StructuredListCell>
															{event.startAddress}
														</StructuredListCell>
													</StructuredListRow>
													<StructuredListRow
														tabIndex={0}
													>
														<StructuredListCell>
															End:
														</StructuredListCell>
														<StructuredListCell>
															{event.endAddress}
														</StructuredListCell>
													</StructuredListRow>
												</StructuredListBody>
											</StructuredListWrapper>
										</Tile>
									</div>
								</TileBelowTheFoldContent>
							</ExpandableTile>

							<Button
								className="join-protest-bt"
								onClick={(e) => this.handleJoinClick(index, e)}
							>
								<div className="bt-text">
									<p>+</p>
								</div>
							</Button>
						</div>
						<hr />
					</>
				);
				protestList.push(element);
			}
			return protestList;
		} else {
			return <div className="no-protests">No protests!</div>;
		}
	}

	render() {
		if (this.state.isProtestSelected) {
			return (
				<div className="page-content">
					{this.generateProtestInfo()}
					{this.generateMap()}
					<Resources />
				</div>
			);
		} else {
			return (
				<div className="page-content">
					<div className="protest-list-container">
						{this.generateMenu()}
					</div>
				</div>
			);
		}
	}
}

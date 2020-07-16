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

import {DisplayMapClass} from '../components/DisplayMapClass';
import {Resources} from './Resources';

function ProtestInformationDisplay() {
	const eventName = "Sample Protest";
	const startTime = "09 Aug 2020 @ 3:45p";
	return (
		<div className="protest-dropdown">
			<ExpandableTile>
				<TileAboveTheFoldContent>
					<div className="protest-basic-info">
						<span className="protest-heading">{eventName}</span>
						<span className="protest-subheading">{startTime}</span>
					</div>
				</TileAboveTheFoldContent>
				<TileBelowTheFoldContent>
					<div className="protest-expanded-info">
						<Tile>
							<StructuredListWrapper ariaLabel="Structured list">
								<StructuredListHead>
									<StructuredListRow head tabIndex={0}>
										<StructuredListCell head>
											ColumnA
										</StructuredListCell>
										<StructuredListCell head>
											ColumnB
										</StructuredListCell>
									</StructuredListRow>
								</StructuredListHead>
								<StructuredListBody>
									<StructuredListRow tabIndex={0}>
										<StructuredListCell>
											Start
										</StructuredListCell>
										<StructuredListCell>
											123 Alphabet Lane 12345, Alphabet
											City, USA
										</StructuredListCell>
									</StructuredListRow>
									<StructuredListRow tabIndex={0}>
										<StructuredListCell>
											Row 2
										</StructuredListCell>
										<StructuredListCell>
											Row 2
										</StructuredListCell>
									</StructuredListRow>
								</StructuredListBody>
							</StructuredListWrapper>
						</Tile>
					</div>
				</TileBelowTheFoldContent>
			</ExpandableTile>
		</div>
	);
}

const protestList = [];

function RenderProtestList() {
	if (protestList.length === 0) {
		return (
			<div className="no-protests">
				<span>No protests near you!</span>
			</div>
		);
	} else {
		return protestList;
	}
}

function addProtest() {
	const eventName = "Sample Protest";
	const startTime = "09 Aug 2020 @ 3:45p";
	let protest = (
		<>
			<div className="protest-box-item">
				<ExpandableTile>
					<TileAboveTheFoldContent>
						<div className="protest-basic-info">
							<span className="protest-heading">{eventName}</span>
							<span className="protest-subheading">
								{startTime}
							</span>
						</div>
					</TileAboveTheFoldContent>

					<TileBelowTheFoldContent>
						<div className="protest-expanded-info">
							<Tile>
								<StructuredListWrapper ariaLabel="Structured list">
									<StructuredListHead>
										<StructuredListRow head tabIndex={0}>
											<StructuredListCell head>
												ColumnA
											</StructuredListCell>
											<StructuredListCell head>
												ColumnB
											</StructuredListCell>
										</StructuredListRow>
									</StructuredListHead>
									<StructuredListBody>
										<StructuredListRow tabIndex={0}>
											<StructuredListCell>
												Start
											</StructuredListCell>
											<StructuredListCell>
												123 Alphabet Lane 12345,
												Alphabet City, USA
											</StructuredListCell>
										</StructuredListRow>
										<StructuredListRow tabIndex={0}>
											<StructuredListCell>
												Row 2
											</StructuredListCell>
											<StructuredListCell>
												Row 2
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
				><div className='bt-text'><p>+</p></div></Button>
			</div>
			<hr />
		</>
	);

	protestList.push(protest);
}

export class Home extends React.Component {
	render() {
		addProtest();
		addProtest();
		addProtest();
		addProtest();
		addProtest();
		addProtest();

		return (
			<>
				<div className="page-content">
					<ProtestInformationDisplay />
					<DisplayMapClass />
					<Resources />
					{/* <div className="protest-list-container">
						<RenderProtestList />
					</div> */}
				</div>
			</>
		);
	}
}

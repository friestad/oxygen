import React from "react";
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

import "../styles/Home.scss";

export class ProtestInformationDisplay extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {

		return (
			<div className="protest-dropdown">
				<ExpandableTile>
					<TileAboveTheFoldContent>
						<div className="protest-basic-info">
							<span className="protest-heading">
								{this.props.protestName}
							</span>
							<span className="protest-subheading">
								{this.props.time}
							</span>
						</div>
					</TileAboveTheFoldContent>
					<TileBelowTheFoldContent>
						<div className="protest-expanded-info">
							<Tile>
								<StructuredListWrapper ariaLabel="Structured list">
									<StructuredListBody>
										<StructuredListRow tabIndex={0}>
											<StructuredListCell>
												Start
											</StructuredListCell>
											<StructuredListCell>
												{this.props.startAddress}
											</StructuredListCell>
										</StructuredListRow>
										<StructuredListRow tabIndex={0}>
											<StructuredListCell>
												End
											</StructuredListCell>
											<StructuredListCell>
												{this.props.endAddress}
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
}

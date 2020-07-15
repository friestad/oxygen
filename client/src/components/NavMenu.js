import React from "react";
import "../styles/NavMenu.scss";

import {
	HeaderContainer,
	Header,
	HeaderMenuButton,
	HeaderName,
	SideNav,
	SideNavItems,
	SkipToContent,
} from "carbon-components-react";

import { Link } from "react-router-dom";

export class NavMenu extends React.Component {
	render() {
		return (
			<>
				<div className="container">
					<HeaderContainer
						render={({
							isSideNavExpanded,
							onClickSideNavExpand,
						}) => (
							<>
								<Header aria-label="Placeholder name">
									<SkipToContent />
									<HeaderMenuButton
										aria-label="Open menu"
										onClick={onClickSideNavExpand}
										isActive={isSideNavExpanded}
									/>
									<HeaderName href="#" prefix="Placeholder">
										[Name]
									</HeaderName>
									<SideNav
										aria-label="Side navigation"
										expanded={isSideNavExpanded}
									>
										<SideNavItems>
											<Link
												to="/home"
												className="bx--side-nav__link"
											>
												Home
											</Link>
											<Link
												to="/resources"
												className="bx--side-nav__link"
											>
												Resources
											</Link>
											<Link
												to="/communicate"
												className="bx--side-nav__link"
											>
												Communicate
											</Link>
											<Link
												to="/manageEvents"
												className="bx--side-nav__link"
											>
												Manage Events
											</Link>
											<Link
												to="/causes"
												className="bx--side-nav__link"
											>
												Causes
											</Link>
										</SideNavItems>
									</SideNav>
								</Header>
							</>
						)}
					/>
				</div>
			</>
		);
	}
}

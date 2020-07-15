import React from "react";
import "../styles/NavMenu.scss";

import {
	HeaderContainer,
	Header,
	HeaderMenuButton,
	HeaderName,
	SideNav,
	SideNavItems,
	SideNavLink,
	SkipToContent,
} from "carbon-components-react";

import { Link } from "react-router-dom";

import { ChevronRight32 } from "@carbon/icons-react";

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
											<Link to="/home">
												<SideNavLink
													renderIcon={ChevronRight32}
													href="javascript:void(0)"
												>
													Home
												</SideNavLink>
											</Link>
											<Link to="/resources">
												<SideNavLink
													renderIcon={ChevronRight32}
													href="javascript:void(0)"
												>
													Resources
												</SideNavLink>
											</Link>
											<Link to="/communicate">
												<SideNavLink
													renderIcon={ChevronRight32}
													href="javascript:void(0)"
												>
													Communicate
												</SideNavLink>
											</Link>
											<Link to="/manageEvents">
												<SideNavLink
													renderIcon={ChevronRight32}
													href="javascript:void(0)"
												>
													Manage Events
												</SideNavLink>
											</Link>
											<Link to='/causes'>
												<SideNavLink
													renderIcon={ChevronRight32}
													href="javascript:void(0)"
												>
													Causes
												</SideNavLink>
											</Link>
										</SideNavItems>
									</SideNav>
								</Header>
								{/* <StoryContent /> */}
							</>
						)}
					/>
				</div>
			</>
		);
	}
}

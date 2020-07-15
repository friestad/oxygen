import React from "react";
import '../styles/NavMenu.scss';

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
											<SideNavLink
												renderIcon={ChevronRight32}
												href="javascript:void(0)"
											>
												Resources
											</SideNavLink>
											<SideNavLink
												renderIcon={ChevronRight32}
												href="javascript:void(0)"
											>
												Communicate
											</SideNavLink>
											<SideNavLink
												renderIcon={ChevronRight32}
												href="javascript:void(0)"
											>
												Manage Events
											</SideNavLink>
											<SideNavLink
												renderIcon={ChevronRight32}
												href="javascript:void(0)"
											>
												Causes
											</SideNavLink>
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

import React from "react";
import {
	Accordion,
	AccordionItem,
	Link,
	StructuredListWrapper,
	StructuredListHead,
	StructuredListRow,
	StructuredListCell,
	StructuredListBody,
	ClickableTile,
} from "carbon-components-react";

import "../styles/Causes.scss";

export class Causes extends React.Component {
	render() {
		return (
			<>
				<div className="page-content">
					<Accordion>
						<AccordionItem title="Petitions">
							<StructuredListWrapper ariaLabel="Structured list">
								<StructuredListHead>
									<StructuredListRow head tabIndex={0}>
										<StructuredListCell
											head
											className="left-cause-item"
										>
											Petition
										</StructuredListCell>
										<StructuredListCell head>
											Description
										</StructuredListCell>
									</StructuredListRow>
								</StructuredListHead>
								<StructuredListBody>
									<StructuredListRow tabIndex={0}>
										<StructuredListCell className="left-cause-item">
											<Link
												target="_blank"
												href="https://www.change.org/p/mayor-jacob-frey-justice-for-george-floyd"
											>
												<p>George Floyd</p>
											</Link>
										</StructuredListCell>
										<StructuredListCell>
											<p>
												A change.org petition demanding
												justice for the murder of George
												Floyd.
											</p>
										</StructuredListCell>
									</StructuredListRow>
									<StructuredListRow tabIndex={0}>
										<StructuredListCell className="left-cause-item">
											<Link
												target="_blank"
												href="https://www.change.org/p/andy-beshear-justice-for-breonna-taylor"
											>
												<p>Breonna Taylor</p>
											</Link>
										</StructuredListCell>
										<StructuredListCell>
											<p>
												A change.org petition demanding
												justice for the murder of
												Breonna Taylor.
											</p>
										</StructuredListCell>
									</StructuredListRow>
									<StructuredListRow tabIndex={0}>
										<StructuredListCell className="left-cause-item">
											<Link
												target="_blank"
												href="https://www.change.org/p/federal-bureau-of-investigation-disbarment-of-george-e-barnhill"
											>
												<p>Ahmaud Arbery</p>
											</Link>
										</StructuredListCell>
										<StructuredListCell>
											<p>
												A change.org petition demanding
												the disbarment of George E.
												Barnhill, the prosecutor for
												Ahmaud Arbery's murder case.
											</p>
										</StructuredListCell>
									</StructuredListRow>
								</StructuredListBody>
							</StructuredListWrapper>
						</AccordionItem>
						<AccordionItem title="Places to Donate">
							<StructuredListWrapper ariaLabel="Structured list">
								<StructuredListHead>
									<StructuredListRow head tabIndex={0}>
										<StructuredListCell
											head
											className="left-cause-item"
										>
											Funds / Orgs.
										</StructuredListCell>
										<StructuredListCell head>
											Description
										</StructuredListCell>
									</StructuredListRow>
								</StructuredListHead>
								<StructuredListBody>
									<StructuredListRow tabIndex={0}>
										<StructuredListCell className="left-cause-item">
											<Link
												target="_blank"
												href="https://www.naacpldf.org/"
											>
												<p>NAACP LDF</p>
											</Link>
										</StructuredListCell>
										<StructuredListCell>
											<p>
												The NAACP Legal Defense Fund
												seeks structural changes to
												expand democracy, eliminate
												disparities, and achieve racial
												justice
											</p>
										</StructuredListCell>
									</StructuredListRow>
									<StructuredListRow tabIndex={0}>
										<StructuredListCell className="left-cause-item">
											<Link
												target="_blank"
												href="https://blacklivesmatter.com/"
											>
												<p>#BlackLivesMatter</p>
											</Link>
										</StructuredListCell>
										<StructuredListCell>
											<p>
												A global organization poised to
												eradicate white supremacy and
												end violence infliced on black
												communities.
											</p>
										</StructuredListCell>
									</StructuredListRow>
									<StructuredListRow tabIndex={0}>
										<StructuredListCell className="left-cause-item">
											<Link
												target="_blank"
												href="https://www.change.org/p/federal-bureau-of-investigation-disbarment-of-george-e-barnhill"
											>
												<p>
													National Police
													Accountability Project
												</p>
											</Link>
										</StructuredListCell>
										<StructuredListCell>
											<p>
												A non-profit organization formed
												to protect individuals in
												encounters with law enforcement
												and detention facility
												personnel.
											</p>
										</StructuredListCell>
									</StructuredListRow>
								</StructuredListBody>
							</StructuredListWrapper>
						</AccordionItem>
					</Accordion>

					<div className="reading-list-container">
						<div className='reading-list-header'>Reading List</div>
						<div className="reading-list-row">
							<Link
								target="_blank"
								href="https://jacobinmag.com/2019/09/black-lives-matter-laquan-mcdonald-mike-brown-eric-garner"
							>
								<ClickableTile>
									<div className="article-container">
										<span className="article-name">
											Five Years Later, Do Black Lives
											Matter?
										</span>
										<span className="article-source">
											Keeanga-Yamahtta Taylor ─ Jacobin
											Magazine
										</span>
									</div>
								</ClickableTile>
							</Link>
							<Link
								target="_blank"
								href="https://www.theguardian.com/world/2019/sep/03/the-myth-of-the-free-speech-crisis"
							>
								<ClickableTile>
									<div className="article-container">
										<span className="article-name">
											The Myth of the free speech crisis
										</span>
										<span className="article-source">
											Nesrine Malik ─ The Guardian
										</span>
									</div>
								</ClickableTile>
							</Link>
						</div>

						<div className="reading-list-row">
							<Link
								target="_blank"
								href="https://www.theatlantic.com/magazine/archive/2014/06/the-case-for-reparations/361631/"
							>
								<ClickableTile>
									<div className="article-container">
										<span className="article-name">
											The Case for Reparations
										</span>
										<span className="article-source">
											Ta-Nehisi Coates ─ The Atlantic
										</span>
									</div>
								</ClickableTile>
							</Link>
							<Link
								target="_blank"
								href="https://sojo.net/articles/our-white-friends-desiring-be-allies"
							>
								<ClickableTile>
									<div className="article-container">
										<span className="article-name">
											For Our White Friends Desiring to Be
											Allies
										</span>
										<span className="article-source">
											Courtney Ariel ─ Sojourners
										</span>
									</div>
								</ClickableTile>
							</Link>
						</div>

						<div className="reading-list-row">
							<Link
								target="_blank"
								href="https://www.theatlantic.com/ideas/archive/2020/05/ahmaud-arbery/611539/"
							>
								<ClickableTile>
									<div className="article-container">
										<span className="article-name">
											Who Gets to Be Afraid in America?
										</span>
										<span className="article-source">
											Ibram Kendi ─ The Atlantic
										</span>
									</div>
								</ClickableTile>
							</Link>
							<Link
								target="_blank"
								href="https://bostonreview.net/race/elizabeth-hinton-minneapolis-uprising-context"
							>
								<ClickableTile>
									<div className="article-container">
										<span className="article-name">
											The Minneapolic Uprising in Context
										</span>
										<span className="article-source">
											Elizabeth Hinton ─ Boston Review
										</span>
									</div>
								</ClickableTile>
							</Link>
						</div>
					</div>
				</div>
			</>
		);
	}
}

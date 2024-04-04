// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block'
import CopyBlock from '../../blocks/about.copy.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss';

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 * 
 * @returns {jsx} <About />
 */
export default function About() {
	return (
		<Section classProp={about.section}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="About Me"
					preTitle="Synopsis"
					subTitle="Equipped with a multifaceted skill set encompassing full-stack development, operational architecture, systems design, and strategic branding, I stand as a business-centric digital strategist, adept at transforming complex challenges into scalable solutions."
				/>
				<section className={about.content}>
					<div className={about.image}>
						<img src="/img/eu.png" alt="Moisés photo"/>
						{/* <Image src="/img/family-photo.jpg" width={600} height={800}/> */}
					</div>
					<div className={about.copy} >
						<CopyBlock 
							title="Strategic Leadership and Innovation"
							containerClass={about.container}
							iconClass={about.icon}
							icon={[ 'fat', 'ear-listen' ]}
							copy="Beyond my technical and design capabilities, I bring to the table robust leadership, strategic planning, and problem-solving skills, refined through my roles in business leadership, partnership management, and personal endeavors as a husband and father. My diverse interests, particularly in music and writing, fuel my creativity and provide a unique perspective to every project, ensuring a thoughtful, inspired approach to overcoming challenges."

						/>
						<BadgesBlock 
							title="Strategic Design and System Architecture" 
							containerClass={about.container}
							list={methods} 
							fullContainer="fullContainer"
							block="methods" 
							icon="fingerprint"
							copy="I take particular delight in the strategic planning and architectural design of projects, focusing on creating cohesive Design Systems and comprehensive Brand Strategies. My approach integrates the multiple facets of user experience, ensuring a seamless, impactful interaction at every user touchpoint."
							//invertedColor="invertedColor"
							headerIcon={`${about.icon}`}
						/>
					</div>
				</section>	
			</Container>
		</Section>
	)
}

const methods 	= [
	{ key: 'planet-moon', 		name: 'User Research', 		type: 'fad' },
	{ key: 'qrcode', 			name: 'Digital Strategy', 	type: 'fad' },
	{ key: 'window', 			name: 'Design Systems', 	type: 'fad' },
	{ key: 'cubes', 			name: 'Product Strategy', 	type: 'far' },
	{ key: 'layer-plus', 		name: 'Brand Strategy', 	type: 'fad' },
	{ key: 'solar-system', 		name: 'Operations', 		type: 'fad' },
]
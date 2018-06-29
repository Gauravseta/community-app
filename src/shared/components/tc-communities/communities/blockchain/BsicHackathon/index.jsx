import JoinCommunity from 'containers/tc-communities/JoinCommunity';
import PT from 'prop-types';
import React from 'react';
import { Link } from 'topcoder-react-utils';

import HeadBannerImage from
  'assets/images/communities/blockchain/bsic-hackathon/head-banner.jpg';

import ChallengeImgHardware from
  'assets/images/communities/blockchain/bsic-hackathon/challenge-hardware.jpg';
import ChallengeImgDemocracy from
  'assets/images/communities/blockchain/bsic-hackathon/challenge-democracy.jpg';
import ChallengeImgAgriculture from
  'assets/images/communities/blockchain/bsic-hackathon/challenge-agriculture.jpg';
import ChallengeImgRefugees from
  'assets/images/communities/blockchain/bsic-hackathon/challenge-refugees.jpg';

import ChallengeCard from './ChallengeCard';
import FaqItem from './FaqItem';

import './style.scss';

export default function BsicHackathon({
  shownFaqItems,
  toggleFaqItem,
}) {
  return (
    <div>
      <div styleName="bannerContainer">
        <div styleName="bannerContent">
          <div styleName="bannerMaskLeft" />
          <img
            alt="Head Banner"
            src={HeadBannerImage}
            styleName="bannerImage"
          />
          <div styleName="bannerMaskRight" />
        </div>
      </div>
      <div styleName="contentBlock">
        <h1 styleName="h1">
About the Incubator
        </h1>
        <p>
          The Decentralized Impact Incubator is a 6-week program built off of
          the traditional idea of a hackathon to ideate and prototype
          blockchain-based solutions to global social and environmental
          challenges. We are calling it an incubator because we will challenge
          you to build an actual, deployable solution on the ground, more than
          just code. During the competition, participants from around the will
          gather to form teams, study human landscape, design business models,
          and define impact metrics. Teams need to pass through weekly
          checkpoints and are guided by mentors throughout the process. Winning
          projects will receive grants and training to support continued
          development.
        </p>
      </div>
      <div styleName="contentBlock">
        <h1 styleName="h1">
Prizes
        </h1>
        <div>
          Cash prize of $50,000 USD to best teams of each challenge category:
          <ul>
            <li>
              $10k for winners, $2.5k for runner-ups.
            </li>
            <li>
              Business development training for all winning teams to accelerate
              solutions beyond PoC stage.
            </li>
            <li>
              Exposure and visibility across BSIC channels, networks, and more.
            </li>
            <li>
              Opportunity to showcase their solutions in front of the most
              reputable impact investors, NGOs, philanthropists, charities
              during conference in June in Washington, DC.
            </li>
          </ul>
        </div>
      </div>
      <div styleName="contentBlock twoColumns">
        <div styleName="timelineCardContainer">
          <h1 styleName="h1">
Timeline
          </h1>
          <div styleName="nowrap">
            <h3 styleName="timelinePhaseName">
              Registration and Team Formation:
            </h3>
&zwnj;
            March 21st - April 16th
          </div>
          <div styleName="nowrap">
            <h3 styleName="timelinePhaseName">
Competition:
            </h3>
&zwnj;
            April 9th - May 21st
          </div>
          <div styleName="nowrap">
            <h3 styleName="timelinePhaseName">
Judging:
            </h3>
&zwnj;
            May 21st - June 4th
          </div>
          <div styleName="nowrap">
            <h3 styleName="timelinePhaseName">
Winners Announced:
            </h3>
&zwnj;
            June 4th
          </div>
        </div>
        <div>
          <h1 styleName="h1">
Judging Criteria
          </h1>
          <ul>
            <li>
              Weekly checkpoints (which will guide you to create an excellent
              White Paper)
            </li>
            <li>
              White Paper (optional, in case of updates/changes uncovered in
              your weekly checkpoints)
            </li>
            <li>
              5-min video demo demonstrating:
              <ul>
                <li>
                  A description of your early stage idea: The challenge of your
                  choice and the overview of your solution.
                </li>
                <li>
                  An explanation of your business model: How does your solution
                  create value and be financially sustainable?
                </li>
                <li>
                  Prototype / Proof-of-concept: A minimum viable product that
                  captures how your product functions.
                </li>
                <li>
                  Timeline for sustained development: A plan for project&apos;s
                  growth beyond the scope of the incubator.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div styleName="challengesContainer">
        <div styleName="challengesContent">
          <h1 styleName="h1">
            Completed
          </h1>
          <div styleName="facts">
            <p>
              664
              <br />
              Registrants
            </p>
            <p>
              94
              <br />
              Teams
            </p>
            <p>
              58
              <br />
              Countries
            </p>
            <p>
              47
              <br />
              Submissions
            </p>
            <p>
              6 Weeks
              <br />
              Hackathon Duration
            </p>
          </div>
          <div styleName="facts">
            <p>
              47
              <br />
              Different Ideas
            </p>
            <p>
              4
              <br />
              Use Cases
            </p>
          </div>
          <div styleName="facts">
            <p>
              $40 000 +
              <br />
              Awarded Prize Money
            </p>
          </div>
          <JoinCommunity
            label="Join Topcoder Blockchain Community"
          />
          <div styleName="challengeCardsContainer">
            <ChallengeCard
              imgUrl={ChallengeImgRefugees}
              title="Refugees Challenge"
              text={(
                <div>
                  From Myanmar to Syria, geopolitical instability has created
                  the largest humanitarian crisis since WWII. 65.6 million
                  people are forcibly displaced, and lack of identity,
                  opaqueness of process, insufficient aid and political
                  obstructions are adding to their undue burden. Blockchain
                  technology is often touted as a solution to uplift refugees,
                  providing services ranging from self-agency and educational
                  credentialing to crisis response and evidence collection in
                  dangerous regions. As the technology matures, it has become
                  more durable, reliable, and appropriate to deploy in many of
                  these use cases.
                  <ul>
                    <li>
                      <Link
                        openNewTab
                        to="https://www.wired.com/story/refugees-but-on-the-blockchain/"
                      >
                        How Refugees Are Helping Create Blockchain&apos;s Brand
                        New World
                      </Link>
                    </li>
                    <li>
                      <Link
                        openNewTab
                        to="http://www.qeh.ox.ac.uk/blog/blockchain-refugees-great-hopes-deep-concerns"
                      >
                        Blockchain for Refugees: Great Hopes, Deep Concerns
                      </Link>
                    </li>
                    <li>
                      <Link
                        openNewTab
                        to="https://www.devex.com/news/has-global-development-reached-peak-blockchain-hype-91906"
                      >
                        Has Global Development Reached &ldquo;Peak Blockchain
                        Hype?&rdquo;
                      </Link>
                    </li>
                    <li>
                      <Link
                        openNewTab
                        to="http://fortune.com/2018/01/20/blockchain-identity-civic-silicon-slopes/"
                      >
                        Why Blockchains and Identity Go Together
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
              winners={(
                <div>
                  <h3>
                    Winning Team
                  </h3>
                  <p>
                    unCHAINed
                  </p>
                  <h3>
                    Team members
                  </h3>
                  <p>
                    Trevor Campbell (
                    <Link
                      openNewTab
                      to="https://www.topcoder.com/members/tdcampbell/"
                    >
                      tdcampbell
                    </Link>
                    ), Todd Schultz (
                    <Link
                      openNewTab
                      to="https://www.topcoder.com/members/tschultz1216/"
                    >
                      tschultz1216
                    </Link>
                    ), Sam Blumenthal (
                    <Link
                      openNewTab
                      to="https://www.topcoder.com/members/sam.blumenthal/"
                    >
                      sam.blumenthal
                    </Link>
                    ), Gurmeet Budhraja (
                    <Link
                      openNewTab
                      to="https://www.topcoder.com/members/khojsolutions/"
                    >
                      khojsolutions
                    </Link>
                    ), Madhu Machavarapu (
                    <Link
                      openNewTab
                      to="https://www.topcoder.com/members/94madhu94/"
                    >
                      94madhu94
                    </Link>
                    ), Urja Pawar (
                    <Link
                      openNewTab
                      to="https://www.topcoder.com/members/urjapawar/"
                    >
                      urjapawar
                    </Link>
                    )
                  </p>
                  <h3>
                    Project Detail
                  </h3>
                  <p>
                    <Link
                      openNewTab
                      to="https://www.youtube.com/watch?v=HDWE0cKNcZM&feature=youtu.be"
                    >
                      watch this video
                    </Link>
                  </p>
                  <br />
                  <h3>
                    Runner-up
                  </h3>
                  <p>
                    Arcadia
                  </p>
                  <h3>
                    Team members
                  </h3>
                  <p>
                    Elisa Pasquali (
                    <Link
                      openNewTab
                      to="https://www.topcoder.com/members/epg/"
                    >
                      epg
                    </Link>
                    ), Ana Zamfir (
                    <Link
                      openNewTab
                      to="https://www.topcoder.com/members/ancaz/"
                    >
                      ancaz
                    </Link>
                    ), Ioana Stanescu (
                    <Link
                      openNewTab
                      to="https://www.topcoder.com/members/osninja/"
                    >
                      osninja
                    </Link>
                    )
                  </p>
                  <h3>
                    Project Details
                  </h3>
                  <p>
                    <Link
                      openNewTab
                      to="https://www.youtube.com/watch?v=MvGXMZ9bsCQ&feature=youtu.be"
                    >
                      watch this video
                    </Link>
                  </p>
                </div>
              )}
            />
            <ChallengeCard
              imgUrl={ChallengeImgDemocracy}
              title="Democracy Challenge"
              text={(
                <div>
                  Secure voting, protected privacy, free flow of
                  information...these ideas empower an equitable, distributed
                  world, but they are also the most susceptible to violations.
                  Blockchain is a “political” “human” technology. The central
                  ethos of the technology is about inclusion and equality,
                  cutting out the intermediary where corruption and collusion
                  breed. Dive deep into the world of democracy, autonomy, and
                  self-sovereignty, and you will see many opportunities for
                  blockchain to benefit the vulnerable populations of the world.
                  <ul>
                    <li>
                      <Link
                        openNewTab
                        to="https://www.fastcompany.com/3062386/democracy-is-getting-a-reboot-on-the-blockchain"
                      >
                        Democracy Is Getting A Reboot On The Blockchain
                      </Link>
                    </li>
                    <li>
                      <Link
                        openNewTab
                        to="https://ssir.org/articles/entry/will_blockchain_disrupt_government_corruption"
                      >
                        Will Blockchain Disrupt Government Corruption?
                      </Link>
                    </li>
                    <li>
                      <Link
                        openNewTab
                        to="https://www.theatlantic.com/technology/archive/2017/05/blockchain-of-command/528543/"
                      >
                        Cryptocurrency Might be a Path to Authoritarianism:
                        Extreme Libertarians Built Blockchain To Decentralize
                        Government and Corporate Power; It Could Consolidate
                        Their Control Instead.
                      </Link>
                    </li>
                    <li>
                      <Link
                        openNewTab
                        to="https://opendocs.ids.ac.uk/opendocs/bitstream/handle/123456789/12945/RRB17.pdf"
                      >
                        Blockchain for Development - Hope or Hype? Read
                        Section: A Ten-Point Checklist for Development
                        Policymakers and Practitioners Interested in Blockchain
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
              winners={(
                <div>
                  <h3>
                    Winning Team
                  </h3>
                  <p>
                    Popchain*
                  </p>
                  <h3>
                    Team members
                  </h3>
                  <p>
                    Val Denay Mack (
                    <Link
                      openNewTab
                      to="https://www.topcoder.com/members/valem21/"
                    >
                      valem21
                    </Link>
                    ), Gael Gundin (
                    <Link
                      openNewTab
                      to="https://www.topcoder.com/members/wapinpana/"
                    >
                      wapinpana
                    </Link>
                    )
                  </p>
                  <h3>
                    Project Detail
                  </h3>
                  <p>
                    <Link
                      openNewTab
                      to="https://www.youtube.com/watch?v=QHJfLn0nwpM&feature=youtu.be"
                    >
                      watch this video
                    </Link>
                  </p>
                  <br />
                  <h3>
                    Runner-up
                  </h3>
                  <p>
                    Akshar
                  </p>
                  <h3>
                    Team members
                  </h3>
                  <p>
                    Rahul Bansal (
                    <Link
                      openNewTab
                      to="https://www.topcoder.com/members/rahulb/"
                    >
                      rahulb
                    </Link>
                    ), Siddharth Swarnkar (
                    <Link
                      openNewTab
                      to="https://www.topcoder.com/members/siddharthsoni/"
                    >
                      siddharthsoni
                    </Link>
                    ), Sundari Narayan Swami (
                    <Link
                      openNewTab
                      to="https://www.topcoder.com/members/sswami/"
                    >
                      sswami
                    </Link>
                    ), Bhavyaa Rastogi (
                    <Link
                      openNewTab
                      to="https://www.topcoder.com/members/krusherz/"
                    >
                      krusherz
                    </Link>
                    ), Carlos Rojas Noveron (
                    <Link
                      openNewTab
                      to="https://www.topcoder.com/members/CarlosNoveron/"
                    >
                      CarlosNoveron
                    </Link>
                    ), Dr. Hugh Gosnell (
                    <Link
                      openNewTab
                      to="https://www.topcoder.com/members/hugh_g/"
                    >
                      hugh_g
                    </Link>
                    )
                  </p>
                  <h3>
                    Project Details
                  </h3>
                  <p>
                    <Link
                      openNewTab
                      to="https://www.youtube.com/watch?v=0Onj1IhtWgs&feature=youtu.be"
                    >
                      watch this video
                    </Link>
                  </p>
                </div>
              )}
            />
            <ChallengeCard
              imgUrl={ChallengeImgHardware}
              title="Hardware Challenge"
              text={(
                <div>
                  As more and more blockchain for social impact projects pop up,
                  a pattern of problems has arisen. How do we reduce the need
                  for human verification? How do we allow for localized
                  blockchain access in low infrastructure areas? How do we
                  create trusted automated interactions between IoT devices?
                  There is an increasing need for reliable hardware
                  architectures to support blockchain solutions. Without those,
                  blockchain remains out of reach for the majority.
                  <ul>
                    <li>
                      <Link
                        openNewTab
                        to="https://blockchainatberkeley.blog/on-blockchain-and-the-internet-of-things-f6b0b2deb528"
                      >
                        On Blockchain and the Internet of Things: Strengths,
                        Weaknesses, and the Likely Road Ahead
                      </Link>
                    </li>
                    <li>
                      <Link
                        openNewTab
                        to="http://www.ibtimes.co.uk/how-realise-potential-blockchain-developing-economies-1649410"
                      >
                        How to Realise the Potential of Blockchain in
                        Developing Countries
                      </Link>
                    </li>
                    <li>
                      <Link
                        openNewTab
                        to="https://medium.com/rightmesh/demystifying-mesh-networks-6c7aaac07e1a"
                      >
                        Demystifying Mesh Networks: To understand what
                        RightMesh is, let&apos;s first understand what a mesh
                        network is.
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
              winners={(
                <div>
                  <h3>
                    Winning Team
                  </h3>
                  <p>
                    Kidner Project
                  </p>
                  <h3>
                    Team members
                  </h3>
                  <p>
                    Sajida Zouarhi (
                    <Link
                      openNewTab
                      to="https://www.topcoder.com/members/sajz/"
                    >
                      SajZ
                    </Link>
                    ), Noah Basri (
                    <Link
                      openNewTab
                      to="https://www.topcoder.com/members/noah-basri/"
                    >
                      Noah-Basri
                    </Link>
                    ), Maroussia Arnault (
                    <Link
                      openNewTab
                      to="https://www.topcoder.com/members/marou_kid/"
                    >
                      Marou_Kid
                    </Link>
                    ), Amelia Lintern-Smith (
                    <Link
                      openNewTab
                      to="https://www.topcoder.com/members/amelials/"
                    >
                      amelials
                    </Link>
                    ), Clément Massonnaud (
                    <Link
                      openNewTab
                      to="https://www.topcoder.com/members/clemass/"
                    >
                      CleMass
                    </Link>
                    ), Mathieu Vincens (
                    <Link
                      openNewTab
                      to="https://www.topcoder.com/members/Mathvincens/"
                    >
                      Mathvincens
                    </Link>
                    )
                  </p>
                  <h3>
                    Project Detail
                  </h3>
                  <p>
                    <Link
                      openNewTab
                      to="https://www.youtube.com/watch?v=Y_Td2_0rxYo&feature=youtu.be"
                    >
                      watch this video
                    </Link>
                  </p>
                  <br />
                  <h3>
                    Runner-up
                  </h3>
                  <p>
                    Aphetor
                  </p>
                  <h3>
                    Team members
                  </h3>
                  <p>
                    Alexander S. Blum (
                    <Link
                      openNewTab
                      to="https://www.topcoder.com/members/ablumbc/"
                    >
                      ablumbc
                    </Link>
                    ), Meredith Finkelstein (
                    <Link
                      openNewTab
                      to="https://www.topcoder.com/members/msrobot0/"
                    >
                      msrobot0
                    </Link>
                    ), Seth Weiner (
                    <Link
                      openNewTab
                      to="https://www.topcoder.com/members/sethweiner/"
                    >
                      sethweiner
                    </Link>
                    ), Chris Jaroszewski (
                    <Link
                      openNewTab
                      to="https://www.topcoder.com/members/CJaroszewski/"
                    >
                      Cjaroszewski
                    </Link>
                    ) , Peter Lyons (
                    <Link
                      openNewTab
                      to="https://www.topcoder.com/members/anemas971/"
                    >
                      Anemas971
                    </Link>
                    )
                  </p>
                  <h3>
                    Project Details
                  </h3>
                  <p>
                    <Link
                      openNewTab
                      to="https://www.youtube.com/watch?v=bHTaiihtlm8&feature=youtu.be"
                    >
                      watch this video
                    </Link>
                  </p>
                </div>
              )}
            />
            <ChallengeCard
              imgUrl={ChallengeImgAgriculture}
              title="Agriculture Challenge"
              text={(
                <div>
                  Poor agricultural practices are damaging the Earth&apos;s
                  land and environment. Overgrazing and overdrafting lead to
                  soil erosion. Slash and burn farming devastates our forests.
                  Pollutants and harmful chemicals get recycled into aquatic
                  ecosystems, endangering various species that rely on delicate
                  natural habitats. Blockchain technology represents to
                  increase the sustainability of agricultural practices through
                  a plethora of ways. Securing the supply chain, reducing waste,
                  and incentivizing better habits are just a few of the
                  possibilities!
                  <ul>
                    <li>
                      <Link
                        openNewTab
                        to="https://theconversation.com/how-blockchain-is-strengthening-tuna-traceability-to-combat-illegal-fishing-89965"
                      >
                        How Blockchain is Strengthening Tuna Traceability to
                        Combat Illegal Fishing
                      </Link>
                    </li>
                    <li>
                      <Link
                        openNewTab
                        to="https://cointelegraph.com/news/growing-the-garden-how-to-use-blockchain-in-agriculture"
                      >
                        Growing the Garden: How to Use Blockchain in Agriculture
                      </Link>
                    </li>
                    <li>
                      <Link
                        openNewTab
                        to="https://inc42.com/resources/blockchain-technology-agriculture/"
                      >
                        How Adoption Of Blockchain Technology Will Disrupt
                        Agriculture
                      </Link>
                    </li>
                    <li>
                      <Link
                        openNewTab
                        to="https://www.reuters.com/article/us-africa-landrights-blockchain/african-startups-bet-on-blockchain-to-tackle-land-fraud-idUSKCN1G00YK"
                      >
                        African Startups Bet on Blockchain to Tackle Land Fraud
                      </Link>
                    </li>
                    <li>
                      <Link
                        openNewTab
                        to="https://www.washingtonpost.com/news/monkey-cage/wp/2014/08/15/land-rights-and-conflict-in-africa/?utm_term=.e5f484734eb1"
                      >
                        Land rights and conflict in Africa
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
              winners={(
                <div>
                  <p>
                    This sub-challenge witnessed a tie
                  </p>
                  <h3>
                    Winning Teams
                  </h3>
                  <p>
                    Team 1: Greenblocks
                  </p>
                  <h3>
                    Team members
                  </h3>
                  <p>
                    Philipp Beer (
                    <Link
                      openNewTab
                      to="https://www.topcoder.com/members/Depose/"
                    >
                      Depose
                    </Link>
                    ), Lewis Daly (
                    <Link
                      openNewTab
                      to="https://www.topcoder.com/members/lwilld/"
                    >
                      lwilld
                    </Link>
                    ), Billy Garrison (
                    <Link
                      openNewTab
                      to="https://www.topcoder.com/members/BillyGarrison/"
                    >
                      BillyGarrison
                    </Link>
                    )
                  </p>
                  <h3>
                    Project Detail
                  </h3>
                  <p>
                    <Link
                      openNewTab
                      to="https://www.youtube.com/watch?v=DGyOvjV9I90&feature=youtu.be"
                    >
                      watch this video
                    </Link>
                  </p>
                  <br />
                  <p>
                    Team 2: Thor
                  </p>
                  <h3>
                    Team members
                  </h3>
                  <p>
                    Ylli Vllasolli (
                    <Link
                      openNewTab
                      to="https://www.topcoder.com/members/Team-Thor/"
                    >
                      Team-Thor
                    </Link>
                    ), Charlotte Stephens (
                    <Link
                      openNewTab
                      to="https://www.topcoder.com/members/Charlotte-Thor/"
                    >
                      Charlotte-Thor
                    </Link>
                    ), Bayo Akins (
                    <Link
                      openNewTab
                      to="https://www.topcoder.com/members/BayoAkins/"
                    >
                      Bayoakins
                    </Link>
                    ), Erica Sundberg (
                    <Link
                      openNewTab
                      to="https://www.topcoder.com/members/e5r34t/"
                    >
                      e5r34t
                    </Link>
                    ), Stephen Jackson (
                    <Link
                      openNewTab
                      to="https://www.topcoder.com/members/stevejaxon/"
                    >
                      stevejaxon
                    </Link>
                    ), Ife Nkechukwu (
                    <Link
                      openNewTab
                      to="https://www.topcoder.com/members/ife-thor/"
                    >
                      ife-thor
                    </Link>
                    )
                  </p>
                  <h3>
                    Project Detail
                  </h3>
                  <p>
                    <Link
                      openNewTab
                      to="https://www.youtube.com/watch?v=c4YUOoE7Cyc&feature=youtu.be"
                    >
                      watch this video
                    </Link>
                  </p>
                </div>
              )}
            />
          </div>
        </div>
      </div>
      <div styleName="faq">
        <h2>
FAQ for Competitors
        </h2>
        <FaqItem
          open={shownFaqItems.n01}
          question="What do I absolutely need to know about the #ImpactIncubator?"
          toggle={show => toggleFaqItem('n01', show)}
        >
          <ul>
            <li>
              There are four challenges: #Hardware, #Democracy,
              #Agriculture, #Refugees
            </li>
            <li>
              The required deliverables are (1) Weekly checkpoints
              &zwnj;
              <a
                href="https://paper.dropbox.com/doc/Weekly-checkpoints-09FvI6B1wAuT7qqVvw7kz?_tk=share_copylink"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://paper.dropbox.com/doc/Weekly-checkpoints-09FvI6B1wAuT7qqVvw7kz?_tk=share_copylink
              </a>
              {' '}
and (2) a 5-min video demo
            </li>
            <li>
              You will be scored by such criteria
              &zwnj;
              <a
                href="https://airtable.com/shryJsiCL6nc2hieb"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://airtable.com/shryJsiCL6nc2hieb
              </a>
            </li>
            <li>
              Every team has 3 mentors. There’s a post in your private
              forum telling you who they are
              &zwnj;
              <a
                href="https://airtable.com/shrCUgy4ZgOSCoveO"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://airtable.com/shrCUgy4ZgOSCoveO
              </a>
            </li>
            <li>
              All submissions can be changed, modified, and replaced until
              May 21, when your final submission is due and the Incubator
              ends
            </li>
          </ul>
        </FaqItem>
        <FaqItem
          open={shownFaqItems.n02}
          question="How do I join the Incubator Slack?"
          toggle={show => toggleFaqItem('n02', show)}
        >
          Click this link to join the slack domain:
          &zwnj;
          <a
            href="https://apps.topcoder.com/forums/?module=Thread&threadID=914879&start=0&mc=1#2254786"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://apps.topcoder.com/forums/?module=Thread&threadID=914879&start=0&mc=1#2254786
          </a>
        </FaqItem>
        <FaqItem
          open={shownFaqItems.n03}
          question="Can I join multiple challenges or multiple teams?"
          toggle={show => toggleFaqItem('n03', show)}
        >
          No. You can only register for one sub-challenge and join only one
          team. If you are currently on multiple teams, please contact
          @sophieqgu to choose one team to move forward. If you’ve not made
          a choice, you will be disqualified as a prize recipient.
        </FaqItem>
        <FaqItem
          open={shownFaqItems.n04}
          question="Can I add team members after registration? Can I change team members after registration??"
          toggle={show => toggleFaqItem('n04', show)}
        >
          No. You may not change team members after the registration
          deadline.
        </FaqItem>
        <FaqItem
          open={shownFaqItems.n05}
          question="How do I see the forums? How do I see my Team Private Forum?"
          toggle={show => toggleFaqItem('n05', show)}
        >
          Make sure you’re registered on the main challenge and your use
          case challenge. When you go to the use case challenge page, you
          should see a link to forums.
        </FaqItem>
        <FaqItem
          open={shownFaqItems.n06}
          question="I have problems accessing the forums. What do I do?"
          toggle={show => toggleFaqItem('n06', show)}
        >
          If you aren’t registered on the sub-challenge, or you haven’t
          been added to a private forum, reach out to the copilot
          (@birdofpreyru) on the BSIC Slack.
        </FaqItem>
        <FaqItem
          open={shownFaqItems.n07}
          question="What does my team do if mentors don’t show?"
          toggle={show => toggleFaqItem('n07', show)}
        >
          Please let us know and we will get you a new mentor(s) asap!
          Contact @sophieqgu in Slack
        </FaqItem>
        <FaqItem
          open={shownFaqItems.n08}
          question="What if I don’t want to use the forums?"
          toggle={show => toggleFaqItem('n08', show)}
        >
          We have provided the forums as a means to hold files with context,
          meaning you post in the forum and upload a file for your
          team/mentor. You are more than welcome to coordinate with your
          team and mentors to work another way (eg: Google Drive Folder,
          Dropbox, Git(hub/lab).
        </FaqItem>
        <FaqItem
          open={shownFaqItems.n09}
          question="What must be in the forum?"
          toggle={show => toggleFaqItem('n09', show)}
        >
          We really want questions about the Incubator in general in the
          main challenge forum if possible. This gives visibility to the
          answers of your questions to the whole list of participants to
          keep things fair. It also helps us not answer the same question
          100 times, once for each team. If your question is of a more
          sensitive or specific nature, the question should be asked of
          your mentor in your private forum.
        </FaqItem>
        <FaqItem
          open={shownFaqItems.n10}
          question="What counts as a usable submission?"
          toggle={show => toggleFaqItem('n10', show)}
        >
          A submission that addresses the Weekly questions! It is an ideal
          scenario that you address all of the questions there. But if you
          are blocked by one, just move on! Prioritize your tasks and
          coordinate with your team to complete them.
        </FaqItem>
        <FaqItem
          open={shownFaqItems.n11}
          question="How do I drop out of the competition?"
          toggle={show => toggleFaqItem('n11', show)}
        >
          If you do not submit your final submission, then we assume
          you’ve dropped out.
        </FaqItem>
        <FaqItem
          open={shownFaqItems.n13}
          question="How do we deal with in-team disputes?"
          toggle={show => toggleFaqItem('n13', show)}
        >
          We understand the risks of working with strangers, but we trust
          you to solve your differences first among yourselves. You are
          welcome to flag those issues to us to help us understand your
          situation. While we are not able to change your contract or prize
          split, those issues will be taken into consideration when we
          provide post-Incubator support.
        </FaqItem>
        <FaqItem
          open={shownFaqItems.n14}
          question="I’m having trouble uploading a project. What do I do?"
          toggle={show => toggleFaqItem('n14', show)}
        >
          You are welcome to use other tools as long as it is not your
          final submission. Please inform your mentors when you do so. If
          it is your final submission, please contact @jcori.
        </FaqItem>
        <FaqItem
          open={shownFaqItems.n15}
          question="Why can only the team captain upload a submission?"
          toggle={show => toggleFaqItem('n15', show)}
        >
          The Topcoder platform is designed for single-user competitor
          submissions. The team captain must be the Topcoder handle who
          submits so we can correctly line up the submission with the
          contract to work out the payments with the agreed-upon split.
        </FaqItem>
        <FaqItem
          open={shownFaqItems.n16}
          question="What should my final submission contain?"
          toggle={show => toggleFaqItem('n16', show)}
        >
          <p>
            Here are
            &zwnj;
            <Link
              openNewTab
              to="https://docs.google.com/document/d/1hBIqUlout-8nK1cSfGOAQ9T1dQKPXGK6A_JaKZerVjE/edit?usp=sharing"
            >
              the detailed instructions on the final submission
            </Link>
.
          </p>
        </FaqItem>
        <FaqItem
          open={shownFaqItems.n17}
          question="What should my final submission not contain?"
          toggle={show => toggleFaqItem('n17', show)}
        >
          <ul>
            <li>
              It should not contain your names and email addresses (Team name
              is allowed in presentation and other deliverables).
              Judging must be anonymous. We will link your submission to
              your team via your team captain’s Topcoder handle. The judges
              will just see your submission as a submission number.
            </li>
            <li>
              It should not contain anything you would leave out in a
              .gitignore - ie: node_modules folders, uncompressed data
              files, etc
            </li>
            <li>
              It should not contain a video file. Any video submissions
              should be uploaded to Youtube as an unlisted video, and the
              link provided (either in your README.md, or in a presentation
              file)
            </li>
            <li>
              It should not contain links out to Google/Dropbox. This is a
              challenge with a deadline, everything that is submitted must
              be “final”. If you submit a link to Google Drive, we won’t
              know if you’ve updated the files after the deadline.
            </li>
          </ul>
        </FaqItem>
        <FaqItem
          open={shownFaqItems.n18}
          question="What if I already submitted to the challenge for my use case?"
          toggle={show => toggleFaqItem('n18', show)}
        >
          When the submission phase closes, the judges will only receive
          the latest .zip file uploaded through the platform. If you
          uploaded before, it will just be overwritten.
        </FaqItem>
        <FaqItem
          open={shownFaqItems.n19}
          question="How will payments be distributed?"
          toggle={show => toggleFaqItem('n19', show)}
        >
          Participants must have a valid Topcoder handle. The prizes will
          be awarded through the Topcoder platform to the handles based on
          the split agreed upon in the Docusign contract.
        </FaqItem>
        <FaqItem
          open={shownFaqItems.n20}
          question="Who owns the IP of my submissions?"
          toggle={show => toggleFaqItem('n20', show)}
        >
          Your team only. BSIC, Topcoder, and ConsenSys waive all claims on
          IP.
        </FaqItem>
        <FaqItem
          open={shownFaqItems.n21}
          question="When will I know the results?"
          toggle={show => toggleFaqItem('n21', show)}
        >
          The review process will begin as soon as the Incubator ends on
          May 21. We will notify the winners individually towards the end
          of May. All teams&apos; scores will be made public after our
          conference on June 1.
        </FaqItem>
        <br />
        <h3>
FAQ for Mentors
        </h3>
        <FaqItem
          open={shownFaqItems.n22}
          question="How many teams are there?"
          toggle={show => toggleFaqItem('n22', show)}
        >
          We have 94 so far. Here’s a team list:
          &zwnj;
          <a
            href="https://airtable.com/shrrtV5S2261uBCNJ"
          >
            https://airtable.com/shrrtV5S2261uBCNJ
          </a>
        </FaqItem>
        <FaqItem
          open={shownFaqItems.n23}
          question="What happens if I cannot reach my team?"
          toggle={show => toggleFaqItem('n23', show)}
        >
          Please let us know. We will try to contact them to make sure they
          know about the rules.
        </FaqItem>
        <FaqItem
          open={shownFaqItems.n24}
          question="What teams are assigned to me?"
          toggle={show => toggleFaqItem('n24', show)}
        >
          You should’ve got an email listing 2-3 teams that you are
          assigned to. If you have not got an email, please get in touch
          socialimpact@consensys.net. If you cannot get access to the
          forums we provided in the email, please contact @jcori.
        </FaqItem>
        <FaqItem
          open={shownFaqItems.n25}
          question="Can I see submissions from all teams or just my own teams?"
          toggle={show => toggleFaqItem('n25', show)}
        >
          You can see submissions from only your own teams.
        </FaqItem>
        <FaqItem
          open={shownFaqItems.n26}
          question="What happens if the team delays in submitting?"
          toggle={show => toggleFaqItem('n26', show)}
        >
          If teams submitted all weekly checkpoints timely, they will get
          the portion of the Delivery scores. However, the weekly
          checkpoints will not be immediately evaluated after each
          deadline. You can work with them on those deliverables until the
          Incubator ends on May 21.
        </FaqItem>
      </div>
    </div>
  );
}


BsicHackathon.propTypes = {
  shownFaqItems: PT.shape().isRequired,
  toggleFaqItem: PT.func.isRequired,
};

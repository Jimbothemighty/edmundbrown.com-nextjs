import { Footer } from "@/app/components/Footer";
import Link from "next/link";

import '@/app/assets/css/style.css';
import '@/app/assets/css/style.ResponsiveBlurb.css';
import '@/app/assets/css/style.DemoFooter.css';

export default function Page() {
  return (
    <>
      <Content/>
      <Footer/>
    </>
  )
}


function Content() {
  return <div style={{flexGrow: 1}}>
    <div className="responsiveBlurb">
        <Link href="https://edportals.io/" target="_blank">
            <h1 style={{paddingBottom: "0px", marginBottom: "0px"}}>AXLR8 Portals NoCode Platform</h1>
        </Link>

        <h3>Lead Application Engineer: responsible for Design, Code, Performance and Scalability, Testing, Security, Rollout, User Documentation.</h3>

        <br/>
        <Link href="https://edportals.io/portals/clientPortal/multi_tenant/registration/index.php" target="_blank" style={{position: "sticky", bottom: 0, width: "100%"}}>
            <button>Visit AXLR8 Portals</button>
        </Link>

        <h3>Project Overview:</h3>
        <p>I was the lead engineer on this project from inception to V1 production rollout.</p>
        <p>This application replaced an aging CRM system that was built on older web technology.</p>
        <p>The project involved a complete reimagining of the application in order to provide cutting-edge features, utilising modern application design and to push forwards the tech stack in new components.</p>
        <p>In order to achieve this I rewrote a wrote a new codebase in PHP & Javascript and migrated from Dedicated Windows Servers to Linux on an Azure Web App Service.</p>
        <p>From the ground up I wrote a completely new application layer and UI Framework for the client side in Javascript.</p>

        <h3>Business Goals:</h3>
        <p>I determined various factors significantly holding back the company.</p>
        <p>The original application is Enterprise only and furthermore the sales model for the original application was based on a referral/telesales business model and despite being a SAAS product it has no significant online presence.</p>
        <p>In order to create new avenues for growth and to dramaticaly improve efficiency, I rewrote the application to support client multi-tenancy and migrated to Azure.</p>

        <h3>Features:</h3>
        <ul>
            <li>I wrote/integrated with a number of user configurable UI widgets including datagrids, calendars, kanbans, maps, etc.</li>
            <li>Template pack marketplace where users could get started with a base application design of their choice from scratch.</li>
            <li>Product allows user theming, user designed menus, custom fields.</li>
            <li>Fully user designable UIs via page builder.</li>
            <li>Light/Dark mode.</li>
            <li>User preferences.</li>
            <li>User permissions.</li>
        </ul>

        <h3>Supporting Infrastructure Improvements:</h3>
        <ul>
            <li>CSS and JS minifier/bundling</li>
            <li>In House Global application error handling with a centralised backend</li>
            <li>In House Analytics</li>
            <li>NPM build utilities</li>
            <li>Security improvements</li>
            <li>PHP Upgrade +2 Major versions</li>
            <li>File Security</li>
            <li>Migrated from dedicated servers to Azure: Split application into Database Service, Web App, File Storage</li>
            <li>Performance</li>
            <li>Scalability and Resiliancy (Vertical and horizontal resource scaling with database read mirrors)</li>
        </ul>

        <h3>Outcomes:</h3>
        <ul>
            <li>Within usage limits the new product is free.</li>
            <li>Onboarding is entirely digitial via sign up form.</li>
            <li>Zero start up time/costs associated with new non-enterprise customers, and significantly lower time/costs for Enterprise start up.</li>
            <li>Revenue is generated passively via low cost premium subscriptions</li>
            <li>Digital marketing is used to generate growth without the need for cold calling.</li>
            <li>Clients can sign up with no interaction from the sales team via a freemium business model.</li>
            <li>Moving to a single codebase/platform is easier to maintain rather than one codebase per customer</li>
        </ul>
    </div>
</div>
}
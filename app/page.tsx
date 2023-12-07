import Image from 'next/image'
import { StickyLinks } from './components/StickyLinks'
import { SplashBanner } from './components/SplashBanner'
import { AboutMe } from './components/AboutMe'
import { FeaturedApps } from './components/FeaturedApps'
import { ContactMeForm } from './components/ContactMeForm'
import { Footer } from './components/Footer'

import './assets/css/style.css';
import './assets/css/style.ResponsiveBlurb.css';
import './assets/css/style.StickyLinks.css';
import './assets/css/style.PlatformBlurb.css';
import './assets/css/style.MobileIconContainer.css';
import './assets/css/style.DemoLogin.css';
import './assets/css/style.DemoHeader.css';
import './assets/css/style.DemoFooter.css';
import './assets/css/style.DemoListItem.css';
import './assets/css/style.ContactForm.css';
import './assets/css/style.Blank.css';
import './assets/css/style.FrontPage.css';

export default function Home() {
  return (
    <>
      <StickyLinks/>
      <SplashBanner/>
      <AboutMe/>
      <FeaturedApps/>
      <ContactMeForm/>
      <Footer/>
    </>
  )
}

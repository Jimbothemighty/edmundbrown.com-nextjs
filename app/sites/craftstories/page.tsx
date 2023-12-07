'use client'

import { Footer } from "@/app/components/Footer";
import { GetTheApp } from "@/app/components/GetTheApp";
import { Slider } from "@/app/assets/js/class.Slider";
import Link from "next/link";
import { useEffect } from "react";

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
    useEffect(() => {
        let elem = document.querySelector<HTMLDivElement>(".mediaContainer");
        if (!elem) {
            return;
        }
        let slider = new Slider(elem, [
            '/sites/craftstories/slider1.jpg',
            '/sites/craftstories/slider2.jpg',
            '/sites/craftstories/app_images/1.png',
            '/sites/craftstories/app_images/2.png',
            '/sites/craftstories/app_images/3.png',
            '/sites/craftstories/app_images/4.png',
            '/sites/craftstories/app_images/5.png',
        ]);
    }, [])

    return <div style={{flexGrow: 1}}>
        <div className="responsiveBlurb">
            <Link href="https://craftstories.co.uk/" target="_blank">
                <h1 style={{paddingBottom: "0px", marginBottom: "0px"}}>Craft Stories</h1>
            </Link>
            <p>Craft Stories is a platform for solo and collaborative writing on which creators can build stories over time and optionally make their work available to be read by community members and visitors to the site.
                The website has been released in late 2020. We are in our early days and looking for original, creative content creators to help grow our community.
            </p>
            <br/>
            <div className="mediaContainer" style={{width: "100%", maxWidth: "800px"}}></div>
            <br/>
            <p>
                Craft Stories intends to introduce a number of historical novels that are now in the free use domain, but we hope that the majority of content will be produced by the community.
            </p>
            <br/>
            <p>
                We hope to attract a diverse range of writers from the next generation of creative muses who will let their imaginations run away with them on their fictional endeavours from Romances to Sword & Sorcery adventures.
            </p>
            <br/>
            <br/>
            <Link href="https://craftstories.co.uk/" target="_blank" style={{position: "sticky", bottom: 0, width: "100%"}}>
                <button>Visit Craft Stories</button>
            </Link>
        </div>
        <GetTheApp appName="Craft Stories" />
    </div>
}
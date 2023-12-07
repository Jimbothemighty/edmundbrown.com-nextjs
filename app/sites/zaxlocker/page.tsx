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
            '/sites/zaxlocker/slider1.jpg',
            '/sites/zaxlocker/slider2.jpg',
        ]);
    }, [])
    
  return <div style={{flexGrow: 1}}>
    <div className="responsiveBlurb">
        <Link href="https://zaxlocker.com/" target="_blank">
            <h1 style={{paddingBottom: "0px", marginBottom: "0px"}}>Zax Locker</h1>
        </Link>
        <p>Zax Locker Password Manager is an application for storing all your passwords and credentials in one place.
            All passwords are encrypted and decrypted using a master password that is never transmitted over the internet.
            The application can be used offline but encrypted credentials can be securely backed up to the cloud by signing up to our free service.
            Passwords can be synced between multiple devices using our premium service, which is currently available for free.
        </p>
        <br/>
        <div className="mediaContainer" style={{width: "100%", maxWidth: "800px"}}></div>
        <br/>
        <p>
            On device passwords stored with two layers of encryption. (Encrypted Database and encrypted passwords.)
            Passwords always transmitted encrypted when syncing between devices so passwords in transit are End-to-End encrypted.
            Passwords stored in the cloud are always encrypted and cannot be decrypted by the server. Only the user can decrypt the passwords once downloaded to the device using their master password.
            Device*-to-Server communication is encrypted with SSL and also additional asymmetric encryption to ensure data in transit cannot be intercepted.
            Device* refers to installed applications on Windows, iOS and Android. Website communications are encrypted with SSL.
        </p>
        <br/>
        <br/>
        <Link href="https://zaxlocker.com/" target="_blank" style={{position: "sticky", bottom: 0, width: "100%"}}>
            <button>Visit Zax Locker</button>
        </Link>
    </div>
    <GetTheApp appName="Zax Locker" />
  </div>
}
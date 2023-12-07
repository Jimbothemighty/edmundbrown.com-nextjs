import Image from "next/image"
import Link from "next/link"

export function Footer() {
return <div id="footer">
    <div id="footer-links" className="col-container">
        <div className="col links">
            <Link href="/#aboutUs">About</Link><br/>
            <Link href="/#contactUs">Contact</Link><br/>
            <Link href="/#featuredApps">Featured Apps</Link><br/>
        </div>
        <div className="col links">
            <Link href="/sites/craftstories/">Craft Stories</Link><br/>
            <Link href="/sites/zaxlocker/">Zax Locker</Link><br/>
            <Link href="/sites/axlr8portals/">AXLR8 Portals NoCode</Link><br/>
            <Link href="/sites/edui/index.html">EDUI JS Framework</Link><br/>
        </div>

        <div className="col details fullwidth">
            <div style={{display: "flex"}}>
                <ImageIcon icon="/sites/craftstories/brand_icon.png"/>
                <ImageIcon icon="/sites/axlr8portals/brand_icon.png"/>
                <ImageIcon icon="/sites/zaxlocker/brand_icon.png"/>
            </div>
            <br/>
            <Link href="mailto:ed@edmundbrown.com">ed@edmundbrown.com</Link><br/><br/>
            07714163509<br/><br/>
        </div>
    </div>

    <div className="bar">
        <span className="co-name">Ed Brown © 2023</span>
    </div>
</div>
}

type iconType = {
    icon : string
}

function ImageIcon({ icon } : iconType) {
    return <Image alt="Icon" src={icon} width={50} height={50} style={{width: "50px", height: "auto"}}/>
}
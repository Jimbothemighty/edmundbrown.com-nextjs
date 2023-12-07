'use client';

import Link from "next/link";

export function SplashBanner() {
    return <div className="demoLogin">
        <div className="bg_img lazyImg" 
            style={{backgroundImage: "url('/wallpaper/splash.jpg')"}}  
            data-lazy-img="/wallpaper/splash.jpg">
        </div>
        <div className="bg_mask"></div>
        <div className="fg_content">
            <div className="siteName">
                <h3 style={{margin: 0}}>Edmund Brown</h3>
                <h4 style={{margin: 0}}>Lead Software Engineer</h4>
            </div>
            <div className="centeredBox">
                <MobileIcon title="Zax Locker" icon="/sites/zaxlocker/brand_icon.png" navTo='/sites/zaxlocker/'/>
                <MobileIcon title="Craft Stories" icon="/sites/craftstories/brand_icon.png" navTo='/sites/craftstories/'/>
                <MobileIcon title="AXLR8 Portals" icon="/sites/axlr8portals/brand_icon.png" navTo='/sites/axlr8portals/'/>
            </div>
        </div>
    </div>
}

type mobileIconType = {
    title : string,
    icon : string,
    navTo : string,
}

function MobileIcon({ title, icon, navTo } : mobileIconType) {
    return <Link href={navTo}><div className="centeredBox">
            <div className="mobileIconContainer">
                <img src={icon} alt="" srcSet=""/>
                {title}
            </div>
        </div>
    </Link>
}
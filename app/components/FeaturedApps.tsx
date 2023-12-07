'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MouseEvent, MouseEventHandler } from 'react';

const listItems = [
    {
        "gameId" : 0,
        "categories" : [
            "Social",
            "Platform",
            "Creative Writing",
            "Publishing"
            ],
        "name" : "Craft Stories",
        "link" : "/sites/craftstories/",
        "game_image" : "/sites/craftstories/splash.jpg",
        "game_image_thumb" : "/sites/craftstories/splash_thumb.jpg",
        "game_icon" : "/sites/craftstories/brand_icon.png",
    },
    {
        "gameId" : 1,
        "categories" : [
            "Platform",
            "End 2 End Encrypted",
            "Security",
            "Passwords",
            "Data Locker",
        ],
        "name" : "Zax Locker",
        "link" : "/sites/zaxlocker/",
        "game_image" : "/sites/zaxlocker/splash.jpg",
        "game_image_thumb" : "/sites/zaxlocker/splash_thumb.jpg",
        "game_icon" : "/sites/zaxlocker/brand_icon.png",
    },
    // [
    //     "gameId" : 2,
    //     "categories" : [
    //         [
    //             "cat_name" : "Social"
    //         ],
    //         [
    //             "cat_name" : "Platform"
    //         ],
    //         [
    //             "cat_name" : "End 2 End Encrypted",
    //         ],
    //         [
    //             "cat_name" : "Instant Messaging",
    //         ],
    //         [
    //             "cat_name" : "Media",
    //         ],
    //     ],
    //     "name" : "zApp",
    //     "link" : "/sites/zapp/",
    //     "game_image" : "/sites/zapp/splash.jpg",
    //     "game_image_thumb" : "/sites/zapp/splash_thumb.jpg",
    //     "game_icon" : "/sites/zapp/brand_icon.png",
    // ],
    {
        "gameId" : 3,
        "categories" : [
            "NoCode",
            "Platform",
            "Application Development",
            "CRM",
        ],
        "name" : "AXLR8 Portals",
        "link" : "/sites/axlr8portals/",
        "game_image" : "/sites/axlr8portals/splash.jpg",
        "game_image_thumb" : "/sites/axlr8portals/splash_thumb.jpg",
        "game_icon" : "/sites/axlr8portals/brand_icon.png",
    },
    {
        "gameId" : 3,
        "categories" : [
            "Framework",
            "Code",
            "HMR",
            "JavaScript",
        ],
        "name" : "EDUI JavaScript Framework",
        "link" : "sites/edui/index.html",
        "game_image" : "/sites/edui/splash.jpg",
        "game_image_thumb" : "/sites/edui/splash_thumb.jpg",
        "game_icon" : "/sites/edui/brand_icon.png",
        "target" : "_blank"
    },
];

export function FeaturedApps() {
    return <>
    <div id="featuredApps" className="responsiveBlurb">
        <div className="blurbContainer" style={{margin: "0 auto"}}>
            <h2 style={{marginBottom: "0px"}}>Featured Applications</h2>
        </div>
    </div>
    <div className="demoContent">
        {listItems.map((props, index) => <ListItem key={index} {...props}/>)}
    </div>
    </>
}

type appItem = {
    gameId : number,
    categories : Array<string>,
    name : string,
    link : string,
    game_image : string,
    game_image_thumb : string,
    game_icon : string,
}

function ListItem({ gameId, categories, name, link, game_image, game_icon, game_image_thumb } : appItem) {
    function onHoverFunc(event : MouseEvent<HTMLImageElement>) {
        const elem = event.currentTarget;
        elem.style.transform ="scale(1.3)";
    }
    
    function endHoverFunc(event : MouseEvent<HTMLImageElement>) {
        const elem = event.currentTarget;
        elem.style.transform ="scale(1.0)";
    }
    
    return <Link className="demo_list_item" href={link}>
        <div className="game_name">{name}</div>
        <div className="game_image" style={{backgroundImage: `url(${game_image})`}} data-lazy-img={game_image}>
            <Image alt="Icon" width={100} height={100} style={{height: "100px", width: "100px"}} src={game_icon} onMouseEnter={onHoverFunc} onMouseLeave={endHoverFunc}/>
        </div>
        <div id="categoryList" className="game_cats">
            {categories.map((category, index) => <span key={index} className="categoryLabel gameCategory">{category}</span>)}
        </div>
    </Link>
}
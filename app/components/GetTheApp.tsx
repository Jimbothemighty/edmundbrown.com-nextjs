import '@/app/assets/css/style.GetTheAppContainer.css';
import Image from "next/image";

type appNameType = {
    appName : string
}

export function GetTheApp({ appName } : appNameType) {
    return <div className="responsiveBlurb" style={{display: "flex", flexDirection: "column"}}>
    <div className="blurbContainer" style={{margin: "0 auto"}}>
    <h2>Get The App</h2>
    <div id="getTheApp">
        <div className="getTheAppContainer">

        <div style={{marginBottom: "20px"}}>
                The {appName} app is available on the Google Play Store and iOS App Store.
            </div>
            <div className="getTheAppImages">
                <Image alt="Google Play Icon" src="/images/logos/google_play_150.png" style={{width: "100px", height: "100px"}} width={100} height={100}/>
                <Image alt="Apple Store Icon" src="/images/logos/apple_app_store_150.png" style={{width: "100px", height: "100px"}} width={100} height={100}/>
            </div>
        </div>
    </div>
</div>
</div>
}
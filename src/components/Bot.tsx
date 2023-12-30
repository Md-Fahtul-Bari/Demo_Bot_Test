import Script from "next/script";

export default function Bot(){
    return(
        <div>
        <Script src="https://cdn.botpress.cloud/webchat/v1/inject.js"></Script>
        <Script src="https://mediafiles.botpress.cloud/8a3b64b5-cadf-4b08-8759-2da896c26ff9/webchat/config.js" defer></Script>
        </div>
    );
}
import { Html, Head, Main, NextScript } from "next/document";
import { getCssText } from "../styles";

export default function Document(){
    return(
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            
                <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }}/>
            </Head>
            <body>
               <Main />
               <NextScript /> 
            </body>
        </Html>
    )
}
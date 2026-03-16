
// MyInfo.jsx
import "./MyInfo.css";
import aboutme from "./images/aboutme.png";

function MyInfo() {
    return (
        <body>
        <div>

            <div className="picture">
                      
            <img className="canva" src={aboutme} alt="logo" />
            
            </div>
            <h1>About me and my buisness</h1>
            <p>My name is Kenneth Edward King II. A little about me is that I am 12 years old, I love basketball, I love art and was born and raised in New Jersey. 
                I love to play with legos and am a huge spiderman fan. Also "Go Knicks!!!" I love spending time with my family and friends. This is my
                 buisness called Kenneths Cocoa Kreations. This buisness is a 
                 healthy homemade gorme hot cocoa selling buisness. The difference
                  between this cocoa and cocoa you can find in the store is that
                  it stays away from refined sugars. My cocoa uses a healthier 
                  substatute, coconut sugar. I started this buisness last year
                   as apart of an investors leauge competition. The winner was
                    the person with the highest ROI or return on
                     investments. Last year the buisness was very
                      successful. But I only sold cocoa to my family and friends. So I wanted to share my cocoa to people more abroad.
                       This year I was selected to be
                  a vendor at an area work day event and sold my cocoa. I have sold my cocoa more
                   abroad to coder coaches, family, friends and people I did not even know. 
                   So come now and purchase some of my delicious cocoa from Kenneth's Cocoa Kreations!</p>
        </div>
        </body>
    );
}

export default MyInfo; // Exporting MyInfo a the default
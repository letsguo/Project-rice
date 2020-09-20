import React from 'react';
import './ClubPreview.css'

const ClubPreview = () => {
    const imgSrc = "https://www.gllholdings.com/wp-content/uploads/2019/07/close-up-of-investors-around-savings-deciding-C72WJM9-1080x675.jpg";
    const description = "The purpose of the Investment Club is to introduce students to stocks, bonds, mutual funds, branding, and various other" +
        "ways you can invest your money so it is working for you.  The students will participate in the nationwide Stock Market Game where they " +
        "can compete against students all over the country through their investment decisions via the game.\n";
    return (
       <div className={"clubPreview"}>
           <img className={"imgContainer"} src={imgSrc} alt={"CHS"} />
            <div className={"clubPreviewContainer row"}>
                <div className={"col"}>
                    <div className={"clubPreviewContainer clubPreviewTitle"}>
                        Investment Club
                    </div>
                    <div className={"clubPreviewContainer clubTags"}>
                        Norwell High School -
                        Norwell, MA
                    </div>
                    <div className={"clubPreviewContainer clubTags"}>
                        Tags: open to collaborate, business, finance
                    </div>
                </div>
                <div className={"clubPreviewContainer col"}>
                   <div className={"clubPreviewSubtitle"}>
                        <a href={"https://www.norwellschools.org/domain/520"}>Website</a>
                   </div>
                </div>
            </div>
           <div className={"clubPreviewContainer row"}>
               <div className={"clubPreviewContainer col"}>
                   <div className={"clubPreviewTitle"}>
                       Description
                   </div>
                   <p className={"paragraphDescription"}>
                       {description}
                   </p>
               </div>
           </div>
           <div className={"clubPreviewContainer"}>
               <div className={"clubPreviewTitle contactUs"}>
                   Contact Us
               </div>
               <div className={"clubPreviewSubtitle clubPreviewContactEmail"}>
                   kylie.calzone@norwellschools.ord
               </div>
           </div>
       </div>
    )
};

export default ClubPreview

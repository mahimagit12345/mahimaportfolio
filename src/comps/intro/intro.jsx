import "./intro.css";
import mahim from "../../images/mahim.png";



export default function intro() {
    return (
        
        <div className="i" id="intro"> 
        
         <div className="i-left">
                    
                   <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello,my name is</h2>
                    <h2 className="i-name">Mahima Govekar</h2>
                    
                    <div className="i-title">

                        <div className="i-title-wrapper">
                            
                            <div className="i-title-item">Website Designing</div>
                            <div className="i-title-item">Logo Designing</div>
                            
                            
                        </div>
                    </div>
                    <div className="i-title1">

                    <div className="i-title-wrapper1">
    
                        <div className="i-title-item1">Website Designing</div>
                        <div className="i-title-item1">Logo Designing</div>
    
    
                    </div>
                    </div>
                    

                    <div className="i-desc">
                        I design websites and also logo Designing.
                    </div>
                </div>
            </div>
            <div className="i-right">

                <div className="i-bg">
                    <img src={mahim} alt="" className="i-img" />
                </div>
                <div className="i-bg1">
                    <img src={mahim} alt="" className="i-img" />
                </div>
            </div>
        </div>
    )
}

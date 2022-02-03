import "./courses.css";
import html from "../../images/html-5.png";
import css from "../../images/css-3.png";
import c from "../../images/c.png";
import javascript from "../../images/javascript.png";
import php from "../../images/php.png";
import corel from "../../images/corel.png";

export default function courses() {
    return (
        <div className="main-box1" id="course">
            <div className="title-box2">
                Courses
            </div>
            <div className="desc2">
                Have Experience in Courses
            </div>
            <div className="cont-box2">
                <div className="img-box2">
                    <img src={html} alt="" className="c-icon" /> 

                </div>
                <div className="img-box2">
                    <img src={css} alt="" className="c-icon" /> 
                </div>
            </div>
            <div className="cont-box2">
                <div className="img-box2">
                    <img src={c} alt="" className="c-icon"/>
                </div>
                <div className="img-box2">
                    <img src={javascript} alt="" className="c-icon" /> 
                </div>
            </div>
            <div className="cont-box2">
                <div className="img-box2">
                    <img src={php} alt="" className="c-icon"/>
                </div>
                <div className="img-box2">
                    <img src={corel} alt="" className="c-icon" /> 
                </div>
            </div>

            
        </div>
    )
}

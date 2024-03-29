import Style from "./Intro.module.css";
import Banner from "../../imgs/bg-home.jpg";
import Myimage from "../../imgs/Azazy.jpg";
// import Particles from "../Particle/Particle";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { SiLinkedin } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { FaDownload } from "react-icons/fa"
import Title from "../Title/Title";
import CV from "../../imgs/CV/Resume.pdf";
// import NavBar from "../NavBar/NavBar";


const Intro = () => {
    Title("Azaze")
    const { text } = useTypewriter({
        /* Config */
        words: ['Mohamed Alazaze,', "Full Stack Developer"],
        loop: true,
        cursor: true,
        cursorStyle: '|',
        typeSpeed: 30,
        deleteSpeed: 30,
        delaySpeed: 2000,
    })
    return (
        <>

            {/* <Particles /> */}
            <div className={Style["i-container"]}>
                <div className={Style["i-image"]}>
                    <div className={Style["i-layout"]}></div>
                    <img src={Banner} alt="img" />
                </div>
                <div className={Style["i-intro"]}>
                    <div className={Style["i-me"]}>
                        <img src={Myimage} alt="img" />
                    </div>
                    <div className={Style["i-info"]}>
                        <div>
                            <h1>
                                Hi, I'm
                                <br />
                                <span >{text}<Cursor /></span>
                            </h1>
                            <p>Full Stack Developer who is passionate about programming
                                and building fully responsive, SEO friendly applications
                                written with clean code in clean architecture for best
                                performance, using new technologies at all levels of difficulty.

                            </p>
                        </div>
                        {/* <div className={Style["i-my-cv"]}>
                            <a href={CV} download>
                                Download C.V
                                <FaDownload />
                            </a>
                        </div> */}
                        <div className={Style["i-my-cv"]}>
                            <a href={CV} download>
                                Download C.V
                            </a>
                            <div className={Style["i-my-cv-icon"]}>
                                <FaDownload />

                            </div>
                        </div>
                        <div className={Style["icons"]}>
                            <a
                                href="https://www.linkedin.com/in/mohamed-al-azaze-23a56010b/"
                                target="_blank"
                                rel="noreferrer">
                                <SiLinkedin />
                            </a>
                            <a
                                href="https://github.com/mohamed-azaze"
                                target="_blank"
                                rel="noreferrer">
                                <BsGithub />
                            </a>
                        </div>
                    </div>
                </div>
            </div >
        </ >
    )
}

export default Intro
import "./Home.css";
import Image from "./Images/1.jpg";
import Svelteicon from "./Images/svelte-icon.svg";
// import SvelteStrapicon from "./Images/sveltestrap-icon.png";
// import Canvaicon from "./Images/canva-icon.jpg";
// import SocialIcon from "./Images/socialMedia.png";
import RouterIcon from "./Images/Router-Iocn.png";
import SwitchIcon from "./Images/SwitchIcon.png";
import AccessPointIcon from "./Images/AccessPoint.png";
import Point2Iocn from "./Images/Point2Icon.jpg";
// import WLCIcon from "./Images/WLCRouter.png";
// import WinServer from "./Images/WinServer.png";
import CompAss from "./Images/CompAss.png";
// import Troubleshooting from "./Images/Troubleshooting.png";
// import OSInstall from "./Images/OSInstall.png";
// import Arduino from "./Images/ArdunioIcon.png";
// import IoT from "./Images/IotIcon.png";

import React, { useEffect, useRef } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    Aos.init({ duration: 1000, offset: 200, delay: 100 });
  }, []);

  const typingTimeoutRef = useRef(null);
  const erasingTimeoutRef = useRef(null);
  const currentTextIndexRef = useRef(0);
  const currentCharIndexRef = useRef(0);

  useEffect(() => {
    const textElement = document.getElementById("Typing");
    const texts = ["Front-end Developer 💻", "Graphic Designer 🎨"];
    const typingSpeed = 100;
    const delayBetweenTexts = 1000;

    function type() {
      const currentTextIndex = currentTextIndexRef.current;
      const currentCharIndex = currentCharIndexRef.current;

      if (currentCharIndex < texts[currentTextIndex].length) {
        textElement.textContent +=
          texts[currentTextIndex].charAt(currentCharIndex);
        currentCharIndexRef.current += 1;
        typingTimeoutRef.current = setTimeout(type, typingSpeed);
      } else {
        erasingTimeoutRef.current = setTimeout(erase, delayBetweenTexts);
      }
    }

    function erase() {
      const currentTextIndex = currentTextIndexRef.current;
      const currentCharIndex = currentCharIndexRef.current;

      if (currentCharIndex > 0) {
        textElement.textContent = texts[currentTextIndex].substring(
          0,
          currentCharIndex - 1
        );
        currentCharIndexRef.current -= 1;
        erasingTimeoutRef.current = setTimeout(erase, typingSpeed);
      } else {
        currentTextIndexRef.current = (currentTextIndex + 1) % texts.length;
        currentCharIndexRef.current = 0;
        typingTimeoutRef.current = setTimeout(type, typingSpeed);
      }
    }

    // Start the typing effect
    type();

    // Cleanup function to clear timeouts if the component unmounts
    return () => {
      clearTimeout(typingTimeoutRef.current);
      clearTimeout(erasingTimeoutRef.current);
    };
  }, []);

  return (
    <>
      <div className="Home">
        <div className="ProfileContainer">
          <div className="ProfileName1">
            I am
            <span className="NameSpan">Vikash Sharma</span>
          </div>
          <div className="ProfileName2">
            And I am <span id="Typing" className="Typing"></span>
          </div>
          <div className="ProfileIcon">
            <a href="https://www.linkedin.com/in/vikash-sharma-48b27a263/">
              {" "}
              <i className="bx bxl-linkedin linkedin"></i>
            </a>
            <a href="https://github.com/viku-dev">
              {" "}
              <i className="bx bxl-github github"></i>
            </a>
            <i className="bx bxl-whatsapp snapchat"></i>
          </div>
        </div>
        <img className="Profile" src={Image} alt="Profile" />
      </div>

      {/* Here the start the About page */}
      <section className="About" id="About">
        <h1 className="AboutTitle" data-aos="fade-down">
          ABOUT ME
        </h1>
        <div className="AboutContaienr">
          <div className="AboutDetails" data-aos="fade-down">
            <p>
              I'm a frontend web developer and graphic designer, adept at
              weaving together code, design, and creative solutions to craft
              captivating digital experiences. With a strong foundation in
              React.js and Svelte.js, I specialize in bringing websites to life
              through innovative problem-solving and meticulous attention to
              detail. My journey is fueled by a passion for transforming ideas
              into user-friendly interfaces that engage and inspire. By
              seamlessly integrating frontend and design principles, I aim to
              create memorable online experiences that resonate with audiences.
              Let's collaborate and bring your vision to reality with
              cutting-edge technology and thoughtful design.
            </p>
          </div>
        </div>
      </section>
      <section className="Skill" id="Skill">
        <h1 className="SkillTitle" data-aos="fade-down">
          My Skills
        </h1>
        <div className="SkillContainer">
          <div className="SoftwareSkillContainer">
            <h2 data-aos="fade-down">Software Skills</h2>
            <div className="SkillContainerbtn" data-aos="zoom-in-left">
              <i className="bx bxl-html5" style={{ color: "#2430c5" }}></i>
              <h4>HTML5</h4>
            </div>
            <div className="SkillContainerbtn" data-aos="zoom-in-right">
              <i class="bx bxl-css3" style={{ color: "#2430c5" }}></i>{" "}
              <h4>CSS3</h4>
            </div>
            <div className="SkillContainerbtn" data-aos="zoom-in-left">
              <i class="bx bxl-javascript" style={{ color: "#2430c5" }}></i>{" "}
              <h4>JavaScript</h4>
            </div>
            <div className="SkillContainerbtn" data-aos="zoom-in-right">
              <i class="bx bxl-react"></i> <h4>React Js</h4>
            </div>
            <div className="SkillContainerbtn" data-aos="zoom-in-left">
              <img src={Svelteicon} alt="img" />
              <h4>Svelte Js</h4>
            </div>
            <div className="SkillContainerbtn" data-aos="zoom-in-right">
              <i class="bx bxl-python" style={{ color: "#2430c5" }}></i>
              <h4>Python</h4>
            </div>
            <div className="SkillContainerbtn" data-aos="zoom-in-left">
              <i class="bx bxl-bootstrap" style={{ color: "#2430c5" }}></i>{" "}
              <h4>Boostrap</h4>
            </div>
          </div>

          <div className="SoftwareSkillContainer">
            <h2 data-aos="fade-down">Networking Skills</h2>
            <div className="SkillContainerbtn" data-aos="zoom-in-left">
              <img src={RouterIcon} alt="img" />
              <h4>Router Configuration</h4>
            </div>
            <div className="SkillContainerbtn" data-aos="zoom-in-right">
              <img src={SwitchIcon} alt="img" />
              <h4>Switch Configuration</h4>
            </div>
            <div className="SkillContainerbtn" data-aos="zoom-in-left">
              <img src={AccessPointIcon} alt="img" />
              <h4>Access Point Config</h4>
            </div>
            <div className="SkillContainerbtn" data-aos="zoom-in-right">
              <img src={Point2Iocn} alt="img" />
              <h4>Point to Point Config</h4>
            </div>
            <div className="SkillContainerbtn" data-aos="zoom-in-left">
              <img src={CompAss} alt="img" />
              <h4>Hardware Configuration</h4>
            </div>
          </div>
        </div>
      </section>
      <section >

      </section>
      <section className="Contact" id="Contact">
        <h1 className="ContactTitle" data-aos="zoom-in-down">
          Get in Touch
        </h1>
        <h1 className="ContactHeading">Vikash Sharma</h1>
        <div className="ContactSocaillink">
          <a href="https://www.linkedin.com/in/vikash-sharma-48b27a263/">
            {" "}
            <i className="bx bxl-linkedin"></i>
          </a>
          <a href="https://github.com/viku-dev">
            {" "}
            <i className="bx bxl-github github"></i>
          </a>
          <i className="bx bxl-whatsapp"></i>
          <i className="fa-brands fa-x-twitter"></i>
          <i className="fa-solid fa-envelope"></i>
        </div>
        <p className="ContactCopyright">
          {" "}
          <i className="fa-regular fa-copyright"></i> 2024 All Right Reserved
        </p>
      </section>
    </>
  );
}
export default Home;

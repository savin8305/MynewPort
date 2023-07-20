import type { NextPage } from "next";
import Github from "../assets/github.webp";
import Linkedin from "../assets/linkedin.webp";
import Instagram from "../assets/instagram.webp";
import Gmail from "../assets/gmail.webp";

export const Footer: NextPage = () => {
  return (
    <footer className="footer">
      <div className="footer_copyright">
        <p className="footer_copyright_textOne">No &copy; copyright issues.</p>
        <p className="footer_copyright_textTwo">Feel free to copy.</p>
        <p className="footer_copyright_textThree">
          Have questions or want to collaborate? Feel free to get in touch! I'm always open to
          exciting opportunities.
        </p>
      </div>
      <div className="footer_socialMedia">
        <p>Connect with me !</p>
        <div className="footer_socialMedia_links">
          <img
            src={Github.src}
            alt=""
            onClick={() => window.open("https://github.com/Savin8305", "_blank")}
          />
          <img
            src={Linkedin.src}
            alt=""
            onClick={() => window.open("https://www.linkedin.com/in/akash9770/", "_blank")}
          />
          <img
            src={Instagram.src}
            alt=""
            onClick={() => window.open("https://www.instagram.com/visavinah", "_blank")}
          />
          <img
            src={Gmail.src}
            alt=""
            onClick={() => window.open("mailto:jobforakash9770@gmail.com", "_blank")}
          />
        </div>
      </div>
    </footer>
  );
};

import { Link } from "react-router-dom";
import S from "./footer.module.scss";
import face from "../../assets/Footer/FacebookIcon.png";
import twitter from "../../assets/Footer/TwitterIcon.png";
import youtube from "../../assets/Footer/YoutubeIcon.png";
import linkedin from "../../assets/Footer/LinkedinIcon.png";
import instagram from "../../assets/Footer/InstagramIcon.png";
export default function footer() {
  return (
    <footer className={S.footer}>
      <div className={S.footer__div__redes}>
        <div className={S.footer__num}>
          <p>4002-8922</p>
        </div>
        <div className={S.footer__redes}>
          <img src={face} alt="Icone do Facebook" />
          <img src={twitter} alt="Icone do Twitter" />
          <img src={youtube} alt="Icone do Youtube" />
          <img src={linkedin} alt="Icone do Linkedin" />
          <img src={instagram} alt="Icone do Instagram" />
        </div>
      </div>
      <div className={S.footer__div__cr}>
        <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024 </p>
      </div>
    </footer>
  );
}

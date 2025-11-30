import React from "react";
import "./Footer.css";
import playstore from "./imgs/play-store.png";
import appstore from "./imgs/app-store.png";
import * as BsIcons from "react-icons/bs";
import * as SiIcons from "react-icons/si";
import * as BiIcons from "react-icons/bi";
import eviloni from "../../components/Navbar/imgs/samurai.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer-layout ">
        <div className="footer ">
          <div className="useful-links">
            <div>
              <ul>
                Need Help?
                <li>
                  <Link
                    to="/contact-us"
                    style={{
                      fontFamily: "Mukta",
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/frequently-asked-questions"
                    style={{
                      fontFamily: "Mukta",
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms-and-conditions"
                    style={{
                      fontFamily: "Mukta",
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    Terms and Conditions
                  </Link>
                </li>
              </ul>
              <div className="app-navs">
                TRY OUR APP
                <img src={playstore} alt="Google Play Store" />
                <img src={appstore} alt="Apple App Store" />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <ul className="cod-available">
                <li>
                  <span className="rupee-symbol">
                    <BiIcons.BiRupee />
                  </span>
                  COD Available
                </li>
                <li>
                  <span className="refresh-symbol">
                    <BiIcons.BiRefresh />
                  </span>
                  30 Days Easy Return
                </li>
              </ul>
              <div className="appnavssocials">
                <div className="sm-handles">
                  Follow Us:
                  <div className="sm-icons">
                    <span>
                      <BsIcons.BsFacebook />
                    </span>
                    <span>
                      <BsIcons.BsInstagram />
                    </span>
                    <span>
                      <BsIcons.BsTwitter />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="end">
            <div className="sponsors ">
              <div className="sp-icons" style={{ fontFamily: "Mukta" }}>
                Secure Payment Partners:
                <span className="first-sp-icon">
                  <SiIcons.SiVisa />
                </span>
                <span>
                  <SiIcons.SiGooglepay />
                </span>
                <span>
                  <SiIcons.SiPaytm />
                </span>
                <span>
                  <SiIcons.SiAmazonpay />
                </span>
              </div>
              <div className="evil-oni-logo">
                <img src={eviloni} alt="" />
                <div className="copyright-text">&copy; Evil Oni 2021-22</div>
              </div>
              <div
                className="shipping-icons"
                style={{
                  fontFamily: "Mukta",
                }}
              >
                Shipping Partners:
                <span>
                  <SiIcons.SiFedex />
                </span>
                <span>
                  <SiIcons.SiDhl />
                </span>
                <span>
                  <SiIcons.SiCaterpillar />
                </span>
                <span>
                  <SiIcons.SiUps />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="footerMob">
          <div className="useful-links">
            <div>
              <ul>
                Need Help?
                <li>
                  <Link
                    to="/contact-us"
                    style={{
                      fontFamily: "Mukta",
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/frequently-asked-questions"
                    style={{
                      fontFamily: "Mukta",
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms-and-conditions"
                    style={{
                      fontFamily: "Mukta",
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    Terms and Conditions
                  </Link>
                </li>
              </ul>
            </div>
            <ul className="cod-available">
              <li>
                <BiIcons.BiRupee />
                COD Available
              </li>
              <li>
                <BiIcons.BiRefresh />
                30 Days Easy Return
              </li>
            </ul>
          </div>
          <div className="appnavssocials">
            <div
              style={{
                color: "white",
                fontFamily: "Bebas Neue",
              }}
            >
              TRY OUR APP
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src={playstore}
                alt="Google Play Store"
                className="gplay-icon"
              />
              <img
                src={appstore}
                alt="Apple App Store"
                className="appstore-icon"
              />
            </div>
          </div>
          <div className="sm-handles">
            <div className="end">
              <div className="followUs">
                <div className="sm-icons">
                  <div>Follow Us:</div>
                  <BsIcons.BsFacebook />
                  <BsIcons.BsInstagram />
                  <BsIcons.BsTwitter />
                </div>
              </div>
              <div className="sponsors">
                <div className="sp-icons" style={{ fontFamily: "Mukta" }}>
                  Secure Payment Partners:
                  <span>
                    <SiIcons.SiVisa className="visa-icon" />
                  </span>
                  <span>
                    <SiIcons.SiGooglepay />
                  </span>
                  <span>
                    <SiIcons.SiPaytm />
                  </span>
                  <span>
                    <SiIcons.SiAmazonpay />
                  </span>
                </div>
                <div className="shipping-icons">
                  Shipping Partners:
                  <span>
                    <SiIcons.SiFedex className="fedex-icon" />
                  </span>
                  <span>
                    <SiIcons.SiDhl />
                  </span>
                  <span>
                    <SiIcons.SiCaterpillar />
                  </span>
                  <span>
                    <SiIcons.SiUps />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;

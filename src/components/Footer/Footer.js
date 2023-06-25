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
      <div className="footer-layout">
        <div className="footer">
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
                <BiIcons.BiRupee
                  style={{ fontSize: "2.5rem", marginRight: "1rem" }}
                />
                COD Available
              </li>
              <li>
                <BiIcons.BiRefresh
                  style={{ fontSize: "2.5rem", marginRight: "1rem" }}
                />
                30 Days Easy Return
              </li>
            </ul>
          </div>
          <div className="appnavssocials">
            <div className="app-navs">
              TRY OUR APP
              <img src={playstore} alt="Google Play Store" />
              <img src={appstore} alt="Apple App Store" />
            </div>
            <div className="sm-handles">
              Follow Us:
              <div className="sm-icons">
                <BsIcons.BsFacebook style={{ marginRight: "1rem" }} />
                <BsIcons.BsInstagram style={{ marginRight: "1rem" }} />
                <BsIcons.BsTwitter style={{ marginRight: "1rem" }} />
              </div>
            </div>
          </div>

          <div className="end">
            <div className="sponsors">
              <div className="sp-icons" style={{ fontFamily: "Mukta" }}>
                Secure Payment Partners:
                <SiIcons.SiVisa
                  style={{
                    marginLeft: "1rem",
                    fontSize: "2.5rem",
                    marginRight: "1rem",
                  }}
                />
                <SiIcons.SiGooglepay
                  style={{ fontSize: "2.5rem", marginRight: "1rem" }}
                />
                <SiIcons.SiPaytm
                  style={{ fontSize: "2.5rem", marginRight: "1rem" }}
                />
                <SiIcons.SiAmazonpay
                  style={{ fontSize: "2.5rem", marginRight: "1rem" }}
                />
              </div>
              <div className="evil-oni-logo">
                <img src={eviloni} alt="" />
              </div>
              <div
                className="shipping-icons"
                style={{
                  transform: "translateY(-0.5rem)",
                  fontFamily: "Mukta",
                }}
              >
                Shipping Partners:
                <SiIcons.SiFedex
                  style={{
                    marginLeft: "1rem",
                    fontSize: "3.5rem",
                    marginRight: "1rem",
                  }}
                />
                <SiIcons.SiDhl
                  style={{ fontSize: "3.2rem", marginRight: "1rem" }}
                />
                <SiIcons.SiCaterpillar
                  style={{ fontSize: "2.5rem", marginRight: "1rem" }}
                />
                <SiIcons.SiUps
                  style={{ fontSize: "2.5rem", marginRight: "1rem" }}
                />
              </div>
            </div>
            <div className="copyright-text">&copy; Evil Oni 2021-22</div>
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
                <BiIcons.BiRupee
                  style={{ fontSize: "2.5rem", marginRight: "1rem" }}
                />
                COD Available
              </li>
              <li>
                <BiIcons.BiRefresh
                  style={{ fontSize: "2.5rem", marginRight: "1rem" }}
                />
                30 Days Easy Return
              </li>
            </ul>
          </div>
          <div className="appnavssocials">
            <div
              style={{
                color: "white",
                fontFamily: "Bebas Neue",
                fontSize: "rem",
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
                style={{ width: "9rem" }}
              />
              <img
                src={appstore}
                alt="Apple App Store"
                style={{ width: "8rem",marginLeft:"0.5rem" }}
              />
            </div>
          </div>
          <div className="sm-handles">
            <div className="end">
              <div className="followUs">
                <div className="sm-icons">
                  <div style={{ fontSize: "1.4rem", marginRight: "1rem" }}>
                    Follow Us:
                  </div>
                  <BsIcons.BsFacebook
                    style={{ fontSize: "2rem", marginRight: "1rem" }}
                  />
                  <BsIcons.BsInstagram
                    style={{ fontSize: "2rem", marginRight: "1rem" }}
                  />
                  <BsIcons.BsTwitter
                    style={{ fontSize: "2rem", marginRight: "1rem" }}
                  />
                </div>
              </div>
              <div className="sponsors">
                <div className="sp-icons" style={{ fontFamily: "Mukta" }}>
                  Secure Payment Partners:
                  <SiIcons.SiVisa
                    style={{
                      marginLeft: "1rem",
                      fontSize: "2.5rem",
                      marginRight: "1rem",
                    }}
                  />
                  <SiIcons.SiGooglepay
                    style={{ fontSize: "2.5rem", marginRight: "1rem" }}
                  />
                  <SiIcons.SiPaytm
                    style={{ fontSize: "2.5rem", marginRight: "1rem" }}
                  />
                  <SiIcons.SiAmazonpay
                    style={{ fontSize: "2.5rem", marginRight: "1rem" }}
                  />
                </div>
                <div
                  className="shipping-icons"
                  style={{
                    transform: "translateY(-0.5rem)",
                    fontFamily: "Mukta",
                  }}
                >
                  Shipping Partners:
                  <SiIcons.SiFedex
                    style={{
                      marginLeft: "1rem",
                      fontSize: "3.5rem",
                      marginRight: "1rem",
                    }}
                  />
                  <SiIcons.SiDhl
                    style={{ fontSize: "3.2rem", marginRight: "1rem" }}
                  />
                  <SiIcons.SiCaterpillar
                    style={{ fontSize: "2.5rem", marginRight: "1rem" }}
                  />
                  <SiIcons.SiUps
                    style={{ fontSize: "2.5rem", marginRight: "1rem" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-text">&copy; Evil Oni 2021-22</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;

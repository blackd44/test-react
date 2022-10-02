import React from "react";
import { Link } from "react-router-dom";

import LinkedInSvg from "../../../assets/svg/linkedIn";
import LogoSvg from "../../../assets/svg/logo";
import FooterForm from "./form";

import './style.css'

const Footer = () => {
    return (
        <section className="footer">
            <div>
                <LogoSvg width="140" height="30" />
                <div className="location upper">
                    <span>RockTech Lithium Inc.</span>
                    <span>600 – 777 Hornby Street Vancouver,</span>
                    <span>British Columbia V6Z 1S4</span>
                </div>
                <div className="contacts">
                    <span>(778) 358-5200</span>
                    <span>info@rocktechlithium.com</span>
                    <span>
                        <LinkedInSvg />
                    </span>
                </div>
            </div>
            <div>
                <div className="links">
                    <Link to={"/whyrocktech"}>Why RockTech?</Link>
                    <Link to={""}>Product</Link>
                    <Link to={""}>Sustainability</Link>
                    <Link to={""}>Investors</Link>
                    <Link to={""}>Career</Link>
                    <Link to={""}>About us</Link>
                    <Link to={""}>Press</Link>
                    <Link to={""}>News</Link>
                </div>
                <div>
                    <Link to={""}>Privacy Policy</Link>
                    <Link to={""}>Imprint</Link>
                </div>
            </div>
            <div>
                <div className="upper">Newsletter</div>
                <div className="upper">Get the latest Rock Tech updates, industry developments & commentaries directly into your mailbox</div>
                <div>
                    <FooterForm />
                </div>
            </div>
        </section>
    )
}

export default Footer
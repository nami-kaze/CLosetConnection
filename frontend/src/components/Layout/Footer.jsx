import React from "react";
import {
    AiFillFacebook,
    AiFillInstagram,
    AiFillYoutube,
    AiOutlineTwitter,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import {
    footercompanyLinks,
    footerProductLinks,
    footerSupportLinks,
} from "../../static/data";
import logo from './Loaderimages/logo.png'; // Adjust the path based on your folder structure

const Footer = () => {
    return (
        <div className="bg-[#8EBF79] text-white">
            <div className="grid grid-cols-1 sm:gird-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 sm:text-center">
                <ul className="px-5 text-center sm:text-start flex sm:block flex-col items-center">
                    <div className="flex items-center">
                        <img
                            src={logo}
                            alt="closet connection"
                            className="mx-auto"
                            //style={{ filter: "brightness(0) invert(1)" }}
                        />
                        
                    </div>
                    <div className="flex items-center mt-[15px] text-center">
                        <AiFillFacebook size={25} className="cursor-pointer" />
                        <AiFillInstagram
                            size={25}
                            style={{ marginLeft: "15px", cursor: "pointer" }}
                        />
                        <AiFillYoutube
                            size={25}
                            style={{ marginLeft: "15px", cursor: "pointer" }}
                        />
                    </div>
                </ul> 
                <div className="ml-2 flex items-center justify-center ">
                            <p>We aim to provide sustainable fashion.</p>
                            
                        </div>
                <div className="ml-2 flex items-center justify-center ">
                <p>
                            For further enquiry you can contact us by emailing us at support@closetconnection.com, or by calling us at 99995-99995.
                            </p>
                    </div>               
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-white text-sm pb-8">
                <span>Made by- Namita, Ishita and Shubham</span>
                <span>Terms · Privacy Policy</span>
                <div className="sm:block flex items-center justify-center w-full">
                </div>
            </div>
        </div>
    );
};

export default Footer;

import React from 'react'
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";


const Hero = () => {
    return (
        <div
            className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
            style={{
                backgroundImage:
                    "url(https://img.freepik.com/premium-photo/clothes-concept-women-wear-hanging-dried-tree-branch-shadow-shading-white-wall_34048-1552.jpg)",
                backgroundSize: "cover",
            }}
        >
            <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
                <h1
                    className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}
                >
                    Thrifting made <br /> FUN!
                </h1>
                <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
                    Best and latest fashion trends, ethnic trends and
                    everything that you are looking for all at one place.<br></br>
                    Lend, Borrow and Enjoy without harming the environment!
                </p>
                <Link to="/products" className="inline-block">
                    <div className={`${styles.button} mt-5`}>
                        <span className="text-[#fff] font-[Poppins] text-[18px]">
                            Shop Now
                        </span>
                    </div>
                </Link>

            </div>

        </div>
    )
}

export default Hero


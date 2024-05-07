import React from "react";
import styles from "../../styles/styles";

const Sponsored = () => {
    return (
        <div className={`${styles.section} hidden sm:block bg-white py-10 px-5 mb-12 cursor-pointer rounded-xl`}>
    <div className="flex justify-between items-center w-full">
        <p style={{ textAlign: "center", fontStyle: "italic" }}>
            Our site is made for you and by you!!
        </p>
    </div>
</div>
    );
};

export default Sponsored;
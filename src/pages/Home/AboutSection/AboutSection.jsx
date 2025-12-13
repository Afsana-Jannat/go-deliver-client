
// import React from 'react';

// const AboutSection = () => {
//     return (
//         <div className="mt-6 mb-8 grid md:grid-cols-2 sm:grid-cols-1 gap-12 max-w-3xl mx-auto">
//             <div className="">
//                 <img src="https://www.wowtheme7.com/tf/transpro/assets/img/about/1.png" alt="" />
//                 <img className="md:ml-[-40px] md:-mt-10 " src="https://www.wowtheme7.com/tf/transpro/assets/img/about/shape.png" alt="" />
//                 <img className=" md:ml-72 md:-mt-40 hidden sm:block" src="https://www.wowtheme7.com/tf/transpro/assets/img/about/2.png" alt="" />
//             </div>
//             <div>
//                 <h2 className="text-[#FF6F00] font-bold mb-2">ABOUT US</h2>
//                 <h2 className="font-bold">WELCOME WORLD WIDE
//                     <br />BEST TRANSPORT COMPANY</h2>
//                 <p className="text-sm mt-1">Competently implement efficient e-commerce
//                     <br /> without cross-unit growth strategies.</p>
//                 <div className="mt-6 grid md:grid-cols-2 sm:grid-cols-1">
//                     <div>
//                         <h2>
//                             Unlimited Revisions
//                             <br />Best Fitness Excercise
//                             <br />Combine Fitness and
//                             <br />Best Solutions
//                         </h2>
//                     </div>
//                     <div>
//                         <img src="https://www.wowtheme7.com/tf/transpro/assets/img/about/3.png" alt="" />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AboutSection;

import React from "react";
import { useTranslation } from "react-i18next";

const AboutSection = () => {
    const { t } = useTranslation();

    return (
        <div className="mt-6 mb-8 grid md:grid-cols-2 sm:grid-cols-1 gap-12 max-w-3xl mx-auto">
            <div>
                <img src="/public/img1..png" alt="" />
                <img className="md:ml-[-40px] md:-mt-10" src="/public/shape.png" alt="" />
                <img className="md:ml-72 md:-mt-40 hidden sm:block" src="/public/img2..png" alt="" />
            </div>

            <div>
                <h2 className="text-[#FF6F00] font-bold mb-2">{t("about.title")}</h2>

                <h2 className="font-bold">
                    {t("about.heading1")}
                    <br />
                    {t("about.heading2")}
                </h2>

                <p className="text-sm mt-1">
                    {t("about.description.line1")}
                    <br />
                    {t("about.description.line2")}
                </p>

                <div className="mt-6 grid md:grid-cols-2 sm:grid-cols-1">
                    <div>
                        <h2>
                            {t("about.points.point1")}
                            <br />
                            {t("about.points.point2")}
                            <br />
                            {t("about.points.point3")}
                            <br />
                            {t("about.points.point4")}
                        </h2>
                    </div>

                    <div>
                        <img src="/public/img3..png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;

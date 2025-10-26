
import React from 'react';

const AboutSection = () => {
    return (
        <div className="mt-6 mb-8 grid md:grid-cols-2 sm:grid-cols-1 gap-12 max-w-3xl mx-auto">
            <div className="">
                <img src="https://www.wowtheme7.com/tf/transpro/assets/img/about/1.png" alt="" />
                <img className="md:ml-[-40px] md:-mt-10 " src="https://www.wowtheme7.com/tf/transpro/assets/img/about/shape.png" alt="" />
                <img className=" md:ml-72 md:-mt-40 hidden sm:block" src="https://www.wowtheme7.com/tf/transpro/assets/img/about/2.png" alt="" />
            </div>
            <div>
                <h2 className="text-[#FF6F00] font-bold mb-2">ABOUT US</h2>
                <h2 className="font-bold">WELCOME WORLD WIDE
                    <br />BEST TRANSPORT COMPANY</h2>
                <p className="text-sm mt-1">Competently implement efficient e-commerce
                    <br /> without cross-unit growth strategies.</p>
                <div className="mt-6 grid md:grid-cols-2 sm:grid-cols-1">
                    <div>
                        <h2>
                            Unlimited Revisions
                            <br />Best Fitness Excercise
                            <br />Combine Fitness and
                            <br />Best Solutions
                        </h2>
                    </div>
                    <div>
                        <img src="https://www.wowtheme7.com/tf/transpro/assets/img/about/3.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
import React from 'react';
import Banner from '../Banner/Banner';
import HowWorks from '../HowWorks/HowWorks';
import ServicesSection from '../Services/ServicesSection';
import AboutSection from '../AboutSection/AboutSection';
import ClientsSection from '../ClientsSection/ClientsSection';
import HomepageChoose from '../HomepageChoose/HomepageChoose';
import BeMerchant from '../BeMerchant/BeMerchant';
import Testimonials from '../Testimonials/Testimonials';
import QuestionArea from '../QuestionArea/QuestionArea';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowWorks></HowWorks>
            <AboutSection></AboutSection>
            <ServicesSection></ServicesSection>
            <ClientsSection></ClientsSection>
            <HomepageChoose></HomepageChoose>
            <BeMerchant></BeMerchant>
            <Testimonials></Testimonials>
            <QuestionArea></QuestionArea>
        </div>
    );
};

export default Home;
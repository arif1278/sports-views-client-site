import React from 'react';
import me from '../../assets/about.jpg'

const About = () => {
    return (


        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={me} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">About my photography</h1>
                    <p className="py-6">More and more photographers have turned to social media to display their work and connect with clients. While this is convenient, you need to remember that not everyone is on social media. Plus, a professional photography website can do so much more for you than an Instagram or Facebook page—think organized galleries, SEO, even an online store for prints and merch!</p>

                </div>
            </div>
        </div>

    );
};

export default About;
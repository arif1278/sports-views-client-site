import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [services, setServices] = useState([]);


    useEffect(() => {
        fetch('https://sports-views-server-site.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);


    return (
        <div className='my-12'>

            <div className='grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-3'>

                {
                    services.map(service => <ServicesCard
                        key={service._id}
                        service={service}
                    ></ServicesCard>)
                };



            </div>
            <div className="card-actions justify-center mt-6  ">
                <Link to='/service'>
                    <button className="btn btn-primary">See All</button>
                </Link>
            </div>
        </div>
    );
};

export default Services;
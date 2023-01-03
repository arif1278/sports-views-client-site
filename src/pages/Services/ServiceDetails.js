import { useLoaderData } from 'react-router-dom';
import ServiceAll from './ServiceAll';


const ServiceDetails = () => {
    const servs = useLoaderData();






    return (
        <div>


            <div className=' grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-3'>

                {
                    servs.map(serv => <ServiceAll
                        key={serv._id}
                        serv={serv}
                    ></ServiceAll>)
                };



            </div>
        </div>
    );
};

export default ServiceDetails;
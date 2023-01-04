import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../../hooks/useTitle';
import ReviewCard from '../ReviewCard/ReviewCard';

const SingleDetails = () => {
    const { user } = useContext(AuthContext);
    const { _id, name, image_url, details, price } = useLoaderData({});
    const [reviews, setReviews] = useState([]);
    const [insertedId, setInsertedId] = useState(null);
    useTitle('detail')


    const handleReviewSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const textReview = form.textReview.value;

        const review = {
            serviceId: _id,
            reviewMessage: textReview,
            userId: user?.uid,
            userName: user?.displayName,
            userImg: user?.photoURL,
            date: new Date(),
        };


        fetch("https://sports-views-server-site.vercel.app/review", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify(review),
        })
            .then((res) => res.json())
            .then((data) => {
                setInsertedId(data?.insertedId);
                Swal.fire("Review added successfully!", "", "success");
                form.reset();
            })
            .catch((err) => console.error(err));
    };

    useEffect(() => {
        fetch(`https://sports-views-server-site.vercel.app/review/${_id}`)
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, [insertedId, _id]);

    return (
        <div className="container mx-auto mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:px-5 lg:gap-10 lg:px-10 2xl:gap-14 2xl:px-32">
                <div className="lg:border p-10">
                    <img className="w-full" src={image_url} alt="" />
                </div>
                <div className="px-5 md:p-0">
                    <h2 className="text-4xl font-semibold my-5">{name}</h2>
                    <p className="text-slate-700">{details}</p>
                    <div className="flex justify-between my-10">
                        <h3 className="text-2xl font-bold text-slate-700">
                            Price : {price}tk
                        </h3>
                    </div>
                </div>
            </div>
            <div className="px-5 lg:px-10 2xl:gap-14 2xl:px-32 mt-20 border-t">
                <div className="w-full md:w-2/3 lg:w-2/5 mx-auto border mt-20 p-8 relative shadow-lg rounded-lg">
                    {!user && (
                        <div className="bg-[#1515158f] absolute top-0 bottom-0 right-0 left-0 z-10 opacity-0 hover:opacity-100 rounded-lg duration-500">
                            <h4 className="text-white text-center font-semibold text-2xl mt-[40%]">
                                Sign in first to drop your review.
                            </h4>
                            <p className="text-center text-2xl mt-2">
                                <Link
                                    to="/signin"
                                    className="text-yellow-500 text-center font-bold"
                                >
                                    Click here to sign in
                                </Link>
                            </p>
                        </div>
                    )}
                    <h2 className="text-3xl mt-5 mb-10 text-center font-semibold text-slate-700">
                        Drop your review
                    </h2>
                    <form onSubmit={handleReviewSubmit}>
                        <textarea
                            className="block w-full border p-2"
                            name="textReview"
                            id="textReview"
                            rows="5"
                            placeholder="write your review here..."
                            required
                            disabled={!user ? true : false}
                        ></textarea>
                        <div className="flex justify-center mt-10">
                            <button
                                className="bg-yellow-500 hover:bg-yellow-400 duration-500 px-5 py-2 rounded-lg font-bold text-white"
                                type="submit"
                                disabled={!user ? true : false}
                            >
                                Add Review
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div>
                <h2 className="text-4xl font-semibold text-slate-800 text-center my-20">
                    {reviews.length === 0 ? "No Reviews were added" : "Customers Review"}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:px-5 lg:gap-10 lg:px-10 2xl:gap-14 2xl:px-32">
                    {reviews.map((review) => (
                        <ReviewCard key={review._id} review={review}></ReviewCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SingleDetails;
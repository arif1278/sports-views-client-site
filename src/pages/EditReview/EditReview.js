import React, { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/AuthProvider";
const EditReview = () => {
    const { user } = useContext(AuthContext);
    const { _id, serviceName, reviewMessage } = useLoaderData();
    const navigate = useNavigate();

    const handleReviewSubmit = (event) => {
        event.preventDefault();
        const review = {
            review: event.target.textReview.value,
        };

        fetch(`https://sports-views-server-site.vercel.app/myreview/${_id}`, {
            method: "put",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify(review),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    Swal.fire("Review Updated Successfully!", "", "success");
                    navigate("/myreviews");
                }
            });
    };

    return (
        <div className="mt-10 container mx-auto md:px-5 lg:px-48 2xl:px-72">
            <h3 className="text-3xl">Photography Name : {serviceName}</h3>
            <form onSubmit={handleReviewSubmit}>
                <textarea
                    className="block w-full border p-2"
                    name="textReview"
                    id="textReview"
                    rows="5"
                    placeholder="write your review here..."
                    defaultValue={reviewMessage}
                    required
                ></textarea>
                <div className="flex justify-center mt-10">
                    <button
                        className="bg-yellow-500 hover:bg-yellow-400 duration-500 px-5 py-2 rounded-lg font-bold text-white"
                        type="submit"
                    >
                        Update Review
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditReview;

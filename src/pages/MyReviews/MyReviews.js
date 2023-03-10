import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import useTitle from "../../hooks/useTitle";
import MyReviewCard from "../MyReviewsCard/MyReviewsCard";

const MyReviews = () => {
    useTitle("My Reviews");
    const { user, logOut } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([]);
    const [deletedCount, setDeletedCount] = useState(0);
    useEffect(() => {
        fetch(`https://sports-views-server-site.vercel.app/myreviews/${user?.uid}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then((res) => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json();
            })
            .then((data) => setMyReviews(data));
    }, [user, deletedCount, logOut]);
    return (
        <div>
            {myReviews?.length === 0 && (
                <h2 className="text-3xl text-slate-500 font-semibold text-center mt-20">
                    No reviews ware added
                </h2>
            )}
            <div className="container mx-auto grid grid-cols-1 px-5 lg:p-0 lg:grid-cols-2 gap-10 mt-10">
                {myReviews?.map((myReview) => (
                    <MyReviewCard
                        key={myReview?._id}
                        myReview={myReview}
                        setDeletedCount={setDeletedCount}
                    ></MyReviewCard>
                ))}
            </div>
        </div>
    );
};

export default MyReviews;

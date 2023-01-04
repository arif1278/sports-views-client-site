import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyReviewCard = ({ myReview, setDeletedCount }) => {
    const { _id, userName, reviewMessage, userImg, date } =
        myReview;

    const handleDelete = () => {
        const deleted = window.confirm("Are want to delete this review?");
        if (deleted) {
            fetch(`https://sports-views-server-site.vercel.app/myreview/${_id}`, {
                method: "DELETE",
                headers: {
                    authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        setDeletedCount(data.deletedCount);
                        Swal.fire("Review deleted successfully!", "", "success");
                    }
                });
        }
    };

    return (
        <div className="border p-5 rounded shadow-lg">
            <div className="flex justify-between">
                <div className="flex items-center gap-5">
                    <img className="w-14 rounded-full border" src={userImg} alt="" />
                    <div>
                        <p className="text-lg font-semibold text-slate-800">{userName}</p>
                        <p>{date.slice(0, 10)}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <Link
                        to={`/myreviews/edit/${_id}`}
                        className="bg-green-500 text-white p-2 rounded"
                    >
                    </Link>
                    <button
                        onClick={handleDelete}
                        className="bg-red-500 text-white p-2 rounded"
                    >
                    </button>
                </div>
            </div>
            <p className="my-3">{reviewMessage}</p>
        </div>
    );
};

export default MyReviewCard;

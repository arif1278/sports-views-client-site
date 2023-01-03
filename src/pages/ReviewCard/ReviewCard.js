import React from "react";

const ReviewCard = ({ review }) => {
    const { userName, reviewMessage, userImg, date } = review;
    return (
        <div className="border p-5 rounded shadow-lg">
            <div className="flex items-center gap-5">
                <img className="w-14 rounded-full border" src={userImg} alt="" />
                <div>
                    <p className="text-lg font-semibold text-slate-800">{userName}</p>
                    <p>{date.slice(0, 10)}</p>
                </div>
            </div>
            <p className="my-3">{reviewMessage}</p>
        </div>
    );
};

export default ReviewCard;

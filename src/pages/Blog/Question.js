import React from 'react';
import useTitle from '../../hooks/useTitle';

const Question = ({ q }) => {
    const { question, answer, price } = q;
    useTitle('blog')
    return (
        <section className=" text-black hover:font-bold">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <div className="space-y-4">
                    <details className="w-full border border-gray-600 rounded-lg">
                        <summary className="px-4 py-6 ">
                            Question: {question}
                        </summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4">Answer {answer}</p>
                        <p>{price}</p>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default Question;
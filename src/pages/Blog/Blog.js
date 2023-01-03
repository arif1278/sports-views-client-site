import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from './Question';

const Blog = () => {
    const questions = useLoaderData();


    return (
        <div>



            {
                questions.map(q => (
                    <Question
                        key={q.ide}
                        q={q}
                    ></Question>
                ))
            }
        </div>
    );
};

export default Blog;
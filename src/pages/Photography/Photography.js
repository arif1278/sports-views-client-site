import React from 'react';

const Photography = () => {
    return (
        <div className="hero min-h-screen my-8" style={{ backgroundImage: `url("https://media.istockphoto.com/id/1141466189/photo/sports-photographer.jpg?s=612x612&w=0&k=20&c=Cc7GFHXhp9n0LfMuF44ph0FDvzTwjOrObdIvmCaBJdQ=")` }}>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Photography Tips</h1>
                    <p className="mb-5 text-white-700">Feature work that defines who you are as a photographer. While versatility is a plus in any creative profession, most photographers hone in on a specialization early in the game. This just makes it easier for you to establish your brand and make yourself more marketable to future clients.

                        As such, your photography website should comprise of pictures that speak to your brand. It isn’t just about posting high-quality photos—your work online should tell your story, whether that means you’re a fashion photographer with a flair for the dramatic or a food photographer who injects a lot of fun and quirkiness into your layouts. If you do see yourself as a jack of all trades, consider having separate pages or even websites for different styles.

                        Tell a story. Your work should be able to speak for itself, but that doesn’t mean it should do all the talking. People connect with stories, and the more context you add to a photo or a set, the more compelling it becomes. Talk about the inception of each project, what you did to prepare, even what headspace you were in when you were conceptualizing for it. Of course, don’t forget to introduce yourself and your background as an artist too.</p>

                </div>
            </div>
        </div>
    );
};

export default Photography;
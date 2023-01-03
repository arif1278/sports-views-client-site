import React from 'react';

const Banner = () => {
    return (
        <div className="carousel w-full my-12">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://images2.minutemediacdn.com/image/upload/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/FC-Barcelona-v-Juventus-Group-G---UEFA-Champions-L-45585e15b1b997b0242e3d77a51f50be.jpg" className="w-full" alt='' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://www.freewalldownload.com/cricket-images/4k-cricket-wallpapers-download-for-pd-hd.jpg" className="w-full" alt='' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2019/01/16/Pictures/ht-pune_b14429b6-1980-11e9-b190-a6170a1d34c9.JPG" className="w-full" alt='' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://thumbs.dreamstime.com/b/badminton-player-sportswear-racket-shuttlecock-stadium-olympic-game-sport-outfit-reaching-shuttle-swing-171340259.jpg" className="w-full" alt='' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
import React from 'react';
import banner1 from '../../../images/home-banner-1.jpg';
import banner2 from '../../../images/home-banner-2.jpg';
import banner3 from '../../../images/home-banner-3.jpg';

const Banner = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={banner1} className="d-block w-100 img-fluid" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h1>Hair With Olive Oil</h1>
                            <p>What is good for hair care?
                                Image result for hair care description
                                Pre-shampoo treatments like oiling and massaging improve blood circulation on the scalp, relax your muscles, boost shine and nourish the hair.  It also restores moisture content, enables hair growth and repairs split ends.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={banner2} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h1>Beauty on the Go</h1>
                            <p>Not only does the skin hold everything in, it also plays a crucial role in providing an airtight, watertight and flexible barrier between the outside world and the highly regulated systems within the body.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={banner3} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h1>Apply skin care products right after bathing</h1>
                            <p>Perhaps one of the most essential components of healthy skin is moisture. In addition to a quality skin care routine, the timing in which you apply your products can affect moisture retention. Waldorf's top tip: Take to your skin care routine immediately after hopping out of the shower.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Banner;
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './btn.css';

// Import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Box } from '@mui/material';

function Page1() {
    return (
        <div style={{ position: 'relative', height: '601px' }}>
            <Swiper
                modules={[EffectFade, Navigation, Pagination, Autoplay]} // Add Autoplay module
                spaceBetween={0}
                effect="fade" // Enable fade effect between slides
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 2000, // Delay between slides (in ms)
                    disableOnInteraction: false, // Keeps autoplay running even after user interaction
                    pauseOnMouseEnter: true, // Pause autoplay when mouse hovers
                }}
                loop={true} // Loop the slides infinitely
            >
                {/* Slide 1 */}
                <SwiperSlide>
                    <img
                        src="https://htmldemo.net/gilbard/gilbard/assets/images/hero/hero-2.jpg"
                        alt="Hero 2"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center',
                        }}
                    />
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                    <img
                        src="https://htmldemo.net/gilbard/gilbard/assets/images/hero/hero-3.jpg"
                        alt="Hero 3"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center',
                        }}
                    />
                </SwiperSlide>

                {/* Text container */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 99,
                        width: '100%',
                    }}
                >
                    <Box
                        data-aos="fade-up"
                        data-aos-duration="1200" // 1.2 seconds duration
                        data-aos-delay="300"     // 0.3 seconds delay
                        data-aos-easing="ease-in-out" // Smooth in-out easing
                        sx={{
                            color: 'white',
                            fontWeight: 400,
                            fontFamily: 'Saira Stencil One',
                            fontSize: { xs: '40px', sm: '50px', md: '70px', lg: '80px' }, // Responsive font size
                            textAlign: 'center',
                            textShadow: '-6px 4px 1px #252525',
                            width: '100%',
                        }}
                    >
                        THE WITCHER 3
                    </Box>

                    <Box
                        sx={{
                            color: 'white',
                            fontWeight: 400,
                            fontFamily: 'Saira Stencil One',
                            fontSize: { xs: '50px', sm: '60px', md: '80px', lg: '100px' }, // Responsive font size
                            textAlign: 'center',
                            textShadow: '-6px 4px 1px #252525',
                            width: '100%',
                        }}
                    >
                        BATTLE BEGINS HERE
                    </Box>

                    {/* Button */}
                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '20px', // Add margin for spacing
                        }}
                    >
                        <button
                            className="btn-12"
                            data-aos="fade-up"
                            data-aos-duration="1200" // 1.2 seconds duration
                            data-aos-delay="300"   // 0.3 seconds delay
                            style={{
                                fontSize: '16px', // Base font size
                                padding: '15px 30px', // Button padding
                                borderRadius: '8px',
                            }}
                        >
                            <span>Buy Now</span>
                        </button>
                    </Box>
                </Box>
            </Swiper>
        </div>
    );
}

export default Page1;

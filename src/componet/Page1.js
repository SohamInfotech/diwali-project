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
        <div style={{}}>
            <Swiper >
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
                        width: window.innerWidth,
                    }}
                >
                    <Box sx={{
                        color: 'white',
                        fontWeight: 400,
                        fontFamily: 'Saira Stencil One',
                        fontSize: { xs: '80px' },
                        textAlign: 'center',
                        textShadow: '-6px 4px 1px #252525',
                        width: '100%',
                    }}>
                        THE WITCHER 3
                    </Box>
                    <Box sx={{
                        color: 'white',
                        fontWeight: 400,
                        fontFamily: 'Saira Stencil One',
                        fontSize: '90px',
                        textAlign: 'center',
                        textShadow: '-6px 4px 1px #252525',
                        width: '100%',
                    }}>
                        BETTLE BEGAN’S HERE
                    </Box>
                    <Box sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                        <button class="btn-12"><span>Button</span></button>
                    </Box>
                </Box>
            </Swiper>
        </div>
    );
}

export default Page1;

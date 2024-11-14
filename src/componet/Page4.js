import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Box } from '@mui/material';

function Page4() {
    return (
        <div style={{ paddingTop: "50px", backgroundColor: "#162A2A" }}>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Box
                        sx={{
                            height: "100%",
                            width: "100%",
                            backgroundImage: "url(https://vkplay.ru/hotbox/content_files/gallery/ec/9a/6f97d664.jpeg)",
                            backgroundSize: "cover",
                            display: "flex",
                            alignItems: "center",
                            textAlign: "center",
                            justifyContent: "center",
                            color: "white",
                        }}
                    >
                        <Box className="fade-in">
                            <Box
                                sx={{
                                    color: 'white',
                                    fontFamily: 'Saira Stencil One',
                                    fontSize: '50px',
                                    textShadow: '-6px 4px 1px #252525',
                                    width: "100%",
                                }}
                            >
                                User Reviews
                            </Box>
                            <Box sx={{ width: "80%", margin: "auto", paddingTop: "20px" }}>
                                “Phasellus viverra nulla ut metus varius laoreet. Etiam ultricies nisi vel augue. Nam eget dui. Etiam rhoncus, maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel et luctus pulvinar, hendrerit id lorem.”
                            </Box>
                        </Box>
                    </Box>
                </SwiperSlide>

                <SwiperSlide>
                    <Box
                        sx={{
                            height: "100%",
                            width: "100%",
                            backgroundImage: "url(https://static1.dualshockersimages.com/wordpress/wp-content/uploads/2020/04/GearsTactics_Squad_7672x4270_final.png)",
                            backgroundSize: "cover",
                            display: "flex",
                            alignItems: "center",
                            textAlign: "center",
                            justifyContent: "center",
                            color: "white",
                        }}
                    >
                        <Box className="fade-in">
                            <Box
                                sx={{
                                    color: 'white',
                                    fontFamily: 'Saira Stencil One',
                                    fontSize: '50px',
                                    textShadow: '-6px 4px 1px #252525',
                                    width: "100%",
                                }}
                            >
                                User Reviews
                            </Box>
                            <Box sx={{ width: "80%", margin: "auto", paddingTop: "20px" }}>
                                “Phasellus viverra nulla ut metus varius laoreet. Etiam ultricies nisi vel augue. Nam eget dui. Etiam rhoncus, maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel et luctus pulvinar, hendrerit id lorem.”
                            </Box>
                        </Box>
                    </Box>
                </SwiperSlide>

                <SwiperSlide>
                    <Box
                        sx={{
                            height: "100%",
                            width: "100%",
                            backgroundImage: "url(https://i.playground.ru/p/R4w5CIUbq9CWslDUwex7QA.jpeg)",
                            backgroundSize: "cover",
                            display: "flex",
                            alignItems: "center",
                            textAlign: "center",
                            justifyContent: "center",
                            color: "white",
                        }}
                    >
                        <Box className="fade-in">
                            <Box
                                sx={{
                                    color: 'white',
                                    fontFamily: 'Saira Stencil One',
                                    fontSize: '50px',
                                    textShadow: '-6px 4px 1px #252525',
                                    width: "100%",
                                }}
                            >
                                User Reviews
                            </Box>
                            <Box sx={{ width: "80%", margin: "auto", paddingTop: "20px" }}>
                                “Phasellus viverra nulla ut metus varius laoreet. Etiam ultricies nisi vel augue. Nam eget dui. Etiam rhoncus, maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel et luctus pulvinar, hendrerit id lorem.”
                            </Box>
                        </Box>
                    </Box>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Page4;

import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { FaArrowRight } from "react-icons/fa";
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


function Game() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" })
    },[])
    
    const items = [
        {
            imgSrc: "https://htmldemo.net/gilbard/gilbard/assets/images/game/game1.jpg",
            title: "01 BEAUTIFUL PLACE",
            description: "The easy way to get started with Minecraft Want to creep into the biggest video game of all time? hello word.",
        },
        {
            imgSrc: "https://htmldemo.net/gilbard/gilbard/assets/images/game/game2.jpg",
            title: "02 THE MAGICIAN 3",
            description: "The coolest kid-friendly Minecraft projects If you have a Minecraft fanatic on your hands, you're about to be the most popular adult on the .",
        },
        {
            imgSrc: "https://htmldemo.net/gilbard/gilbard/assets/images/game/game3.jpg",
            title: "03 FULL TASTE",
            description: "Alienum phaedrum to rquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est.",
        },
        {
            imgSrc: "https://htmldemo.net/gilbard/gilbard/assets/images/game/game5.jpg",
            title: "04 BEAUTIFUL PLACE",
            description: "Alienum phaedrum to rquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est.",
        },
        {
            imgSrc: "https://htmldemo.net/gilbard/gilbard/assets/images/game/game6.jpg",
            title: "05 THE MAGICIAN 3",
            description: "Alienum phaedrum to rquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est.",
        },
        {
            imgSrc: "https://htmldemo.net/gilbard/gilbard/assets/images/game/game1.jpg",
            title: "06 FULL TASTE",
            description: "Alienum phaedrum to rquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est.",
        },
        {
            imgSrc: "https://htmldemo.net/gilbard/gilbard/assets/images/game/game7.jpg",
            title: "07 BEAUTIFUL PLACE",
            description: "Alienum phaedrum to rquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est.",
        },
        {
            imgSrc: "https://htmldemo.net/gilbard/gilbard/assets/images/game/game8.jpg",
            title: "08 THE MAGICIAN 3",
            description: "Alienum phaedrum to rquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est.",
        },
        {
            imgSrc: "https://htmldemo.net/gilbard/gilbard/assets/images/game/game9.jpg",
            title: "09 FULL TASTE",
            description: "Alienum phaedrum to rquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est.",
        },
        {
            imgSrc: "https://htmldemo.net/gilbard/gilbard/assets/images/game/game10.jpg",
            title: "10 BEAUTIFUL PLACE",
            description: "Alienum phaedrum to rquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est.",
        },
        {
            imgSrc: "https://htmldemo.net/gilbard/gilbard/assets/images/game/game11.jpg",
            title: "11 THE MAGICIAN 3",
            description: "Alienum phaedrum to rquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est.",
        },
        {
            imgSrc: "https://htmldemo.net/gilbard/gilbard/assets/images/game/game12.jpg",
            title: "12 FULL TASTE",
            description: "Alienum phaedrum to rquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est.",
        },
    ];
    return (
        <div>


            <Navbar />

            <div style={{ position: 'relative', height: '601px' }}>


                <Box sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    backgroundImage: "url(https://htmldemo.net/gilbard/gilbard/assets/images/bg/page-bg.jpg)",
                    backgroundSize: "cover",
                    backgroundColor: "rgba(0,0,0,0.5)",
                    backgroundBlendMode: "multiply"
                }}>

                </Box>


                {/* Slide 2 */}


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
                    <Box sx={{
                        color: 'white',
                        fontWeight: 400,
                        fontFamily: 'Saira Stencil One',
                        fontSize: { xs: '70px' },
                        textAlign: 'center',
                        textShadow: '-6px 4px 1px #252525',
                        width: '100%',
                    }}>
                        KINGS OF THE
                    </Box>
                    <Box sx={{
                        color: 'white',
                        fontWeight: 400,
                        fontFamily: 'Saira Stencil One',
                        fontSize: '70px',
                        textAlign: 'center',
                        textShadow: '-6px 4px 1px #252525',
                        width: '100%',
                    }}>
                        WARRIORS
                    </Box>
                    <Box sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                        <button className="btn-12"><span>Button</span></button>
                    </Box>
                </Box>
            </div>





            <Box sx={{ backgroundColor: "#162A2A" }}>
                <Container>
                    <Box sx={{ width: "100%", overflow: "hidden", paddingTop: "50px" }}>
                        <Grid container spacing={3}>
                            {items.map((item, index) => (
                                <Grid
                                    item
                                    lg={4}
                                    md={6}
                                    sm={12}
                                    xs={12}
                                    key={index}
                                    data-aos="fade-up"
                                    data-aos-delay={index * 250}
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            position: 'relative',
                                            overflow: 'hidden',
                                            borderRadius: '8px',
                                            width: '100%',
                                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                        }}
                                    >
                                        <Box
                                            component="img"
                                            src={item.imgSrc}
                                            alt={item.title}
                                            sx={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                transition: 'transform 0.8s ease-in-out',
                                                '&:hover': {
                                                    transform: 'scale(1.2)',
                                                },
                                            }}
                                        />
                                    </Box>

                                    <Typography
                                        sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            justifyContent: "flex-start",
                                            mt: 2,
                                        }}
                                    >
                                        <Typography
                                            variant="h2"
                                            sx={{
                                                mr: 1,
                                                fontSize: { xs: '1.5rem', md: '3rem' },
                                                color: "white",
                                                fontFamily: "Merriweather, serif",
                                            }}
                                        >
                                            {item.title.split(' ')[0]}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: { xs: '1rem', md: '1.5rem' },
                                                fontFamily: "Merriweather, serif",
                                                fontWeight: "600",
                                                color: "white",
                                            }}
                                        >
                                            {item.title.split(' ').slice(1).join(' ')}
                                        </Typography>
                                    </Typography>

                                    <Typography
                                        variant="h6"
                                        sx={{
                                            mt: 1,
                                            fontSize: { xs: '0.875rem', md: '1rem' },
                                            color: "white",
                                        }}
                                    >
                                        {item.description}
                                    </Typography>

                                    <Button
                                        variant="contained"
                                        sx={{
                                            mt: 2,
                                            color: "#C7A17A",
                                            backgroundColor: "transparent",
                                            border: "none",
                                            boxShadow: "none",
                                            color: "white",
                                            '&:hover': {
                                                backgroundColor: 'transparent',
                                                boxShadow: 'none',
                                            },
                                        }}
                                    >
                                        Learn More <FaArrowRight />
                                    </Button>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Container>
            </Box>
            <Footer />
        </div>
    )
}

export default Game
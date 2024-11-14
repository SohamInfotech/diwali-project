import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Page2() {
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
    ];

    return (
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
    );
}

export default Page2;

import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Box, Button, Container, Typography } from '@mui/material';

function Blog() {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" })
    },[])
    
    return (
        <div>
            <Navbar />
            
            {/* Hero Section */}
            <div style={{ position: 'relative', height: '601px' }}>
                <Box
                    sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                        backgroundImage: "url(https://htmldemo.net/gilbard/gilbard/assets/images/bg/page-bg.jpg)",
                        backgroundSize: "cover",
                        backgroundColor: "rgba(0,0,0,0.5)",
                        backgroundBlendMode: "multiply"
                    }}
                ></Box>

                {/* Text container */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 99,
                        width: '100%',
                        textAlign: 'center',
                    }}
                >
                    <Box
                        sx={{
                            color: 'white',
                            fontWeight: 400,
                            fontFamily: 'Saira Stencil One',
                            fontSize: { xs: '40px', sm: '60px', md: '70px' },
                            textShadow: '-6px 4px 1px #252525',
                            width: '100%',
                        }}
                    >
                        KINGS OF THE
                    </Box>
                    <Box
                        sx={{
                            color: 'white',
                            fontWeight: 400,
                            fontFamily: 'Saira Stencil One',
                            fontSize: { xs: '40px', sm: '60px', md: '70px' },
                            textShadow: '-6px 4px 1px #252525',
                            width: '100%',
                        }}
                    >
                        WARRIORS
                    </Box>
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <button className="btn-12">
                            <span>Button</span>
                        </button>
                    </Box>
                </Box>
            </div>

            {/* Blog Content */}
            <Container sx={{ marginTop: '50px' }}>
                {['blog-large1', 'blog-large2', 'blog-large3', 'blog-large4'].map((img, index) => (
                    <Box key={index} sx={{ marginBottom: '50px' }}>
                        <img
                            src={`https://htmldemo.net/gilbard/gilbard/assets/images/blog/${img}.jpg`}
                            width="100%"
                            alt=""
                        />
                        <Box sx={{ marginTop: '20px' }}>
                            <Typography sx={{ fontSize: { xs: '24px', sm: '30px' } }}>
                                hidden secret of the elder scroll
                            </Typography>
                            <Typography sx={{ marginTop: '10px' }}>
                                Some of hidden secrets of the Elder Scroll are the most popular games that
                                allow you to make a smile and enjoy the game, making it easy to play.
                            </Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '15px' }}>
                                <Box sx={{ display: 'flex' }}>
                                    <Typography sx={{ margin: '5px' }}>Smith -</Typography>
                                    <Typography sx={{ margin: '5px' }}>15 December, 2018 -</Typography>
                                    <Typography sx={{ margin: '5px' }}>25 Comments -</Typography>
                                </Box>
                                <Box>
                                    <Button variant="outlined" sx={{ borderRadius: '20px' }}>
                                        READ NOW
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Container>

            <Footer />
        </div>
    );
}

export default Blog;

import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import img from "../img/car.png";

function Page5() {
    return (
        <>
            <Box sx={{ backgroundColor: "#162A2A" }}>
                <Container>
                    <Box sx={{ width: "100%", paddingTop: "50px" }}>
                        {/* Hero section with background image */}
                        <Box
                            sx={{
                                height: { xs: "300px", sm: "400px" },  // Responsive height
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "end",
                                backgroundImage: "url(https://cdn.mos.cms.futurecdn.net/50268c2b34dffd417b34e2a48b1860b8.jpg.webp)",
                                backgroundColor: "rgba(0,0,0,0.5)",
                                backgroundBlendMode: "multiply",
                                backgroundSize: "cover",
                                width: "100%",
                                backgroundPositionY: "90%",
                            }}
                        >
                            {/* Car image */}
                            <Box
                                component="img"
                                sx={{
                                    width: { xs: "200px", sm: "400px" },  // Responsive image size
                                    maxWidth: "100%",
                                    objectFit: "contain",
                                }}
                                src={img}
                                alt="Car"
                            />

                            {/* Text content */}
                            <Box
                                sx={{
                                    color: "white",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: "100%",
                                    width: "100%",
                                    padding: { xs: "20px", sm: "0" },  // Add padding on small screens
                                    textAlign: "center",  // Center text for small screens
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: { xs: "24px", sm: "30px", md: "40px" },  // Responsive font size
                                        fontFamily: "Nova Round",
                                        lineHeight: "1.4",
                                    }}
                                >
                                    SUBSCRIBE OUR <span style={{ color: "#0bff0b" }}>NEWSLETTER</span> <br />
                                    GET ALL <span style={{ color: "red" }}>LATEST</span> NEWS, UPDATES, <br />
                                    <span style={{ color: "#0bff0b" }}>VIDEOS</span> AND OFFERS
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    );
}

export default Page5;

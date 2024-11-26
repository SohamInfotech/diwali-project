import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

function Footer() {
    return (
        <div>
            <Box sx={{backgroundColor:"#162A2A"}}>
                <Box sx={{ 
                    backgroundImage: "url(https://htmldemo.net/gilbard/gilbard/assets/images/bg/footer-bg.jpg)", 
                    backgroundColor: "rgba(0,0,0,0.5)", 
                    backgroundBlendMode: "multiply", 
                    backgroundRepeat: "no-repeat", 
                    backgroundSize: "cover", 
                    backgroundPosition: "center center", 
                    height: "250px", 
                    width: "100%" 
                }}>
                    <Container sx={{ 
                        display: "flex", 
                        justifyContent: "center", 
                        alignItems: "center", 
                        height: "100%", 
                        flexDirection: "column",
                        paddingTop: "40px",
                        textAlign: "center",
                        '@media (max-width: 600px)': {
                            padding: "20px"
                        }
                    }}>
                        <Box sx={{ 
                            display: "flex", 
                            justifyContent: "space-between", 
                            alignItems: "center", 
                            width: "100%", 
                            '@media (max-width: 600px)': {
                                flexDirection: "column", 
                                alignItems: "center"
                            }
                        }}>
                            <Box sx={{ marginBottom: "20px", maxWidth: "120px", '@media (max-width: 600px)': { maxWidth: "100px" } }}>
                                <img src="https://htmldemo.net/gilbard/gilbard/assets/images/logo.png" alt="Logo" style={{ width: "100%" }} />
                            </Box>
                            <Box>
                                <ul style={{ 
                                    display: "flex", 
                                    justifyContent: "center", 
                                    color: "white", 
                                    fontSize: "18px", 
                                    fontFamily: "Nova Round", 
                                    listStyleType: "none", 
                                    padding: 0,
                                    margin: 0,
                                    '@media (max-width: 600px)': {
                                        flexDirection: "column",
                                        marginTop: "10px"
                                    }
                                }}>
                                    <li 
                                        style={{ 
                                            marginRight: "30px", 
                                            cursor: "pointer", 
                                            transition: "color 0.3s, transform 0.3s"
                                        }}
                                        className="footer-link"
                                    >
                                        Forums
                                    </li>
                                    <li 
                                        style={{ 
                                            marginRight: "30px", 
                                            cursor: "pointer", 
                                            transition: "color 0.3s, transform 0.3s"
                                        }}
                                        className="footer-link"
                                    >
                                        Demo
                                    </li>
                                    <li 
                                        style={{ 
                                            marginRight: "30px", 
                                            cursor: "pointer", 
                                            transition: "color 0.3s, transform 0.3s"
                                        }}
                                        className="footer-link"
                                    >
                                        Support
                                    </li>
                                    <li 
                                        style={{ 
                                            marginRight: "30px", 
                                            cursor: "pointer", 
                                            transition: "color 0.3s, transform 0.3s"
                                        }}
                                        className="footer-link"
                                    >
                                        Terms & Conditions
                                    </li>
                                </ul>
                            </Box>
                            <Box sx={{ color: "white", display: "flex", fontSize: "18px", flexWrap: "wrap", justifyContent: "center" }}>
                                <Typography sx={{ marginRight: "10px", fontFamily: "Nova Round", fontSize: "18px" }}>Follow us:</Typography>
                                <FaFacebookF 
                                    style={{ 
                                        marginRight: "20px", 
                                        fontSize: "22px", 
                                        cursor: "pointer", 
                                        transition: "color 0.3s, transform 0.3s" 
                                    }} 
                                    className="social-icon"
                                />
                                <FaTwitter 
                                    style={{ 
                                        marginRight: "20px", 
                                        fontSize: "22px", 
                                        cursor: "pointer", 
                                        transition: "color 0.3s, transform 0.3s" 
                                    }} 
                                    className="social-icon"
                                />
                                <FaInstagram 
                                    style={{ 
                                        marginRight: "20px", 
                                        fontSize: "22px", 
                                        cursor: "pointer", 
                                        transition: "color 0.3s, transform 0.3s" 
                                    }} 
                                    className="social-icon"
                                />
                                <FaYoutube 
                                    style={{ 
                                        marginRight: "20px", 
                                        fontSize: "22px", 
                                        cursor: "pointer", 
                                        transition: "color 0.3s, transform 0.3s" 
                                    }} 
                                    className="social-icon"
                                />
                            </Box>
                        </Box>

                        <div style={{ width: "100%", height: "1px", backgroundColor: "gray", marginTop: "30px" }}></div>
                        <Typography sx={{ fontSize: "18px", color: "gray", marginTop: "30px", '@media (max-width: 600px)': { fontSize: "16px" } }}>
                            Copyright ©2023 Gilbard. All rights reserved.
                        </Typography>
                    </Container>
                </Box>
            </Box>
        </div>
    );
}

export default Footer;

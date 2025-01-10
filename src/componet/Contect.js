import React, { useEffect, useState } from "react";
import { Box, Button, Checkbox, Container, FormControlLabel, Grid, MenuItem, Select, TextField } from "@mui/material";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
// import Nav from "../Nav";
// import Footer from "../Footer";
// import Gotop from "../Gotop/Gotop";
// import Fastsection from "../Fastsection";

function Contect() {
    const [age, setAge] = React.useState('');
    const [type, settype] = React.useState('');

    const [inputValue, setInputValue] = useState('');
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" })
    },[])
    
    return (
        <>
            <Navbar />
            {/* <Titels Name={"Contect"} url={"https://wordpress.themeholy.com/fitkit/wp-content/themes/fitkit/assets/img/breadcumb-thumb.png"} /> */}


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
                          <Link to={"/Contect"}><button className="btn-12"><span>Buy Now</span></button></Link> 
                    </Box>
                </Box>
            </div>




            <Box sx={{ backgroundColor: "#162A2A" }}>
                <Container fixed>
                    <Box sx={{ width: "85%", margin: "auto", marginBottom: "100px" }}>

                        <form>
                            <Box sx={{ paddingTop: "30px", fontSize: "25px", color: "white" }}>
                                Information
                            </Box>

                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6} sx={{ marginTop: "15px" }}>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="First Name"
                                        type="text"
                                        sx={{
                                            width: "100%", backgroundColor: "white", '& .MuiOutlinedInput-root': {
                                                '&:focused': {
                                                    borderColor: 'black', // Change border color to black on focus
                                                },
                                            },
                                        }}

                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} sx={{ marginTop: "15px" }}>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Last Name"
                                        type="text"
                                        sx={{ width: "100%", backgroundColor: "white" }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} >
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Email Address"
                                        type="email"
                                        sx={{ width: "100%", backgroundColor: "white" }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} >
                                    <TextField
                                        required
                                        id="outlined-basic"
                                        label="Mobile"
                                        type="number"
                                        variant="outlined"
                                        value={inputValue}
                                        onInput={(e) => {
                                            let value = e.target.value;
                                            value = value.replace(/\D/g, '').slice(0, 10);
                                            setInputValue(value);
                                            if (value.length === 10) {
                                                console.log(value);
                                            }
                                        }}
                                        sx={{ width: "100%", backgroundColor: "white" }}
                                    />
                                </Grid>
                            </Grid>

                            <Box sx={{ marginTop: "30px", fontSize: "25px", color: "white" }}>
                                Message
                            </Box>
                            <Grid container spacing={2} sx={{ paddingLeft: "16px", marginTop: "10px" }}>
                                <TextField
                                    xs={12}
                                    sx={{ width: "100%", backgroundColor: "white" }}
                                    id="w3review"
                                    name="w3review"
                                    label="W3Schools Review"
                                    multiline
                                    rows={3}
                                    variant="outlined"
                                />
                            </Grid>

                            <button className="btn-12" style={{marginTop:"20px"}}><span>Button</span></button>
                        </form>
                    </Box>

                </Container>
                <Footer />
            </Box>

        </>
    )
}

export default Contect
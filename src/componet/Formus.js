import React, { useEffect } from 'react';
import { Box, Container, Grid, Typography, Button } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';


const blogPosts = [
    {
        imgSrc: "https://play-lh.googleusercontent.com/K3-IHLeFDSyKoiXV6rwtvAigOsxrXjOaFDWtTeMCPFA5ZNm8m47JP6ZQqoIPGova02E=w526-h296-rw",
        title: "MIND OVER MATTER: THE IMPORTANCE OF HEALTH IN FITNESS",
        description: "Consistency is key when it comes to reaching your fitness goals. Our blog is here to provide you with tips,…",
        url: "https://play.google.com/store/apps/details?id=com.Zonmob.ShadowofDeath.FightingGames&hl=en"
    },
    {
        imgSrc: "https://play-lh.googleusercontent.com/WnsdotK1R9oDgtUWRMJF7b-ogMphLOXDQr3bBDiPqv0ErBteMgPzG5iyg08iGhWqmxA=w526-h296-rw",
        title: "STRATEGIES FOR OVERCOMING FITNESS PLATEAUS AND ACHIEVING",
        description: "Cardio is essential for heart health and burning calories. Explore our blog for exciting cardio workouts that can be done…",
        url:"https://play.google.com/store/apps/details?id=com.fansipan.stickman.fight.shadow.knights&hl=en"
    },
    {
        imgSrc: "https://play-lh.googleusercontent.com/Ht6sdPkpbIZ4JH6BpmbYR5d3G0YWexxEdf5ruK2GdjuzkmYxdkHE1fHU5cyxbI0gUV00=w526-h296-rw",
        title: "FUEL YOUR WORKOUT: A GUIDE TO PRE- AND POST-WORKOUT",
        description: "Recovery is just as important as your workouts. Dive into our blog to learn about the best practices for muscle…",
        url:"https://play.google.com/store/apps/details?id=com.tibith.badboxing&hl=en"
    },
    
    {
        imgSrc: "https://play-lh.googleusercontent.com/5W6OOrho0AFit_nm98QqpCsu52uHc-kw7RQPK4_PUdGEi6DjrmfZdPJIGYl2u_3Ibw=w526-h296-rw",
        title: "FITNESS POTENTIAL: EXPERT TIPS FOR MAXIMIZING EXPERIENCE",
        description: "Welcome to our gym’s official blog! We’re thrilled to have you here as we embark on a journey towards better…",
        url:"https://play.google.com/store/apps/details?id=com.gameloft.android.ANMP.GloftM5HM&hl=en"
    },  {
        imgSrc: "https://play-lh.googleusercontent.com/K3-IHLeFDSyKoiXV6rwtvAigOsxrXjOaFDWtTeMCPFA5ZNm8m47JP6ZQqoIPGova02E=w526-h296-rw",
        title: "MIND OVER MATTER: THE IMPORTANCE OF HEALTH IN FITNESS",
        description: "Consistency is key when it comes to reaching your fitness goals. Our blog is here to provide you with tips,…",
        url: "https://play.google.com/store/apps/details?id=com.Zonmob.ShadowofDeath.FightingGames&hl=en"
    },
    {
        imgSrc: "https://play-lh.googleusercontent.com/WnsdotK1R9oDgtUWRMJF7b-ogMphLOXDQr3bBDiPqv0ErBteMgPzG5iyg08iGhWqmxA=w526-h296-rw",
        title: "STRATEGIES FOR OVERCOMING FITNESS PLATEAUS AND ACHIEVING",
        description: "Cardio is essential for heart health and burning calories. Explore our blog for exciting cardio workouts that can be done…",
        url:"https://play.google.com/store/apps/details?id=com.fansipan.stickman.fight.shadow.knights&hl=en"
    },
];

function Formus() {
    // Function to open the URL in a new tab
    function handleClick(url) {
        window.open(url, "_blank"); // Open the URL in a new tab
    }
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" })
    },[])

    return (
        <>

        
        <Navbar/>
            

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
        <button className="btn-12"><span>Buy Now</span></button>
    </Box>
</Box>
</div>









        <Box sx={{ backgroundColor: "#162A2A" }}>
            {blogPosts.map((post, index) => (
                <Box sx={{ paddingTop: index === 0 ? "90px" : "70px" }} key={index}>
                    <Container sx={{ border: "1px solid gray", padding: "10px" }}>
                        <Grid container sx={{ alignItems: "center", textAlign: "center" }}>
                            <Grid item xs={12} md={3}>
                                <img src={post.imgSrc} alt={post.title} style={{ width: "175px", height: "125px" }} />
                            </Grid>
                            <Grid item xs={12} md={7}>
                                <Typography sx={{
                                    fontSize: "28px",
                                    fontFamily: "teko",
                                    fontWeight: "600",
                                    transition: "color 0.1s ease-in-out",
                                    lineHeight: "100%",
                                    marginBottom: "6px",
                                    color: "white",
                                    ":hover": { color: "#fd3030" },
                                    transition: "all 0.5s"
                                }}>
                                    {post.title}
                                </Typography>
                                <Typography sx={{
                                    margin: "0px",
                                    padding: "0px",
                                    fontWeight: "400",
                                    lineheight: "24px",
                                    color: "#E7E7E7",
                                    fontFamily: "sans-serif"
                                }}>
                                    {post.description}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={2} >
                            <button className="btn-12" onClick={() => handleClick(post.url)}><span>play Now</span></button>
                                
                                    //  //
                              
                                  
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            ))}

        </Box>
        <Footer/>
            </>
    );
}

export default Formus;

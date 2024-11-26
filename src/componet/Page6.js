import { Box, Container, Grid, Typography } from '@mui/material'; // Import Grid from MUI
import React from 'react';

function Page6() {
    return (
        <div>
            <Container>
                <Grid container sx={{backgroundColor:"##446050",display:"flex",justifyContent:"space-around"}} > {/* Use Grid with container and spacing */}
                    <Grid item xs={6}>  {/* Use Grid item with xs=12 for full-width */}
                        <Typography variant="h6" sx={{ fontSize: "25px" }}>
                            SUBSCRIBE TO OUR NEWSLETTER, GET ALL <br />
                            LATEST NEWS, UPDATES, VIDEOS, AND OFFERS
                        </Typography>
                    </Grid>
                    <Grid item xs={6}> {/* Image in a Grid item */}
                        <img
                            src="https://htmldemo.net/gilbard/gilbard/assets/images/bg/news-bg-2.png"
                            alt="Newsletter Background"
                            style={{ width: '100%', height: '90%' }}
                        />
                    </Grid>


                    
                </Grid>
            </Container>
        </div>
    )
}

export default Page6;

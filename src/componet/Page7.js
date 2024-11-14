import { Box, Container } from '@mui/material'
import React from 'react'

function Page7() {
    return (
        <div>
            <Box>
                <Box sx={{ backgroundImage: "url(https://htmldemo.net/gilbard/gilbard/assets/images/bg/footer-bg.jpg)", backgroundColor: "rgba(0,0,0,0.5)", backgroundBlendMode: "multiply", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center center", height: "250px", width: "100%" }}>

                    <Container>
                        <Box sx={{display:"flex",justifyContent:"space-between",textAlign:"center",alignItems:"center"}} >
                            <Box><img src="https://htmldemo.net/gilbard/gilbard/assets/images/logo.png" alt="" /></Box>
                            <Box sx={{}}>
                                <ul style={{display:"flex"}}>
                                    <li>forums  </li>
                                    <li>demo</li>
                                    <li>support</li>
                                    <li>terms & conditions</li>
                                </ul>
                            </Box>
                            <Box>
                                
                            </Box>
                        </Box>
                    </Container>
                </Box >


            </Box>
        </div>
    )
}

export default Page7
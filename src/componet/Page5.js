import { Box } from '@mui/material'
import React from 'react'
import img from "../img/car.png"
function Page5() {
    return (
        <>
            <Box sx={{}}>
                <Box sx={{ height: "400px", display: "flex", justifyContent: "center", alignItems: "end" }}>
                    <Box component={"img"} sx={{ height: "380px" }} src={img}>

                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Page5
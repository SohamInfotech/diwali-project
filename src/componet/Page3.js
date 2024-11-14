import { Box, Grid } from '@mui/material';
import React from 'react';

function Page3() {
  return (
    <Box sx={{ backgroundColor: "#162A2A", paddingBottom: "20px" }}>
      {/* First Row of Images */}
      <Box sx={{ width: "100%", pt: 10 }}>
        <Grid container spacing={2}>
          {/* First Image */}
          <Grid item xs={12} sm={3}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "300px",
                overflow: "hidden",
                borderRadius: "8px",
                "&:hover img": {
                  transform: "scale(1.1)", // Scaling effect on hover
                },
                "& img": {
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  transition: "transform 0.3s ease", // Smooth scaling transition
                }
              }}
            >
              <img
                src="https://playerx.qodeinteractive.com/elementor/wp-content/uploads/2018/06/h1-gallery-img-1.jpg"
                alt=""
              />
            </Box>
          </Grid>

          {/* Second Image */}
          <Grid item xs={12} sm={3}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "300px",
                overflow: "hidden",
                borderRadius: "8px",
                "&:hover img": {
                  transform: "scale(1.1)", // Scaling effect on hover
                },
                "& img": {
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  transition: "transform 0.3s ease", // Smooth scaling transition
                }
              }}
            >
              <img
                src="https://playerx.qodeinteractive.com/elementor/wp-content/uploads/2018/06/h1-gallery-img-2.jpg"
                alt=""
              />
            </Box>
          </Grid>

          {/* Third Image */}
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "300px",
                overflow: "hidden",
                borderRadius: "8px",
                "&:hover img": {
                  transform: "scale(1.1)", // Scaling effect on hover
                },
                "& img": {
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  transition: "transform 0.3s ease", // Smooth scaling transition
                }
              }}
            >
              <img
                src="https://playerx.qodeinteractive.com/elementor/wp-content/uploads/2018/06/h1-gallery-img-3.jpg"
                alt=""
              />
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Second Row of Images */}
      <Box sx={{ width: "100%", pt:2 }}>
        <Grid container spacing={2}>
          {/* First Image */}
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "300px",
                overflow: "hidden",
                borderRadius: "8px",
                "&:hover img": {
                  transform: "scale(1.1)", // Scaling effect on hover
                },
                "& img": {
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  transition: "transform 0.3s ease", // Smooth scaling transition
                }
              }}
            >
              <img
                src="https://playerx.qodeinteractive.com/elementor/wp-content/uploads/2018/06/h1-gallery-img-4.jpg"
                alt=""
              />
            </Box>
          </Grid>

          {/* Second Image */}
          <Grid item xs={12} sm={3}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "300px",
                overflow: "hidden",
                borderRadius: "8px",
                "&:hover img": {
                  transform: "scale(1.1)", // Scaling effect on hover
                },
                "& img": {
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  transition: "transform 0.3s ease", // Smooth scaling transition
                }
              }}
            >
              <img
                src="https://playerx.qodeinteractive.com/elementor/wp-content/uploads/2018/06/h1-gallery-img-5.jpg"
                alt=""
              />
            </Box>
          </Grid>

          {/* Third Image */}
          <Grid item xs={12} sm={3}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "300px",
                overflow: "hidden",
                borderRadius: "8px",
                "&:hover img": {
                  transform: "scale(1.1)", // Scaling effect on hover
                },
                "& img": {
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  transition: "transform 0.3s ease", // Smooth scaling transition
                }
              }}
            >
              <img
                src="https://playerx.qodeinteractive.com/elementor/wp-content/uploads/2018/06/h1-gallery-img-6.jpg"
                alt=""
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Page3;

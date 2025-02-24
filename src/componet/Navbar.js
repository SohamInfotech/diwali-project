//https://preview.themeforest.net/item/gilbard-gaming-bootstrap-4-template/full_screen_preview/23039565?_ga=2.177000101.1082780809.1731296486-404351695.1731296486&_gac=1.195702168.1731296486.EAIaIQobChMIytbI_a3TiQMVGDWDAx1TPTmPEAAYASAAEgLV0_D_BwE
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Container } from '@mui/material';
import { Link } from 'react-router-dom';
import { Visibility } from '@mui/icons-material';
import img from "../img/logo.png"
import Footer from './Footer';
const pages = [
    { name: 'HOME', path: '/' },
    { name: 'games', path: '/games' },
    { name: 'Formus', path: '/Formus' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contect', path: '/Contect' },
];

function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar sx={{
            boxShadow: 'none',
            position: "sticky",
            top: 0,
            backgroundColor: "#162A2A",
            padding: "0px"
        }}>

            <Toolbar disableGutters>
                <Link to={'/'}>
               
                <Box sx={{ display: { xs: 'none', md: 'flex',color:"white" }, flexGrow: 1 }}>
                    <img src={img} alt="Logo" width="150px"  />
                </Box>
                </Link>
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="menu"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <MenuIcon sx={{ color: "#f2f0eb" }} />
                    </IconButton>
                    <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: "center", width: "100px" }}>
                        <img src={img} alt="Logo" style={{ margin: "auto", width: "120px" }} />
                    </Box>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                        keepMounted
                        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{ display: { xs: 'block', md: 'none' } }}
                    >
                        {pages.map((page) => (
                            <Link to={page.path}>
                                <MenuItem key={page.name} onClick={handleCloseNavMenu}>

                                    <Typography sx={{
                                        textAlign: 'center', color: "#162a2a", '&:hover': {
                                            color: 'orange',
                                        },
                                        height: "100%"
                                    }}>{page.name}</Typography>

                                </MenuItem>
                            </Link>
                        ))}
                    </Menu>
                </Box>

                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: "space-evenly" }}>
                    {pages.map((page) => (
                        <Link to={page.path}>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{
                                    color: 'white',
                                    display: 'block',
                                    fontFamily: "Nova Round",
                                    fontSize: '18px',
                                    lineHeight: "28px",

                                    fontWeight: 'normal',
                                    Visibility: 'visible',
                                    '&:hover': {
                                        color: '#fd3030',
                                    },
                                    height: "100%",
                                    
                                    // fontFamily:"Ubuntu",
                                    // fontSize:'25px',
                                    // lineHeight: "28px",
                                    // fontSize: "normal",
                                    // fontWeight: 'normal',
                                    // Visibility: 'visible',
                                }}
                            >
                                {page.name}
                            </Button>

                        </Link>
                    ))}
                </Box>

                <Box sx={{ flexGrow: 0 }}>
                    {/* <Tooltip title="Join Now"> */}

                    <Button
    className='button'
    onClick={() => window.open("https://store.steampowered.com/", "_blank")}
    sx={{
        fontWeight: "bold",
        height: { lg: "40px", md: "35px", sm: "30px", xs: "25px" },
        width: { lg: "140px", md: "120px", sm: "100px", xs: "90px" },
        fontSize: { lg: "16px", md: "15px", sm: "14px", xs: "12px" },
        backgroundColor: "black",
        color: "white",
        border: "1px solid white",
        fontFamily: "Nova Round",
        '&:hover': {
            boxShadow: 2
        },
        marginRight: "10px",
    }}
>
    Join Now
</Button>

                    {/* </Tooltip> */}
                </Box>
            </Toolbar>

        </AppBar>

    );
}

export default Navbar;
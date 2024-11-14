import React, { useState } from 'react';
import { Box } from '@mui/material';
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

function Gotop() {
    const [show, setShow] = useState(window.scrollY + window.innerHeight - 10 > window.innerHeight);

    window.addEventListener("scroll", () => {
        setShow(window.scrollY + window.innerHeight - 10 > window.innerHeight);
    });

    return (
        <Box
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            sx={{
                zIndex: "9999",
                width: "50px",
                height: "50px",
                borderRadius: "50px",
                color: "#162A2A",
                backgroundColor: "#B7D8EE",
                display: show ? "flex" : "none",
                justifyContent: "center",
                alignItems: "center",
                position: "fixed",
                bottom: "50px",
                right: "50px",
                cursor: "pointer",
                transition: "background-color 0.3s, transform 0.3s, box-shadow 0.3s",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.4)", // Light shadow
                '&:hover': {
                    backgroundColor: "#A0C4D7", // lighter shade
                    transform: "scale(1.1)", // slight enlarge effect
                    boxShadow: "0 6px 10px rgba(0, 0, 0, 0.15)", // slightly stronger shadow on hover
                }
            }}
        >
            <MdOutlineKeyboardDoubleArrowUp style={{ fontSize: "30px" }} />
        </Box>
    );
}

export default Gotop;

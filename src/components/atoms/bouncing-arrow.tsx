import Box from "@mui/material/Box";
import { useSpring, animated } from "react-spring";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export const BouncingArrow = () => {

    const propsSpring_Arrow = useSpring({
        to: { opacity: 0.7, y: 0 },
        from: { opacity: 0, y: -20 },
        config: { tension: 200, mass: 10 },
        delay: 1800,
        loop: true,
    });
    return (
        <Box
            sx={{
                position: "absolute",
                bottom: "0",
                left: "calc(50vw - 17.5px)",
            }}
        >
            <animated.div style={propsSpring_Arrow}>
                <ArrowDownwardIcon fontSize="large" sx={{ color: "white" }} />
            </animated.div>
        </Box>
    );
};

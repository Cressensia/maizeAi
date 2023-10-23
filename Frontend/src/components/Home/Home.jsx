import React from "react";
import NavbarLanding from "./NavbarLanding";
import Landing1 from "./Landing1";
import Landing2 from "./Landing2";
import Landing3 from "./Landing3";
import Landing4 from "./Landing4";
import "../../App.css"
import Box from "@mui/joy/Box";

export default function Home() {
  return (
    <Box
      sx={{
        height: "100vh",
        overflowY: "scroll",
        scrollSnapType: "y mandatory",
        "& > div": { scrollSnapAlign: "start" }
        // scrollPadding: "10%", // add if using sticky navbar
      }}
    >
      <div>
        <NavbarLanding />
        <Landing1 />
      </div>
      <Landing2 />
      <Landing3 />
      <Landing4 />
    </Box>
  );
}

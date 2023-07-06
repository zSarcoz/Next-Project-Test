"use client";
import { Box, Typography } from "@mui/material";
import style from "./page.module.css";
import Feed from "@components/Feed/Feed";

export default function Home() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography variant="h2" className={style.title}>
        {" "}
        Discover & Share Your Ideas!
      </Typography>
      <br />
      <span className="orangeGradient">AI-Powered Promps</span>
      <p className={style.subtitle}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias quas,
        molestiae voluptatem magni, quasi explicabo aspernatur quidem sunt
        excepturi veniam eius ex sint ab dolorem velit quod libero cum
        consequuntur?
      </p>

      <Feed/>
    </Box>
  );
}

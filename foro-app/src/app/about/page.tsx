"use client";

import { Box, TextField, Button } from "@mui/material";
import { useState } from "react";
import styles from "./About.module.css";
import useStates from "./states/useStates";

export default function About() {
  const {
    on,
    name,
    lastname,
    phone,
    email,
    option,

    handleOn,
    handleChangeName,
    handleChangeLastname,
    handleChangePhone,
    handleChangeEmail,
    handleChangeOption,
    handleSubmit,
  } = useStates();

  return (
    <Box>
      <h1>HELLOOO WORLD</h1>
      {/* <button
        onClick={handleOn}
        style={{ backgroundColor: on ? "red" : "blue" }}
      >
        Cambiar color
      </button> */}
      <Box className={styles.containerSquare}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "40%",
            height: "70%",
            justifyContent: "center",
            padding: "3%",
          }}
        >
          <TextField
            value={name}
            onChange={handleChangeName}
            label="Name"
            type="text"
            className={styles.textField}
          />
          <TextField
            value={lastname}
            onChange={handleChangeLastname}
            label="Lastname"
            type="text"
            className={styles.textField}
          />
          <TextField
            value={phone}
            onChange={handleChangePhone}
            label="Phone"
            type="text"
            className={styles.textField}
          />
          <TextField
            value={email}
            onChange={handleChangeEmail}
            label="Email"
            className={styles.textField}
            type="email"
          />

          <Button
            onClick={handleSubmit}
            disabled={
              name === "" || lastname === "" || phone === "" || email === ""
            }
            variant="contained"
          >
            {" "}
            Guardar
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

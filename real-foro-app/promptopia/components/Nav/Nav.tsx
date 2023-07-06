"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import styles from "./Nav.module.css";
import { Box, Button } from "@mui/material";

const Nav = () => {
  const isUserLoggedIn = true;

  const [providers, setProviders] = useState<any | null>(null);

  useEffect(() => {
    const setProviders = async () => {
      const response: any = await getProviders();

      setProviders(response);
    };

    setProviders();
  }, []);

  return (
    <nav className={styles.nav}>
      <Link
        href="/"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "5%",
          textDecoration: "none",
        }}
      >
        <Image
          src="/assets/images/logo.svg"
          alt="logo"
          width={30}
          height={30}
          style={{ objectFit: "contain" }}
        />
        <p className={styles.logoTitle}>IdeasTopia</p>
      </Link>

      <Box sx={{ display: "flex" }}>
        {isUserLoggedIn ? (
          <Box sx={{ display: "flex", gap: "5%" }}>
            <Link href="/post-idea" className={styles.btnPost}>
              Create Post
            </Link>

            <Button
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "tranparent",
                border: "1px solid black",
                color: "black",
                textTransform: "none",
                textDecoration: "none",
                width: "110px",
                height: "40px",
                textAlign: "center",
                borderRadius: "500px",
                transition: "all .5s ease",
                "&:hover": {
                  backgroundColor: "white",
                  transform: "scale(1.03)",
                },
              }}
              onClick={() => signOut()}
            >
              Sign Out
            </Button>

            <Link href="/profile">
              <Image
                src="/assets/images/logo.svg"
                width={37}
                height={37}
                alt="profile"
                style={{ borderRadius: "100%" }}
              />
            </Link>
          </Box>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider: any) => (
                <Button
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "tranparent",
                    border: "1px solid black",
                    color: "black",
                    textTransform: "none",
                    textDecoration: "none",
                    width: "110px",
                    height: "40px",
                    textAlign: "center",
                    borderRadius: "500px",
                    transition: "all .5s ease",
                    "&:hover": {
                      backgroundColor: "white",
                      transform: "scale(1.03)",
                    },
                  }}
                >
                  Sign In
                </Button>
              ))}
          </>
        )}
      </Box>
    </nav>
  );
};

export default Nav;

import React from "react";

import Directory from "../../components/directory/directory.component";

import "./homepage.styles.scss";

import { HomePageContainer } from "./homepage.styles";
import { pageTransition, pageVariants, pageStyle } from "../../pageTransitions";
import { motion } from "framer-motion";

const HomePage = () => (
  <HomePageContainer
    as={motion.div}
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
  >
    <Directory />
  </HomePageContainer>
);

export default HomePage;

import React from "react";

import "./sign-in-and-sign-up-styles.scss";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

import { motion } from "framer-motion";
import { pageTransition, pageVariants, pageStyle } from "../../pageTransitions";

const SignInAndSignUpPage = () => (
  <motion.div
    className="sign-in-and-sign-up"
    style={pageStyle}
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
  >
    <SignIn />
    <SignUp />
  </motion.div>
);

export default SignInAndSignUpPage;

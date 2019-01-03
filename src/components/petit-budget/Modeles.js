import React from "react";

import Spacer from "../spacer";
import SubTitle from "../subTitle";
import { theme } from "../globalStyle";

const Modeles = () => {
  return (
    <Spacer backgroundColor={theme.darkGrey} height="100vh">
      <SubTitle label="Modeles" />
    </Spacer>
  );
};

export default Modeles;

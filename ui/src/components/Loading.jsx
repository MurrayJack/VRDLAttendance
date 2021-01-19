import React from "react";
import { HStack } from "./Stack";
import Loader from 'react-loader-spinner'

export const Loading = () => {

   return (
      <HStack>
           <Loader type="Puff" color="#00BFFF" height={80} width={80} />
      </HStack>
  );
};

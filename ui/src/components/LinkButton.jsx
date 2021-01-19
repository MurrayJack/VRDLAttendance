import React from "react";
import styled from "styled-components"
import { CgChevronRight, CgAdd } from "react-icons/cg";

export const LinkButton = ({ children, icon = () => <CgAdd />, ...props }) => {

   return (
      <>
         <Button {...props}>
            <span>
               {icon()}
               <span>{children}</span>
               <CgChevronRight />
            </span>
         </Button>
      </>
   );
};

const Button = styled.button`
  background: var(--color-primary-bg);
  color: var(--color-primary-fg);
  height: 40px;

  > span {
   display: grid;
   align-items: center;
   text-align: left;
   grid-template-columns: 14px 1fr 20px;
   gap: 8px;
  }
`
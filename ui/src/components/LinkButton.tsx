import React from "react";
import styled from "styled-components"
import { CgChevronRight, CgAdd } from "react-icons/cg";

interface ILinkButton {
   caption?: string;
   icon?: () => React.ReactNode;
   onClick?: () => void;
}

export const LinkButton: React.FC<ILinkButton> = ({ children, caption = "", icon = () => <CgAdd />, ...props }) => {

   return (
      <>
         <Button {...props}>
            <span>
               {icon()}
               <span>{children}</span>
               <span>{caption}</span>
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
  font-size: 16px;

  > span {
   display: grid;
   align-items: center;
   text-align: left;
   grid-template-columns: 14px 1fr auto 20px;
   gap: 8px;
  }
`
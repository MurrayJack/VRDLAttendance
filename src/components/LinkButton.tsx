import React from 'react';
import styled from 'styled-components';
import { CgChevronRight, CgAdd } from 'react-icons/cg';

interface ILinkButton {
    caption?: string;
    icon?: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
}

export const LinkButton: React.FC<ILinkButton> = ({
    children,
    caption = '',
    icon = <CgAdd />,
    onClick,
    disabled = false,
}) => {
    const Button = styled.button`
        background: var(--color-primary-bg);
        color: var(--color-primary-fg);
        height: 45px;
        font-size: 16px;

        > span {
            display: grid;
            align-items: center;
            text-align: left;
            grid-template-columns: ${() =>
                disabled ? '1fr' : '14px 1fr auto 20px'};
            gap: 8px;
            text-align: ${() => (disabled ? 'center' : 'left')};
        }
    `;

    return (
        <>
            <Button onClick={onClick} disabled={disabled}>
                <span>
                    {!disabled && icon}
                    <span>{children}</span>
                    {caption && <span>{caption}</span>}
                    {onClick && <CgChevronRight />}
                </span>
            </Button>
        </>
    );
};

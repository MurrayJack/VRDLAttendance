import React, { useEffect } from 'react';
import { VStack, HStack } from '.';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { CgSmile, CgChevronLeft } from 'react-icons/cg';

interface IScreen {
    caption: string;
    allowBack: boolean;
    onBack?: () => void;
}

export const Screen: React.FC<IScreen> = ({
    children,
    caption,
    allowBack,
    onBack,
}) => {
    const history = useHistory();

    useEffect(() => {
        document.title = caption;
    }, [caption]);

    return (
        <main>
            <Header>
                <HStack col="40px 1fr">
                    <HeaderIcon>
                        {allowBack ? (
                            <button
                                className="back"
                                onClick={
                                    onBack ? onBack : () => history.push('/')
                                }
                            >
                                <CgChevronLeft size="24px" />
                            </button>
                        ) : (
                            <CgSmile size="24px" />
                        )}
                    </HeaderIcon>
                    <h2>{caption}</h2>
                </HStack>
            </Header>
            <VStack pad="16px">{children}</VStack>
        </main>
    );
};

const HeaderIcon = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ecf0f1;
`;

const Header = styled.header`
    background: rgba(255, 255, 255, 0.05);
    padding: 0 8px;
`;

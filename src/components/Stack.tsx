import React from 'react';

interface IStack {
    gap?: string;
}

interface IHStack {
    col?: string;
}

interface IVStack {
    pad?: string;
}

export const Stack: React.FC<IStack> = ({ children, gap = '8px' }) => {
    return (
        <div style={{ display: 'grid', gap, padding: '8px' }}>{children}</div>
    );
};

export const HStack: React.FC<IHStack> = ({ children, col = '1fr' }) => {
    return (
        <div
            style={{
                display: 'grid',
                gap: '8px',
                gridTemplateColumns: col,
                gridAutoFlow: 'column',
                alignItems: 'center',
            }}
        >
            {children}
        </div>
    );
};

export const VStack: React.FC<IVStack> = ({ children, pad = '0' }) => {
    return (
        <div
            style={{
                display: 'grid',
                padding: pad,
                gap: '8px',
                gridAutoFlow: 'row',
                alignItems: 'center',
            }}
        >
            {children}
        </div>
    );
};

export const Center: React.FC<IVStack> = ({ children }) => {
    return (
        <div
            style={{
                display: 'grid',
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            {children}
        </div>
    );
};

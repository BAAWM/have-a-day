import React, { ReactNode } from 'react';

interface TypingTextProps {
    text: ReactNode;
}

const TypingText: React.FC<TypingTextProps> = ({ text }) => {
    return <div>hello {text}</div>;
};

export default TypingText;
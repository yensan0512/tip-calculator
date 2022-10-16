import React from "react";
import styled from 'styled-components';

export const Wrapper = styled.button(({ backgroundPass, colorPass }) => `
    background: ${backgroundPass};
    color: ${colorPass};
    font-size:25px;
    padding:8px;
    border-radius:5px;
    border:0;
`);

// buttonType = active,inactive,custom
const Button = ({ children, buttonType, onClick }) => {

    let background = 'var(--very-dark-cyan)';
    let colorText = 'white';

    if (buttonType === "inactive") {
        background = "var(--strong-cyan)";
        colorText = "var(--very-dark-cyan)";
    }
    else if (buttonType === "custom") {
        background = "var(--light-grayish-cyan)";
        colorText = "var(--very-dark-cyan)";
    }

    return (
        <Wrapper
            colorPass={colorText}
            backgroundPass={background}
            onClick={onClick}
        >
            {children}
        </Wrapper>
    );
}

export default Button;
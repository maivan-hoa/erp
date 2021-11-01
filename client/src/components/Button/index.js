import styled from "styled-components";

const Button = styled.button`
    display: block;
    width: ${(props) => (props.block ? "100%" : "initial")};
    padding: 10px;
    margin-top: 20px;
    background-color: ${(props) => (props.outline ? "#ffffff" : "var(--main-color)")};
    color: ${(props) => (props.outline ? "var(--main-color)" : "#ffffff")};
    cursor: pointer;
    border: 1px solid var(--main-color);
    border-radius: 5px;
    transition: all 0.4s;

    :hover {
        background-color: ${(props) => (props.outline ? "var(--main-color)" : "#ffffff")};
        color: ${(props) => (props.outline ? "#ffffff" : "var(--main-color)")};
    }
`;

export default Button;
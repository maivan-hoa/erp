import styled from "styled-components";

export const Wrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: rgba(230, 230, 230, 0.5);
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    width: 500px;
    background-color: #ffffff;
    padding: 15px 20px 15px 20px;
    position: relative;

    h1 {
        text-align: center;
        margin-bottom: 10px;
        font-size: 24px;
    }
`;

export const ButtonLocal = styled.button`
    position: absolute;
    top: 5px;
    right: 5px;
    padding: 8px 10px 5px 10px;
    cursor: pointer;
    border: 1px solid var(--main-color);
    border-radius: 5px;
    transition: all 0.4s;
    background-color: var(--main-color);
    color: #ffffff;
    margin-left: 10px;
    :hover {
        background-color: #ffffff;
        color: var(--main-color);
    }
`;

export const Avatar = styled.div`
    width: 100%;
    text-align: center;
    margin-bottom: 10px;
`;

export const Image = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
`;

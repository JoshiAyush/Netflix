import styled from "styled-components/macro";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Holder = styled(Container)`
    display: flex;
`;

export const Profile = styled(Container)`
    width: 100%;
    max-width: 280px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    & > span {
        margin: 10px 0px;
        margin-left: 10px;
        font-wight: bold;
        font-size: xx-large;
        text-align: center;
        color: white;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    max-width: 280px;
    max-height: 280px;
    border-radius: 50%;
    cursor: pointer;
`;

export const Edit = styled.div`
    background-color: #e5e5e5;
    position: absolute;
    width: 100%;
    height: 100%;
    max-width: 40px;
    max-height: 40px;
    border-radius: 50%;
    bottom: 90px;
    right: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition-property: background-color;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;

    &:hover {
        background-color: #b4b4b4;
    }
`;

export const Button = styled.button`
    background: #e50914;
    border-radius: 4px;
    font-size: 16px;
    font-weight: bold;
    margin: 24px 0 12px;
    padding: 16px;
    border: 0;
    color: white;
    cursor: pointer;
    outline: none;
    margin: auto;
    width: 100%;
    max-width: 280px;
    margin: 10px;
    margin-left: 15px;

    &:active {
        background-color: #FF140D;
    }
`;
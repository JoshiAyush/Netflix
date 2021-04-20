import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Background = styled.div`
    display: flex;
    flex-direction: column;
    background: url(${({ src }) => (src ? `/images/misc/${src}.jpg` : `/images/misc/home-bg.jpg`)}) top left / cover no-repeat;
    color: white;
    border-bottom: 8px solid #222;

    @media (max-width: 1100px) {
        ${({ dontShowOnSmallViewPort }) => dontShowOnSmallViewPort && `background: none;`}
    }
`;

export const Container = styled.div`
    display: flex;
    margin: 0 56px;
    height: 64px;
    padding: 18px 0;
    justify-content: space-between;
    align-items: center;

    a {
        display: flex;
    }

    @media (max-width: 1000px) {
        margin: 0 30px;
    }
`;

export const Logo = styled.img`
    height: 55px;
    width: 187px;
    margin-right: 40px;

    @media (max-width: 1449px) {
        height: 45px;
        width: 167px;
    }
`;

export const Picture = styled.button`
    background: url(${({ src }) => src}) no-repeat;
    background-size: contain;
    border: 0;
    width: 32px;
    height: 32px;
    cursor: pointer;
    transition-property: border;
    transition-timing-function: ease-in;
    transition-duration: 0.1s;
    outline: none;
`;

export const Link = styled.p`
    color: white;
    text-decoration: none;
    margin-right: 30px;
    font-weight: ${({ active }) => (active === true ? 'bold' : 'normal')};
    cursor: pointer;

    &:hover {
        font-weight: bold;
    }

    &:last-of-type {
        margin-right: 0;
    }
`;

export const Group = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 500px) {
        ${Link} {
            display: none;
        }
    }
`;

export const Dropdown = styled.div`
    display: ${({ active }) => active === true ? "flex" : "none"};
    flex-direction: column;
    align-items: center;
    background-color: black;
    position: absolute;
    padding: 10px;
    top: 35px;
    right: -35px;
    width: fit-content;
    height: fit-content;
    box-shadow: 0 0 8px 0.6px rgba(255, 255, 255, 0.288);

    &:hover {
        box-shadow: 0 0 8px 0.6px rgba(255, 255, 255, 0.493);    
    }

    ${Group} ${Link} {
        font-weight: 400;
        color: #808080;

        &:last-of-type {
            margin-top: 10px;
            cursor: pointer;
            font-size: 15px;  
        }
    }

    ${Group}:last-of-type ${Link} {
        margin-top: 10px;
        cursor: pointer;
        font-size: 15px;
    }

    ${Group} {
        margin-bottom: 10px;

        &:last-of-type {
            margin-bottom: 0;
        }

        &:first-of-type {
            cursor: pointer;
        }

        &:hover {
            ${Picture} {
                border: 2px solid white;
            } 

            ${Link} {
                color: #e5e5e5; 
            }
        }

        ${Picture} {
            border-radius: 50%;
        }
    }

    button {
        margin-right: 10px;
    }

    p {
        font-size: 12px;
        margin-bottom: 0;
        margin-top: 0;
    }
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    margin-left: 20px;
    position: relative;
    outline: none;

    &:hover {
        ${Dropdown} {
            display: flex;
        }
    }

    button {
        cursor: pointer;
    }
`;

export const Frame = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 60px auto;
`;

export const Text = styled.p`
    color: white;
    font-size: 22px;
    line-height: normal;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
    margin: 0;
`;

export const FeatureCallOut = styled(Text)`
    font-size: 50px;
    font-weight: bold;
    margin-bottom: 20px;
`;

export const Feature = styled(Container)`
    padding: 150px 0 500px 0;
    flex-direction: column;
    align-items: normal;
    width: 50%;

    @media (max-width: 1100px) {
        display: none;
    }
`;

export const Button = styled(ReactRouterLink)`
    display: block;
    background-color: #e50914;
    width: fit-content;
    text-align: center;
    height: fit-content;
    color: white;
    border: 0;
    font-size: 15px;
    border-radius: 3px;
    padding: 8px 17px;
    cursor: pointer;
    text-decoration: none;
    box-sizing: border-box;
    font-weight: bold;

    &:hover {
        background-color: #f40612;
    }
`;

export const Search = styled.div`
    display: flex;
    align-items: center;

    svg {
        color: white;
        cursor: pointer;
    }

    @media (max-width: 700px) {
        display: none;
    }
`;

export const SearchIcon = styled.button`
    background: url(${({ src }) => src}) no-repeat;
    cursor: pointer;
    background-size: 100%;
    background-color: transparent;
    border: 0;
    width: 22px;
    height: 22px;
    outline: none;
    filter: invert(100%);
    margin-right: 8px;
`;

export const SearchInput = styled.input`
    background-color: #44444459;
    color: black;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0.02rem;
    padding-left: 8px;
    background-color: white;
    border: 1px solid white;
    border-radius: 3px;
    outline: none;
    transition: width 0.5s;
    height: 30px;
    font-size: 14px;
    transition-property: margin-left, padding, opacity, width;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
    margin-left: ${({ active }) => active === true ? '3px' : '0'};
    padding: ${({ active }) => active === true ? '0 10px' : '0'};
    opacity: ${({ active }) => active === true ? '1' : '0'};
    width: ${({ active }) => active === true ? '200px' : '0'};
`;

export const PlayButton = styled.button`
    box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
    background-color: #e6e6e6;
    color: #000;
    border-width: 0;
    padding: 10px 20px;
    border-radius: 5px;
    max-width: 130px;
    font-size: 20px;
    margin-top: 30px;
    cursor: pointer;
    transition-property: color, background-color;
    transition-duration: 0.2s;
    outline: none;
    transition-timing-function: ease-in;

    &:hover {
        background-color: #E50914;
        color: white;
    }

    &:active {
        background-color: rgba(255, 0, 0, 1);
    }
`;
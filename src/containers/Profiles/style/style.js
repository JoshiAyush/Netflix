import styled from "styled-components/macro";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    width: 100%;
    color: white;
    font-size: 48px;
    text-align: center;
    font-weight: 500;

    @media screen and (max-width: 450px) {
        font-size: 38px;
    }
`;

export const List = styled.ul`
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    list-style: none;
`;

export const Name = styled.p`
    color: #808080;
    text-overflow: ellipsis;
    font-size: 16px;
    font-weight: bold;
    transition-property: color;
    transition-timing-function: ease-in;
    transition-duration: 0.1s;

    &:hover {
        color: #e5e5e5;
    }
`;

export const Picture = styled.img`
    width: 100%;
    max-width: 150px;
    height: auto;
    border: 3px solid black;
    cursor: pointer;
    transition-property: border;
    transition-timing-function: ease-in;
    transition-duration: 0.1s;
`;

export const Item = styled.li`
    max-height: 200px;
    max-width: 200px;
    list-style-type: none;
    text-align: center;
    margin-right: 30px;

    &:hover > ${Picture} {
        border: 3px solid white;
    }

    &:hover > ${Name} {
        color: white;
    }

    &:last-of-type {
        margin-right: 0;
    }
`;

export const Inner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    max-width: 80%;
`;
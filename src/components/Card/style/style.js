import styled from "styled-components/macro";

export const Title = styled.p`
    font-size: 24px;
    color: #e5e5e5;
    font-weight: bold;
    margin-left: 56px;
    margin-right: 56px;
    margin-top: 30px;

    @media (max-width: 1000px) {
        margin-left: 30px;
        font-size: 20px;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
    box-sizing: border-box;

    > ${Title} {
        @media (max-width: 1000px) {
            margin-left: 30px;
        }
    }

    &:last-of-type {
        margin-bottom: 0;
    }
`;

export const Group = styled.div`
    display: flex;
    flex-direction: ${({ flexDirection }) => flexDirection === 'row' ? 'row' : 'column'};
    ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
    ${({ margin }) => margin && `margin: ${margin}`};

    > ${Container}:first-of-type {
        @media (min-width: 1100px) {
            margin-top: -150px;
        }
    }
`;

export const Subtitle = styled.p`
    font-size: 12px;
    color: #fff;
    font-weight: bold;
    margin-top: 0;
    margin-bottom: 0;
    user-select: none;
    display: none;
`;

export const Text = styled.p`
    margin-top: 5px;
    font-size: 10px;
    color: #fff;
    margin-bottom: 0;
    user-select: none;
    display: none;
    line-height: normal;
`;

export const FeatureText = styled.p`
    font-size: 18px;
    color: white;
    font-weight: ${({ fontWeight }) => fontWeight === 'bold' ? 'bold' : 'normal'};
    margin: 0;

    @media (max-width: 600px) {
        line-height: 22px;
    }
`;

export const Feature = styled.div`
    display: flex;
    flex-direction: row;
    background: url(${({ src }) => src});
    background-size: contain;
    position: relative;
    height: fit-content;
    max-height: 360px;
    background-position-x: right;
    background-repeat: no-repeat;
    background-color: black;
    margin-right: 56px;
    margin-top: 10px;

    @media (max-width: 1000px) {
        height: fit-content;
        background-size: auto;
        margin: 10px 29px;

        ${Title} {
            font-size: 20px;
            line-height: 20px;
            margin-bottom: 10px;
        }

        ${FeatureText} {
            font-size: 14px;
        }
    }
`;

export const FeatureTitle = styled(Title)`
    margin-left: 0;
`;

export const FeatureClose = styled.button`
    background: url(${({ src }) => src}) no-repeat;
    background-size: 100%;
    color: white;
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
    background-color: transparent;
    border: 0;
    filter: brightness(0) invert(1);
    width: 24px;
    height: 24px;
`;

export const Maturity = styled.div`
    background-color: ${({ rating }) => rating >= 15 ? 'red' : 'green'};
    border-radius: 15px;
    width: 20px;
    padding: 5px;
    text-align: center;
    color: white;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    margin-right: 10px;
    font-size: 12px;
`;

export const Content = styled.div`
    margin: 56px;
    max-width: 500;
    line-height: normal;

    @media (max-width: 1000px) {
        margin: 30px;
        max-width: none;
    }
`;

export const Meta = styled.div`
    display: none;
    position: absolute;
    bottom: 0;
    padding: 10px;
    background-color: #0000008f;
`;

export const Entities = styled.div`
    display: flex;
    flex-direction: row;

    @media (max-width: 500px) {
        overflow-x: auto;
    }
`;

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 5px;
    position: relative;
    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
        transform: scale(1.3);
        z-index: 99;
    }

    @media (min-width: 1200px) {
        &:hover ${Meta}, &:hover ${Text}, &:hover ${Subtitle} {
            display: block;
            z-index: 100;
        }
    }

    &:first-of-type {
        margin-left: 56px;

        @media (max-width: 1000px) {
            margin-left: 30px;
        }
    }

    &:last-of-type {
        margin-right: 56px;

        @media (max-width: 1000px) {
            margin-right: 30px;
        }
    }
`;

export const Image = styled.img`
    border: 0;
    width: 100%;
    max-width: 305px;
    cursor: pointer;
    height: auto;
    padding: 0;
    margin: 0;
`;
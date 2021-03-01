import { Text } from "./style.js";
import { Item } from "./style.js";
import { Meta } from "./style.js";
import { Title } from "./style.js";
import { Group } from "./style.js";
import { Image } from "./style.js";
import { Feature } from "./style.js";
import { Content } from "./style.js";
import { Maturity } from "./style.js";
import { Subtitle } from "./style.js";
import { Entities } from "./style.js";
import { Container } from "./style.js";
import { FeatureText } from "./style.js";
import { FeatureClose } from "./style.js";
import { FeatureTitle } from "./style.js";

import { useContext } from "react";

import { FeatureContext } from "../index.js";

CardContainer.Image = ({ ...restProps }) => (
    <Image {...restProps} />
);

CardContainer.Text = ({ children, ...restProps }) => (
    <Text {...restProps}>{children}</Text>
);

CardContainer.Group = ({ children, ...restProps }) => (
    <Group {...restProps}>{children}</Group>
);

CardContainer.Title = ({ children, ...restProps }) => (
    <Title {...restProps}>{children}</Title>
);

CardContainer.Meta = ({ children, ...restProps }) => (
    <Meta {...restProps}>{children}</Meta>
);

CardContainer.Entities = ({ children, ...restProps }) => (
    <Entities {...restProps}>{children}</Entities>
);

CardContainer.Subtitle = ({ children, ...restProps }) => (
    <Subtitle {...restProps}>{children}</Subtitle>
);

CardContainer.Item = function CardContainerItem({ children, ...restProps }) {
    const { setShowFeature, setItemFeature } = useContext(FeatureContext);

    return (
        <Item
            onClick={
                () => {
                    setItemFeature(item);
                    setShowFeature(true);
                }
            }
            {...restProps}
        >
            {children}
        </Item>
    );
}

export function CardContainer({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    );
}
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

import { useFeatureContext } from "../../../context/StateProvider.js";

CardContainer.Image = ({ ...restProps }) => <Image {...restProps} />;

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

CardContainer.Feature = function CardContainerFeature({
  children,
  category,
  ...restProps
}) {
  const { showFeature, itemFeature, setShowFeature } = useFeatureContext();

  return showFeature ? (
    <Feature
      src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}
      {...restProps}
    >
      <Content>
        <FeatureTitle>{itemFeature.title}</FeatureTitle>

        <FeatureText>{itemFeature.description}</FeatureText>

        <FeatureClose
          src={"/images/icons/close.png"}
          onClick={() => setShowFeature(false)}
        />

        <Group margin="30px 0" flexDirection="row" alignItems="center">
          <Maturity rating={itemFeature.maturity}>
            {itemFeature.maturity < 12 ? "PG" : itemFeature.maturity}
          </Maturity>

          <FeatureText fontWeight="bold">
            {itemFeature.genre.charAt(0).toUpperCase() +
              itemFeature.genre.slice(1)}
          </FeatureText>
        </Group>

        {children}
      </Content>
    </Feature>
  ) : (
    <></>
  );
};

CardContainer.Item = function CardContainerItem({
  children,
  item,
  ...restProps
}) {
  const { setShowFeature, setItemFeature } = useFeatureContext();

  return (
    <Item
      onClick={() => {
        setItemFeature(item);
        setShowFeature(true);
      }}
      {...restProps}
    >
      {children}
    </Item>
  );
};

export function CardContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

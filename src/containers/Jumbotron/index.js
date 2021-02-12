import React from "react";

import jumboData from "../../fixtures/jumbo.json";

import { JumbotronContainer } from "./style/Jumbotron.js";

function Jumbotron() {
    return (
        <JumbotronContainer.Container>

            {
                jumboData.map(item => (

                    <JumbotronContainer key={item.id} direction={item.direction}>

                        <JumbotronContainer.Pane>

                            <JumbotronContainer.Title>{item.title}</JumbotronContainer.Title>

                            <JumbotronContainer.SubTitle>{item.subTitle}</JumbotronContainer.SubTitle>

                        </JumbotronContainer.Pane>

                        <JumbotronContainer.Pane>

                            <JumbotronContainer.Image src={item.image} alt={item.alt} />

                        </JumbotronContainer.Pane>

                    </JumbotronContainer>
                ))
            }

        </JumbotronContainer.Container>
    );
}

export default Jumbotron;
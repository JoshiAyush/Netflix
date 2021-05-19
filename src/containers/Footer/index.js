import React from "react";

import { FooterContainer } from "./style/Footer.js";

function Footer() {
  return (
    <FooterContainer>
      <FooterContainer.Title>Questions? Contact us</FooterContainer.Title>

      <FooterContainer.Break />

      <FooterContainer.Row>
        <FooterContainer.Column>
          <FooterContainer.Link href="#">FAQ</FooterContainer.Link>

          <FooterContainer.Link href="#">
            Investor Relations
          </FooterContainer.Link>

          <FooterContainer.Link href="#">Ways to Watch</FooterContainer.Link>

          <FooterContainer.Link href="#">
            Coporate Information
          </FooterContainer.Link>

          <FooterContainer.Link href="#">
            Netflix Originals
          </FooterContainer.Link>
        </FooterContainer.Column>

        <FooterContainer.Column>
          <FooterContainer.Link href="#">Help Centre</FooterContainer.Link>

          <FooterContainer.Link href="#">Jobs</FooterContainer.Link>

          <FooterContainer.Link href="#">Terms of Use</FooterContainer.Link>

          <FooterContainer.Link href="#">Contact us</FooterContainer.Link>
        </FooterContainer.Column>

        <FooterContainer.Column>
          <FooterContainer.Link href="#">Account</FooterContainer.Link>

          <FooterContainer.Link href="#">
            Redeem Gift Cards
          </FooterContainer.Link>

          <FooterContainer.Link href="#">Privacy</FooterContainer.Link>

          <FooterContainer.Link href="#">Speed Test</FooterContainer.Link>
        </FooterContainer.Column>

        <FooterContainer.Column>
          <FooterContainer.Link href="#">Media Centre</FooterContainer.Link>

          <FooterContainer.Link href="#">Buy Gift Cards</FooterContainer.Link>

          <FooterContainer.Link href="#">
            Cookie Preferences
          </FooterContainer.Link>

          <FooterContainer.Link href="#">Legal Notices</FooterContainer.Link>
        </FooterContainer.Column>
      </FooterContainer.Row>

      <FooterContainer.Break />

      <FooterContainer.Text>Netflix United Kingdom</FooterContainer.Text>
    </FooterContainer>
  );
}

export default Footer;

import React from "react";

import Layout from "../components/Layout";
import Contact from "../components/contact";
import { theme } from "../components/globalStyle";

const ContactPage = ({ location, data }) => {
  return (
    <Layout location={location}>
      <Contact
        data={data.prismicContactBodyContact}
        backgroundColor={theme.darkGrey}
        textMobile="Vous avez un projet de site et vous souhaitez en discuter ?"
      />
    </Layout>
  );
};

export const pageQuery = graphql`
  query Contact {
    prismicContactBodyContact {
      primary {
        titre_contact {
          html
          text
        }
        titre_accroche_1 {
          html
          text
        }
        contenu_accroche_1 {
          html
          text
        }
        titre_accroche_2 {
          html
          text
        }
        contenu_accroche_2 {
          html
          text
        }
        bouton_contact {
          html
          text
        }
        adresse {
          html
        }
      }
    }
  }
`;

export default ContactPage;

import React, { useState } from 'react';
import Layout from '../components/layout';
import Section from '../components/section';
import ContactForm from '../components/contactForm';
import Seo from '../components/seo';

function BackToForm({ callback }) {
  return (
    <>
      <p>Success! Your message has been sent and I will get back to you soon. <span role="img" aria-label="email">📧</span></p>
      <button className="c-button" onClick={callback}>
        Back to form
      </button>
    </>
  );
}

const ContactPage = () => {
  const [success, setSuccess] = useState(false);

  return (
    <Layout>
      <Section
        sectionId="contact"
        title="Contact"
        className="section--narrow"
      >
        { success ? (
          <BackToForm callback={() => setSuccess(false)} />
          ) : (
            <>
            <p>Hi there, please send me a message via this form and I will respond as soon as possible.</p>
            <ContactForm setSuccess={setSuccess} />
          </>
        ) }
      </Section>
    </Layout>
  );
}

export const Head = () => (<Seo />);

export default ContactPage

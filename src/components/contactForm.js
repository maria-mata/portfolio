import React, { useState, useEffect, useRef } from 'react';
import Button from './button';
import './contactForm.scss';

// Code from https://emailregex.com/
const emailRegex = RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

const FORM_URL = process.env.CONTACT_API_URL;
  
export default function ContactForm({ setSuccess }) {
  const [error, setError] = useState(false);
  const [sending, setSending] = useState(false);
  const [spam, setSpam] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const validForm = () => 
    !spam &&
    emailRegex.test(email) &&
    name.trim() !== '' &&
    message.trim() !== '';

  const onSubmit = async e => {
    e.preventDefault();

    if (!validForm()) return setError(true);

    setSending(true);

    try {
      const { status } = await fetch(FORM_URL, {
        method: 'POST',
        body: JSON.stringify({ name, email, message }),
        headers: { 'Content-Type': 'application/json' },
      });
      status === 200 && setSuccess(true);
    } catch (error) {
      setError(true);
      console.error(error);
      setSending(false);
    }
  };

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      {error && (
        <small className="contact-form__small">
          Oops! Some info is missing or incorrect. Please try again.
        </small>
      )}
      <label htmlFor="name">
        Name
        <input
          autoComplete="off"
          disabled={sending}
          id="name"
          onChange={e => setName(e.target.value)}
          type="text"
          value={name}
          ref={inputRef}
        />
      </label>
      <label htmlFor="email">
        Email
        <input
          autoComplete="off"
          disabled={sending}
          id="email"
          onChange={e => setEmail(e.target.value)}
          type="email"
          value={email}
        />
      </label>
      <label htmlFor="message">Message</label>
      <textarea
        autoComplete="off"
        disabled={sending}
        id="message"
        onChange={e => setMessage(e.target.value)}
        value={message}
        rows="5"
      />
      <div
        aria-hidden="true"
        style={{ position: 'absolute', left: '-5000px' }}
      >
        <input
          type="checkbox"
          name="soft_blue_fractal_giraffe"
          value="1"
          onChange={() => setSpam(true)}
          autoComplete="off"
        />
      </div>
      <div>
        <Button disabled={sending} type="submit">
          Send
        </Button>
      </div>
    </form>
  );
}

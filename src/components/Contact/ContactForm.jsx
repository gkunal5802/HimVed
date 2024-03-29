import emailjs from "@emailjs/browser";
import { Slide, Snackbar, SnackbarContent } from "@mui/material";
import { useRef, useState } from "react";
import styled from "styled-components";
import { formFields } from "../../data/constants";

const FormBox = styled.div`
  width: 80%;
  margin: 0 auto 3.2rem auto;
  display: grid;
  gap: 4.2rem;
`;

const ContactDiv = styled.div`
  position: relative;
  height: 6rem;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.8rem;
  margin-top: 3.2rem;
  *:focus {
    outline: none;
    box-shadow: 0 0 0 0.4rem #40d376aa;
  }
  :nth-child(4) {
    margin-bottom: 4rem;
  }
`;

const Label = styled.label`
  position: absolute;
  text-transform: capitalize;
  top: -1rem;
  left: 1.25rem;
  padding: 0.25rem;
  font-size: 1.4rem;
  background: #dbe6c0;
  z-index: 10;
  color: #28834a;
  font-weight: 500;
`;

const Input = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 2px solid #28834a;
  background: none;
  border-radius: 9px;
  color: #111;
  padding: 1.5rem;
  z-index: 1;
`;

const SubmitButton = styled.input`
  width: 30%;
  text-decoration: none;
  text-align: center;

  background: #2abb5fe6;
  padding: 12px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: #222;
  font-size: 1.8rem;
  font-weight: 600;
  cursor: pointer;
  @media (max-width: 425px) {
    width: 50%;
  }
`;

function ContactForm() {
  const form = useRef();
  const [open, setOpen] = useState(false);

  function handleClose() {
    setOpen(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    emailjs
      .sendForm("service_8kallop", "template_9d0i2xe", form.current, {
        publicKey: "VQxDZX-XH2GPeGrPz",
      })
      .then(
        (response) => {
          console.log("SUCCESS!", response);
          // console.log(form.current.name);
          form.current.reset();
          setOpen(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  }
  return (
    <FormBox>
      <Form name="write-to-me" ref={form} onSubmit={handleSubmit}>
        {formFields.map((field, i) => (
          <ContactDiv key={i}>
            <Label htmlFor={field}>{field}</Label>
            <Input
              name={field}
              placeholder={`write your ${field}`}
              type={field === "email" ? "email" : "text"}
              id={field}
              required
              style={
                field === "message" ? { height: "10rem" } : { height: "5rem" }
              }
            />
          </ContactDiv>
        ))}

        <SubmitButton type="submit" value="Send" />
        <Snackbar
          open={open}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          autoHideDuration={6000}
          onClose={handleClose}
          TransitionComponent={Slide}
        >
          <SnackbarContent
            style={{
              backgroundColor: "#28834a",
              fontSize: 16,
            }}
            message={
              <span id="client-snackbar">Message sent Successfully ✌️</span>
            }
          />
        </Snackbar>
      </Form>
    </FormBox>
  );
}

export default ContactForm;

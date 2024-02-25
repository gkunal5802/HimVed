import styled from "styled-components";
import Button from "../../ui/Button";
import { formFields } from "../../data/constants";

const FormBox = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const ContactDiv = styled.div`
  position: relative;
  height: 6rem;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.8rem;
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
  background-color: #dae8ca;
  z-index: 10;
  color: #28834a;
`;

const Input = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 2px solid #28834a;
  background: none;
  outline: none;
  border-radius: 9px;
  color: #111;
  padding: 1.5rem;
  z-index: 1;
`;

function ContactForm() {
  return (
    <FormBox>
      <Form name="write-to-me">
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

        <Button type="submit" value="Submit">
          Submit
        </Button>
      </Form>
    </FormBox>
  );
}

export default ContactForm;

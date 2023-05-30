import React from "react";
import {
  CallbackInput,
  ContactsContent,
  ContactsForm,
  ContactsText,
  ContactsTitle,
  ContactsWrapper,
  InputTextInput,
  SectionContainer,
  DarkButton,
  FrontCarImg,
} from "../style";
import axios from "axios";
import { PaperPlaneTilt } from "@phosphor-icons/react";

const handleSubmit = async (event: {
  preventDefault: () => void;
  target: { name: { value: string }; phone: { value: number } };
}) => {
  event.preventDefault(); // Prevent default form submission

  const name = event.target.name.value; // Get the value of the name input
  const phone = event.target.phone.value; // Get the value of the phone input

  try {
    // Send a POST request to the Google Sheets API
    const response = await axios.post(
      "https://your-google-sheets-api-endpoint",
      {
        name: name,
        phone: phone,
      }
    );

    console.log("Form data submitted successfully", response);
  } catch (error) {
    console.error("Error submitting form data", error);
  }
};

const Contacts = () => {
  return (
    <SectionContainer>
      <div style={{ backgroundColor: "#fff", borderRadius: "20px" }}>
        <ContactsWrapper>
          <ContactsContent>
            <ContactsTitle>напишите нам для сотрудничества</ContactsTitle>
            <ContactsText>
              Если у вас остались вопросы, заполните имя и номер телефона и мы
              свяжемся c вами
            </ContactsText>
          </ContactsContent>
          <ContactsForm>
            <CallbackInput>
              <InputTextInput type="text" name="name" placeholder="ваше имя" />
              <InputTextInput
                type="number"
                name="phone"
                aria-label="номер телефона"
                placeholder="номер телефона"
              />
              <DarkButton style={{ gap: "12px" }}>
                отправить <PaperPlaneTilt size={22} weight="bold" />
              </DarkButton>
            </CallbackInput>
          </ContactsForm>

          <FrontCarImg />
        </ContactsWrapper>
      </div>
    </SectionContainer>
  );
};

export default Contacts;

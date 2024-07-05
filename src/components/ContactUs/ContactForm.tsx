/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { TextInput, Select, Modal, Loader } from "@mantine/core";
import { Button, Spinner } from "@nextui-org/react";
import axios from "axios";
import "@mantine/core/styles.css";
import "./css/ContactForm.css";

import { DatePicker, DatePickerProps, Typography } from "antd";
import { Space } from "antd/es";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

function ContactForm() {
  dayjs.extend(customParseFormat);
  const dateFormat = "DD/MM/YYYY";
  const customFormat: DatePickerProps["format"] = (value) =>
    `${value.format(dateFormat)}`;

  const [slowTransitionOpened, setSlowTransitionOpened] = useState(false);
  const [errorModalOpened, setErrorModalOpened] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    Name: "",
    FatherName: "",
    Phone: "",
    Email: "",
    Age: "",
    Gender: "",
    Dob: null,
    Address: "",
  });

  const [loading, setLoading] = useState(false); // State for loading indicator

  const inputStyles = {
    input: {
      height: "50px",
      borderRadius: "12px",
      borderColor: "#ccc",
      "&:focus": {
        borderColor: "#34d399",
        borderRadius: "14px",
      },
    },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleGenderChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      Gender: value,
    }));
  };

  const handleDateChange = (date, dateString) => {
    setFormData((prevData) => ({
      ...prevData,
      Dob: dateString, // Ant Design's DatePicker provides dateString directly
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "https://kasthuri-medical-mission-backend.vercel.app/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText);
      }

      const formEle = document.querySelector(".Form_MainC");

      if (formEle) {
        const data = new FormData(formEle);

        data.append("Dob", formData.Dob);

        axios
          .post(
            "https://script.google.com/macros/s/AKfycbwoTMSPugGD0L6xjMa8LnDFD_aQyFnxpuHdlAcs94X9K2uqOLn74iUro8HUuvbmr1wd/exec",
            data
          )
          .then((response) => {
            console.log("Form submitted successfully:", response);
            setIsSubmitted(true);
            setFormData({
              Name: "",
              FatherName: "",
              Phone: "",
              Email: "",
              Age: "",
              Gender: "",
              Dob: null,
              Address: "",
            });
            formEle.reset();
            setSlowTransitionOpened(true);
          })
          .finally(() => {
            setLoading(false);
          })
          .catch((error) => {
            console.error("Error submitting form:", error);
            setErrorModalOpened(true);
          });
      }
    } catch (error) {
      console.error("Error submitting form:", error.message); // Log error message
      setErrorModalOpened(true);
      setLoading(false);
    }
  };

  return (
    <div>
      {!loading && (
        <Modal
          opened={slowTransitionOpened}
          onClose={() => setSlowTransitionOpened(false)}
          title="Thank you for your submission!"
          className="text-[13px]"
        >
          Please feel free to reach out to us if you have any questions or
          require further assistance. We're here to help!
        </Modal>
      )}

      <Modal
        opened={errorModalOpened || loading}
        onClose={() => setErrorModalOpened(false)}
        className="text-[13px] overflow-hidden bg-transparent"
        size=""
        centered
        withCloseButton={false}
      >
        {loading ? (
          <Spinner
            id="Spinner"
            color="default"
            className="mb-[-5px] mt-[5px] mx-[5px]"
          />
        ) : (
          <>
            An error occurred while submitting the form. Please try again later.
          </>
        )}
      </Modal>

      <form
        onSubmit={handleSubmit}
        className="Form_MainC justify-center mx-auto"
      >
        <div className="Form_Grid grid w-[82%] pt-0 mx-20 mb-2 gap-4 grid-cols-2">
          <TextInput
            label="Name"
            name="Name"
            value={formData.Name}
            placeholder="Enter your name"
            inputWrapperOrder={["label", "error", "input", "description"]}
            styles={inputStyles}
            onChange={handleChange}
            required
            className="Grid_Inputs"
          />
          <TextInput
            label="Father Name"
            name="FatherName"
            value={formData.FatherName}
            placeholder="Enter your Father name"
            inputWrapperOrder={["label", "error", "input", "description"]}
            styles={inputStyles}
            onChange={handleChange}
            required
            className="Form_Grid_Boxes Grid_Inputs Form_Grid_Boxes_FN"
          />
        </div>
        <div className="Form_Grid grid w-[82%] pt-2 mx-20 mb-2 gap-4 grid-cols-2">
          <TextInput
            label="Phone"
            name="Phone"
            value={formData.Phone}
            placeholder="Enter your number"
            inputWrapperOrder={["label", "error", "input", "description"]}
            styles={inputStyles}
            onChange={handleChange}
            required
            className="Grid_Inputs"
          />
          <TextInput
            label="Email"
            name="Email"
            value={formData.Email}
            placeholder="Enter your email"
            inputWrapperOrder={["label", "error", "input", "description"]}
            styles={inputStyles}
            onChange={handleChange}
            required
            className="Form_Grid_Boxes Grid_Inputs"
          />
        </div>
        <div className="Form_Grid grid w-[82%] mx-20 mb-2 gap-4 grid-cols-2">
          <TextInput
            label="Age"
            name="Age"
            value={formData.Age}
            placeholder="Enter your age"
            inputWrapperOrder={["label", "error", "input", "description"]}
            styles={inputStyles}
            onChange={handleChange}
            required
            className="Grid_Inputs"
          />
          <Select
            label="Gender"
            name="Gender"
            value={formData.Gender}
            placeholder="Select your gender"
            data={[
              { value: "male", label: "Male" },
              { value: "female", label: "Female" },
              { value: "other", label: "Other" },
            ]}
            styles={inputStyles}
            onChange={(value) => handleGenderChange(value)}
            required
            className="Form_Grid_Boxes Grid_Inputs"
          />
        </div>
        <div className="Form_Grid grid w-[82%] mx-20 mb-2 gap-4 grid-cols-2">
          <Space direction="vertical" className="DateField Grid_Inputs">
            <Typography.Text
              className="DateTitle font-medium flex"
              style={{ marginBottom: "-10px" }}
            >
              Date of Birth <p className="text-red-500">*</p>
            </Typography.Text>
            <DatePicker
              format={customFormat}
              onChange={handleDateChange}
              placeholder="Select your DOB"
              style={{ width: "100%", marginTop: "-9.5px" }}
              required
              className="Grid_Inputs DateInput h-[50px] rounded-[12px] border-gray-300 focus:border-emerald-400 focus:rounded-[14px]"
            />
          </Space>
          <TextInput
            label="Address"
            name="Address"
            value={formData.Address}
            placeholder="Enter your address"
            inputWrapperOrder={["label", "error", "input", "description"]}
            styles={inputStyles}
            onChange={handleChange}
            required
            className="Form_Grid_Boxes Grid_Inputs"
          />
        </div>
        <Button
          type="submit"
          variant="default"
          className="Form_Button text-[20px] mt-4 ml-20 bg-emerald-400 py-3 px-10 text-black rounded-lg font-medium leading-[70px]"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default ContactForm;

import React, { useState } from "react";
import { TextInput, Select, Modal } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { Button } from "@nextui-org/react";
import axios from "axios";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "./css/BookForm.css";

function BookForm() {
  const [slowTransitionOpened, setSlowTransitionOpened] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    Name: "",
    FatherName: "",
    Phone: "",
    Email: "",
    Age: "",
    Gender: "",
    Dob: "",
    Address: "",
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const formEle = document.querySelector(
      ".Form_Main"
    ) as HTMLFormElement | null;
    if (formEle) {
      const formData = new FormData(formEle);

      axios
        .post(
          "https://script.google.com/macros/s/AKfycbwoTMSPugGD0L6xjMa8LnDFD_aQyFnxpuHdlAcs94X9K2uqOLn74iUro8HUuvbmr1wd/exec",
          formData
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
            Dob: "",
            Address: "",
          });
          formEle.reset();
          setSlowTransitionOpened(true); // Open modal after successful submission
        })
        .catch((error) => {
          console.error("Error submitting form:", error);
        });
    }
  };

  return (
    <div>
      <Modal
        opened={slowTransitionOpened}
        onClose={() => setSlowTransitionOpened(false)}
        title="Thank you for your submission!"
        o="rotate-left"
        className="text-[13px]"
      >
        Please feel free to reach out to us if you have any questions or require
        further assistance. We're here to help!
      </Modal>

      <form onSubmit={handleSubmit} className="Form_Main">
        <h1 className="Form_Title text-[35px] gap-[12px] text-black mt-2 ml-20 flex font-bold">
          Book <p className="text-emerald-400">Appointment</p>
        </h1>
        <div className="Form_Grid grid w-[82%] pt-0 mx-20 mt-3 mb-2 gap-4 grid-cols-2">
          <TextInput
            label="Name"
            name="Name"
            value={formData.Name}
            placeholder="Enter your name"
            inputWrapperOrder={["label", "error", "input", "description"]}
            styles={inputStyles}
            onChange={handleChange}
            required
            width={100}
          />
          <TextInput
            label="Father Name"
            name="FatherName"
            value={formData.FatherName}
            placeholder="Enter your father's name"
            inputWrapperOrder={["label", "error", "input", "description"]}
            styles={inputStyles}
            onChange={handleChange}
            required
            className="Form_Grid_Boxes"
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
            className="Form_Grid_Boxes"
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
            className="Form_Grid_Boxes"
          />
        </div>
        <div className="Form_Grid grid w-[82%] mx-20 mb-2 gap-4 grid-cols-2">
          <DateInput
            label="Date of Birth"
            name="Dob"
            value={formData.Dob}
            placeholder="Select your DOB"
            styles={inputStyles}
            onChange={(value) =>
              setFormData((prevData) => ({ ...prevData, Dob: value }))
            }
            required
          />
          <TextInput
            label="Address"
            name="Address"
            value={formData.Address}
            placeholder="Enter your address"
            inputWrapperOrder={["label", "error", "input", "description"]}
            styles={inputStyles}
            onChange={handleChange}
            required
            className="Form_Grid_Boxes"
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

export default BookForm;

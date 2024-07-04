const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const app = express();
const port = 4000; // Ensure this matches your fetch request

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Email Server");
});

app.post("/send-email", async (req, res) => {
  const { Name, FatherName, Phone, Email, Age, Gender, Dob, Address } =
    req.body;

  const userMailOptions = {
    from: "srinisvfb1018@gmail.com",
    to: Email,
    subject: "Your Form Submission",
    text: `Thank you for your submission! Here are the details you provided:
      Name: ${Name}
      FatherName: ${FatherName}
      Phone: ${Phone}
      Email: ${Email}
      Age: ${Age}
      Gender: ${Gender}
      Date of Birth: ${Dob}
      Address: ${Address}
    `,
  };

  const adminMailOptions = {
    from: "srinisvfb1018@gmail.com",
    to: "srinivasanp1018@gmail.com",
    subject: "New Form Submission",
    text: `A new form has been submitted. Here are the details:
      Name: ${Name}
      FatherName: ${FatherName}
      Phone: ${Phone}
      Email: ${Email}
      Age: ${Age}
      Gender: ${Gender}
      Date of Birth: ${Dob}
      Address: ${Address}
    `,
  };

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "srinisvfb1018@gmail.com",
      pass: "beqjilzoiidxamdg",
    },
  });

  try {
    await transporter.sendMail(userMailOptions);
    await transporter.sendMail(adminMailOptions);
    res.status(200).send("Emails sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Error sending email");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

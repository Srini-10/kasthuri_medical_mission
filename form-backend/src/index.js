const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Welcome to the Email Server");
// });

app.get("/test", (req, res) => {
  res.status(200).send("Test route is working!");
});

app.post("/send-email", async (req, res) => {
  console.log("Received form data:", req.body); // Log request body
  const { Name, FatherName, Phone, Email, Age, Gender, Dob, Address } =
    req.body;

  const userMailOptions = {
    from: "kasthurimedicalmission@gmail.com",
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
    from: "kasthurimedicalmission@gmail.com",
    to: "srinisvfb1018@gmail.com",
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
      user: "kasthurimedicalmission@gmail.com",
      pass: "ltoufovpofszagja",
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

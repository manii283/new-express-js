const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.write("<h1>welcom to my home page</h1>");
  res.write("<h1>welcom to my home page again</h1>");
  res.send();
});

app.get("/about", (req, res) => {
  res.send("welcom to my about page");
});

// app.get("/contact", (req, res) => {
//   // res.send('welcom to my contact page')
//   res.send([
//     {
//       id: 1,
//       name: "manisha",
//     },
//     {
//       id: 2,
//       name: "aditya",
//     },
//     {
//       id: 3,
//       name: "vidhi",
//     },
//   ]);
// });


app.get("/contact", (req, res) => {
  // res.send('welcom to my contact page')
  res.json([
    {
      id: 1,
      name: "manisha",
    },
    {
      id: 2,
      name: "aditya",
    },
    {
      id: 3,
      name: "vidhi",
    },
  ]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

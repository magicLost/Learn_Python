import app from "./app";

const port: number = 3000;

const server = app.listen(port, () =>
  console.log(`App running on port ${port}`)
);

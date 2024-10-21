import mongoose from "mongoose";
const connectedToDb = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/IncareHealth")
    .then((result) => {
      console.log(` datbase is connected.....!`);
    })
    .catch((err) => {
      console.log(` the error message is :- ${err}`);
    });
};
export default connectedToDb;

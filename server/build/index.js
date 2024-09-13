"use strict";
// import express, { Express } from "express";
// import mongoose from "mongoose";
// import financialRecordRouter from "./routes/financial-records";
// import cors from "cors";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const app: Express = express();
// const port = process.env.PORT || 3001;
// app.use(express.json());
// app.use(cors());
// const mongoURI: string =
//   "mongodb+srv://sailakshmi:SAIlakshmi@sailakshmi.uv7cqqk.mongodb.net/?retryWrites=true&w=majority&appName=sailakshmi";
// mongoose
//   .connect(mongoURI)
//   .then(() => console.log("CONNECTED TO MONGODB!"))
//   .catch((err) => console.error("Failed to Connect to MongoDB:", err));
// app.use("/financial-records", financialRecordRouter);
// app.listen(port, () => {
//   console.log(`Server Running on Port ${port}`);
// });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const financial_records_1 = __importDefault(require("./routes/financial-records"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3001;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const mongoURI = "mongodb+srv://sailakshmi:SAIlakshmi@sailakshmi.uv7cqqk.mongodb.net/?retryWrites=true&w=majority&appName=sailakshmi";
mongoose_1.default
    .connect(mongoURI)
    .then(() => console.log("CONNECTED TO MONGODB!"))
    .catch((err) => console.error("Failed to Connect to MongoDB:", err)); // Add explicit 'Error' type for 'err'
app.use("/financial-records", financial_records_1.default);
app.listen(port, () => {
    console.log(`Server Running on Port ${port}`);
});

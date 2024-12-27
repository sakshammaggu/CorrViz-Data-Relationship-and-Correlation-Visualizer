import express from "express";
import config from "config";
import log from "../utils/loggerConfig/logger";
import connectMongoDb from "../utils/mongoDbConfig/mongoDbConnect";

const port=config.get<number>('port');
const app=express();
app.use(express.json());

app.listen(port, async()=>{
    log.info(`App is running at port http://localhost:${port}`);
    await connectMongoDb();
});
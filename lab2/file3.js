import { constants } from "buffer";
import { readFile, writeFile, appendFile } from "fs/promises";

const writeData = async (fname, contents) => {
    await writeFile(fname, contents);
    console.log("File written");
};

const readData = async (fname) => {
    const data = await readFile(fname, "utf-8");
    console.log(data);
};

const appendData = async (fname, contents) => {
    await appendFile(fname, "\n" + contents);
    console.log("File contents");
    console.log(data);
};
const appendData=async(fname)=>{
    await appendData(fname,"\n"+constants)
}

// await writeData("happy.txt", "I am very happy");
// await appendData("happy.txt", "FSD is interesting");
// await readData("happy.txt");
import { writeFile } from "fs/promises";

const f1 = () => {
    console.log("f1");
};

const f2 = () => {
    console.log("f2");
};

const f3 = () => {
    console.log("f3");
};

const writeData = async () => {
    await writeFile("note.txt", "I am fs module");
    console.log("file written");
};

const main = () => {
    console.log("main");

    writeData();

    setTimeout(f2, 0);
    setImmediate(f3);
    process.nextTick(f1);

    console.log("end");

    new Promise((resolve, reject) => {
        console.log("I am promise 1");
        resolve();
    });

    new Promise((resolve, reject) => {
        console.log("I am promise 2");
        resolve();
    });
};

main();


const f1=() =>{
    console.log("hello f1");

};
const f2=() =>{
    console.log("hello f2");

};
function main(){
    console.log("main");
    setTimeout(f1,0);
    f2();
}
main();
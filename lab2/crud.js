import readline from "readline/promises";
import { writeFile, readFile } from "fs/promises";
import { stdin, stdout } from "process";

const FILE = "products.json";

const saveCart = async (cart) => {
    await writeFile(FILE, JSON.stringify(cart, null, 2));
};

const getCart = async () => {
    const data = await readFile(FILE, "utf-8");
    return JSON.parse(data);
};

const addToCart = async (item) => {
    const products = await getCart();
    products.push(item);
    await saveCart(products);
};

const main = async () => {

    const cin = readline.createInterface({
        input: stdin,
        output: stdout
    });

    let choice;

    do {
        console.log("\nWelcome to shopping cart 🛒");
        console.log("1 - add to cart");
        console.log("2 - show to cart");
        console.log("3 - remove item");
        console.log("4 - update quantity");
        console.log("5 - checkout");

        choice = await cin.question("Enter your choice: ");

        switch (choice) {

            case "1":
                console.log("Add to cart");
                break;

            case "2":
                console.log("Show cart");
                break;

            case "3":
                console.log("Remove item");
                break;

            case "4":
                console.log("Update quantity");
                break;

            case "5":
                console.log("Checkout");
                process.exit();
                break;

            default:
                console.log("Invalid choice 😍");
        }

    } while (choice != "5");

    cin.close();
};

main();
import { v4 as uuidv4 } from 'uuid';
//Burgers image
import burgerDream from "../images/products/burger/dream-burger.png";
import burgerWaldo from "../images/products/burger/waldo-burger.png";
import burgerCali from "../images/products/burger/cali-burger.png";
import burgerBuddy from "../images/products/burger/bacon-buddy.png";
import burgerSpicy from "../images/products/burger/spicy-burger.png";
import burgerClassic from "../images/products/burger/double-cheese.jpg";

//Sides image
import salatCeasar from "../images/products/sides/ceaser.png";
import beans from "../images/products/sides/beans.png";
import friesCheese from "../images/products/sides/fries-cheese.png";
import firesRustic from "../images/products/sides/fries-rustic.png";

//Drinks images
import figLime from "../images/products/drinks/figlime.png";
import coffee from "../images/products/drinks/coffee.jpg";
import lime from "../images/products/drinks/lime.png";
import cola from "../images/products/drinks/cola.png";

export const products = [
    {
        id: uuidv4 (),
        category: "burger",
        name: "Burger Dreams",
        price: 9.20,
        description: `
        Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est.
        Eos ei isl graecis, vix aperiri consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et. Mea facilisis urbanitas. Vis ei rationibus definiebas, eu qui purto zril laoreet. Ex error omnium interpretaris pro, alia illum ea vim.`,
        image: burgerDream
    },
    {
        id: uuidv4(),
        category: "burger",
        name: "Burger Waldo",
        price: 10.00,
        description: `
        Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est.
        Eos ei isl graecis, vix aperiri consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et. Mea facilisis urbanitas. Vis ei rationibus definiebas, eu qui purto zril laoreet. Ex error omnium interpretaris pro, alia illum ea vim.`,
        image: burgerWaldo
    },
    {
        id: uuidv4(),
        category: "burger",
        name: "Burger Cali",
        price: 8.00,
        description: `
        Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est.
        Eos ei isl graecis, vix aperiri consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et. Mea facilisis urbanitas. Vis ei rationibus definiebas, eu qui purto zril laoreet. Ex error omnium interpretaris pro, alia illum ea vim.`,
        image: burgerCali
    },
    {
        id: uuidv4(),
        category: "burger",
        name: "Burger Bacon Buddy",
        price: 9.99,
        description: `
        Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est.
        Eos ei isl graecis, vix aperiri consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et. Mea facilisis urbanitas. Vis ei rationibus definiebas, eu qui purto zril laoreet. Ex error omnium interpretaris pro, alia illum ea vim.`,
        image: burgerBuddy
    },
    {
        id: uuidv4(),
        category: "burger",
        name: "Burger Spicy",
        price: 9.20,
        description: `
        Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est.
        Eos ei isl graecis, vix aperiri consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et. Mea facilisis urbanitas. Vis ei rationibus definiebas, eu qui purto zril laoreet. Ex error omnium interpretaris pro, alia illum ea vim.`,
        image: burgerSpicy
    },
    {
        id: uuidv4(),
        category: "burger",
        name: "Burger Classic",
        price: 8.00,
        description: `
        Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est.
        Eos ei isl graecis, vix aperiri consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et. Mea facilisis urbanitas. Vis ei rationibus definiebas, eu qui purto zril laoreet. Ex error omnium interpretaris pro, alia illum ea vim.`,
        image: burgerClassic
    },
    {
        id: uuidv4(),
        category: "side",
        name: "Salad Ceaser",
        price: 6.00,
        description: `
        Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est.
        Eos ei isl graecis, vix aperiri consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et. Mea facilisis urbanitas. Vis ei rationibus definiebas, eu qui purto zril laoreet. Ex error omnium interpretaris pro, alia illum ea vim.`,
        image: salatCeasar
    },
    {
        id: uuidv4(),
        category: "side",
        name: "Beans Slow Cooked",
        price: 4.00,
        description: `
        Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est.
        Eos ei isl graecis, vix aperiri consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et. Mea facilisis urbanitas. Vis ei rationibus definiebas, eu qui purto zril laoreet. Ex error omnium interpretaris pro, alia illum ea vim.`,
        image: beans
    },
    {
        id: uuidv4(),
        category: "side",
        name: "Fries Cheese",
        price: 5.00,
        description: `
        Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est.
        Eos ei isl graecis, vix aperiri consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et. Mea facilisis urbanitas. Vis ei rationibus definiebas, eu qui purto zril laoreet. Ex error omnium interpretaris pro, alia illum ea vim.`,
        image: friesCheese
    },
    {
        id: uuidv4(),
        category: "side",
        name: "Fies Rustic",
        price: 4.00,
        description: `
        Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est.
        Eos ei isl graecis, vix aperiri consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et. Mea facilisis urbanitas. Vis ei rationibus definiebas, eu qui purto zril laoreet. Ex error omnium interpretaris pro, alia illum ea vim.`,
        image: firesRustic
    },
    {
        id: uuidv4(),
        category: "drink",
        name: "Drink Fiq & Lime",
        price: 4.00,
        description: `
        Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est.
        Eos ei isl graecis, vix aperiri consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et. Mea facilisis urbanitas. Vis ei rationibus definiebas, eu qui purto zril laoreet. Ex error omnium interpretaris pro, alia illum ea vim.`,
        image: figLime
    },
    {
        id: uuidv4(),
        category: "drink",
        name: "Coffee",
        price: 2.00,
        description: `
        Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est.
        Eos ei isl graecis, vix aperiri consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et. Mea facilisis urbanitas. Vis ei rationibus definiebas, eu qui purto zril laoreet. Ex error omnium interpretaris pro, alia illum ea vim.`,
        image: coffee
    },
    {
        id: uuidv4(),
        category: "drink",
        name: "Drink Lime",
        price: 4.00,
        description: `
        Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est.
        Eos ei isl graecis, vix aperiri consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et. Mea facilisis urbanitas. Vis ei rationibus definiebas, eu qui purto zril laoreet. Ex error omnium interpretaris pro, alia illum ea vim.`,
        image: lime
    },
    {
        id: uuidv4(),
        category: "drink",
        name: "Drink Cola",
        price: 3.00,
        description: `
        Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est.
        Eos ei isl graecis, vix aperiri consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et. Mea facilisis urbanitas. Vis ei rationibus definiebas, eu qui purto zril laoreet. Ex error omnium interpretaris pro, alia illum ea vim.`,
        image: cola
    },
]
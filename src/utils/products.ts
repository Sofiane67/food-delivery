import { v4 as uuidv4 } from 'uuid';
import burgerDream from "../images/products/burger/dream-burger.png";

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
    }
]
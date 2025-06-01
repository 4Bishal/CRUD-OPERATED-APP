const mongoose = require("mongoose");
const Chat = require("./models/chat.js");


main()
    .then((result) => {
        console.log("Connection SucessFul!");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
}

let allChats = [
    {
        from: "Samir",
        to: "Sushant",
        msg: "Hey , Are you going to compose a new song?",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        from: "Sagun",
        to: "Kapil",
        msg: "Hey , Have you understand this f*****g meme!!?",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        from: "Aisha",
        to: "Samridhi",
        msg: "Hey , Have you solve this program ?",
        createdAt: new Date(),
        updatedAt: new Date()
    }
];

Chat.insertMany(allChats);

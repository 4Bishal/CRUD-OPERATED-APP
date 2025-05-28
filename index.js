const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
const methodOverride = require('method-override')

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));

app.use(methodOverride('_method'))

const port = 8080;

main()
    .then((result) => {
        console.log("Connection SucessFul!");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}


//show all data
app.get("/chats", async (req, res) => {
    let chats = await Chat.find();
    res.render("index.ejs", { chats });
});

//create a new chat
app.get("/chats/new", (req, res) => {
    res.render("new.ejs");
})

app.post("/chats", (req, res) => {
    let { from, msg, to } = req.body;
    let chat = new Chat({
        from: from,
        to: to,
        msg: msg,
        createdAt: new Date(),
        updatedAt: new Date()
    });
    console.log(chat);
    chat.save()
        .then((result) => {
            console.log("SucessFul Creation!");
        }).catch((err) => {
            console.log("UnsucessFul Creation!");
        })
    res.redirect("/chats");
});


// Edit a Chat
app.get("/chats/:id/edit", async (req, res) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", { chat });
});

// Update Route
app.put("/chats/:id", async (req, res) => {
    let { id } = req.params;
    let { msg: newMsg } = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(id, { msg: newMsg }, { runValidators: true }, { new: true });
    let latestUpdate = await Chat.findByIdAndUpdate(id, { updatedAt: new Date() }, { runValidators: true, new: true });
    res.redirect("/chats");
});

// Delete Chat
app.delete("/chats/:id", async (req, res) => {
    let { id } = req.params;
    let chat = await Chat.findByIdAndDelete(id);
    console.log(chat);
    res.redirect("/chats");
});


app.get("/", (req, res) => {
    res.send("Home Page!");
});



app.listen(port, () => {
    console.log("App is listening with port = ", port);
})
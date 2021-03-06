const chalk = require("chalk");
const yargs = require("yargs");
const fs = require("fs");

const notes = require("./notes.js");

//customize yargs version
yargs.version("1.1.0");

//add a note
yargs.command({
  command: "add",
  describe: "adds a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Note Content",
      demandOption: true,
      type: "string"
    }
  },
  handler: argv => {
    notes.addNote(argv.title, argv.body);
  }
});

//removes a note
yargs.command({
  command: "remove",
  describe: "removes a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    }
  },
  handler: argv => {
    notes.removeNote(argv.title);
  }
});

//read a note
yargs.command({
  command: "read",
  describe: "Reading a note",
  handler: argv => {
    notes.readNote(argv.title);
  }
});

// list all notes
yargs.command({
  command: "list",
  describe: "List all notes",
  handler: () => {
    notes.listNotes();
  }
});

yargs.parse();

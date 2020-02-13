const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      console.log("Unable to connect to database!");
    }

    const db = client.db(databaseName);

    // db.collection("users").insertOne(
    //   {
    //     name: "Sergei",
    //     age: 29,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert record");
    //     }

    //     console.log(result.ops);
    //   }
    // );

    // db.collection("users").insertMany(
    //   [
    //     {
    //       name: "Jan",
    //       age: 28,
    //     },
    //     {
    //       name: "Lisa",
    //       age: 27,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable insert message");
    //     }

    //     console.log(result.ops);
    //   }
    // );

    db.collection("tasks").insertMany(
      [
        {
          description: "first goal",
          completed: true,
        },
        {
          description: "second goal",
          completed: false,
        },
        {
          description: "third goal",
          completed: true,
        },
      ],
      (err, result) => {
        if (err) {
          return console.log("Unable to insert docs");
        }

        console.log(result.ops);
      }
    );
  }
);

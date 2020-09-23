const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb://John:johnjohn@cluster0-shard-00-00.1puqo.mongodb.net:27017,cluster0-shard-00-01.1puqo.mongodb.net:27017,cluster0-shard-00-02.1puqo.mongodb.net:27017/db1?ssl=true&replicaSet=atlas-y2ojte-shard-0&authSource=admin&retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Established a connection to the db"))
  .catch((err) => console.log("something went wrong with the db", err));

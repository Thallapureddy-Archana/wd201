const http = require("http");
const fs = require("fs");

// Read the content of "home.html" once
fs.readFile("home.html", (err, homeContent) => {
  if (err) {
    throw err;
  }

  // Create a server and respond with the content of "home.html"
  http.createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(homeContent);
    response.end();
  }).listen(3000, () => {
    console.log("Server is running on port 3000");
  });
});
/*const http = require("http");
const fs = require("fs");
fs.readFile("home.html", (err, home) => {
  console.log(home.toString());
});
fs.readFile("home.html", (err, home) => {
  if (err) {
    throw err;
  }
  http
    .createServer((request, response) => {
      response.writeHeader(200, { "Content-Type": "text/html" });
      response.write(home);
      response.end();
    })
    .listen(3000);
});    

Save the file and run the same using npm start. Now, if you navigate to localhost:3000 you can see that the file is rendered as expected.

The writeHeader function informs the Node.js HTTP server that the content should be served as HTML. The write function transmits the content received from readFile.

But clicking on the Projects link doesn't take you anywhere and the browser shows a different URL but nothing loads. Let us fix that.

const fs = require("fs");
fs.writeFile(
    "sample.txt",
    "Hello World. Welcome to Node.js File System module.",
    (err) => {
      if (err) throw err;
      console.log("File created!");
    }
  );
  fs.readFile("sample.txt", (err, data) => {
    if (err) throw err;
    console.log(data.toString());
  });
  fs.appendFile("sample.txt", " This is my updated content", (err) => {
    if (err) throw err;
    console.log("File updated!");
  });
  fs.rename("sample.txt", "test.txt", (err) => {
    if (err) throw err;
    console.log("File name updated!");
  });
  fs.unlink("test.txt", (err) => {
    if (err) throw err;
    console.log("File test.txt deleted successfully!");
  });*/
  
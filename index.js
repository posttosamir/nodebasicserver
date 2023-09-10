// these are customized module:-
// ========================================

// const triangle = require("./square");

// const circleFormula = require("./CircleFormula");

// const result = triangle(5);

// const areaOfCircle = circleFormula.circleArea(10);

// console.log(areaOfCircle);

// console.log(result);

// ======================================== ========================================
// ======================================== ========================================

// These are inbult modul module:-

// Create a basic server using node.js
// --------------------------------------------

// Import inbuilt htpp module
import http from "http";
// const htpp = require("http");

//define port number
const port = 4000; // server will listen to the incoming requests

// Create server using http createserver()
const server = http.createServer((req, response) => {
  // set the response header
  response.statusCode = 400;
  response.setHeader("Content-Type", "text/html");
  response.write("Hello, This is Node Jsppppppppppppppppppppppppppppppppppppppppppppno.......................");
  response.end();
});

server.listen(port, () => {
  console.log("server Started at :-", port);
});

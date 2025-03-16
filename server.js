
// const http = require('http')
// const url = require('url');


// const server = http.createServer((req, res) => { 
    // if (req.url === '/api' && req.method === 'GET') {
    //     const responseData = { message: 'Hello from the API'};
    //     res.statusCode = 200; 
    //     res.setHeader('Content-Type', 'application/json');
    
    //     res.end(JSON.stringify(responseData));
    //   }    
    // if (req.url === '/api/test' && req.method === 'GET') {
    //     res.statusCode = 200; 
    //     res.setHeader('Content-Type', 'application/json');
    
    //     res.end(JSON.stringify({ message: 'Hello, this is test file!' }));
    //   }

    // if (req.url === '/api/details' && req.method === 'GET') {
    //     res.statusCode = 200; 
    //     res.setHeader('Content-Type', 'application/json');
    
    //     res.end(JSON.stringify({ user:'Alice', age:25, status:'Active' }));
    //   }

    // if (req.url === '/api/text' && req.method === 'GET') {
    //     res.statusCode = 200; 
    //     res.setHeader('Content-Type', 'text/plain');
    
    //     res.end('Hello from your text file' );
    //   }
               
    //   const parsedUrl = url.parse(req.url, true);
  
    // if (parsedUrl.pathname === '/api/info' && req.method === 'GET') {
    //   const name = parsedUrl.query.name || 'anonymous';
    //   const age = parsedUrl.query.age;
    //   const message =`Hello, ${name}! ${age ? `You are ${age} years old.` : 'Age not provided.'}`
    //   const responseData = { message };

    //   res.statusCode = 200; 
    //   res.setHeader('Content-Type', 'application/json');
  
    //   res.end(JSON.stringify(responseData));
    // return;
    // }
      



    // if (req.url === '/api/users' && req.method === 'GET') {
    //       const responseData = [
    //         { "id" : 1,"name": "Alice" },
    //         {"id": 2,"name": "Bob" }
    //       ];
    //       res.statusCode = 200; 
    //      res.setHeader('Content-Type', 'application/json');
      
    //       res.end(JSON.stringify(responseData));
    //     } 





  //   if (req.url === '/api/isEven' && req.method === 'GET') {
  //     const reqUrl = new URL(req.url, `http://${req.headers.host}`);
  //     const numberParam = reqUrl.searchParams.get('number');
  //    res.setHeader('Content-Type', 'application/json');
  //    if (!numberParam || isNaN(numberParam)) {
  //     res.statusCode = 400;
  //     res.end(JSON.stringify({ error: "Missing or invalid 'number' parameter" }));
  //     return;
  // } 
  // const number = parseInt(numberParam, 10);
  //       const result = {
  //           status: `${number} is ${number % 2 === 0 ? 'even' : 'odd'}`,
  //       };
  //     res.statusCode = 200;
  //     res.end(JSON.stringify(result));
  //     return;
  //   } 


//   if (req.url === '/api/uppercase' && req.method === 'GET') {
//     const reqUrl = new URL(`http://${req.headers.host}${req.url}`);
//     const wordParam = reqUrl.searchParams.get('word');
//    res.setHeader('Content-Type', 'application/json');
//    if (!wordParam) {
//     res.statusCode = 400;
//     res.end(JSON.stringify({ error: "No word is provided." }));
//     return;
// } 
// const uppercaseWord = wordParam.toUpperCase();
//         res.statusCode = 200;
//         res.end(JSON.stringify({ word: uppercaseWord }));
//         return;
//   } 



// if (req.url === '/api/book' && req.method === 'GET') {
//   const reqUrl = new URL(req.url, `http://${req.headers.host}`);
//   const title = reqUrl.searchParams.get('title');
//   const author = reqUrl.searchParams.get('author');

//  res.setHeader('Content-Type', 'application/json');
//  if (!title && !author) {
//   res.statusCode = 400;
//   res.end(JSON.stringify({ error: "No author and title are provided" }));
//   return;
// } 
// if (!title) {
//   res.statusCode = 400;
//   res.end(JSON.stringify({ error: "Title is missing." }));
//   return;
// }
// if (!author) {
//   res.statusCode = 400;
//   res.end(JSON.stringify({ error: "Author is missing." }));
//   return;
// }
// const responseMessage = `${title} by ${author}`;
//         res.statusCode = 200;
//         res.end(JSON.stringify({ message: responseMessage }));
//       return;
// }
       



// const parsedUrl = url.parse(req.url, true);
  
// if (parsedUrl.pathname === '/api/greeting' && req.method === 'GET') {
//   const name = parsedUrl.query.name || 'anonymous';
//   const greeting =`Hello, ${name}!`; 
//   const responseData = { greeting };

//   res.statusCode = 200; 
//   res.setHeader('Content-Type', 'application/json');
 
//   res.end(JSON.stringify(responseData));
// return;
// }
      

// });

// const PORT = 3001;
// server.listen(PORT, () => {  
//   console.log(`Server running at http://localhost:${PORT}/`);
// });




// const express = require('express');
// const app = express();

// app.get('/api/greet', (req, res) => {
//   const name = req.query.name || 'Guest'; 
//   res.json({ greeting: `Hello, ${name}!` });
// });

// app.listen(3001, () => {
//   console.log('Server listening on port 3001');
// });


const { getUserProfile } = require('./controllers/profileController.js');
const { greetUser } = require('./controllers/greetController.js');
const { getChatHistory } = require('./controllers/chatHistoryController.js');
const { handleChat } = require('./controllers/chatController.js');

const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use((cors()));
app.get('/api/greet', greetUser);
app.get('/api/profile',getUserProfile);
app.get('/api/chat-history',getChatHistory);
app.post('/api/chat',handleChat);


app.listen(3001, () => {
  console.log('Server listening on port 3001');
});
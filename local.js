const app = require('./index');
const port = process.env.PORT || 8080;

// Server
app.listen(port, () => {
   console.log(`CS3219 Task B project listening on: http://localhost:${port}`);
});
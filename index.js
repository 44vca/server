const Application = require("./framework/Application");
const bodyParser = require("./framework/bodyParser");
const userRouter = require("./src/user-router");

const PORT = process.env.PORT || 5001;

const app = new Application();

app.use(bodyParser);

app.addRouter(userRouter);

app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));

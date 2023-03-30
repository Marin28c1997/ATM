
// Importing the express module
import express from 'express';

// Importing morgan
import morgan from 'morgan';

// Importing the cors module
import cors from 'cors';

// Importing the swagger UI
import swaggerUi from 'swagger-ui-express';

// Importing the swagger configuration
// import swaggerConfiguration from './config/swagger.config.js';

// Creating an instance of express
const app = express();

// Set the middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


// Exporting the app
export default app;
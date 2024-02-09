import sequelize from './server/config/connection';
import server from './server/Server';

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection established successfully')
    server.listen(8080, () => {
      console.log(`Server is running at http://localhost:${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(`Database connection failed: ${error}`)
  });
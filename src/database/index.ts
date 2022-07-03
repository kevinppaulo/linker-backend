import { connect, ConnectOptions } from 'mongoose';

export const connectToDatabase = async () => {
  const user        = process.env.MONGOOSE_USER;
  const pass        = process.env.MONGOOSE_PASSWORD;
  const db          = process.env.MONGOOSE_DATABASE;
  const uri: string = `mongodb://localhost:27017/`;

  console.log(uri);

  const connectionParams: ConnectOptions = {
    autoCreate: true,
    user,
    pass,
    dbName: db,
  };

  console.log( connectionParams );

  await connect(uri, connectionParams);
  console.log('Connected to database');
}


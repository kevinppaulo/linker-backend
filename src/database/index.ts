import { connect } from 'mongoose';

export const connectToDatabase = async () => {
  const uri: string = `mongodb+srv://${process.env.MONGOOSE_USER}:${process.env.MONGOOSE_PASSWORD}@${process.env.MONGOOSE_HOST}/${process.env.MONGOOSE_DATABASE}?retryWrites=true&w=majority`;
  await connect(uri)
    .then(() => {
      console.log('[Linker] Database connection successful');
    })
    .catch((err) => {
      console.error(`[Linker] Database connection error: ${err}`);
    });
};

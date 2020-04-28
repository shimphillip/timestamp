/* eslint-disable no-console */
import app from './app';

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`App is listening at ${PORT}`));

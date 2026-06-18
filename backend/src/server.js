require('dotenv').config();
const createApp = require('./app');

const PORT = process.env.PORT || 5000;
const app = createApp();

app.listen(PORT, () => {
  console.log(`Product Search API listening on http://localhost:${PORT}`);
});

const app = require('./server')
const config = require('./server/config')

const {port, server} = config

app.listen(port, () => {
  console.log(`⚡ Server running on http://${server}:${port}`);
});

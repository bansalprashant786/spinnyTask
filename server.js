const path = require('path');
const express = require('express');
const app = express();

const port = process.env.PORT || 5000;
const publicPath = path.resolve(__dirname, 'build');

app.use(express.static(publicPath));

app.get('*', (req, res) => {
	res.sendFile(path.resolve(publicPath, 'index.html'));
});

app.listen(port, () => {
   console.log(`Server is up on port ${port}!`);
});

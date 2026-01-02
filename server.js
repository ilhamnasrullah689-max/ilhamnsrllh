const path = require('path');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 8000;

// Serve the current directory (static files)
app.use(express.static(path.join(__dirname)));

app.listen(PORT, () => {
  console.log(`Serving site at http://localhost:${PORT}`);
});

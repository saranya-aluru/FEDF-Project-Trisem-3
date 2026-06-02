const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/vitals', (req, res) => {
  console.log(req.body);
  res.send('Vitals Saved');
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
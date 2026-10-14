const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Rota de teste
app.get('/', (req, res) => {
  res.json({ mensagem: 'API do backend a funcionar!' });
});

// Rota para o frontend consumir
app.get('/api/dados', (req, res) => {
  res.json([
    { id: 1, titulo: 'Primeiro dado da API' },
    { id: 2, titulo: 'Segundo dado da API' }
  ]);
});

app.listen(PORT, () => {
  console.log(`Servidor a correr na porta ${PORT}`);
});
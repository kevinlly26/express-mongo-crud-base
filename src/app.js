const express = require('express');
const connectDB = require('./config/db');
const itemRoutes = require('./routes/itemRoutes');

const app = express();

// Conectar ao banco de dados
connectDB();

// Middleware
app.use(express.json());

// Rotas
app.use('/api/items', itemRoutes);

// Tratamento de erros
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});

// Iniciar o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

const express = require('express');
const mysql = require('mysql2');

const app = express();
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'restaurante_db'
});

app.get('/pedidos', (req, res) => {
    db.query('SELECT * FROM pedidos', (erro, resultado) => {
        res.json(resultado);
    });
});

app.post('/pedidos', (req, res) => {
    const { cliente, prato, valor } = req.body;
    const sql = 'INSERT INTO pedidos (cliente, prato, valor) VALUES (?, ?, ?)';
    
    db.query(sql, [cliente, prato, valor], (erro, resultado) => {
        res.json({ mensagem: 'Pedido criado com sucesso!' });
    });
});

app.put('/pedidos/:id', (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    
    db.query('UPDATE pedidos SET status = ? WHERE id = ?', [status, id], (erro, resultado) => {
        res.json({ mensagem: 'Pedido atualizado!' });
    });
});

app.delete('/pedidos/:id', (req, res) => {
    const { id } = req.params;
    
    db.query('DELETE FROM pedidos WHERE id = ?', [id], (erro, resultado) => {
        res.json({ mensagem: 'Pedido removido!' });
    });
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000!');
});

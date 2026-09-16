const express = require('express');
const app = express();
app.use(express.json());

app.get('/pedidos', (req, res) => {
    res.json({ mensagem: "Listando pedidos" });
});
app.post('/pedidos', (req, res) => {
    const novoPedido = req.body;
    res.status(201).json({ 
        mensagem: "Pedido criado com sucesso!", 
        dados: novoPedido 
    });
});

app.put('/pedidos/:id', (req, res) => {
    const { id } = req.params;
    const dadosAtualizados = req.body;
    res.json({ 
        mensagem: `Pedido ${id} atualizado com sucesso!`, 
        dados: dadosAtualizados 
    });
});


app.delete('/pedidos/:id', (req, res) => {
    const { id } = req.params;
    res.json({ mensagem: `Pedido ${id} removido com sucesso!` });
});


app.listen(3000, () => {
    console.log("Servidor rodando!");
});

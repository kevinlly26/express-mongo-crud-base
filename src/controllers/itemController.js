const Item = require('../models/Item');

exports.createItem = async (req, res) => {
    const { name, description } = req.body;
    try {
        const newItem = new Item({ name, description });
        await newItem.save();
        res.status(201).json(newItem);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar item', error });
    }
};

exports.getItems = async (req, res) => {
    try {
        const items = await Item.find();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao obter itens', error });
    }
};

exports.updateItem = async (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;
    try {
        const updatedItem = await Item.findByIdAndUpdate(id, { name, description }, { new: true });
        res.status(200).json(updatedItem);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar item', error });
    }
};

exports.deleteItem = async (req, res) => {
    const { id } = req.params;
    try {
        await Item.findByIdAndDelete(id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar item', error });
    }
};

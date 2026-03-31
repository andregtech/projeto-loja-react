import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const ProductForm = ({ onAddProduct }) => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = {
            id: Math.random(),
            title: title,
            price: price,
            image: 'https://m.media-amazon.com/images/I/61frIxibfoL._AC_SX300_SY300_QL70_ML2_.jpg', 
            description: 'Item artístico novo adicionado manualmente ao catálogo da galeria - Pincel Grande  Pincel 3" (3 Polegadas) Nove54.'
        };
        onAddProduct(newProduct);
        setTitle('');
        setPrice('');
    };

    return (
        <div className="surface-card p-5 shadow-3 border-round-xl border-top-3 border-teal-600">
            <form onSubmit={handleSubmit} className="p-fluid grid">
                <div className="field col-12 md:col-6">
                    {/* 💡 ALTERE AQUI: O nome do rótulo do campo (ex: Nome do Pet, Modelo do Carro) */}
                    <label className="font-bold">Nome da Obra</label>
                    <InputText placeholder="Ex: Marinha em Aquarela" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div className="field col-12 md:col-6">
                    <label className="font-bold">Preço de Venda (R$)</label>
                    <InputText placeholder="Ex: 150.00" value={price} onChange={(e) => setPrice(e.target.value)} required />
                </div>
                <div className="col-12 md:col-4 md:col-offset-8">
                    <Button type="submit" label="Salvar na Galeria" icon="pi pi-check" className="p-button-teal" />
                </div>
            </form>
        </div>
    );
};

export default ProductForm;
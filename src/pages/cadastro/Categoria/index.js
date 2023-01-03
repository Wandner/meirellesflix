import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";
import { v4 as uuidv4 } from 'uuid';
import FormField from "../../../components/FormField";


const CadastroCategoria = () => {
    const [categorias, setCategorias] = useState([])

    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    }
    const [itemCategoria, setItemCategoria] = useState(valoresIniciais)

    function setValue(chave, valor) {
        setItemCategoria({
            ...itemCategoria,
            [chave]: valor,
        })
    }

    function handleChange(e) {
        setValue(e.target.getAttribute('name'), e.target.value)
    }

    useEffect(() => {
        const URL_TOP = window.location.hostname.includes('localhost')
        ? 'http://localhost:8080/categorias'
        : 'https://meirellesflix.herokuapp.com/categorias'
        console.log('[useEffect]', URL_TOP)

    },[itemCategoria.nome])

    return (
        <PageDefault>
            <h1>Cadastro de categoria: {itemCategoria.nome} </h1>
            <form onSubmit={
                (e) => {
                    e.preventDefault();
                    setCategorias([
                        ...categorias,
                        itemCategoria
                    ]);
                    setItemCategoria(valoresIniciais)
                }
            }
            >

                <FormField
                    label='Nome da Categoria'
                    type='text'
                    name='nome'
                    value={itemCategoria.nome}
                    onChange={handleChange}
                />
                <FormField
                    label='Descrição da Categoria'
                    type='textarea'
                    name='descricao'
                    value={itemCategoria.descricao}
                    onChange={handleChange}
                />
                <FormField
                    label='Cor'
                    type='color'
                    name='cor'
                    value={itemCategoria.cor}
                    onChange={handleChange}
                />

                <div>
                    <button>
                        Cadastrar
                    </button>
                </div>


            </form>

            <ul>
                {categorias.map(
                    (itemCategoria) => {
                        return (
                            <li key={uuidv4()}>
                                {console.log(itemCategoria)}
                                {itemCategoria.nome}; {itemCategoria.descricao}; {itemCategoria.cor}
                            </li>
                        )
                    }
                )}
            </ul>

            <Link to='/cadastro/video'>
                Cadastrar vídeo
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria
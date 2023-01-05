import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";
import { v4 as uuidv4 } from 'uuid';
import FormField from "../../../components/FormField";

const useForm = (valoresIniciais) => {
    const [item, setItem] = useState(valoresIniciais)
    function setValue(chave, valor) {
        setItem({
            ...item,
            [chave]: valor
        })
    }
    function handleChange(e) {
        setValue(e.target.getAttribute('name'), e.target.value)
    }
    function clearForm(){
        setItem(valoresIniciais)
    }
    return {
        item,
        handleChange,
        clearForm
    }
} 

const CadastroCategoria = () => {
    const valoresIniciais = {
        titulo: '',
        descricao: '',
        cor: ''
    }
    const {item, handleChange, clearForm} = useForm(valoresIniciais)
    const [categorias, setCategorias] = useState([])
    useEffect(() => {
        const URL_TOP = window.location.hostname.includes('localhost')
        ? 'http://localhost:8080/categorias'
        : 'https://meirellesflix.herokuapp.com/categorias'
        console.log('[useEffect]', URL_TOP)
    },[])

    return (
        <PageDefault>
            <h1>Cadastro de categoria: {item.titulo} </h1>
            <form onSubmit={
                (e) => {
                    e.preventDefault();
                    setCategorias([
                        ...categorias,
                        item
                    ]);
                    clearForm()
                }
            }
            >

                <FormField
                    label='Nome da Categoria'
                    type='text'
                    name='titulo'
                    value={item.titulo}
                    onChange={handleChange}
                />
                <FormField
                    label='Descrição da Categoria'
                    type='textarea'
                    name='descricao'
                    value={item.descricao}
                    onChange={handleChange}
                />
                <FormField
                    label='Cor'
                    type='color'
                    name='cor'
                    value={item.cor}
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
                                {itemCategoria.titulo}; {itemCategoria.descricao}; {itemCategoria.cor}
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
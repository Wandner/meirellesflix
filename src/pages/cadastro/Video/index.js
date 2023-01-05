import React, { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import PageDefault from "../../../components/PageDefault"
import FormField from '../../../components/FormField'
import videosRepository from '../../../repositories/videos'
import categoriasRepository from '../../../repositories/categorias'

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
  function clearForm() {
    setItem(valoresIniciais)
  }
  return {
    item,
    handleChange,
    clearForm
  }
}

const CadastroVideo = () => {
  const navegate = useNavigate();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handleChange, item } = useForm({
    titulo: 'Video padrão',
    url: 'https://www.youtube.com/watch?v=jOAU81jdi-c',
    categoria: 'Front End',
  });

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de vídeo</h1>
      <form onSubmit={(event) => {
        event.preventDefault();
        const categoriaEscolhida = categorias.find((categoria) => {
          console.log(item)
          return categoria.titulo === item.categoria;
        });

        videosRepository.create({
          titulo: item.titulo,
          url: item.url,
          categoriaId: categoriaEscolhida.id,
        })
          .then(() => {
            console.log('Cadastrou com sucesso!');
            navegate('/');
          });
      }}
      >
        <FormField
          label="Título do Vídeo"
          name="titulo"
          value={item.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={item.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={item.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <div>
          <button>
            Cadastrar
          </button>
        </div>
      </form>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  )
}

export default CadastroVideo
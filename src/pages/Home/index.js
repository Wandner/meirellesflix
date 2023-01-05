import { useEffect, useState } from 'react';
import '../../App.css';
import PageDefault from '../../components/PageDefault';
import Menu from '../../components/Menu'
import dadosInicias from '../../data/dados_iniciais.json'
import BannerMain from '../../components/BannerMain'
import Carousel from '../../components/Carousel'
import categoriasRepository from '../../repositories/categorias';

const Home = () => {
  const [dadosIniciais, setDadosIniciais] = useState([])
  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        setDadosIniciais(categoriasComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [])

  return (
    <PageDefault paddingAll={0}>
       {dadosIniciais.length === 0 && (<div>Loading...</div>)}

       {/*JSON.stringify(dadosIniciais)*/}
        
       {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription={dadosIniciais[0].videos[0].descricao}
              />
              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}

      {/* <BannerMain
        videoTitle={dadosInicias.categorias[0].videos[0].titulo}
        url={dadosInicias.categorias[0].videos[0].url}
        videoDescription={"O que é Front-End? Trabalhando na área fim"}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosInicias.categorias[0]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosInicias.categorias[1]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosInicias.categorias[2]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosInicias.categorias[3]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosInicias.categorias[4]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosInicias.categorias[5]}
      /> */}
    </PageDefault>
  )
}

export default Home;

import '../../App.css';

import Menu from '../../components/Menu'
import dadosInicias from '../../data/dados_iniciais.json'
import BannerMain from '../../components/BannerMain'
import Carousel from '../../components/Carousel'


const Home = () => {
  return (
    <>
      <Menu />

      <BannerMain
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
      />
    </>
  )
}

export default Home;

import Carousel from 'react-bootstrap/Carousel';

const CarouselHome = () => {
    return(
        <>
        <Carousel>
      <Carousel.Item interval={3000}>
        <img 
            className='d-block w-100'
            style={{maxHeight: "600px", objectFit: 'cover'}}
            src='src/assets/images/murales-maradona-la-plata.jpg'
            alt='Mural de Graffiti de Maradona'
        />
        <Carousel.Caption>
          <h3>"Diego está entre nosotros" - Maximo</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
      <img 
            className='d-block w-100'
            style={{maxHeight: "600px", objectFit: 'cover'}}
            src='src/assets/images/roman_mural_ok_0.jpg'
            alt='Mural de Graffiti de Riquelme'
        />
       
        <Carousel.Caption>
          <h3>"Esto es Boca" - Martín Agazzi</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
      <img 
            className='d-block w-100'
            style={{maxHeight: "600px", objectFit: 'cover'}}
            src='src/assets/images/Nuevo-mural-de-Lionel-Messi-en-Catamarca.jpg'
            alt='Mural de Graffiti de Messi'
        />
       
        <Carousel.Caption>
          <h3>"Andá pa' allá, bobo" - Franco Miglia</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </>
    )
}

export default CarouselHome
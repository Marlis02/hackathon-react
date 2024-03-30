import React, { useContext, useEffect, useState } from 'react'
import { productContext } from '../../context/productContext'
import './Home.css'
import CustomCard from '../Card/Card'
import { useSearchParams } from 'react-router-dom'
import { Carousel, Image } from 'react-bootstrap'
import CustomPagination from '../Pagination/Pagination'

const Home = () => {
  const { categories, getCategories } = useContext(productContext)
  const [categoriesFetched, setCategoriesFetched] = useState(false)
  //---------------get products----
  const { products, getProducts } = useContext(productContext)
  const [serachParams] = useSearchParams()
  useEffect(() => {
    getProducts()
  }, [])
  //------------------------------
  useEffect(() => {
    // Вызывается только при первом рендеринге
    if (!categoriesFetched) {
      getCategories()
      setCategoriesFetched(true)
    }
  }, [categoriesFetched, getCategories])

  useEffect(() => {
    getProducts(
      serachParams.get('search'),
      serachParams.get('category'),
      serachParams.get('_page'),
    )
  }, [serachParams])

  return (
    <div>
      <div
        className="categories"
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          height: '80px',
        }}
      >
        {categories
          ? categories.map((item, id) => (
              <div key={id} className="categories_item" style={{}}>
                <p className="cat-home">{item.name}</p>
              </div>
            ))
          : 'no categories'}
      </div>
      {/* -------------------------------------------------------- */}
      <div>
        <Carousel>
          <Carousel.Item className="carousel-item">
            <img
              style={{ height: '430px' }}
              className="d-block w-100"
              src="https://about.att.com/ecms/dam/snr/2020/November2020/StoryLevelBanner/11042020_iPhoneProMax_STORY_LEVEL_BANNER_1600x483.jpg"
              alt="First slide"
            />
            <Carousel.Caption className="carousel-caption">
              {/* <h3>Вам также может понравиться</h3>
              <p>iPhone 12 Pro Max</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <img
              style={{ height: '430px' }}
              className="d-block w-100 "
              src="https://about.att.com/ecms/dam/snr/2022/september2022/storylevelbanner/iconic_STORY_LEVEL_BANNER_1600x483.jpg"
              alt="Second slide"
            />
            <Carousel.Caption className="carousel-caption">
              {/* <h3>Вам также может понравиться</h3>
              <p>iPhone 14 Pro</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <img
              style={{ height: '430px' }}
              className="d-block w-100 "
              src="https://rapticstrong.com/cdn/shop/collections/collection-banner_iPhone_Cases_Desktop.jpg?v=1625072679"
              alt="Third slide"
            />
            <Carousel.Caption className="carousel-caption">
              {/* <h3>Apple A14 Bionic</h3>
              <p>IOS 17</p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* ---------------------------------------------- */}
      <div className="products">
        <div className="product-list">
          {products
            ? products.map((item, id) => <CustomCard key={id} product={item} />)
            : 'Empty'}
        </div>
      </div>
      <div
        style={{
          width: '100%',
          height: 'auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CustomPagination />
      </div>
      <div
        className="image-grid"
        style={{
          width: '100%',
          justifyContent: 'center',
          display: 'flex',
          flexWrap: 'wrap',
          marginTop: '50px',
          background: 'black',
          marginBottom: '50px',
        }}
      >
        <Image
          style={{ width: '600px', justifyContent: 'center', display: 'flex' }}
          src="https://www.iphones.ru/wp-content/uploads/2020/10/0-3.jpg"
          alt="Image 1"
        />
        <Image
          style={{ width: '600px' }}
          src="https://media.gqmagazine.fr/photos/63d795475ed6874bf78c67ee/4:3/w_1199,h_899,c_limit/iPhone15-Wi-Fi_6E.jpg"
          alt="Image 2"
        />
        <Image
          style={{ width: '600px' }}
          src="https://cdn.mos.cms.futurecdn.net/67aUVTxHqNJV2eKpiakudU.jpg"
          alt="Image 3"
        />
        <Image
          style={{ width: '600px' }}
          src="https://blog.comfy.ua/wp-content/uploads/2020/10/Apple-iPhone-12-Pro-lidar.png"
          alt="Image 4"
        />
      </div>
      {/* <div className="br">
        <img
          style={{ width: "500px", height: "300px", borderRadius: "20px" }}
          src="https://i.pinimg.com/236x/52/2c/cb/522ccbc72c6dda7a7dd78be09b8779c1.jpg"
          alt=""
        />
        <img
          style={{ width: "500px", height: "300px", borderRadius: "20px" }}
          src="https://i.pinimg.com/236x/86/37/04/863704c8461307834d594531f3a339ed.jpg"
          alt=""
        />
        <img
          style={{ width: "500px", height: "300px", borderRadius: "20px" }}
          src="https://asiastore.kg/catalog/view/theme/default/image/brands/Beats.png"
          alt=""
        />
        <img
          style={{ width: "500px", height: "300px", borderRadius: "20px" }}
          src="https://asiastore.kg/catalog/view/theme/default/image/brands/Masrhall.png"
          alt=""
        />
      </div> */}
    </div>
  )
}

export default Home

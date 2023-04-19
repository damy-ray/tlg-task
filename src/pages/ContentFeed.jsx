import { useState, useEffect } from 'react';
import axios from 'axios';
import Product from '../components/Product'
import Button from 'react-bootstrap/Button';
import Loader from '../components/Loader';

const ContentFeed = () => {
  const [items, setItems] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    getItems()
  }, [offset])

  const getItems = async () => {
    try {
      const res = await axios.get(`https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=20`);
      setItems(items.concat(res.data));
    } catch (error) {

    }
  }

  return (
    <div className="wrapper">
      <div className={'content'}>
        {!items?.length ? <Loader /> : items.map((item, index) => <Product key={index} img={item?.images[0]} price={item.price} description={item.description} />)}
      </div>
      <Button className="mt-5" onClick={() => setOffset(offset + 10)} variant="primary">Load more</Button>{' '}
    </div>
  )
}

export default ContentFeed




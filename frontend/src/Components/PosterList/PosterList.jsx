import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { getRandomEventPoster } from '../../redux/actions/eventAC';
import Poster from '../Poster/Poster';



function PosterList () {

  const posterList = useSelector(state => state.event);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getRandomEventPoster())
  }, [])


  return(
    <Carousel autoplay>
      
      {posterList.map(el =>
          <Poster key={el.id} id={el.id} img={el.images[5].url} title={el.name}>
          </Poster>
        )}
  
  </Carousel>
  )
}

export default PosterList;

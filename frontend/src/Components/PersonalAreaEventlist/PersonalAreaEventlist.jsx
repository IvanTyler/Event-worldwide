import { List, Avatar, Button } from 'antd';
import 'antd/dist/antd.css';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { getFavouriteEvents } from '../../redux/actions/favouriteAC';
import PersonalAreaFavouriteItem from '../PersonalAreaFavouriteItem/PersonalAreaFavouriteItem'
import YandexMap from '../YandexMap/YandexMap';



function PersonalAreaEventlist() {

  const favouriteList = useSelector(state => state.favourite);
  console.log(favouriteList);

  const coordinates = favouriteList.map((item) =>  [item.Event.Category, item.Event.Genre])


  console.log(coordinates);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getFavouriteEvents())
  }, [])



  return (

    <>
      {favouriteList.map((item) => <PersonalAreaFavouriteItem
        key={item.id}
        id={item.id}
        avatar={item.Event.Picture}
        url={item.Event.Url}
        title={item.Event.Name}
        description={item.Event.Startdatetime}
      />)}
      <YandexMap
        coordinates={coordinates}
        />
    </>
  );

}

export default PersonalAreaEventlist;

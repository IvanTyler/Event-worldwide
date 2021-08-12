import { List, Avatar, Button } from 'antd';
import 'antd/dist/antd.css';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { getFavouriteEvents } from '../../redux/actions/favouriteAC';
import PersonalAreaFavouriteItem from '../PersonalAreaFavouriteItem/PersonalAreaFavouriteItem'
import YandexMap from '../YandexMap/YandexMap';

import styleContainer from '../Container/container.module.css';
import style from './PersonalAreaEventlist.module.css'
import styleSignUp from '../SignUp/SignUp.module.css'



function PersonalAreaEventlist() {

  const favouriteList = useSelector(state => state.favourite);
  console.log(favouriteList);

  const coordinates = favouriteList.map((item) => [item.Event.Category, item.Event.Genre, item.Event.Name])
  // const titles = favouriteList.map((item) => item.Event.Name)

  console.log(coordinates);
  // console.log(titles);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getFavouriteEvents())
  }, [])



  return (

    <>
      <div className={styleContainer.container + ' ' + style.PersonalAreaEventlistContainer}>
        <h2 class={styleSignUp.HeaderformTop}>Текущие события</h2>

        {favouriteList.map((item) => <PersonalAreaFavouriteItem
          key={item.id}
          id={item.id}
          avatar={item.Event.Picture}
          url={item.Event.Url}
          title={item.Event.Name}
          description={item.Event.Startdatetime}
        />)}
      </div>
      <YandexMap
        coordinates={coordinates}
      />
    </>
  );

}

export default PersonalAreaEventlist;

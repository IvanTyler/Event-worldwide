import { List, Avatar, Button } from 'antd';
import 'antd/dist/antd.css';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { getFavouriteEvents } from '../../redux/actions/favouriteAC';
import PersonalAreaFavouriteItem from '../PersonalAreaFavouriteItem/PersonalAreaFavouriteItem'



function PersonalAreaEventlist() {

  const favouriteList = useSelector(state => state.favourite);


  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getFavouriteEvents())
  }, [])

 

  return (
    // <List
    //   itemLayout="horizontal"
    //   dataSource={favouriteList}
    //   renderItem={item => (
    //     <List.Item>
    //       <List.Item.Meta
    //         avatar={<Avatar src={item.Event.Picture} />}
    //         title={<a href={item.Event.Url}>{item.Event.Name}</a>}
    //         description={item.Event.Startdatetime}
    //       />
    //       <Button>Удалить</Button>
    //     </List.Item>
    //   )}
    // />

    <>
     {favouriteList.map((item)=> <PersonalAreaFavouriteItem 
      id={item.id}
      avatar={item.Event.Picture}
      url={item.Event.Url}
      title={item.Event.Name}
      description={item.Event.Startdatetime}
       />)}
    </> 
  );

}

export default PersonalAreaEventlist;

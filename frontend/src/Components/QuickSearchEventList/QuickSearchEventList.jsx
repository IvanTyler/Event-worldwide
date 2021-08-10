import { List, Avatar, Button } from 'antd';
import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addOneSubscribe } from '../../redux/actions/subscribeAC';
import QuickSearchItem from '../QuickSearchItem/QuickSearchItem';

function QuickSearchEventList() {

  const eventList = useSelector(state => state.event);
  console.log(eventList[0]);
  

  return (
    
    <>
    {eventList.map((event)=> <QuickSearchItem 
      //  addSubscribe={addSubscribe}
       key={event.id}
       id={event.id}
       url={event.url}
       avatar={<Avatar src={event.performers[0].image} />}
       title={<a href={event.url}>{event.short_title}</a>}
       description={event.datetime_local}
       />)}
    </>
  )
}

export default QuickSearchEventList;


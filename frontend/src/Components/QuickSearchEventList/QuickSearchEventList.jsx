import { List, Avatar } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import QuickSearchItem from '../QuickSearchItem/QuickSearchItem'
// function QuickEventList () {

function QuickSearchEventList() {
  const eventList = useSelector(state => state.eventquick);
  
  return (
    <>
      {eventList.map((event) => <QuickSearchItem
        location={event.venue.location}
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


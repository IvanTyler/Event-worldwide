import { List, Avatar } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import SearchItem from '../SearchItem/SearchItem'
function SearchEventList() {
  const eventList = useSelector((state) => state.eventfull);

  return (
    <>
      {eventList.map((event) => <SearchItem
        location={event._embedded.venues[0].location}
        key={event.id}
        id={event.id}
        url={event.url}
        avatar={<Avatar src={event.images[0].url} />}
        title={<a href={event.url}>{event.name}</a>}
        description={event.dates.start.dateTime}
      />)}
    </>
  );
}

export default SearchEventList;

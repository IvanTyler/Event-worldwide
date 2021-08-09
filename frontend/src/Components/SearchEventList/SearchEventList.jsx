import { List, Avatar, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

function SearchEventList() {
  const eventList = useSelector(state => state.event);

  return (
    <List
      itemLayout="horizontal"
      dataSource={eventList}
      renderItem={event => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src={event.images[0].url} />}
            title={<a href={event.url}>{event.name}</a>}
            description={event.dates.start.dateTime}
          />
          <Button type="primary" shape="circle">+</Button>
        </List.Item>
      )}
    />
  )
}

export default SearchEventList;



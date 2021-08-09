import { List, Avatar } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

// function QuickEventList () {

function QuickSearchEventList () {
  const eventList = useSelector(state => state.event);
  console.log(eventList[0]);
  // console.log(event.performers)

return(
<List
    itemLayout="horizontal"
    dataSource={eventList}
    renderItem={event => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src={event.performers[0].image} />}
          title={<a href={event.url}>{event.short_title}</a>}
          description={event.datetime_local}
        />
      </List.Item>
    )}
  />
)
}

export default QuickSearchEventList;


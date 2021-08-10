import { List, Avatar, Button } from 'antd';
import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addOneSubscribe } from '../../redux/actions/subscribeAC';



function QuickSearchItem({ avatar, title, description, url, key, id }) {
  const eventTitle = useRef(null)
  const eventUrl = useRef(null)
  const eventPicture = useRef(null)
  const eventStartdatetime = useRef(null)

  function showEventData() {
    const Name = eventTitle.current.innerText
    const Url = eventUrl.currunet
    const Picture = eventPicture.current
    const Startdatetime = eventStartdatetime.current
    console.log(Name);
    console.log(Url);
    console.log(Picture);
    console.log(Startdatetime);
    return Name
  }

  const dispatch = useDispatch()


  const addSubscribe = (obj) => {
    const data = {
      Picture: obj.avatar.props.src,
      Url: obj.url,
      Name: obj.title.props.children,
      Startdatetime: obj.description
    }
    console.log(data);
    dispatch(addOneSubscribe(data))
  }

  return (
    <>
      {id ?
        <List.Item >
          <List.Item.Meta
            id={id}
            key={key}
            avatar={<Avatar ref={eventUrl} src={avatar} />}
            title={<a ref={eventTitle} href={url}>{title}</a>}
            // title={<a href={url}>{title}</a>}
            description={description}
          />

          {/* <Button on type="primary" shape="circle">+</Button> */}
          <Button onClick={() => addSubscribe({ avatar, url, title, description })} on type="primary" shape="circle">+</Button>

        </List.Item>
        :
        <p>Download</p>
      }
    </>
  )
}


export default QuickSearchItem;


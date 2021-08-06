const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

function Poster({ img, title }) {


  return (
    <div style={contentStyle}>
      <img  src={img} alt="" />
      <h3 >{title}</h3>
    </div>
  )
}

export default Poster

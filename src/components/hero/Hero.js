import './hero.scss'

const Hero = () => {
  const data=[
  {
    img:"https://htmldemo.net/looki/looki/assets/img/slider/slide1.jpg",
    title:"Facer Makeup Brush",
    desc:"Skincare Brush Set",
    disc:"Sale 30% Off"
  },
  {
    img:"https://htmldemo.net/looki/looki/assets/img/slider/slide2.jpg",
    title:"Morneva Shampoo",
    desc:"Scalpcare Shampoo",
    disc:"Sale 40% Off"
  },
  {
    img:"https://htmldemo.net/looki/looki/assets/img/slider/slide3.jpg",
    title:"Runway Lip Palette Red",
    desc:"Lips Care Lipstick",
    disc:"Sale 60% Off"
  },
]
  return (
    <div className="hero">
      {data.map((d)=>(
        <div className="container">
      <div className="right">{d.title} {d.desc}{d.disc}</div>
        <div className="left">mmm</div>
      </div>
      ))}
      
    </div>
  )
}

export default Hero         
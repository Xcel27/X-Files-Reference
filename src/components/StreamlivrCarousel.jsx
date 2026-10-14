import { useRef, useState } from 'react'
import imageAssets from '../data/imageAssets.json'

export default function StreamlivrCarousel({ items }) {
 const [active, setActive] = useState(0)
 const gesture = useRef(null)
 const move = amount => setActive(current => (current + amount + items.length) % items.length)
 const selected = items[active]
 return <section className="stream-carousel" aria-roledescription="carousel" aria-label="Streamlivr product screens" onKeyDown={event => {
  if(event.key === 'ArrowRight' || event.key === 'ArrowLeft'){event.preventDefault();move(event.key === 'ArrowRight' ? 1 : -1)}
 }}>
  <div className="stream-carousel-heading"><span>03 / PRODUCT EXPERIENCE</span><h3>A closer look at the creator experience.</h3><p>Discover, connect and create — one screen at a time.</p></div>
  <div className="stream-carousel-stage" onPointerDown={event => {
   if(event.isPrimary && event.button === 0 && !event.target.closest('button')){gesture.current={x:event.clientX,y:event.clientY};event.currentTarget.setPointerCapture(event.pointerId)}
  }} onPointerCancel={() => {gesture.current=null}} onPointerUp={event => {
   if(!gesture.current)return
   const dx=event.clientX-gesture.current.x,dy=event.clientY-gesture.current.y
   gesture.current=null
   if(Math.abs(dx)>40 && Math.abs(dx)>Math.abs(dy))move(dx<0?1:-1)
  }}>
   {items.map((item,index) => {
    let offset=(index-active+items.length)%items.length
    if(offset>Math.floor(items.length/2))offset-=items.length
    const asset=imageAssets[item.src]
    return <div key={item.src} className={`stream-phone ${offset===0?'featured':offset===-1?'previous':offset===1?'next':offset<0?'off-left':'off-right'}`} aria-hidden={offset!==0}>
     <span className="stream-phone-screen"><img src={asset?.src || item.src} alt={item.title} width={asset?.width} height={asset?.height} decoding="async" draggable="false" /></span>
    </div>
   })}
   <button type="button" className="stream-arrow stream-arrow-prev" aria-label="Previous Streamlivr screen" onClick={() => move(-1)}>←</button>
   <button type="button" className="stream-arrow stream-arrow-next" aria-label="Next Streamlivr screen" onClick={() => move(1)}>→</button>
  </div>
  <div className="stream-carousel-caption" aria-live="polite" aria-atomic="true"><span>{String(active+1).padStart(2,'0')} / {String(items.length).padStart(2,'0')}</span><h4>{selected.title}</h4><p>{selected.description}</p></div>
  <div className="stream-carousel-dots" aria-label="Choose a product screen">{items.map((item,index) => <button type="button" key={item.src} aria-label={`Show ${item.title}`} aria-current={index===active?'true':undefined} onClick={() => setActive(index)}><span /></button>)}</div>
 </section>
}

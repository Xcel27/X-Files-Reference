import { useEffect, useRef, useState } from 'react'

const steps = [
 ['Discover', 'Understand the problem, the audience and the goals before shaping the solution.'],
 ['Design', 'Develop the direction — from brand identity and campaign visuals to product flows and screens.'],
 ['Build', 'Bring the direction to life through finished design assets, websites or applications.'],
 ['Launch', 'Release the work, hand over the assets and refine the experience as the project grows.']
]

export default function ProcessSteps() {
 const root = useRef(null)
 const progressPath = useRef(null)
 const distances = useRef([])
 const [shape, setShape] = useState({d:'', width:1, height:1})
 useEffect(() => {
  const element = root.current
  const nodes = [...element.querySelectorAll('.process-step')]
  const measure = () => {
   const box = element.getBoundingClientRect()
   const points = nodes.map(node => {const r = node.getBoundingClientRect(); return [r.left-box.left+3,r.top-box.top+3]})
   let length = 0
   const stops = [0]
   const route = [points[0]]
   const add = p => {const last = route[route.length-1]; length += Math.hypot(p[0]-last[0],p[1]-last[1]); route.push(p)}
   points.slice(1).forEach((p,i) => {
    const last = points[i]
    if(p[1] > last[1]+10 && p[0] < last[0]-10){
     const middle = (nodes[i].getBoundingClientRect().bottom-box.top+p[1])/2
     add([box.width-3,last[1]]); add([box.width-3,middle]); add([3,middle]); add([3,p[1]])
    }
    add(p); stops.push(length)
   })
   distances.current = stops.map(distance => length ? distance/length : 0)
   setShape({d:route.map((p,i)=>`${i?'L':'M'}${p[0]},${p[1]}`).join(' '),width:box.width,height:box.height})
  }
  const observer = new ResizeObserver(measure)
  observer.observe(element); nodes.forEach(node => observer.observe(node)); measure()
  const media = window.matchMedia('(prefers-reduced-motion: reduce)')
  let frame, start
  const tick = time => {
   start ??= time
   const progress = media.matches ? 1 : Math.min(((time-start)%6500)/5200,1)
   progressPath.current?.setAttribute('stroke-dasharray',`${progress} 1`)
   nodes.forEach((node,index) => {node.dataset.lit = String(progress >= distances.current[index])})
   if(!media.matches) frame = requestAnimationFrame(tick)
  }
  const restart = () => {cancelAnimationFrame(frame); start=undefined; frame=requestAnimationFrame(tick)}
  media.addEventListener('change',restart); restart()
  return () => {observer.disconnect();cancelAnimationFrame(frame);media.removeEventListener('change',restart)}
 }, [])
 return <div className="steps synced-steps" ref={root}>
  <svg className="process-track" width="100%" height="100%" viewBox={`0 0 ${shape.width} ${shape.height}`} aria-hidden="true"><path d={shape.d} className="process-track-base"/><path ref={progressPath} d={shape.d} pathLength="1" strokeDasharray="0 1" className="process-track-progress"/></svg>
  {steps.map(([title,description],index) => <article className={`process-step step-${index+1}`} key={title}><span>{String(index+1).padStart(2,'0')}</span><h3>{title}</h3><p>{description}</p></article>)}
 </div>
}

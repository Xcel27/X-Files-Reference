import { useEffect, useState } from 'react'
import './App.css'

const services=[
 ['01','Product Design','UI / UX','RESEARCH','SYSTEMS'],['02','Software Development','WEB APPS','APIS','PLATFORMS'],
 ['03','Brand & Visual Design','BRANDING','GRAPHIC DESIGN','PRINT + DIGITAL'],['04','Technology Solutions','AUTOMATION','INTEGRATIONS','SYSTEMS']]
const projects = [
  {
    code: 'X-001',
    name: 'X-Files',
    desc: 'A technology brand built from the ground up, combining identity, product thinking and web development into one distinctive digital system.',
    tags: ['BRAND IDENTITY', 'WEB DEVELOPMENT', '2026'],
    kind: 'xfiles',
    image: '/images/xfiles-project.png'
  },
  {
    code: 'X-002',
    name: 'Streamlivr',
    desc: 'A creator platform for content creators to stream and monetize their content.',
    tags: ['PRODUCT DESIGN', 'APP DEVELOPMENT', '2026'],
    kind: 'streamlivr',
    image: '/images/streamlivr.jpg'
  },
  {
    code: 'X-003',
    name: 'Teamo Foods',
    desc: 'A collection of brand and visual design work spanning packaging, campaigns, social content and print communication.',
    tags: ['VISUAL DESIGN', 'PACKAGING', '2025'],
    kind: 'teamo',
    image: '/images/teamo-foods.jpg'
  }
]

const caps = [
  'PRODUCT DESIGN',
  'UI/UX',
  'BRAND & VISUAL DESIGN',
  'WEB DEVELOPMENT',
  'APP DEVELOPMENT',
  'SOFTWARE ENGINEERING',
  'APIs & INTEGRATIONS',
  'AUTOMATION',
  'DESIGN SYSTEMS',
  'PRODUCT STRATEGY',
  'PROTOTYPING',
  'DIGITAL EXPERIENCES'
]
function Diagram({kind='hero'}){
 const ticks = Array.from({length:72},(_,i)=>i)
 const nodes = [[118,118],[382,120],[400,330],[135,360],[250,92],[250,408]]
 return (
  <div className={`diagram ${kind}`}>
   <div className="d-grid"/>
   <svg className="radar-svg" viewBox="0 0 500 500" aria-hidden="true">
    <g className="radar-static">
     <circle className="radar-ring outer" cx="250" cy="250" r="192"/>
     <circle className="radar-ring" cx="250" cy="250" r="170"/>
     <circle className="radar-ring" cx="250" cy="250" r="132"/>
     <circle className="radar-ring" cx="250" cy="250" r="92"/>
     <circle className="radar-ring fine" cx="250" cy="250" r="54"/>
     <line className="radar-axis" x1="48" y1="250" x2="452" y2="250"/>
     <line className="radar-axis" x1="250" y1="48" x2="250" y2="452"/>
     <line className="radar-guide" x1="112" y1="112" x2="388" y2="388"/>
     <line className="radar-guide" x1="388" y1="112" x2="112" y2="388"/>
     <g className="radar-ticks">
      {ticks.map(i=><line key={i} x1="250" y1={i%6===0?49:55} x2="250" y2={i%6===0?66:63} transform={`rotate(${i*5} 250 250)`}/>)}
     </g>
     <g className="radar-nodes">
      {nodes.map(([x,y],i)=><g key={i}><circle cx={x} cy={y} r="10"/><circle cx={x} cy={y} r="3"/><line x1={x-15} y1={y} x2={x+15} y2={y}/><line x1={x} y1={y-15} x2={x} y2={y+15}/></g>)}
     </g>
     <g className="radar-callouts">
      <path d="M70 155h34m-17-17v34 M396 152h35 M396 160h22 M78 344h28 M394 350h34"/>
      <path d="M150 74v18 M350 74v18 M150 408v18 M350 408v18"/>
     </g>
     <g className="xf-mark">
      <path d="M150 170 L226 250 L150 330 L190 330 L250 270 L310 330 L350 330 L274 250 L350 170 L310 170 L250 230 L190 170 Z"/>
      <path d="M286 188 H365 M286 218 H340 M286 282 H340 M286 312 H365"/>
     </g>
    </g>
    <circle className="radar-core" cx="250" cy="250" r="9"/>
    <g className="radar-sweep">
     <path className="sweep-cone" d="M250 250 L445 218 A198 198 0 0 1 447 268 Z"/>
     <line className="sweep-line" x1="250" y1="250" x2="447" y2="250"/>
    </g>
   </svg>
  </div>
 )
}
function App(){
  const [projectType, setProjectType] = useState('')
  const [formStatus, setFormStatus] = useState('')
  const handleSubmit = async (e) => {
  e.preventDefault()
  setFormStatus('sending')

  const formData = new FormData(e.target)

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    })

    const data = await response.json()

    if (data.success) {
      setFormStatus('success')
      e.target.reset()
      setProjectType('')
    } else {
      setFormStatus('error')
    }
  } catch (error) {
    setFormStatus('error')
  }
}
 const [loaded,setLoaded]=useState(false)
 useEffect(()=>{const t=setTimeout(()=>setLoaded(true),1800);return()=>clearTimeout(t)},[])
 return <div className={loaded?'app loaded':'app'}>
  <div className="boot"><div className="boot-inner"><b>XF</b><span>INITIALIZING SYSTEM</span><div className="boot-track"><i/></div></div></div>
  <header><a className="brand" href="#top"><b>XF</b><span>X-FILES</span></a><nav><a href="#work">01 WORK</a><a href="#services">02 SERVICES</a><a href="#about">03 ABOUT</a><a href="#contact">04 CONTACT</a></nav><span className="status"><i/> SYSTEM STATUS: ONLINE</span></header>
  <main id="top">
   <section id="top" className="hero grid-bg"><div className="hero-copy"><p className="eyebrow">01 / X-FILES</p>
   <div className="hero-meta">
  <div className="meta-row">
    <span>TECHNOLOGY SERVICES COMPANY</span>
  </div>

    <div className="meta-row">
      <span>DESIGN + ENGINEERING</span>
    </div>

    <div className="meta-row">
    <span>LAGOS / NIGERIA</span>
  </div>
</div>

<h1>WE DESIGN.<br/>WE BUILD.<br/><span className="solve-line">WE SOLVE<span>.</span></span></h1><p className="lead">X-Files is a technology services company creating digital products, software, and experiences that solve real problems.</p>
<div className="actions"><a className="btn light" href="#contact">
    START A PROJECT</a><a className="btn ghost" href="#work">VIEW WORK ↓</a></div></div><Diagram/><div className="coordinates">
  <span>6.5244° N / 3.3792° E</span>
  <span>COORDS LOCKED</span>
</div>
<div className="hero-scroll">
  <span>SCROLL</span>
  <i></i>
</div>

</section>

   <section id="services" className="section services"><div className="section-intro"><div><p className="eyebrow">02 / SERVICES</p><h2>WHAT WE DO</h2></div><p>Four disciplines, one team. We plug in wherever a project needs us most, from the first sketch to the deployed system.</p></div><div className="service-grid">
    {services.map(s =>
      <article key={s[0]}>
        <span className="num">{s[0]}</span>

        <div className={`service-visual visual-${s[0]}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <h3>{s[1]}</h3>

        <div className="tags">
          {s.slice(2).map(x =>
            <span key={x}>{x}</span>
          )}
        </div>
      </article>
    )}
   </div></section>

   <section id="work" className="section archive"><div className="archive-head"><p className="eyebrow"></p><h2>CASE FILES</h2><p>A selection of systems, products and identities built at the intersection of design and engineering.</p></div>

   {projects.map((p,i)=><article className={`project p${i}`} key={p.name}><div className="project-art"><img
  src={p.image}
  alt={`${p.name} project`}
  className="project-image"
/>
   <span className="art-code">{p.code}</span></div><div className="project-copy"><p className="eyebrow">{p.code}</p><h3>{p.name}</h3><p>{p.desc}</p><div className="tags">
  {p.tags.map(tag => (
    <span key={tag}>{tag}</span>
  ))}
</div>
<a href="#contact">VIEW CASE STUDY →</a></div></article>)}</section>

   <section className="section process grid-bg">
  <p className="eyebrow">04 / PROCESS</p>
  <h2>FROM IDEA TO<br/>DEPLOYMENT</h2>

  <div className="steps">
  {[
    ['01','Discover','Understand the problem, the users, and the objective before anything gets designed.'],
    ['02','Design','Turn ideas into clear, usable digital experiences — flows, screens, and a system to build from.'],
    ['03','Build','Engineer the product with scalable foundations, tested and documented as it is built, not after.'],
    ['04','Deploy','Launch, then refine — with real usage data steering what gets improved next.']
  ].map((x, i) => (
    <article className={`process-step step-${i + 1}`} key={x[0]}>
      <span>{x[0]}</span>
      <h3>{x[1]}</h3>
      <p>{x[2]}</p>
    </article>
  ))}

</div>
</section>

   <section id="about" className="section about"><div className="about-copy"><p className="eyebrow">05 / ABOUT</p><h2>WHERE DESIGN<br/>MEETS ENGINEERING.</h2><p>X-Files is built at the intersection of design and engineering. We combine creative thinking with technical execution to turn ideas into useful digital products and technology solutions.</p></div><div className="roles"><article><span></span><b>DESIGN</b><small>PRODUCT / UI/UX / VISUAL DESIGN</small><i>+</i></article><article><span></span><b>ENGINEERING</b><small>WEB / APP / SYSTEMS / DEVELOPMENT</small><i>+</i></article><p>DESIGN DEFINES THE EXPERIENCE. ENGINEERING MAKES IT POSSIBLE.</p></div></section>


   <section id="contact" className="section contact"><div className="contact-copy"><p className="eyebrow">06 / CONTACT</p><h2>HAVE AN IDEA?<br/>LET'S BUILD IT.</h2><p>Tell us what you're working on. We'll figure out what it takes to bring it to life.</p><small>RESPONSE TIME / 1 BUSINESS DAY</small></div>
   <form onSubmit={handleSubmit}>

  <input
    type="hidden"
    name="access_key"
    value="f4051c75-b0a8-45ea-bc2c-bae5abd32133"
  />
<input
  type="hidden"
  name="subject"
  value="New X-Files Project Enquiry"
/>
  <input
    type="hidden"
    name="project_type"
    value={projectType}
  />
<div className="form-row"><label>YOUR NAME<input
  name="name"
  placeholder="NAME"
  required
/>
</label><label>EMAIL<input
  name="email"
  placeholder="EMAIL"
  type="email"
  required
/>
</label></div><label>PROJECT TYPE<div className="choices">{['PRODUCT DESIGN','SOFTWARE DEVELOPMENT','DIGITAL PRODUCT','BRAND DESIGN','NOT SURE YET'].map(x => (
  <button
    type="button"
    key={x}
    className={projectType === x ? 'active' : ''}
    onClick={() => setProjectType(projectType === x ? '' : x)}
  >
    {x}
  </button>
))}
</div></label><label>TELL US ABOUT IT<textarea
  name="message"
  rows="5"
  placeholder="A FEW DETAILS ABOUT THE PROJECT..."
  required
/>
</label>
<button
  className="btn light"
  type="submit"
  disabled={formStatus === 'sending'}
>
  {formStatus === 'sending' ? 'TRANSMITTING...' : 'START A PROJECT →'}
</button>
{formStatus === 'success' && (
  <p className="form-message success">
    TRANSMISSION RECEIVED / WE'LL BE IN TOUCH.
  </p>
)}

{formStatus === 'error' && (
  <p className="form-message error">
    TRANSMISSION FAILED / PLEASE TRY AGAIN.
  </p>
)}

</form>
</section>
  </main>
  <footer>
  <b>X-FILES</b>

  <span>
    DESIGN / ENGINEERING / TECHNOLOGY · © 2026
  </span>

  <nav>
    <a href="#work">WORK</a>
    <a href="#services">SERVICES</a>
    <a href="#about">ABOUT</a>
    <a href="#contact">CONTACT</a>
    <a href="#top">BACK TO TOP ↑</a>
  </nav>
</footer>
 </div>
}
export default App

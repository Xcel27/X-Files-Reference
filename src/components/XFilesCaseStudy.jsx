import { useEffect, useRef, useState } from 'react'

function SitePreview({ mobile = false }) {
 const frame = useRef(null)
 const [scale, setScale] = useState(0)
 const width = mobile ? 390 : 1280
 const height = mobile ? 844 : 800
 useEffect(() => {
  const observer = new ResizeObserver(([entry]) => setScale(entry.contentRect.width / width))
  observer.observe(frame.current)
  return () => observer.disconnect()
 }, [width])
 return <figure className={`xf-site-preview ${mobile ? 'xf-mobile-preview' : ''}`}>
  <div className="xf-preview-chrome" aria-hidden="true"><span/><span/><span/><small>{mobile ? 'MOBILE / 390 PX' : 'DESKTOP / 1280 PX'}</small></div>
  <div className="xf-preview-window" ref={frame} style={{aspectRatio:`${width} / ${height}`}} inert="">
   <iframe src="/previews/xfiles-home.html" sandbox="" title={`X-Files ${mobile ? 'mobile' : 'desktop'} homepage preview`} loading="lazy" tabIndex={-1} aria-hidden="true" width={width} height={height} style={{transform:`scale(${scale})`}} />
  </div>
  <figcaption>{mobile ? 'A narrow layout stacks the hero and keeps navigation within reach.' : 'An open desktop layout pairs the brand statement with the radar graphic.'}</figcaption>
 </figure>
}

export default function XFilesCaseStudy({ image, onEnlarge }) {
 const [status, setStatus] = useState('success')
 const feedback = {
  sending:'TRANSMITTING / PLEASE WAIT…',
  success:'TRANSMISSION RECEIVED / THANK YOU. WE’LL BE IN TOUCH.',
  error:'TRANSMISSION FAILED / YOUR DETAILS ARE STILL HERE. PLEASE TRY AGAIN.'
 }
 return <div className="xf-case-story"><nav className="xf-story-nav" aria-label="Case study sections"><a href="#xf-identity-title">Identity</a><a href="#xf-website-title">Website</a><a href="#xf-interactions-title">Interactions</a><a href="#xf-delivery-title">Delivery</a></nav>
  <section className="xf-story-section" aria-labelledby="xf-identity-title">
   <div className="xf-section-heading"><span>03 / IDENTITY & VISUAL SYSTEM</span><h3 id="xf-identity-title">Recognisable before the first click.</h3><p>A compact XF signature, direct language and a restrained palette connect the brand with the way the website behaves.</p></div>
   <div className="xf-identity-board"><div className="xf-signature" aria-label="X-Files brand signature"><b>XF</b><strong>X-FILES</strong></div><span>DESIGN / ENGINEERING / TECHNOLOGY</span></div>
   <div className="xf-palette" aria-label="Website colour palette">{[
    ['Foundation','#090a0a','The dark canvas'],['Signal','#e22932','Actions and emphasis'],['Type','#f0f0ed','Primary reading'],['Structure','#202222','Grids and dividers']
   ].map(([title,hex,purpose]) => <div key={hex}><div className="xf-colour" style={{background:hex}}/><strong>{title}</strong><code>{hex.toUpperCase()}</code><small>{purpose}</small></div>)}</div>
   <div className="xf-type-grid"><div><span>INTER / DISPLAY & BODY</span><p className="xf-type-display">We design.<br/>We build.<br/><em>We solve.</em></p><p>Clear hierarchy carries the main message, then makes room for detail.</p></div><div><span>DM MONO / LABELS & WAYFINDING</span><p className="xf-type-mono">X-001 / CASE FILE<br/>DESIGN + ENGINEERING<br/>SYSTEM STATUS: ONLINE</p><p>Numbered labels and technical metadata give the interface its archive-like character.</p></div></div>
  </section>
  <section className="xf-story-section" aria-labelledby="xf-website-title">
   <div className="xf-section-heading"><span>04 / WEBSITE & RESPONSIVE DESIGN</span><h3 id="xf-website-title">One system. Different screens.</h3><p>The page introduces the company, explains its services, shows selected work and leads visitors towards a project enquiry.</p></div>
   <figure className="xf-hero-capture"><button type="button" aria-haspopup="dialog" aria-label="Enlarge X-Files desktop hero" onClick={event=>{event.currentTarget.focus();onEnlarge(image)}}><img src="/images/xfiles-project.webp" alt="X-Files desktop hero: We design, We build, We solve beside the radar graphic" loading="lazy" width="1838" height="832"/><span>VIEW ORIGINAL HERO CAPTURE ↗</span></button><figcaption>The existing desktop hero capture establishes the grid, red signal colour and typographic hierarchy.</figcaption></figure>
   <div className="xf-responsive-previews"><SitePreview/><SitePreview mobile/></div>
   <p className="xf-preview-note">RESPONSIVE LAYOUT STUDIES / generated from this website, scaled to fit.</p>
   <div className="xf-decision-list">{[
    ['01','Let the message lead.','Large, direct headlines establish what X-Files does. Supporting copy and calls to action follow in a clear reading order.'],
    ['02','Make the technical language useful.','The grid, radar graphic and numbered case files create a consistent identity; labels also help visitors locate services, work and contact information.'],
    ['03','Adapt the composition.','Service cards and project layouts reorganise at smaller widths. The mobile menu makes the same destinations available without compressing the desktop navigation.']
   ].map(([number,title,copy])=><article key={number}><span>{number}</span><div><h4>{title}</h4><p>{copy}</p></div></article>)}</div>
  </section>
  <section className="xf-story-section" aria-labelledby="xf-interactions-title">
   <div className="xf-section-heading"><span>05 / INTERACTION DETAILS</span><h3 id="xf-interactions-title">Small behaviours. A clearer experience.</h3><p>Interaction reinforces the visual system while helping people explore the work and understand what happens next.</p></div>
   <div className="xf-interaction-grid"><div><h4>Reveal the right amount of detail.</h4><p>The About section keeps disciplines compact until a visitor chooses to explore them. Try the same disclosure pattern here.</p><details className="role-detail"><summary><span className="role-dot" aria-hidden="true"/><span className="role-heading"><strong>DESIGN</strong><small>PRODUCT / UI/UX / VISUAL DESIGN</small></span><span className="role-toggle" aria-hidden="true"/></summary><div className="role-expanded"><p>Turning complex ideas into clear, useful experiences.</p><dl><div><dt>Product & UX</dt><dd>User journeys, flows and prototypes.</dd></div><div><dt>Interface design</dt><dd>Screens, interactions and design systems.</dd></div><div><dt>Brand & visual</dt><dd>Identity, graphics and digital communication.</dd></div></dl></div></details></div>
   <div><h4>Make the outcome visible.</h4><p>The enquiry form distinguishes sending, success and failure. These examples preview the feedback only; they do not send an enquiry.</p><div className="xf-feedback-controls" aria-label="Preview enquiry feedback">{[['sending','Sending'],['success','Received'],['error','Try again']].map(([value,label])=><button type="button" key={value} aria-pressed={status===value} onClick={()=>setStatus(value)}>{label}</button>)}</div><div className={`form-message ${status}`} role="status" aria-live="polite" aria-atomic="true">{feedback[status]}</div></div></div>
   <p className="xf-interaction-note">Keyboard focus, Escape-to-close case files and reduced-motion preferences are part of the implemented interface.</p>
  </section>
  <section className="xf-story-section xf-delivery" aria-labelledby="xf-delivery-title">
   <div className="xf-section-heading"><span>06 / DEVELOPMENT & DELIVERY</span><h3 id="xf-delivery-title">From visual direction to a working website.</h3><p>The brand system is carried through a React website, with reusable case-study content and layouts that adapt across screen sizes.</p></div>
   <dl>{[
    ['Frontend','React + JavaScript','Component-based pages, local interaction state and reusable case-study presentations.'],
    ['Build & styling','Vite + CSS','A production build workflow and responsive layouts using the existing visual system.'],
    ['Enquiries','Web3Forms','The contact form submits to an external service and provides sending, success and error feedback.'],
    ['Source & hosting','GitHub + Vercel','Version-controlled source and the established publishing workflow for the live website.']
   ].map(([label,value,copy])=><div key={label}><dt>{label}</dt><dd><strong>{value}</strong><p>{copy}</p></dd></div>)}</dl>
   <div className="xf-story-close"><span>X-001 / BRAND → WEBSITE → EXPERIENCE</span><p>A digital home for the team’s design and engineering work.</p></div>
  </section>
 </div>
}

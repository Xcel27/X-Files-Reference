import { useEffect, useRef, useState } from 'react'

function SitePreview({ mobile = false, tablet = false }) {
 const frame = useRef(null)
 const [scale, setScale] = useState(0)
 const width = mobile ? 390 : tablet ? 768 : 1280
 const height = mobile ? 844 : tablet ? 1024 : 800
 useEffect(() => {
  const observer = new ResizeObserver(([entry]) => setScale(entry.contentRect.width / width))
  observer.observe(frame.current)
  return () => observer.disconnect()
 }, [width])
 return <figure className={`xf-site-preview ${mobile ? 'xf-mobile-preview' : tablet ? 'xf-tablet-preview' : ''}`}>
  <div className="xf-preview-chrome" aria-hidden="true"><span/><span/><span/><small>{mobile ? 'MOBILE / 390 PX' : tablet ? 'TABLET / 768 PX' : 'DESKTOP / 1280 PX'}</small></div>
  <div className="xf-preview-window" ref={frame} style={{aspectRatio:`${width} / ${height}`}} inert="">
   <iframe src="/previews/xfiles-home.html" sandbox="" title={`X-Files ${mobile ? 'mobile' : tablet ? 'tablet' : 'desktop'} homepage preview`} loading="lazy" tabIndex={-1} aria-hidden="true" width={width} height={height} style={{transform:`scale(${scale})`}} />
  </div>
  <figcaption>{mobile ? 'Content stacks into a clear reading order, with navigation and key actions kept within easy reach.' : tablet ? 'The layout adjusts to the middle ground, balancing readable text, flexible spacing and easy navigation.' : 'An open layout gives the brand statement and radar graphic room to sit side by side.'}</figcaption>
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
   <div className="xf-section-heading"><span>03 / IDENTITY & VISUAL SYSTEM</span><h3 id="xf-identity-title">Made recognisable before the first click.</h3><p>The XF signature, straightforward language and restrained colour palette give the brand its character. These choices carry through the website, connecting how it looks with how it feels to use.</p></div>
   <div className="xf-identity-board"><div className="xf-signature" aria-label="X-Files brand signature"><img src="/images/xfiles-logo.jpg" alt="X-Files logo" width="768" height="512"/><strong>X-FILES</strong></div><span>DESIGN / ENGINEERING / TECHNOLOGY</span></div>
   <div className="xf-palette" aria-label="Website colour palette">{[
    ['Foundation','#090a0a','A dark canvas that lets the work stand out'],['Signal','#e22932','Red accents for actions and emphasis'],['Type','#f0f0ed','Clear, readable text'],['Structure','#202222','Subtle grids and dividers']
   ].map(([title,hex,purpose]) => <div key={hex}><div className="xf-colour" style={{background:hex}}/><strong>{title}</strong><code>{hex.toUpperCase()}</code><small>{purpose}</small></div>)}</div>
   <div className="xf-type-grid"><div><span>INTER / DISPLAY & BODY</span><p className="xf-type-display">We design.<br/>We build.<br/><em>We solve.</em></p><p>Strong headlines introduce the main message, while supporting text gives visitors room to explore the details.</p></div><div><span>DM MONO / LABELS & WAYFINDING</span><p className="xf-type-mono">X-001 / CASE FILE<br/>DESIGN + ENGINEERING<br/>SYSTEM STATUS: ONLINE</p><p>Numbered labels and technical details give the website its archive-like character and help visitors find their way around.</p></div></div>
  </section>
  <section className="xf-story-section" aria-labelledby="xf-website-title">
   <div className="xf-section-heading"><span>04 / WEBSITE & RESPONSIVE DESIGN</span><h3 id="xf-website-title">One system. Different screens.</h3><p>The website introduces the team, explains its services and presents selected work before inviting visitors to get in touch. The layout adapts across desktop, tablet and mobile, keeping the same identity while giving each screen the space it needs.</p></div>
   <figure className="xf-hero-capture"><button type="button" aria-haspopup="dialog" aria-label="Enlarge X-Files desktop hero" onClick={event=>{event.currentTarget.focus();onEnlarge(image)}}><img src="/images/xfiles-project.webp" alt="X-Files desktop hero: We design, We build, We solve beside the radar graphic" loading="lazy" width="1838" height="832"/><span>VIEW ORIGINAL HERO CAPTURE ↗</span></button><figcaption>The desktop hero brings the visual direction together: a technical grid, red accents and a bold opening statement.</figcaption></figure>
   <div className="xf-responsive-previews"><SitePreview/><SitePreview tablet/><SitePreview mobile/></div>
   <p className="xf-preview-note">RESPONSIVE LAYOUT PREVIEWS / The website shown at desktop, tablet and mobile widths.</p>
   <div className="xf-decision-list">{[
    ['01','Let the message lead.','Large, direct headlines introduce what X-Files does. Supporting text adds context, and clear calls to action guide visitors towards the next step.'],
    ['02','Give the details a purpose.','The grid, radar graphic and numbered case files give the website a distinctive identity. Labels help visitors find services, explore projects and reach the team.'],
    ['03','Make room for every screen.','Spacing, grids and project layouts adjust as the screen gets smaller. Across desktop, tablet and mobile, the aim stays the same: make the work easy to explore and the website comfortable to use.']
   ].map(([number,title,copy])=><article key={number}><span>{number}</span><div><h4>{title}</h4><p>{copy}</p></div></article>)}</div>
  </section>
  <section className="xf-story-section" aria-labelledby="xf-interactions-title">
   <div className="xf-section-heading"><span>05 / INTERACTION DETAILS</span><h3 id="xf-interactions-title">Small details. A smoother experience.</h3><p>The interactions help visitors explore the work, find more detail when they want it and understand what happens after each action.</p></div>
   <div className="xf-interaction-grid"><div><h4>More detail when you need it.</h4><p>The About section gives a brief introduction to each discipline, with more information available on demand. The example below shows how this works.</p><details className="role-detail"><summary><span className="role-dot" aria-hidden="true"/><span className="role-heading"><strong>DESIGN</strong><small>PRODUCT / UI/UX / VISUAL DESIGN</small></span><span className="role-toggle" aria-hidden="true"/></summary><div className="role-expanded"><p>Turning complex ideas into clear, useful experiences.</p><dl><div><dt>Product & UX</dt><dd>Planning user journeys, flows and prototypes.</dd></div><div><dt>Interface design</dt><dd>Designing screens, interactions and connected design systems.</dd></div><div><dt>Brand & visual</dt><dd>Creating identities, graphics and digital communication.</dd></div></dl></div></details></div>
   <div><h4>Keep people informed.</h4><p>The enquiry form lets visitors know when their message is sending, when it has arrived and when they need to try again. The examples below demonstrate those messages without sending an enquiry.</p><div className="xf-feedback-controls" aria-label="Preview enquiry feedback">{[['sending','Sending'],['success','Received'],['error','Try again']].map(([value,label])=><button type="button" key={value} aria-pressed={status===value} onClick={()=>setStatus(value)}>{label}</button>)}</div><div className={`form-message ${status}`} role="status" aria-live="polite" aria-atomic="true">{feedback[status]}</div></div></div>
   <p className="xf-interaction-note">Visible keyboard focus, Escape-to-close controls and support for reduced motion make the website easier to navigate in different ways.</p>
  </section>
  <section className="xf-story-section xf-delivery" aria-labelledby="xf-delivery-title">
   <div className="xf-section-heading"><span>06 / DEVELOPMENT & DELIVERY</span><h3 id="xf-delivery-title">From visual direction to a working website.</h3><p>The visual direction comes to life through a React website, with reusable components, consistent case-study layouts and responsive styling across desktop, tablet and mobile.</p></div>
   <dl>{[
    ['Frontend','React + JavaScript','Reusable components bring the pages together and support interactions throughout the website.'],
    ['Build & styling','Vite + CSS','Vite handles production builds, while CSS carries the visual identity across layouts and screen sizes.'],
    ['Enquiries','Web3Forms','The contact form uses Web3Forms to deliver enquiries and keep visitors informed as their message is sent.'],
    ['Source & hosting','GitHub + Vercel','GitHub keeps track of the source code, while Vercel builds and hosts the live website.']
   ].map(([label,value,copy])=><div key={label}><dt>{label}</dt><dd><strong>{value}</strong><p>{copy}</p></dd></div>)}</dl>
   <div className="xf-story-close"><span>X-001 / BRAND → WEBSITE → EXPERIENCE</span><p>A home for what X-Files creates—and a starting point for what comes next.</p></div>
  </section>
 </div>
}

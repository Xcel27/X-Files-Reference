import imageAssets from '../data/imageAssets.json'

export function ParentiiPhone({item,original=false,decorative=false}) {
 const asset=imageAssets[item.src]
 return <span className="parentii-phone"><span className="parentii-phone-screen"><img src={original ? item.src : asset?.src || item.src} alt={decorative ? '' : `Parentii — ${item.title}`} width={asset?.width} height={asset?.height} loading="lazy" decoding="async" draggable="false"/></span><span className="parentii-phone-island" aria-hidden="true"/><span className="parentii-phone-home" aria-hidden="true"/></span>
}

function PublishedImage({item,onEnlarge,className=''}) {
 const asset=imageAssets[item.src]
 const phone=item.group==='app'
 return <button type="button" className={`parentii-image ${phone ? 'parentii-phone-image' : ''} ${className}`} aria-label={`Enlarge ${item.title}`} aria-haspopup="dialog" onClick={event=>{event.currentTarget.focus();onEnlarge(phone ? {...item,presentation:'parentii-phone'} : item)}}>{phone ? <ParentiiPhone item={item}/> : <img src={asset?.src || item.src} width={asset?.width} height={asset?.height} alt={`Parentii — ${item.title}`} loading="lazy" decoding="async"/>}<span>{phone ? 'VIEW SCREEN ↗' : 'VIEW FULL IMAGE ↗'}</span></button>
}

export function ParentiiCover(){
 return <div className="parentii-cover" role="img" aria-label="Parentii brand and app interfaces in phone frames"><div className="parentii-cover-brand"><img src="/images/parentii/logo.png" alt=""/><strong>Parentii</strong></div><p>Designed around everyday parenting.</p><div className="parentii-cover-screens">{['growth-dashboard','crisis-mode','copilot'].map(name=><ParentiiPhone key={name} item={{src:`/images/parentii/${name}.png`,title:name}} decorative/>)}</div></div>
}

export default function ParentiiCaseStudy({items,onEnlarge}){
 const growth=items.find(x=>x.title==='Growth dashboard')
 const appScreens=items.filter(x=>x.group==='app' && x!==growth)
 const websiteScreens=items.filter(x=>x.group==='website')
 return <div className="parentii-story">
  <nav className="parentii-story-nav" aria-label="Parentii case study sections"><a href="#parentii-brand">Brand</a><a href="#parentii-app">App experience</a><a href="#parentii-website">Website</a><a href="#parentii-delivery">Delivery</a></nav>
  <section className="parentii-section" aria-labelledby="parentii-brand">
   <div className="parentii-heading"><span>03 / BRAND & VISUAL DIRECTION</span><h3 id="parentii-brand">A warmer welcome to parenting support.</h3><p>Soft colours, friendly illustrations and clear layouts give Parentii a welcoming feel. The visual direction helps introduce its range of features without making the product feel overwhelming.</p></div>
   <div className="parentii-brand-board"><div className="parentii-brand-lockup"><img src="/images/parentii/logo.png" alt="Parentii logo" width="150" height="143"/><strong>Parentii</strong></div><p>Brand, app and website, brought together.</p><div className="parentii-brand-notes"><div><span>PALETTE</span><p>Cream and yellow give the website its warmth. Sage, coral and other supporting colours give different areas of the app their own character.</p></div><div><span>TYPOGRAPHY</span><p>Lora’s serif headings bring personality to the website, while Quicksand’s rounded lettering keeps supporting text friendly and easy to read.</p></div><div><span>CHARACTER</span><p>Family illustrations, rounded shapes and open spacing support Parentii’s conversational tone.</p></div></div></div>
  </section>
  <section className="parentii-section" aria-labelledby="parentii-app">
   <div className="parentii-heading"><span>04 / APP EXPERIENCE</span><h3 id="parentii-app">Support for different parenting moments.</h3><p>Five app views show how Parentii brings together progress tracking, guidance, conversation, learning and family settings.</p></div>
   <div className="parentii-featured-screen"><PublishedImage item={growth} onEnlarge={onEnlarge}/><div><span className="parentii-kicker">01 / GROWTH DASHBOARD</span><h4>A clear starting point for the day.</h4><p>{growth.description}</p><dl><div><dt>Hierarchy</dt><dd>The progress score leads the screen, with updates and consistency details arranged beneath it.</dd></div><div><dt>Visual language</dt><dd>A warm background and yellow accents connect the dashboard to the wider Parentii identity.</dd></div></dl><p className="parentii-source-note">PUBLISHED APP PRESENTATION / GROWTH DASHBOARD</p></div></div>
   <div className="parentii-screen-grid">{appScreens.map((item,index)=><figure key={item.src}><PublishedImage item={item} onEnlarge={onEnlarge}/><figcaption><span className="parentii-kicker">{String(index+2).padStart(2,'0')} / PRODUCT EXPERIENCE</span><h4>{item.title}</h4><p>{item.description}</p></figcaption></figure>)}</div>
  </section>
  <section className="parentii-section" aria-labelledby="parentii-website">
   <div className="parentii-heading"><span>05 / WEBSITE & RESPONSIVE PRESENTATION</span><h3 id="parentii-website">Get to know Parentii before the first tap.</h3><p>The website introduces Parentii through a clear opening message, family illustrations and previews of the app. Feature explanations help visitors understand what the product offers before exploring further.</p></div>
   <div className="parentii-website-grid">{websiteScreens.map(item=><figure key={item.src}><PublishedImage item={item} onEnlarge={onEnlarge}/><figcaption><h4>{item.title}</h4><p>{item.description}</p></figcaption></figure>)}</div>
   <p className="parentii-source-note">Website views from parentii.app. App screens are presented in phone frames using the product visuals published on the site.</p>
  </section>
  <section className="parentii-section" aria-labelledby="parentii-delivery">
   <div className="parentii-heading"><span>06 / SCOPE & DELIVERY</span><h3 id="parentii-delivery">From the first impression to the everyday experience.</h3><p>The X-Files Team’s work spans the brand identity, app experience, website design and development.</p></div>
   <div className="parentii-delivery-grid">{[
    ['Brand identity','A logo, visual direction and tone shaped around parenting and family life.'],
    ['Product design','Clear layouts and familiar navigation connect the product’s different feature areas.'],
    ['App & website development','The app and website bring the visual direction into an experience people can explore and use.']
   ].map(([title,copy])=><article key={title}><h4>{title}</h4><p>{copy}</p></article>)}</div>
   <div className="parentii-credit"><span>X-004 / X-FILES TEAM</span><p>Brand identity · Product design · App & website development</p></div>
  </section>
 </div>
}

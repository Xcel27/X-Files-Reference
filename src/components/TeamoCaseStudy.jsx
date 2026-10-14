import imageAssets from '../data/imageAssets.json'

function CampaignImage({ item, onEnlarge, featured = false }) {
 const asset = imageAssets[item.src]
 return <button className={`teamo-artwork ${featured ? 'teamo-artwork-featured' : ''}`} type="button" aria-haspopup="dialog" aria-label={`Enlarge ${item.title}`} onClick={event=>{event.currentTarget.focus();onEnlarge(item)}}>
  <img src={asset?.src || item.src} width={asset?.width} height={asset?.height} alt={`Teamo Foods — ${item.title}`} loading="lazy" decoding="async"/>
  <span>VIEW FULL ARTWORK ↗</span>
 </button>
}

export default function TeamoCaseStudy({ items, onEnlarge }) {
 const [featured, ...campaigns] = items
 const notes = [
  {category:'FOOD & AWARENESS', intent:'Celebrate food and shared values.', composition:'Fresh ingredients frame the message, while olive and warm orange tones give this occasion its own editorial character.'},
  {category:'AUDIENCE ENGAGEMENT', intent:'Invite a simple, familiar choice.', composition:'Two meal options, diagonal colour blocks and directional arrows turn the composition into a clear visual comparison.'},
  {category:'COMMUNITY & CELEBRATION', intent:'Give the occasion a human focus.', composition:'A joyful portrait and pink headline carry the message, with generous white space keeping the composition open.'},
  {category:'WELLNESS & EDUCATION', intent:'Make everyday ideas easy to scan.', composition:'Six illustrated themes share a consistent grid. Green, yellow and orange accents connect the educational layout to the wider collection.'}
 ]
 return <div className="teamo-story">
  <nav className="teamo-story-nav" aria-label="Teamo case study sections"><a href="#teamo-featured">Featured campaign</a><a href="#teamo-collection">Collection</a><a href="#teamo-consistency">Visual consistency</a></nav>
  <section className="teamo-feature" aria-labelledby="teamo-featured">
   <div className="teamo-feature-copy"><span className="teamo-section-label">03 / FEATURED CAMPAIGN</span><h3 id="teamo-featured">Everyday flavour.<br/>A familiar voice.</h3><p>A welcoming kitchen scene and a bold green-and-yellow composition make the product part of an everyday moment.</p><div className="teamo-feature-meta"><span>FIG. 01 / {featured.title}</span><h4>Start the week with Teamo.</h4><p>{featured.description}</p></div><dl className="teamo-feature-notes"><div><dt>MESSAGE</dt><dd>A positive start to the week, connected to cooking.</dd></div><div><dt>COMPOSITION</dt><dd>Brush textures frame the kitchen photograph and create a clear path from headline to product to website.</dd></div></dl></div>
   <figure className="teamo-feature-art"><CampaignImage item={featured} onEnlarge={onEnlarge} featured/><figcaption>Featured social design / Happy New Week</figcaption></figure>
  </section>
  <section className="teamo-collection" aria-labelledby="teamo-collection">
   <div className="teamo-section-heading"><span className="teamo-section-label">04 / CAMPAIGN COLLECTION</span><h3 id="teamo-collection">Different messages. One recognisable brand.</h3><p>Awareness, community, engagement and wellness content give the brand different ways to speak to its audience.</p></div>
   <div className="teamo-campaign-grid">{campaigns.map((item,index)=>{const note=notes[index];return <figure key={item.src} className="teamo-campaign"><CampaignImage item={item} onEnlarge={onEnlarge}/><figcaption><span className="teamo-campaign-category">FIG. {String(index+2).padStart(2,'0')} / {note.category}</span><h4>{item.title}</h4><p className="teamo-campaign-intent">{note.intent}</p><p>{note.composition}</p></figcaption></figure>})}</div>
  </section>
  <section className="teamo-consistency" aria-labelledby="teamo-consistency">
   <div className="teamo-section-heading"><span className="teamo-section-label">05 / VISUAL CONSISTENCY</span><h3 id="teamo-consistency">Room for variety. Anchored by repetition.</h3><p>The campaigns change tone with the subject. Repeated brand cues hold the collection together without forcing every post into the same layout.</p></div>
   <div className="teamo-colour-ribbon" aria-label="Recurring colours in the campaign artwork"><div className="teamo-green"><strong>Green</strong><span>Brand recognition</span></div><div className="teamo-yellow"><strong>Yellow</strong><span>Energy and emphasis</span></div><div className="teamo-orange"><strong>Orange</strong><span>Warm accents</span></div></div>
   <div className="teamo-principles">{[
    ['01','Keep the product in the story.','Product imagery appears as part of the kitchen scene or as a recurring pack lineup, connecting each message with the food brand.'],
    ['02','Give each message its own rhythm.','Large headlines lead awareness posts, photography carries the community pieces and a structured grid supports wellness content.'],
    ['03','Repeat the recognition cues.','The Teamo identity and recurring footer details help connect posts even when their colours, imagery and layouts vary.']
   ].map(([number,title,copy])=><article key={number}><span>{number}</span><h4>{title}</h4><p>{copy}</p></article>)}</div>
   <div className="teamo-scope"><span>06 / SCOPE & CREDIT</span><h4>Selected social & campaign design.</h4><p>Design contributions by the <strong>X-Files Team</strong>. This case file presents the five selected campaign layouts; product packaging appears within the artwork as brand context.</p></div>
  </section>
 </div>
}

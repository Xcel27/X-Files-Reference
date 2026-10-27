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
  {category:'FOOD & AWARENESS', intent:'Celebrate food and the things it brings us together around.', composition:'Fresh ingredients surround the headline, while olive green and warm orange give the design a natural, welcoming feel.'},
  {category:'AUDIENCE ENGAGEMENT', intent:'Start a conversation with a familiar food choice.', composition:'Two meals sit across bold diagonal colour blocks. Playful arrows lead between them, inviting the audience to pick a favourite.'},
  {category:'COMMUNITY & CELEBRATION', intent:'Celebrate girls and the possibilities ahead of them.', composition:'A joyful portrait leads the design, supported by a bright pink headline to represent the event and an open layout that gives the message room to breathe.'},
  {category:'WELLNESS & EDUCATION', intent:'Make everyday wellness ideas easy to take in.', composition:'Six illustrated themes sit in a simple grid, with short labels that make the post easy to scan. Familiar brand colours connect it to the wider collection.'}
 ]
 return <div className="teamo-story">
  <nav className="teamo-story-nav" aria-label="Teamo case study sections"><a href="#teamo-featured">Featured campaign</a><a href="#teamo-collection">Collection</a><a href="#teamo-consistency">Visual consistency</a></nav>
  <section className="teamo-feature" aria-labelledby="teamo-featured">
   <div className="teamo-feature-copy"><span className="teamo-section-label">03 / FEATURED CAMPAIGN</span><h3 id="teamo-featured">Everyday flavour.<br/>A familiar voice.</h3><p>A welcoming kitchen scene brings the products into an everyday cooking moment. Bold green and yellow, paired with playful brush textures, give the post an upbeat feel.</p><div className="teamo-feature-meta"><span>FIG. 01 / {featured.title}</span><h4>Start the week with Teamo.</h4><p>{featured.description}</p></div><dl className="teamo-feature-notes"><div><dt>MESSAGE</dt><dd>A fresh start to the week, with cooking at its heart.</dd></div><div><dt>COMPOSITION</dt><dd>Brush textures frame the photograph and guide the eye from the greeting to the products and website.</dd></div></dl></div>
   <figure className="teamo-feature-art"><CampaignImage item={featured} onEnlarge={onEnlarge} featured/><figcaption>Featured social design / Happy New Week</figcaption></figure>
  </section>
  <section className="teamo-collection" aria-labelledby="teamo-collection">
   <div className="teamo-section-heading"><span className="teamo-section-label">04 / CAMPAIGN COLLECTION</span><h3 id="teamo-collection">Different messages. One recognisable brand.</h3><p>The collection gives Teamo different ways to connect with its audience, from celebrating food and community to sharing everyday wellness ideas.</p></div>
   <div className="teamo-campaign-grid">{campaigns.map((item,index)=>{const note=notes[index];return <figure key={item.src} className="teamo-campaign"><CampaignImage item={item} onEnlarge={onEnlarge}/><figcaption><span className="teamo-campaign-category">FIG. {String(index+2).padStart(2,'0')} / {note.category}</span><h4>{item.title}</h4><p className="teamo-campaign-intent">{note.intent}</p><p>{note.composition}</p></figcaption></figure>})}</div>
  </section>
  <section className="teamo-consistency" aria-labelledby="teamo-consistency">
   <div className="teamo-section-heading"><span className="teamo-section-label">05 / VISUAL CONSISTENCY</span><h3 id="teamo-consistency">Variety, with a familiar thread.</h3><p>Each campaign takes its tone from the subject. Repeated colours, product imagery and brand details keep the work connected while allowing each post to have its own standout personality.</p></div>
   <div className="teamo-colour-ribbon" aria-label="Recurring colours in the campaign artwork"><div className="teamo-green"><strong>Green</strong><span>A familiar connection to the brand</span></div><div className="teamo-yellow"><strong>Yellow</strong><span>Energy and emphasis</span></div><div className="teamo-orange"><strong>Orange</strong><span>Warmth and accents</span></div></div>
   <div className="teamo-principles">{[
    ['01','Keep the product in the story.','Products appear within the kitchen scene or as a recurring pack lineup, connecting each message back to Teamo Foods.'],
    ['02','Let the message shape the layout.','Bold headlines lead the awareness posts, photography brings warmth to community stories, and a clear grid helps organise wellness content.'],
    ['03','Keep familiar details in view.','The Teamo identity and recurring contact details help people recognise the brand as the imagery and layouts change.']
   ].map(([number,title,copy])=><article key={number}><span>{number}</span><h4>{title}</h4><p>{copy}</p></article>)}</div>
   <div className="teamo-scope"><span>06 / SCOPE & CREDIT</span><h4>Selected social and campaign design.</h4><p>Campaign layouts designed by the <strong>X-Files Team</strong>. This case file features five selected pieces, with existing product packaging shown as part of the brand context.</p></div>
  </section>
 </div>
}

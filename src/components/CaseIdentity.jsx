export default function CaseIdentity({ project, detail }) {
 return <figure className={`case-identity case-identity-${project.kind}`}>
  <div className="case-logo-frame">
   {project.kind === 'xfiles' ? <img src="/images/xfiles-logo.jpg" alt="X-Files logo" className="case-intro-logo" width="768" height="512"/>
    : project.kind === 'teamo' ? <div className="case-teamo-logo-window"><img src="/images/teamo-foods.webp" alt="Teamo Business Network Limited logo" className="case-intro-logo" width="1600" height="1600"/></div>
    : project.kind === 'parentii' ? <div className="case-parentii-wordmark"><img src={detail.logo} alt="Parentii logo" className="case-intro-logo" width="150" height="143"/><strong aria-hidden="true">Parentii</strong></div>
    : <img src={detail.logo} alt={`${project.name} logo`} className="case-intro-logo"/>}
  </div>
  <figcaption className="case-logo-label">FIG. 00 / PROJECT IDENTITY</figcaption>
 </figure>
}

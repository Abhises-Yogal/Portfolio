import { useScrollReveal } from '../../components/ScrollReveal/useScrollReveal'
import './Timeline.css'

function Timeline({ items }) {
  const sectionRef = useScrollReveal()

  return (
    <section id="timeline" className="section-block timeline-section">
      <div className="container-shell">
        <div ref={sectionRef} className="timeline-shell reveal">
          <div className="section-heading section-heading-center timeline-heading">
            <p className="section-heading-ghost">TIMELINE</p>
            <p className="section-kicker">TIMELINE</p>
            <h2>Education, Experience & Certifications</h2>
          </div>

          <div className="timeline-track">
            <span className="timeline-line" aria-hidden="true"></span>
            <div className="timeline-items stagger-group revealed-by-parent">
              {items.map((item, index) => (
                <article
                  key={`${item.year}-${item.title}`}
                  className={index % 2 === 0 ? 'timeline-item left' : 'timeline-item right'}
                >
                  <span className="timeline-dot" aria-hidden="true"></span>
                  <div className="timeline-card stagger-fade">
                    <p className="timeline-year">{item.year}</p>
                    <h3>{item.title}</h3>
                    <p className="timeline-org">{item.org}</p>
                    <span className={item.type === 'Certification' ? 'timeline-type Certification' : item.type === 'Internship' ? 'timeline-type Internship' : item.type === 'Experience' ? 'timeline-type Experience' : 'timeline-type'}>
                      {item.type === 'Certification' ? 'CERTIFICATION' : item.type === 'Internship' ? 'INTERNSHIP' : item.type === 'Experience' ? 'EXPERIENCE' : 'EDUCATION'}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline

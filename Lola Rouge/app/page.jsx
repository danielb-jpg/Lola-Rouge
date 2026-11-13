'use client'

import { useEffect, useState } from 'react'
import { WHATSAPP, words, gallery, categories, rates, occasions, quotes } from './data'

// Placeholder portraits. Swap these for real photos (see README) when a client sends them.
const polaroids = [
  { bg: 'linear-gradient(160deg,#F2C6C2,#E7A6A6)', sk: '#A9735A', hr: '#151112', lp: '#C1121F', bl: 'rgba(193,18,31,.25)', es: '#7A3B3B', bd: '#C1121F' },
  { bg: 'linear-gradient(160deg,#EBD9C2,#C9A06A)', sk: '#6B3F2E', hr: '#2A1A12', lp: '#8E1B2B', bl: 'rgba(224,120,60,.3)', es: '#C98A2B', bd: '#151112' },
  { bg: 'linear-gradient(160deg,#C9D3E8,#8FA0C8)', sk: '#C79A7B', hr: '#4A2C1E', lp: '#D9737E', bl: 'rgba(217,115,126,.3)', es: '#8B5A7A', bd: '#F6EDE9' },
]

const faq = [
  ['How early should I book?', 'For weddings, 6 to 12 months ahead. For owambes and birthdays, 2 to 4 weeks is usually safe, but December fills fast.'],
  ['Do you travel to me?', 'Yes. Home service covers Mainland and Island, with a travel fee depending on your location. Outside Lagos is quoted per trip.'],
  ['Are lashes and gele included?', 'Soft lashes are included with every glam. Gele tying is an add-on and can be booked with any look.'],
  ['How does the deposit work?', 'A 50% deposit secures your date and is deducted from your final price. The balance is due on the day.'],
  ['Do I need a trial?', 'Highly recommended for brides. We test colours, base and lashes on camera so there are no surprises on the day.'],
]

const glam = (p) => ({
  background: p.bg, '--sk': p.sk, '--hr': p.hr, '--lp': p.lp, '--bl': p.bl, '--es': p.es, '--ls': 1, '--bd': p.bd,
})

function Face({ style }) {
  return (
    <svg viewBox="0 0 200 260" preserveAspectRatio="xMidYMax slice" style={style}>
      <use href="#fc" />
    </svg>
  )
}

export default function Page() {
  const [cat, setCat] = useState('All')
  const [qi, setQi] = useState(0)
  const [pct, setPct] = useState(50)
  const [year, setYear] = useState('')
  const [today, setToday] = useState('')

  const waLink = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Hi Lola, I’d like to ask about a booking.')}`
  const shown = gallery.filter((x) => cat === 'All' || x[1] === cat)

  useEffect(() => {
    setYear(String(new Date().getFullYear()))
    setToday(new Date().toISOString().split('T')[0])
    // fade-in on scroll
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('on')
            io.unobserve(e.target)
          }
        }),
      { threshold: 0.1 },
    )
    document.querySelectorAll('.rv').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    const t = setInterval(() => setQi((i) => (i + 1) % quotes.length), 6000)
    return () => clearInterval(t)
  }, [])

  function send(e) {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const msg = [
      'New makeup enquiry',
      `Name: ${f.get('name')}`,
      `Phone: ${f.get('phone')}`,
      `Occasion: ${f.get('occasion')}`,
      `Date: ${f.get('date')}`,
      `People: ${f.get('people')}`,
      `Location: ${f.get('location')}`,
    ].join('\n')
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <>
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
        <symbol id="fc" viewBox="0 0 200 260">
          <path d="M44 150C30 60 70 20 100 20s70 40 56 130z" fill="var(--hr)" />
          <path d="M8 260c0-62 44-86 92-86s92 24 92 86z" fill="var(--bd,#151112)" />
          <rect x="84" y="150" width="32" height="40" rx="12" fill="var(--sk)" />
          <ellipse cx="100" cy="108" rx="46" ry="58" fill="var(--sk)" />
          <path d="M54 100c-4-52 30-72 46-72s50 20 46 72c-10-26-26-40-46-40S64 74 54 100z" fill="var(--hr)" />
          <circle cx="72" cy="126" r="13" fill="var(--bl,transparent)" />
          <circle cx="128" cy="126" r="13" fill="var(--bl,transparent)" />
          <ellipse cx="80" cy="102" rx="14" ry="7" fill="var(--es,transparent)" />
          <ellipse cx="120" cy="102" rx="14" ry="7" fill="var(--es,transparent)" />
          <path d="M68 102q12 8 24 0M108 102q12 8 24 0" stroke="#2A1A1A" strokeWidth="2.4" fill="none" strokeLinecap="round" />
          <path d="M66 100l-6-4M72 97l-3-6M128 97l3-6M134 100l6-4" stroke="#2A1A1A" strokeWidth="2.2" strokeLinecap="round" style={{ opacity: 'var(--ls,0)' }} />
          <path d="M66 90q14-8 26-2M108 88q12-6 26 2" stroke="var(--hr)" strokeWidth="3.4" fill="none" strokeLinecap="round" />
          <path d="M100 108v14q-6 4-9 2" stroke="rgba(0,0,0,.2)" fill="none" strokeWidth="2" />
          <path d="M82 142q9-8 18 0 9-8 18 0-8 14-18 14t-18-14z" fill="var(--lp,#B77E72)" />
        </symbol>
      </svg>

      <div className="bar">Now booking 2027 weddings · Island &amp; Mainland</div>
      <header className="nav">
        <div className="wrap">
          <ul>
            <li><a href="#work">Work</a></li>
            <li><a href="#rates">Rates</a></li>
            <li><a href="#about">About</a></li>
          </ul>
          <a href="#top" className="brand">Lola <i>Rouge</i></a>
          <ul className="r">
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#book" className="btn" style={{ padding: '10px 24px' }}>Book</a></li>
          </ul>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <h1 className="big"><span>Lola</span> <b>Rouge</b></h1>
          <div className="pol">
            {polaroids.map((p, i) => (
              <div className="pl" key={i}><Face style={glam(p)} /></div>
            ))}
          </div>
          <div className="hl">
            <p>Makeup that photographs like you, only more. Bridal, owambe and editorial looks across Lagos.</p>
            <div className="cta">
              <a href="#book" className="btn">Book your date</a>
              <a href="#work" className="btn ghost">See the work</a>
            </div>
          </div>
          <div className="mq" aria-hidden="true">
            <div>{[...words, ...words].map((w, i) => <span key={i}>{w} ✦</span>)}</div>
          </div>
        </section>

        <section id="work">
          <div className="wrap c">
            <p className="eyebrow rv">The transformation</p>
            <h2 className="rv">Same face. <em style={{ fontStyle: 'normal', color: 'var(--rouge)' }}>New energy.</em></h2>
            <p className="lede rv">Drag to see the difference between bare skin and a finished glam.</p>

            {/*
              BEFORE / AFTER: two images stacked on top of each other.
              "After" sits underneath, "before" sits on top and is clipped from the right
              by --p (set by the slider). To use real photos, replace each <Face /> with
              <img src="/before.jpg" alt="Before" /> and <img src="/after.jpg" alt="After" />
              (put the files in a /public folder). Both photos need the same size and angle.
            */}
            <div className="ba rv" style={{ '--p': `${pct}%` }}>
              <div className="af">
                <Face style={{ ...glam({ ...polaroids[0], bl: 'rgba(193,18,31,.28)' }) }} />
                <small style={{ right: 16 }}>After</small>
              </div>
              <div className="bf">
                <Face style={{ background: polaroids[0].bg, '--sk': '#9E6A52', '--hr': '#151112', '--lp': '#A8665A', '--bd': '#C1121F' }} />
                <small style={{ left: 16 }}>Before</small>
              </div>
              <div className="ln" />
              <div className="kn">↔</div>
              <input type="range" min="5" max="95" value={pct} onChange={(e) => setPct(+e.target.value)} aria-label="Before and after slider" />
            </div>
          </div>
        </section>

        <section style={{ background: 'var(--bg2)', paddingTop: 90 }}>
          <div className="wrap c">
            <p className="eyebrow rv">Portfolio</p>
            <h2 className="rv">Recent <em style={{ fontStyle: 'normal', color: 'var(--rouge)' }}>faces</em></h2>
            <div className="chips" role="tablist">
              {categories.map((c) => (
                <button key={c} className="chip" role="tab" aria-selected={cat === c} onClick={() => setCat(c)}>{c}</button>
              ))}
            </div>
            <div className="gal">
              {shown.map((x) => (
                <div className="tile" key={x[0]} style={{ aspectRatio: x[9], background: `linear-gradient(160deg,${x[4]})` }}>
                  <Face style={{ '--sk': x[2], '--hr': x[3], '--lp': x[5], '--bl': x[6], '--es': x[7], '--ls': 1, '--bd': x[8] }} />
                  <span>{x[0]}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="rates">
          <div className="wrap">
            <div className="c">
              <p className="eyebrow rv">Rate card</p>
              <h2 className="rv">Clear <em style={{ fontStyle: 'normal', color: 'var(--rouge)' }}>pricing</em></h2>
            </div>
            <div className="rc rv">
              {rates.map((col) => (
                <div key={col[0]}>
                  <h3>{col[0]}</h3>
                  <p className="n">{col[1]}</p>
                  {col[2].map((r) => (
                    <div className="ln2" key={r[0]}><b>{r[0]}</b><i /><span className="p">{r[1]}</span></div>
                  ))}
                </div>
              ))}
            </div>
            <p className="fine">Starting prices. Island and out-of-Lagos bookings include a travel fee. 50% deposit holds your date.</p>
          </div>
        </section>

        <section id="about" style={{ background: 'var(--bg2)' }}>
          <div className="wrap ab">
            <div className="ph rv">
              <svg viewBox="0 0 200 260" preserveAspectRatio="xMidYMax slice" style={{ '--sk': '#8B5A44', '--hr': '#151112', '--lp': '#C1121F', '--bl': 'rgba(193,18,31,.25)', '--es': '#7A3B3B', '--ls': 1, '--bd': '#151112' }}>
                <use href="#fc" />
              </svg>
            </div>
            <div className="rv">
              <p className="eyebrow">Meet the artist</p>
              <h2>Hi, I’m <em style={{ fontStyle: 'normal', color: 'var(--rouge)' }}>Lola.</em></h2>
              <p className="lede">I’m a Lagos makeup artist who believes the best glam looks like you on your best day. Skin first, then colour, then camera tests, so your makeup holds up through the ceremony, the heat and the photos.</p>
              <div className="st">
                <div><b>8 yrs</b><small>behind the brush</small></div>
                <div><b>400+</b><small>brides and clients</small></div>
                <div><b>Mobile</b><small>Island &amp; Mainland</small></div>
              </div>
            </div>
          </div>
        </section>

        <section className="qs">
          <div className="wrap">
            <q>{quotes[qi][0]}</q>
            <small>{quotes[qi][1]}</small>
            <div className="dots">
              {quotes.map((_, i) => (
                <button key={i} aria-selected={qi === i} aria-label={`Quote ${i + 1}`} onClick={() => setQi(i)} />
              ))}
            </div>
          </div>
        </section>

        <section id="faq">
          <div className="wrap" style={{ maxWidth: 820 }}>
            <div className="c">
              <p className="eyebrow rv">Good to know</p>
              <h2 className="rv">Questions</h2>
            </div>
            <div style={{ marginTop: 36 }} className="rv">
              {faq.map((f) => (
                <details key={f[0]}>
                  <summary>{f[0]}</summary>
                  <p>{f[1]}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="book" style={{ background: 'var(--bg2)' }}>
          <div className="wrap bk">
            <div className="rv">
              <p className="eyebrow">Enquire</p>
              <h2>Let’s plan your <em style={{ fontStyle: 'normal', color: 'var(--rouge)' }}>look</em></h2>
              <p className="lede">Tell me about your event. Your details go straight to me on WhatsApp and I’ll reply with availability and a quote.</p>
            </div>
            <form className="rv" onSubmit={send}>
              <div className="full"><label htmlFor="n">Your name</label><input id="n" name="name" type="text" required placeholder="Full name" /></div>
              <div className="full"><label htmlFor="p">Phone</label><input id="p" name="phone" type="tel" required placeholder="080…" /></div>
              <div className="full">
                <label htmlFor="e">Occasion</label>
                <select id="e" name="occasion">{occasions.map((o) => <option key={o}>{o}</option>)}</select>
              </div>
              <div><label htmlFor="d">Event date</label><input id="d" name="date" type="date" min={today} required /></div>
              <div>
                <label htmlFor="g">People</label>
                <select id="g" name="people"><option>Just me</option><option>2 to 3</option><option>4 to 6</option><option>7 or more</option></select>
              </div>
              <div className="full">
                <label htmlFor="l">Location</label>
                <select id="l" name="location"><option>Studio</option><option>Home service, Mainland</option><option>Home service, Island</option><option>Outside Lagos</option></select>
              </div>
              <div className="full"><button className="btn" type="submit">Send enquiry on WhatsApp</button></div>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <span>© {year} Lola Rouge Makeup Artistry.</span>
          <span>Lagos, Nigeria · @lolarouge</span>
        </div>
      </footer>

      <a className="cc" href={waLink} target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
        <i /><span>Concierge</span>
      </a>
    </>
  )
}

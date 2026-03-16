import Navbar from "@/components/Navbar";
import ClientEffects from "@/components/ClientEffects";

export default function Home() {
  return (
    <main>
      <ClientEffects />
      <Navbar />

      {/* --- HERO --- */}
      <section className="hero">
        <video className="hero-vid" autoPlay muted loop playsInline poster="/images/img5-dark-mat-room.png">
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
        <div className="hero-grain"></div>
        <div className="hero-content">
          <div className="hero-tag">Palmdale's Premier Studio</div>
          <h1>Sweat. Sculpt.<br /><em>Reform.</em></h1>
          <p className="hero-sub">Modern reformer Pilates and heated yoga in the heart of Palmdale. Move with intention. Breathe with purpose.</p>
          <div className="hero-btns">
            <a href="#pricing" className="btn-p">Start Your Journey</a>
            <a href="#schedule" className="btn-s">View Schedule</a>
          </div>
        </div>
        <div className="hero-scroll"><div className="scroll-ln"></div><span>Scroll</span></div>
      </section>

      {/* --- MARQUEE --- */}
      <div className="mq">
        <div className="mq-track">
          <span>Modern Reformer</span><span className="mq-dot"></span><span>Hot Yoga Sculpt</span><span className="mq-dot"></span><span>Hot Yoga Flow</span><span className="mq-dot"></span><span>Hot Mat Pilates</span><span className="mq-dot"></span><span>All Levels Welcome</span><span className="mq-dot"></span><span>Palmdale CA</span><span className="mq-dot"></span>
          <span>Modern Reformer</span><span className="mq-dot"></span><span>Hot Yoga Sculpt</span><span className="mq-dot"></span><span>Hot Yoga Flow</span><span className="mq-dot"></span><span>Hot Mat Pilates</span><span className="mq-dot"></span><span>All Levels Welcome</span><span className="mq-dot"></span><span>Palmdale CA</span><span className="mq-dot"></span>
          <span>Modern Reformer</span><span className="mq-dot"></span><span>Hot Yoga Sculpt</span><span className="mq-dot"></span><span>Hot Yoga Flow</span><span className="mq-dot"></span><span>Hot Mat Pilates</span><span className="mq-dot"></span><span>All Levels Welcome</span><span className="mq-dot"></span><span>Palmdale CA</span><span className="mq-dot"></span>
        </div>
      </div>

      {/* --- ABOUT --- */}
      <section id="about">
        <div className="about">
          <div className="about-img rv-left">
            <div className="about-frame"><img src="/images/img11-bright-reformer-studio.png" alt="Lumix Studio reformer room" /></div>
          </div>
          <div className="about-text rv-right">
            <div className="s-tag">Our Story</div>
            <h2 className="s-title">Where strength meets <em>stillness</em></h2>
            <p>Lumix is a modern Pilates and hot yoga studio dedicated to movement, mindfulness, and community. We offer a welcoming space where you can build strength, increase flexibility, and feel more connected to your body — no matter where you are in your journey.</p>
            <p>Our classes are designed to challenge, support, and inspire — helping you leave each session feeling stronger, calmer, and more balanced than when you arrived.</p>
            <div className="about-stats">
              <div className="stat"><h4 data-target="11" data-target-suffix="+">0</h4><p>Classes Daily</p></div>
              <div className="stat"><h4 data-target="4" data-target-suffix="">0</h4><p>Class Styles</p></div>
              <div className="stat"><h4 data-target="5" data-target-suffix="am">0</h4><p>First Class</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- GALLERY --- */}
      <div className="gallery-section">
        <div className="gallery-scroll">
          <img src="/images/img6-warm-arches-reformer.png" alt="Reformer studio" />
          <img src="/images/img5-dark-mat-room.png" alt="Hot yoga room" />
          <img src="/images/img7-elegant-chandelier.png" alt="Elegant studio" />
          <img src="/images/img9-zen-reception.png" alt="Studio reception" />
          <img src="/images/img3-warm-reformer.png" alt="Reformer machines" />
          <img src="/images/img8-community-class.png" alt="Class community" />
          <img src="/images/img6-warm-arches-reformer.png" alt="Reformer studio" />
          <img src="/images/img5-dark-mat-room.png" alt="Hot yoga room" />
          <img src="/images/img7-elegant-chandelier.png" alt="Elegant studio" />
          <img src="/images/img9-zen-reception.png" alt="Studio reception" />
          <img src="/images/img3-warm-reformer.png" alt="Reformer machines" />
          <img src="/images/img8-community-class.png" alt="Class community" />
        </div>
      </div>

      {/* --- CLASSES --- */}
      <section id="classes" className="classes-section">
        <div className="classes-header">
          <div><div className="s-tag rv">What We Offer</div><h2 className="s-title rv">Our <em>classes</em></h2></div>
          <a href="#schedule" className="btn-p rv" style={{ background: 'var(--dark)', color: 'var(--white)' }}>Full Schedule</a>
        </div>
        <div className="classes-grid stagger">
          <div className="cc rv">
            <img src="/images/img10-dark-reformer-sculpt.png" alt="Modern Reformer" />
            <div className="cc-ov"></div>
            <div className="cc-content"><h3>Modern Reformer</h3><div className="cc-dur">45 Minutes</div><p>Full-body reformer Pilates that sculpts, strengthens, and lengthens. All levels welcome.</p></div>
          </div>
          <div className="cc rv">
            <img src="/images/img4-sculpt-dumbbells.png" alt="Hot Yoga Sculpt" />
            <div className="cc-ov"></div>
            <div className="cc-content"><h3>Hot Yoga — Sculpt</h3><div className="cc-dur">60 Minutes</div><p>Heated, high-energy flow combining yoga with strength training for total transformation.</p></div>
          </div>
          <div className="cc rv">
            <img src="/images/img5-dark-mat-room.png" alt="Hot Yoga Flow" />
            <div className="cc-ov"></div>
            <div className="cc-content"><h3>Hot Yoga — Flow</h3><div className="cc-dur">60 Minutes</div><p>Heated vinyasa connecting breath to movement. Build flexibility, find calm, sweat with purpose.</p></div>
          </div>
          <div className="cc rv">
            <img src="/images/img6-warm-arches-reformer.png" alt="Hot Mat Pilates" />
            <div className="cc-ov"></div>
            <div className="cc-content"><h3>Hot Mat Pilates</h3><div className="cc-dur">60 Minutes</div><p>Classic Pilates on the mat in a heated room. Core-focused, controlled, deeply strengthening.</p></div>
          </div>
        </div>
      </section>

      {/* --- EXPERIENCE --- */}
      <section className="experience">
        <div className="experience-bg"><video autoPlay muted loop playsInline><source src="/videos/experience.mp4" type="video/mp4" /></video></div>
        <div className="hero-overlay"></div>
        <div className="experience-content rv">
          <h2>Movement is <em>medicine</em></h2>
          <p>Step into a space designed for transformation. Heated rooms, curated playlists, expert instructors — every detail crafted to help you leave feeling better than when you walked in.</p>
          <a href="#pricing" className="btn-p">Try Your First Class</a>
        </div>
      </section>

      {/* --- SCHEDULE --- */}
      <section id="schedule" className="sched">
        <div className="sched-vid"><video autoPlay muted loop playsInline><source src="/videos/schedule.mp4" type="video/mp4" /></video></div>
        <div style={{ maxWidth: '950px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div className="s-tag rv" style={{ color: 'var(--taupe)' }}>Today's Lineup</div>
          <h2 className="s-title rv" style={{ color: 'var(--cream)' }}>Class <em>schedule</em></h2>
        </div>
        <div className="sched-grid rv">
          <div className="sched-day">Monday</div>
          {[
            { time: "5:00 AM", class: "Modern Reformer · Juliana A" },
            { time: "6:00 AM", class: "Modern Reformer · Juliana A" },
            { time: "7:00 AM", class: "Modern Reformer · Juliana A" },
            { time: "8:00 AM", class: "Modern Reformer · Anne G" },
            { time: "8:30 AM", class: "Hot Yoga — Sculpt · Anne G" },
            { time: "9:30 AM", class: "Modern Reformer · Vee K" },
            { time: "9:45 AM", class: "Hot Yoga — Flow · Anne G" },
            { time: "5:15 PM", class: "Hot Yoga — Sculpt · Vicky L" },
            { time: "5:30 PM", class: "Modern Reformer · Vee K" },
            { time: "6:30 PM", class: "Modern Reformer · Vee K" },
            { time: "6:45 PM", class: "Hot Mat Pilates · Anna L" }
          ].map((item, idx) => (
            <div key={idx} className="sr">
              <span className="sr-time">{item.time}</span>
              <span className="sr-class">{item.class}</span>
              <span className="sr-book"><button>Book &rarr;</button></span>
            </div>
          ))}
          <p className="sched-note">Schedule varies by day &mdash; download our app for the full weekly schedule</p>
        </div>
      </section>

      {/* --- PRICING --- */}
      <section id="pricing">
        <div className="pricing-hdr rv">
          <div className="s-tag">Membership</div>
          <h2 className="s-title">Find your <em>plan</em></h2>
          <p>No contracts. No hidden fees. Just movement that transforms. Rate locked in from the day you join.</p>
        </div>
        <div className="pricing-grid stagger">
          <div className="pc rv">
            <h3>Essentials</h3><div className="price">$135</div><div className="period">Per Month</div>
            <ul className="feats"><li>4 classes per month</li><li>All class types included</li><li>Book via app or online</li><li>Cancel anytime</li></ul>
            <button className="btn-pc">Get Started</button>
          </div>
          <div className="pc feat rv">
            <h3>Unlimited</h3><div className="price">$295</div><div className="period">Per Month — Sale Price</div>
            <ul className="feats"><li>Unlimited Pilates + Hot Yoga</li><li>1 Pilates + 1 Yoga per day</li><li>Priority booking access</li><li>Rate locked in forever</li><li>No contract</li></ul>
            <button className="btn-pc">Claim This Rate</button>
          </div>
          <div className="pc rv">
            <h3>Committed</h3><div className="price">$240</div><div className="period">Per Month</div>
            <ul className="feats"><li>8 classes per month</li><li>All class types included</li><li>Flexible scheduling</li><li>Cancel anytime</li></ul>
            <button className="btn-pc">Get Started</button>
          </div>
        </div>
        <div className="intro-grid">
          <div className="ic rv"><span className="ic-tag">New Student</span><h4>Buy 1, Get 1 Free</h4><div className="ic-price">$38</div><p>Try two classes for the price of one</p></div>
          <div className="ic rv"><span className="ic-tag">Best Value</span><h4>New Client 2 Weeks Unlimited</h4><div className="ic-price">$99</div><p>Unlimited classes for 2 weeks from first visit</p></div>
          <div className="ic rv"><span className="ic-tag">Drop In</span><h4>Single Class</h4><div className="ic-price">$38</div><p>No commitment, just show up and move</p></div>
        </div>
      </section>

      {/* --- FLOW BREAK --- */}
      <section className="flow-break">
        <video autoPlay muted loop playsInline><source src="/videos/flow.mp4" type="video/mp4" /></video>
        <div className="hero-overlay"></div>
        <div className="flow-break-content rv">
          <h2>Your body is capable of <em>extraordinary</em> things</h2>
          <p>Every class at Lumix is an invitation to discover what you're made of. No judgment. No competition. Just you, your mat, and the sound of your breath.</p>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="test">
        <div style={{ maxWidth: '1100px', margin: '0 auto 3.5rem' }}>
          <div className="s-tag rv">Community</div>
          <h2 className="s-title rv">What our members <em>say</em></h2>
        </div>
        <div className="test-grid stagger">
          <div className="tc rv">
            <div className="tc-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <blockquote>"The Modern Reformer class changed my body in ways I didn't think possible. The instructors are incredible and the studio is absolutely beautiful."</blockquote>
            <div className="tc-author">Sarah M. &mdash; Member since 2025</div>
          </div>
          <div className="tc rv">
            <div className="tc-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <blockquote>"Hot Yoga Sculpt is my new obsession. I leave every class dripping in sweat and feeling like I can conquer anything. This studio is special."</blockquote>
            <div className="tc-author">Jessica R. &mdash; Member since 2025</div>
          </div>
          <div className="tc rv">
            <div className="tc-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <blockquote>"Finally, a studio in Palmdale that feels high-end but welcoming. The energy, the space, the community — everything about Lumix is elevated."</blockquote>
            <div className="tc-author">Michelle K. &mdash; Member since 2025</div>
          </div>
        </div>
      </section>

      {/* --- APP SECTION --- */}
      <section className="app-section">
        <div className="app-container">
          <div className="app-text rv">
            <div className="s-tag" style={{ color: 'var(--taupe)' }}>Download the App</div>
            <h2 className="s-title">Your studio in <em>your pocket</em></h2>
            <p className="app-desc">Book classes, manage your membership, track your progress, and stay connected with the Lumix community — all from your phone.</p>
            <div className="app-buttons">
              <a href="https://apps.apple.com/pk/app/lumix-studio/id6752722947" target="_blank" className="app-store-btn">
                <svg width="20" height="24" viewBox="0 0 384 512" fill="currentColor"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" /></svg>
                <div><span className="app-store-sm">Download on the</span><span className="app-store-lg">App Store</span></div>
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.fitnessmobileapps.lumix42654&pcampaignid=web_share" target="_blank" className="app-store-btn">
                <svg width="20" height="22" viewBox="0 0 512 512" fill="currentColor"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" /></svg>
                <div><span className="app-store-sm">Get it on</span><span className="app-store-lg">Google Play</span></div>
              </a>
            </div>
          </div>
          <div className="app-phone rv-right">
            <div className="phone-mockup">
              <div className="phone-screen">
                <video autoPlay muted loop playsInline className="phone-video"><source src="/videos/phone-demo.mp4" type="video/mp4" /></video>
                <div className="phone-vid-overlay"></div>
                <img src="/images/lumix-logo-dark.png" alt="Lumix" className="phone-logo-overlay" />
                <div className="phone-brand">
                  <div className="phone-brand-name">Lumix</div>
                  <div className="phone-brand-sub">Pilates &middot; Hot Yoga</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT --- */}
      <section id="contact" className="contact" style={{ padding: '5rem 3rem' }}>
        <div className="contact-compact">
          <div className="contact-top rv">
            <div className="s-tag" style={{ color: 'var(--taupe)' }}>Get in Touch</div>
            <h2 className="s-title" style={{ color: 'var(--cream)' }}>Let's get <em>moving</em></h2>
          </div>
          <div className="contact-grid-compact">
            <div className="ci-compact rv">
              <div className="ci-block">
                <h4>Visit Us</h4>
                <p>3167 West Rancho Vista Blvd, Suite B<br />Palmdale, CA 93551</p>
              </div>
              <div className="ci-block">
                <h4>Studio Hours</h4>
                <p>Mon — Fri: 5:00 AM – 7:45 PM<br />Sat: 7:00 AM – 12 PM &middot; Sun: 8 AM – 11 AM</p>
              </div>
              <div className="contact-icons" style={{ marginTop: '.5rem' }}>
                <a href="mailto:lumixstudioteam@gmail.com" className="c-icon" aria-label="Email"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 4L12 13L2 4" /></svg><span>lumixstudioteam@gmail.com</span></a>
                <a href="https://www.instagram.com/lumixstudios_?igsh=NWJveTVkcDlqZDZ4" target="_blank" className="c-icon" aria-label="Instagram"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" /></svg><span>@lumixstudios_</span></a>
                <a href="tel:+1XXXXXXXXXX" className="c-icon" aria-label="Phone"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg><span>Call Us</span></a>
                <a href="#" className="c-icon" aria-label="Facebook"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg><span>Facebook</span></a>
              </div>
            </div>
            <div className="cf rv">
              <div className="fr"><input type="text" placeholder="First Name" /><input type="text" placeholder="Last Name" /></div>
              <input type="email" placeholder="Email Address" />
              <input type="tel" placeholder="Phone Number" />
              <textarea placeholder="How can we help you?" style={{ minHeight: '90px' }}></textarea>
              <button className="btn-sub"><span>Send Message</span></button>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer>
        <div className="ft">
          <div className="ft-logo">Lumix</div>
          <div className="ft-links"><a href="#about">About</a><a href="#classes">Classes</a><a href="#schedule">Schedule</a><a href="#pricing">Pricing</a><a href="#contact">Contact</a></div>
          <div className="ft-copy">&copy; 2025 Lumix Studio. All rights reserved.</div>
        </div>
        <div className="powered-by">
          <a href="https://www.aiaurasolutions.com/" target="_blank">Powered by <strong>Aiaura Solutions</strong></a>
        </div>
      </footer>
    </main>
  );
}

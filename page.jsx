export default function Page({ searchParams }) {
  const sent = searchParams?.sent === "1";

  return (
    <>
      {sent && (
        <div className="top-toast" role="status">
          Ihre Nachricht wurde versendet – vielen Dank!
        </div>
      )}
      <header>
        <div className="container nav">
          <div className="brand">
            <img src="/assets/flowgenius-logo.svg" alt="FlowGenius Logo" />
            FlowGenius
          </div>

          <input type="checkbox" id="nav-toggle" />
          <label htmlFor="nav-toggle" className="menu-toggle" aria-label="Menü öffnen">
            <span></span>
            <span></span>
            <span></span>
          </label>

          <nav className="nav-links" aria-label="Hauptnavigation">
            <a href="#leistungen">Leistungen</a>
            <a href="#prozess">Prozess</a>
            <a href="#preise">Preise</a>
            <a href="#faq">FAQ</a>
            <a href="#kontakt">Kontakt</a>
          </nav>

          <a className="btn btn-primary nav-cta" href="#demo">Demo buchen</a>
        </div>

        <div className="container mobile-menu">
          <a href="#leistungen">Leistungen</a>
          <a href="#prozess">Prozess</a>
          <a href="#preise">Preise</a>
          <a href="#faq">FAQ</a>
          <a href="#kontakt">Kontakt</a>
          <a className="btn btn-primary" href="#demo">Demo buchen</a>
        </div>
      </header>

      <main>
        <section className="hero animate-fade" id="hero">
          <div className="hero-bg" aria-hidden="true">
            <div className="saturn-orbit"></div>
            <div className="saturn">
              <div className="saturn-ring"></div>
            </div>
          </div>
          <div className="container hero-grid">
            <div className="animate-fade delay-1">
              <span className="eyebrow">AI-Automatisierung für KMUs</span>
              <h1>AI-Automatisierung für KMUs – messbar &amp; skalierbar.</h1>
              <p>
                Wir bauen individuelle AI Agents &amp; Workflows, die Ihnen 20+ Stunden pro Woche sparen.
              </p>
              <div className="hero-cta">
                <a className="btn btn-primary" href="#demo">Kostenlose Prozess-Analyse buchen</a>
                <a className="btn btn-secondary" href="#leistungen">Leistungen ansehen</a>
              </div>
              <div className="hero-trust">
                <span>30 Minuten</span>
                <span>Keine Sales-Show</span>
                <span>Konkrete Prozess-Ideen</span>
              </div>
            </div>
            <div className="hero-panel animate-fade delay-2">
              <h3>Erste Entlastung in wenigen Tagen</h3>
              <ul>
                <li><span className="check">✓</span> Anfragen automatisch sortieren und priorisieren</li>
                <li><span className="check">✓</span> Daten aus E-Mails, PDFs und Tools konsolidieren</li>
                <li><span className="check">✓</span> Angebote, Reports und Status-Updates automatisch erstellen</li>
                <li><span className="check">✓</span> Fehleranfällige Übergaben eliminieren</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section animate-fade" id="problem">
          <div className="container">
            <span className="eyebrow">Problem &rarr; Lösung</span>
            <h2 className="section-title">Wenn Prozesse bremsen, bremst das ganze Unternehmen.</h2>
            <p className="section-lead">
              Manuelle Abläufe sind teuer, fehleranfällig und schwer skalierbar. Wir machen daraus klare, messbare
              Workflows mit AI-Unterstützung.
            </p>

            <div className="split">
              <div className="card animate-fade delay-1">
                <h3>Heute</h3>
                <ul className="list">
                  <li><strong>Manuelle Prozesse</strong> blockieren das Tagesgeschäft.</li>
                  <li><strong>Zeitfresser</strong> in Service, Vertrieb und Backoffice.</li>
                  <li><strong>Fehleranfällig</strong> durch Copy-Paste und Medienbrüche.</li>
                  <li><strong>Nicht skalierbar</strong> bei mehr Anfragen.</li>
                </ul>
              </div>
              <div className="card animate-fade delay-2">
                <h3>Mit FlowGenius</h3>
                <ul className="list">
                  <li><strong>AI Agents</strong> übernehmen wiederkehrende Schritte.</li>
                  <li><strong>Automatisierte Workflows</strong> verbinden Systeme nahtlos.</li>
                  <li><strong>24/7 Betrieb</strong> ohne Wartezeiten.</li>
                  <li><strong>Skalierbar &amp; messbar</strong> mit klaren KPIs.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section animate-fade" id="leistungen">
          <div className="container">
            <span className="eyebrow">Leistungen</span>
            <h2 className="section-title">Fokussierte Services für echte Entlastung.</h2>
            <p className="section-lead">
              Wir liefern konkrete Ergebnisse statt Buzzwords. Jede Lösung ist dokumentiert, nachvollziehbar und
              wartbar.
            </p>

            <div className="card-grid">
              <div className="card animate-fade delay-1">
                <div className="icon" aria-hidden="true">⚙</div>
                <h3>AI Agents für Kundenservice &amp; intern</h3>
                <p>Digitale Assistenten übernehmen Anfragen, Strukturierung und nächste Schritte.</p>
                <ul className="service-list">
                  <li>Live-Chat- und E-Mail-Agent im Website-Frontend</li>
                  <li>Automatische Ticket-Klassifizierung und Priorisierung</li>
                  <li>Wissensdatenbank- und FAQ-Antworten im CI</li>
                  <li>Interne Assistenz für Vertrieb und Operations</li>
                </ul>
                <p><strong>Nutzen:</strong> Schnellere Reaktionszeiten und weniger Routinearbeit.</p>
              </div>
              <div className="card animate-fade delay-2">
                <div className="icon" aria-hidden="true">⛓</div>
                <h3>n8n Workflow-Automatisierung</h3>
                <p>Wir verbinden CRM, E-Mail, ERP und Fachtools über stabile, dokumentierte Abläufe.</p>
                <ul className="service-list">
                  <li>Lead-Flow von Website bis CRM vollständig automatisiert</li>
                  <li>Terminbuchungen und Status-Updates in Echtzeit</li>
                  <li>Rechnungs- und Report-Generierung aus Systemdaten</li>
                  <li>Fehlerfreie Übergaben zwischen Teams</li>
                </ul>
                <p><strong>Nutzen:</strong> Prozesse laufen stabil, ohne manuelles Nacharbeiten.</p>
              </div>
              <div className="card animate-fade delay-3">
                <div className="icon" aria-hidden="true">🔌</div>
                <h3>API &amp; LLM Integrationen</h3>
                <p>Wir erweitern bestehende Systeme, damit Daten intelligent genutzt werden.</p>
                <ul className="service-list">
                  <li>API-Anbindungen an CRM, ERP, Buchhaltung und Support</li>
                  <li>LLM-gestützte Zusammenfassungen und Auswertungen</li>
                  <li>Automatische Datenanreicherung aus E-Mails und PDFs</li>
                  <li>Mehrsprachige Kommunikation für Kundenservice</li>
                </ul>
                <p><strong>Nutzen:</strong> Bessere Datenqualität und strukturierte Ausgaben.</p>
              </div>
              <div className="card animate-fade delay-4">
                <div className="icon" aria-hidden="true">🧩</div>
                <h3>Individuelle AI-Lösungen</h3>
                <p>Von der Analyse bis zur Umsetzung – passend zu Ihrem Geschäftsmodell.</p>
                <ul className="service-list">
                  <li>KI-Agent für Terminvereinbarungen und automatische Bestätigung</li>
                  <li>Automatisierte Angebots- und Vertragsworkflows</li>
                  <li>Dashboarding und KPI-Tracking in Echtzeit</li>
                  <li>Individuelle Implementierung im Unternehmen</li>
                </ul>
                <p><strong>Nutzen:</strong> Nachhaltige Effizienzgewinne mit klaren Verantwortlichkeiten.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section animate-fade" id="prozess">
          <div className="container">
            <span className="eyebrow">Prozess</span>
            <h2 className="section-title">Ein transparenter Ablauf in 5 Schritten.</h2>
            <p className="section-lead">
              Sie wissen jederzeit, wo wir stehen und was als Nächstes passiert.
            </p>

            <div className="process">
              <div className="process-step animate-fade delay-1">
                <span>1. Analyse &amp; Audit</span>
                <p>Wir identifizieren Engpässe, Ziele und die passende Automatisierungsstrategie.</p>
              </div>
              <div className="process-step animate-fade delay-2">
                <span>2. Konzept</span>
                <p>Wir definieren Datenflüsse, Rollen und Verantwortlichkeiten.</p>
              </div>
              <div className="process-step animate-fade delay-3">
                <span>3. Entwicklung</span>
                <p>Wir bauen die Lösung und integrieren sie in Ihre Systemlandschaft.</p>
              </div>
              <div className="process-step animate-fade delay-4">
                <span>4. Testing</span>
                <p>Gemeinsame Tests und Schulung Ihres Teams für einen stabilen Betrieb.</p>
              </div>
              <div className="process-step animate-fade delay-5">
                <span>5. Launch &amp; Optimierung</span>
                <p>Go-live, Monitoring und kontinuierliche Verbesserung.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section animate-fade" id="warum">
          <div className="container">
            <span className="eyebrow">Warum FlowGenius</span>
            <h2 className="section-title">Spezialisiert auf KMU mit Fokus auf Umsetzung.</h2>

            <div className="split">
              <div className="card animate-fade delay-1">
                <ul className="list">
                  <li><strong>Fokus auf KMU</strong> mit klaren Budgets und realen Ressourcen.</li>
                  <li><strong>n8n-Spezialisten</strong> für stabile, wartbare Workflows.</li>
                  <li><strong>Transparenter Prozess</strong> ohne Überraschungen.</li>
                </ul>
              </div>
              <div className="card animate-fade delay-2">
                <ul className="list">
                  <li><strong>DSGVO-konforme Architektur</strong> mit klaren Datenflüssen.</li>
                  <li><strong>Keine Standard-Tools</strong> – wir bauen, was wirklich passt.</li>
                  <li><strong>Langfristige Betreuung</strong> für Betrieb und Weiterentwicklung.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section animate-fade" id="preise">
          <div className="container">
            <span className="eyebrow">Preise</span>
            <h2 className="section-title">Strategisch, flexibel, passend zu Ihrem Bedarf.</h2>
            <p className="section-lead">
              Wir arbeiten mit klaren Paketen und transparenten Angeboten – ohne starre Schablonen.
            </p>

            <div className="pricing">
              <div className="pricing-card animate-fade delay-1">
                <h3>Einstiegspaket</h3>
                <p>Ideal für den ersten Prozess: Analyse, MVP-Automatisierung, Quick Wins.</p>
              </div>
              <div className="pricing-card animate-fade delay-2">
                <h3>Individuelle Projekte</h3>
                <p>Mehrere Prozesse, Integrationen und KI-Logik in Ihrem Kernsystem.</p>
              </div>
              <div className="pricing-card animate-fade delay-3">
                <h3>Langfristige Betreuung</h3>
                <p>Betrieb, Monitoring, Optimierung und Weiterentwicklung Ihrer Workflows.</p>
              </div>
            </div>

            <div style={{ marginTop: "24px" }}>
              <a className="btn btn-primary" href="#demo">Preis-Übersicht im Demo-Call</a>
            </div>
          </div>
        </section>

        <section className="section animate-fade" id="demo">
          <div className="container">
            <div className="cta-panel">
              <span className="eyebrow">Demo-Booking</span>
              <h2 className="section-title">Kostenlose Prozess-Analyse mit klarer Einschätzung.</h2>
              <p className="section-lead">
                Wir besprechen Ihre Abläufe, zeigen konkrete Automatisierungspotenziale und erklären Aufwand &amp; Nutzen.
              </p>
              <div className="hero-cta">
                <a className="btn btn-primary" href="#kontakt">Demo-Call anfragen</a>
                <a className="btn btn-secondary" href="#leistungen">Leistungen prüfen</a>
              </div>
              <div className="calendly-embed" aria-label="Calendly Buchung">
                <iframe
                  title="Calendly Demo Booking"
                  src="https://calendly.com/agmediaa-de/30min?hide_gdpr_banner=1"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        <section className="section animate-fade" id="faq">
          <div className="container">
            <span className="eyebrow">FAQ</span>
            <h2 className="section-title">Häufige Fragen</h2>

            <div className="faq">
              <details>
                <summary>Was kostet eine AI-Automatisierung?</summary>
                <p>Die Kosten hängen vom Umfang ab. Nach der Analyse erhalten Sie ein konkretes Angebot.</p>
              </details>
              <details>
                <summary>Wie lange dauert die Umsetzung?</summary>
                <p>Je nach Umfang 2–8 Wochen. Für Quick Wins oft schneller.</p>
              </details>
              <details>
                <summary>Ist das DSGVO-konform?</summary>
                <p>Ja. Wir planen Datenflüsse und Hosting nach DSGVO-Standards.</p>
              </details>
              <details>
                <summary>Brauche ich technisches Vorwissen?</summary>
                <p>Nein. Wir übernehmen die Umsetzung und erklären alles verständlich.</p>
              </details>
              <details>
                <summary>Für welche Prozesse eignet sich AI?</summary>
                <p>Überall dort, wo wiederkehrende Aufgaben, Textarbeit oder klare Regeln anfallen.</p>
              </details>
            </div>
          </div>
        </section>

        <section className="section animate-fade" id="kontakt">
          <div className="container">
            <span className="eyebrow">Kontakt</span>
            <h2 className="section-title">Lassen Sie uns Ihre Prozesse optimieren.</h2>
            <p className="section-lead">
              Senden Sie uns Ihre Anfrage. Wir melden uns mit konkreten nächsten Schritten.
            </p>

            {sent && <div className="badge">Danke für Ihre Nachricht! Wir melden uns kurzfristig.</div>}

            <form action="/api/contact" method="post">
              <input type="text" name="name" placeholder="Name" required />
              <input type="email" name="email" placeholder="E-Mail" required />
              <input type="text" name="company" placeholder="Unternehmen" required />
              <input
                type="text"
                name="website"
                className="honeypot"
                tabIndex="-1"
                autoComplete="off"
                aria-hidden="true"
              />
              <textarea name="message" placeholder="Nachricht" required></textarea>
              <label className="section-lead">
                <input type="checkbox" required /> Ich stimme der Verarbeitung meiner Daten gemäß DSGVO zu.
              </label>
              <button className="btn btn-primary" type="submit">Nachricht senden</button>
            </form>
          </div>
        </section>

        <section className="section animate-fade" id="datenschutz">
          <div className="container">
            <span className="eyebrow">Datenschutz</span>
            <h2 className="section-title">Datenschutzhinweise</h2>
            <p className="section-lead">
              Wir verarbeiten personenbezogene Daten ausschließlich, um Ihre Anfrage zu beantworten und die Kommunikation
              mit Ihnen zu ermöglichen. Es erfolgt keine Weitergabe an Dritte ohne Ihre ausdrückliche Zustimmung.
            </p>
            <div className="card">
              <ul className="list">
                <li><strong>Verantwortlich:</strong> FlowGenius (Unternehmensdaten folgen).</li>
                <li><strong>Zweck:</strong> Bearbeitung Ihrer Kontaktanfrage und Demo-Termine.</li>
                <li><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen).</li>
                <li><strong>Speicherdauer:</strong> Nur so lange wie für die Bearbeitung erforderlich.</li>
                <li><strong>Ihre Rechte:</strong> Auskunft, Berichtigung, Löschung, Widerspruch, Datenübertragbarkeit.</li>
                <li><strong>Kontakt Datenschutz:</strong> wird mit den Unternehmensdaten ergänzt.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section animate-fade" id="impressum">
          <div className="container">
            <span className="eyebrow">Impressum</span>
            <h2 className="section-title">Impressum</h2>
            <div className="card">
              <p><strong>Unternehmen:</strong> (Unternehmen steht noch in der Anmeldung)</p>
              <p><strong>Adresse:</strong> wird ergänzt</p>
              <p><strong>Vertreten durch:</strong> wird ergänzt</p>
              <p><strong>Kontakt:</strong> E-Mail und Telefon werden ergänzt</p>
              <p><strong>USt-IdNr.:</strong> wird ergänzt</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-grid">
          <div>
            <div className="brand" style={{ marginBottom: "12px" }}>
              <img src="/assets/flowgenius-logo.svg" alt="FlowGenius Logo" />
              FlowGenius
            </div>
            <p>AI-Automatisierung für KMUs, die echte Entlastung bringt.</p>
          </div>
          <div className="footer-links">
            <a href="#impressum">Impressum</a>
            <a href="#datenschutz">Datenschutz</a>
            <a href="#kontakt">Kontakt</a>
          </div>
          <div className="footer-links">
            <a className="social-link" href="https://www.instagram.com/flowgenius_/" target="_blank" rel="noreferrer">
              <span className="icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
                </svg>
              </span>
              Instagram
            </a>
            <span>© FlowGenius</span>
          </div>
        </div>
      </footer>
    </>
  );
}

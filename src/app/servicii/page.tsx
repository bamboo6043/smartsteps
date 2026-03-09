// src/app/servicii/page.tsx
export default function ServiciiPage() {
    return (
        <article>
            <h1>Servicii</h1>

            <div className="referinte-filters" role="tablist" aria-label="Servicii">
                <a href="#tine" className="btn-filter" role="tab">Pentru tine</a>
                <a href="#organizatii" className="btn-filter" role="tab">Pentru organizații</a>
                <a href="#metode" className="btn-filter" role="tab">Cum lucrez</a>
            </div>

            {/* ── PENTRU TINE ── */}
            <section id="tine">
                <h2>Pentru tine</h2>
                <p>
                    Dezvoltarea personală sună adesea ca un plan al altora pentru tine. Cele mai puternice rezultate apar însă atunci când tu ești inițiatorul schimbării.
                </p>
                <p>
                    Nu îți propun să te schimbi, ci să te cunoști mai bine și să identifici acele resurse și abilități care pot fi activate pentru a te pune și mai bine în valoare. Lucrăm structurat, pornind de la obiective clare, și construim, pas cu pas, competențe și comportamente aplicabile imediat.
                </p>

                <h3 className="services-subsection">Sesiuni individuale</h3>
                <div className="services-grid">
                    <div className="service-card">
                        <span className="service-card-tag">Individual</span>
                        <h3>Dezvoltare personală</h3>
                        <p>Un proces orientat pe obiectiv, în care clarificăm direcția și construim pași concreti de acțiune. Lucrăm aplicat, cu exerciții, simulări, role-play și feedback în timp real.</p>
                        <ul>
                            <li>Abilități de prezentare și vorbit în public</li>
                            <li>Competențe manageriale și de leadership</li>
                            <li>Comunicare și influență</li>
                            <li>Organizare personală și prioritizare</li>
                            <li>Gestionarea stresului și prevenirea burnout-ului</li>
                            <li>Creșterea încrederii în sine</li>
                            <li>Tranziții de rol sau schimbări în carieră</li>
                        </ul>
                    </div>

                    <div className="service-card">
                        <span className="service-card-tag">Individual</span>
                        <h3>Consiliere psihologică</h3>
                        <p>Un spațiu sigur și structurat pentru înțelegerea și gestionarea emoțiilor, blocajelor și situațiilor dificile. Accentul este pus pe conștientizare, reglare emoțională și integrarea schimbării în viața reală.</p>
                        <ul>
                            <li>Anxietate și stres</li>
                            <li>Burnout</li>
                            <li>Dificultăți de relaționare</li>
                            <li>Încredere în sine</li>
                            <li>Echilibru viață–carieră</li>
                            <li>Adaptare la schimbare</li>
                        </ul>
                    </div>

                    <div className="service-card">
                        <span className="service-card-tag">Individual</span>
                        <h3>Evaluare psihologică</h3>
                        <p>Realizată în baza acreditării în Psihologie Clinică și Siguranță și Securitate Națională, pentru a oferi claritate asupra funcționării psihologice și a direcțiilor de dezvoltare.</p>
                        <ul>
                            <li>Evaluare clinică</li>
                            <li>Orientare profesională</li>
                            <li>Evaluarea resurselor psihologice</li>
                            <li>Evaluări specifice pentru contexte de siguranță</li>
                        </ul>
                    </div>
                </div>

                <h3 className="services-subsection">Sesiuni de grup</h3>
                <div className="services-grid">
                    <div className="service-card">
                        <span className="service-card-tag">Grup</span>
                        <h3>Retreat-uri de dezvoltare personală</h3>
                        <p>Experiențe imersive (1–3 zile) dedicate reflecției, reconectării și clarificării direcției personale și profesionale. Beneficii: claritate, energie, reset mental și pași concreti pentru schimbare.</p>
                        <ul>
                            <li>Exerciții ghidate de autocunoaștere</li>
                            <li>Lucru pe obiective personale</li>
                            <li>Tehnici de reglare emoțională și reducere a stresului</li>
                            <li>Sesiuni de integrare și plan de acțiune</li>
                        </ul>
                    </div>

                    <div className="service-card">
                        <span className="service-card-tag">Grup</span>
                        <h3>Ateliere de psihoeducație</h3>
                        <p>Sesiuni interactive și aplicate, față în față sau online, pe teme relevante pentru viața de zi cu zi.</p>
                        <ul>
                            <li>Gestionarea stresului și prevenirea burnout-ului</li>
                            <li>Încredere în sine și relații</li>
                            <li>Limite personale și asertivitate</li>
                            <li>Emoții și autoreglare</li>
                            <li>Perfectionism și sindromul impostorului</li>
                            <li>Reziliență și luarea deciziilor</li>
                        </ul>
                    </div>

                    <div className="service-card">
                        <span className="service-card-tag">Grup · Experiențial</span>
                        <h3>Ateliere de dezvoltare personală</h3>
                        <p>Lucru în grupuri mici, folosind metode experiențiale și creative (artă, reflecție ghidată), pentru insight și schimbare profundă.</p>
                    </div>
                </div>
            </section>

            {/* ── PENTRU ORGANIZAȚII ── */}
            <section id="organizatii">
                <h2>Pentru organizații</h2>
                <p>
                    Susțin dezvoltarea oamenilor și a organizațiilor prin intervenții pragmatice, integrate și aliniate obiectivelor de business. Abordarea mea îmbină expertiza în psihologie, leadership și dezvoltare organizațională, cu o perspectivă aplicată și orientată pe rezultate.
                </p>

                <h3 className="services-subsection">Intervenții individuale</h3>
                <div className="services-grid">
                    <div className="service-card">
                        <span className="service-card-tag">1:1</span>
                        <h3>Dezvoltare profesională, mentorat &amp; coaching</h3>
                        <p>Sesiuni 1:1 dedicate managerilor și angajaților-cheie, pornind de la obiective profesionale clare și măsurabile. Obiectiv: creșterea performanței, claritate decizională și consolidarea rolului de lider.</p>
                        <ul>
                            <li>Definirea obiectivelor de dezvoltare</li>
                            <li>Sesiuni structurate și orientate pe rezultate</li>
                            <li>Exerciții aplicate și simulare de situații reale</li>
                            <li>Follow-up pentru integrarea schimbărilor</li>
                        </ul>
                    </div>

                    <div className="service-card">
                        <span className="service-card-tag">1:1</span>
                        <h3>Consiliere psihologică pentru angajați</h3>
                        <p>Sprijin individual cu impact direct în performanță, retenție și wellbeing organizațional.</p>
                        <ul>
                            <li>Gestionarea stresului și prevenirea burnout-ului</li>
                            <li>Dificultăți de relaționare</li>
                            <li>Echilibru emoțional și adaptare la schimbare</li>
                        </ul>
                    </div>
                </div>

                <h3 className="services-subsection">Programe de grup</h3>
                <div className="services-grid">
                    <div className="service-card">
                        <span className="service-card-tag">Manageri · 4×2h</span>
                        <h3>Webinarii pentru manageri</h3>
                        <p>Obiectiv: dezvoltarea unui climat sănătos și performant.</p>
                        <ul>
                            <li>Siguranță psihologică</li>
                            <li>Comunicare și feedback constructiv</li>
                            <li>Motivarea echipei</li>
                            <li>Gestionarea performanței</li>
                            <li>Leadership autentic și responsabil</li>
                        </ul>
                    </div>

                    <div className="service-card">
                        <span className="service-card-tag">Angajați · 4×2h</span>
                        <h3>Webinarii pentru angajați</h3>
                        <p>Programe de wellbeing și dezvoltare pentru echipe.</p>
                        <ul>
                            <li>Stres și reziliență</li>
                            <li>Relații și comunicare</li>
                            <li>Echilibru viață–carieră</li>
                            <li>Încredere în sine</li>
                            <li>Adaptare la schimbare</li>
                        </ul>
                    </div>

                    <div className="service-card">
                        <span className="service-card-tag">Leadership</span>
                        <h3>Programe de dezvoltare pentru manageri</h3>
                        <p>Programe integrate, individual sau în grupuri mici, pentru dezvoltarea abilităților de leadership și creșterea maturității manageriale.</p>
                    </div>

                    <div className="service-card">
                        <span className="service-card-tag">Intensiv · 1–3 zile</span>
                        <h3>Retreat-uri de dezvoltare</h3>
                        <p>Programe intensive pentru reflecție strategică, aliniere și dezvoltare personală și profesională a echipelor sau leadershipului.</p>
                    </div>
                </div>

                <h3 className="services-subsection">Consultanță organizațională</h3>
                <div className="services-grid">
                    <div className="service-card">
                        <span className="service-card-tag">Wellbeing</span>
                        <h3>Wellbeing organizațional</h3>
                        <p>Audit al practicilor existente și design de programe integrate de wellbeing, aliniate cu procesele de HR și obiectivele companiei. Obiectiv: impact real și sustenabil în cultura organizațională.</p>
                    </div>

                    <div className="service-card">
                        <span className="service-card-tag">D&amp;I</span>
                        <h3>Diversitate &amp; Incluziune</h3>
                        <p>Definirea și implementarea inițiativelor de D&amp;I integrate în procesele organizaționale.</p>
                        <ul>
                            <li>Climat organizațional sănătos</li>
                            <li>Incluziune reală</li>
                            <li>Coeziune și performanță</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ── CUM LUCREZ ── */}
            <section id="metode">
                <h2>Cum lucrez</h2>
                <p>
                    Indiferent dacă lucrăm individual sau cu organizații, abordarea mea rămâne consecventă: structurată, aplicată și orientată spre rezultate concrete. Îmbin mai multe metode de lucru, adaptate contextului și obiectivelor fiecărui client:
                </p>

                <div className="methods-grid">
                    <div className="method-card">
                        <h3>Mentoring</h3>
                        <p>
                            Prin mentorat, ofer ghidare personalizată și sprijin constant, ajutându-te să identifici obiective clare, să depășești obstacole și să îți dezvolți abilitățile necesare. Folosesc exemple practice, feedback constructiv și împărtășesc inclusiv erorile din care am învățat.
                        </p>
                    </div>

                    <div className="method-card">
                        <h3>Fireside chats</h3>
                        <p>
                            Un format informal, față în față, folosit mai ales în companii. Ideal pentru grupuri mici (3–4 persoane) care își doresc discuții deschise despre leadership, motivarea echipei, rezolvarea conflictelor și alte teme stabilite împreună.
                        </p>
                    </div>

                    <div className="method-card">
                        <h3>Onboarding eficace din prima zi</h3>
                        <p>
                            Sprijin pentru nou-veniți, mai ales în roluri de management, pentru o integrare rapidă, acceptare din partea echipei și consolidarea reputației încă din prima zi.
                        </p>
                    </div>

                    <div className="method-card">
                        <h3>Focused learning 1:1</h3>
                        <p>
                            Învățare concentrată pe abilități specifice (delegare, prioritizare, motivare, gestionarea energiei, abilități de prezentare, reziliență) cu aplicare imediată, exemple concrete și feedback rapid.
                        </p>
                    </div>

                    <div className="method-card">
                        <h3>Consiliere pentru tranziții de carieră</h3>
                        <p>
                            Pentru cei care trec prin schimbări profesionale majore: preluarea unui nou rol, schimbarea domeniului, revenirea pe piața muncii. Lucrăm pe clarificarea obiectivelor, plan de acțiune, construirea încrederii și pregătirea interviurilor.
                        </p>
                    </div>

                    <div className="method-card">
                        <h3>Workshop-uri personalizate</h3>
                        <p>
                            Sesiuni de grup pe teme precum „Tehnici de influență" sau „Gestionarea stresului", cu activități practice, exerciții și studii de caz, organizate online sau offline, adaptate nevoilor organizației.
                        </p>
                    </div>
                </div>
            </section>
        </article>
    );
}

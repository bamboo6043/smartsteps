// src/app/servicii/page.tsx
export default function ServiciiPage() {
    return (
        <article>
            <h1>Servicii</h1>

            <div className="servicii-tabs referinte-filters" role="tablist" aria-label="Servicii">
                <a href="#tine" className="btn-filter" role="tab">Pentru tine</a>
                <a href="#companii" className="btn-filter" role="tab">Pentru companii</a>
                <a href="#metode" className="btn-filter" role="tab">Metodele mele</a>
            </div>

            <section id="tine">
                <h2>Cum te pot îndruma?</h2>
                <p>
                    Dezvoltarea personală sună deseori ca un deziderat, un plan al altora
                    pentru tine. Cele mai puternice rezultate se obțin însă atunci când
                    tu ești inițiatorul dezvoltării.
                </p>
                <p>
                    Nu îți propun să te schimbi, ci să te cunoști mai bine și să identifici
                    cum poți activa acele abilități care să te pună și mai bine în valoare.
                </p>
                <p>
                    Îți ofer sprijin personalizat, pornind de la obiectivele tale de
                    carieră, fie că vizezi succesul în cadrul companiei actuale, al uneia
                    viitoare sau pur și simplu vrei să evoluezi ca persoană.
                </p>
            </section>

            <section>
                <h2>Cum funcționează?</h2>
                <ul>
                    <li>
                        Ne întâlnim față în față sau online și analizăm ce funcționează bine
                        pentru tine, care este stilul tău de învățare, ce planuri de viață /
                        carieră ai, ce temeri îți stau în cale și ce te blochează.
                    </li>
                    <li>Identificăm problema și agreăm un plan concret de lucru.</li>
                    <li>
                        De obicei, pentru obiective precum cele menționate, lucrăm între
                        6–8 întâlniri de 90 de minute, săptămânal sau bilunar.
                    </li>
                    <li>
                        Financiar, o sesiune individuală presupune o investiție între
                        250–400 lei, în funcție de instrumentele utilizate, timpul petrecut
                        și recurență. Pentru companii și programe complexe, oferta se stabilește punctual.
                    </li>
                    <li>
                        Lucrăm pe obiectiv, folosim metode și instrumente concrete, exerciții,
                        role-play, simulări și feedback în timp real.
                    </li>
                </ul>
                <p>
                    Dacă vrei o comparație – e ca un antrenament de fitness cu instructor
                    personal, dar pentru evoluția ta personală și profesională.
                </p>
            </section>

            <section>
                <h2>Exemple de obiective</h2>
                <ul>
                    <li>Să aplici principiile delegării eficace cu membrii echipei tale.</li>
                    <li>Să crești performanța echipei prin metode de motivare eficiente.</li>
                    <li>Să îți îmbunătățești prezentările către board sau către public.</li>
                    <li>Să îți dezvolți abilitățile de influență și persuasiune.</li>
                    <li>Să îți redescoperi încrederea în sine.</li>
                    <li>Să devii mai performant în activitatea ta.</li>
                    <li>
                        Să identifici abilitățile și competențele care te pot propulsa în viață.
                    </li>
                    <li>
                        Să preiei frâiele vieții tale și să fii încrezător în deciziile pe care le iei.
                    </li>
                </ul>
            </section>

            <section>
                <h2 id="metode">Metodele mele</h2>

                <h3>Mentoring</h3>
                <p>
                    Prin mentorat, ofer ghidare personalizată și sprijin constant,
                    ajutându-te să identifici obiective clare, să depășești obstacole
                    și să îți dezvolți abilitățile necesare pentru a-ți atinge potențialul.
                    Folosesc exemple practice, feedback constructiv și împărtășesc inclusiv
                    erorile din care am învățat.
                </p>

                <h3>Fireside chats</h3>
                <p>
                    Un format informal, față în față, folosit mai ales în companii.
                    Ideal pentru grupuri mici (3–4 persoane) care își doresc discuții
                    deschise despre leadership, motivarea echipei, rezolvarea conflictelor
                    și alte teme stabilite împreună.
                </p>

                <h3>Onboarding eficace din prima zi</h3>
                <p>
                    Sprijin pentru nou-veniți, mai ales în roluri de management, pentru o
                    integrare rapidă, acceptare din partea echipei și consolidarea
                    reputației încă din prima zi.
                </p>

                <h3>Focused learning 1:1</h3>
                <p>
                    Învățare concentrată pe abilități specifice (delegare, prioritizare,
                    motivare, gestionarea energiei, abilități de prezentare, reziliență)
                    cu aplicare imediată, exemple concrete și feedback rapid.
                </p>

                <h3>Consiliere pentru tranziții de carieră</h3>
                <p>
                    Pentru cei care trec prin schimbări profesionale majore: preluarea
                    unui nou rol, schimbarea domeniului, revenirea pe piața muncii.
                    Lucrăm pe clarificarea obiectivelor, plan de acțiune, construirea
                    încrederii și pregătirea interviurilor.
                </p>

                <h3>Workshop-uri personalizate</h3>
                <p>
                    Sesiuni de grup pe teme precum „Tehnici de influență” sau
                    „Gestionarea stresului”, cu activități practice, exerciții și studii
                    de caz, organizate online sau offline, adaptate nevoilor organizației.
                </p>
            </section>

            <section>
                <h2 id="companii">Pentru companii</h2>
                <p>
                    Metodele mele se adresează în special IMM-urilor care nu au un
                    departament dedicat de Resurse Umane sau o echipă de Learning &amp; Development.
                </p>
                <p>
                    Ofer suport în crearea unei strategii de dezvoltare a echipei, intervenții
                    rapide pentru management sau angajați-cheie și evaluări în scop de
                    dezvoltare, cu o abordare pragmatică, aliniată la nevoile de business.
                </p>
            </section>
        </article>
    );
}

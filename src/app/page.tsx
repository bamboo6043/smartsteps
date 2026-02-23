import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
    return (
        <div className="page">
            {/* HERO */}
            <section className="hero aligned-hero">
                <div className="hero__content">
                    <p className="hero__eyebrow">
                        Consiliere in dezvoltare personala &amp; profesionala
                    </p>
                    <h1 className="hero__title">
                        Pasi mici.
                        <br />
                        Rezultate profunde.
                    </h1>
                    <p className="hero__subtitle">
                        Sunt Beatrice, consilier in dezvoltare personala si psiholog clinician, cu peste 20 de ani experienta in dezvoltarea oamenilor, echipelor si culturilor organizationale. Te ajut sa iti clarifici directia, sa iti regasesti increderea si sa construiesti schimbari sustenabile – pentru tine sau pentru organizatia ta.
                    </p>
                    <div className="hero__actions">
                        <Link href="/contact" className="btn-primary">
                            Programeaza o discutie
                        </Link>
                        <Link href="/despre-mine" className="btn-secondary">
                            Afla mai multe despre mine
                        </Link>
                    </div>
                    <p className="hero__note">
                        Sesiuni online sau fata in fata, pentru profesionisti, lideri si
                        persoane aflate in tranzitii importante.
                    </p>
                </div>

                <div className="hero__photo" aria-hidden="false">
                    <Image
                        src="/beatrice.jpeg"
                        alt="Portret Beatrice, consilier in dezvoltare personala"
                        width={480}
                        height={640}
                        priority
                        className="hero__portrait"
                    />
                    <div className="hero__badge">
                        20+ ani experienta in dezvoltarea oamenilor
                    </div>
                </div>
            </section>

            {/* SECTIUNI INFORMATII */}
            <section className="home-grid">
                <article className="home-card">
                    <h2>Cui ma adresez</h2>
                    <p>
                        Lucrez cu persoane care isi doresc claritate, echilibru si dezvoltare – indiferent daca sunt manageri, specialisti, antreprenori sau se afla intr-o etapa de tranzitie personala ori profesionala.
                    </p>
                    <ul>
                        <li>Ai preluat un rol nou si vrei sa fii pregatit pentru el.</li>
                        <li>Conduci o echipa si iti doresti un stil de leadership mai autentic si mai eficient.</li>
                        <li>Te simti epuizat, demotivat sau blocat intr-o decizie importanta.</li>
                        <li>Esti adolescent sau parinte si cauti sprijin pentru echilibru si directionare.</li>
                        <li>Simti ca poti mai mult si vrei sa iti clarifici urmatorul pas.</li>
                    </ul>
                    <p className="home-card__cta">
                        <Link href="/despre-mine" className="inline-link">Vezi despre mine →</Link>
                    </p>
                </article>

                <article className="home-card">
                    <h2>Cum te pot ajuta</h2>
                    <p>
                        Nu iti propun retete standard, ci un proces structurat de lucru:
                    </p>
                    <ul>
                        <li>
                            Clarificam ce iti doresti – personal, profesional sau in relatie
                            cu echipa ta.
                        </li>
                        <li>
                            Identificam ce te blocheaza si ce resurse ai deja la dispozitie.
                        </li>
                        <li>
                            Construim pasi concreti, usor de aplicat, pe care ii adaptam
                            pe parcurs.
                        </li>
                    </ul>
                    <p className="home-card__cta">
                        <Link href="/servicii" className="inline-link">
                            Vezi in detaliu serviciile si metodele mele →
                        </Link>
                    </p>
                </article>

                <article className="home-card home-card--accent">
                    <h2>Ce poti obtine</h2>
                    <ul>
                        <li>Claritate si incredere in deciziile tale.</li>
                        <li>Abilitati concrete de leadership, comunicare si prioritizare.</li>
                        <li>Echilibru emotional si energie sustenabila.</li>
                        <li>Relatii profesionale mai sanatoase si o echipa mai implicata.</li>
                        <li>O directie coerenta, aliniata cu valorile tale.</li>
                    </ul>
                    <p className="home-card__cta">
                        <Link href="/referinte" className="inline-link">Citeste referinte si exemple de proiecte →</Link>
                    </p>
                </article>
            </section>
        </div>
    );
}

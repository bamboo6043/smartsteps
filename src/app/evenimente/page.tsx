import Link from "next/link";
import ClientImage from "@/components/ClientImage";

export const metadata = {
  title: "Evenimente – Smart Steps",
  description: "Descoperă evenimentele și atelierele noastre pentru dezvoltare personală.",
};

export default function EventsPage() {
  const events = [
    {
      id: 1,
      title: "Atelier: Psihoterapia ca spatiu de dezvoltare personala",
      date: "15 martie 2025",
      time: "10:00 - 12:00",
      description:
        "Descoperă cum psihoterapia poate deveni un instrument puternic de auto-cunoaștere și dezvoltare.",
      image: "/images/events/workshop-1.jpg",
      category: "Atelier",
    },
    {
      id: 2,
      title: "Grup de discuție: Relații sănătoase și comunicare",
      date: "22 martie 2025",
      time: "18:00 - 19:30",
      description:
        "Un spațiu sigur pentru a discuta provocări în relații și modalități de comunicare mai eficace.",
      image: "/images/events/workshop-2.jpg",
      category: "Grup de discuție",
    },
    {
      id: 3,
      title: "Webinar: Imaginea de sine și auto-estima",
      date: "29 martie 2025",
      time: "19:00 - 20:30",
      description:
        "Cum se formează imaginea de sine și ce putem face pentru a o reconstrui în mod sănătos.",
      image: "/images/events/webinar-1.jpg",
      category: "Webinar",
    },
    {
      id: 4,
      title: "Atelier: Iesire din modelele relationale blocante",
      date: "5 aprilie 2025",
      time: "10:00 - 13:00",
      description:
        "Recunoasteti Triunghiul Dramatic in relatiile voastre si invatati cum sa iesiti din aceste modele.",
      image: "/images/events/workshop-3.jpg",
      category: "Atelier",
    },
  ];

  const categories = Array.from(new Set(events.map((e) => e.category)));

  return (
    <div className="events-page">
      <div className="page-header">
        <h1>Evenimente și ateliere</h1>
        <p className="page-subtitle">
          Alătură-te unui spațiu de învățare, creștere și conexiune cu alți oameni care vor să
          se dezvolte.
        </p>
      </div>

      <div className="events-container">
        {categories.map((category) => {
          const categoryEvents = events.filter((e) => e.category === category);
          return (
            <section key={category} className="events-section">
              <h2 className="events-section-title">{category}</h2>
              <div className="events-grid">
                {categoryEvents.map((event) => (
                  <article key={event.id} className="event-card">
                    {event.image && (
                      <div className="event-image">
                        <ClientImage src={event.image} alt={event.title} />
                        <span className="event-category-badge">{event.category}</span>
                      </div>
                    )}
                    <div className="event-content">
                      <h3>{event.title}</h3>
                      <div className="event-meta">
                        <div className="event-date-time">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                          </svg>
                          <span>{event.date}</span>
                        </div>
                        <div className="event-time">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                          </svg>
                          <span>{event.time}</span>
                        </div>
                      </div>
                      <p className="event-description">{event.description}</p>
                      <Link href="/contact" className="event-cta">
                        Înscrie-te
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <section className="newsletter-section">
        <div className="newsletter-content">
          <h2>Rămâi conectat</h2>
          <p>
            Vrei să fii printre primii care află despre noile ateliere și articole?
            Scrie-mi direct și te adaug pe lista de notificări.
          </p>
          <Link href="/contact" className="btn-primary">
            Trimite-mi un mesaj
          </Link>
        </div>
      </section>
    </div>
  );
}

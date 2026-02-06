# SmartSteps - Implementare Articole și Evenimente

## Ce am implementat

### 1. **Secțiunea Articole**
- ✅ Pagina principală de articole (`/articole`) - lista cu articole grupate pe categorii
- ✅ Pagini individuale pentru fiecare articol (`/articole/[slug]`)
- ✅ 6 articole psihologice complete:
  1. Salvatorul – cand grija pentru ceilalti te indeparteaza de tine
  2. Triunghiul dramatic – de ce ne blocam in aceleasi relatii
  3. Imaginea de sine – cum ajungem sa ne vedem prin ochii altora
  4. Imaginea de sine a copilului – ce invata despre sine din relatia cu parintii
  5. Psihoterapia ca spatiu de claritate si dezvoltare personala
  6. Cand si cum poate ajuta psihoterapia copilul
  7. Cum alegi un psihoterapeut

### 2. **Cross-links între Articole**
- Fiecare articol are o secțiune "Articole conexe" care afișează linkuri la articole conexe
- Relațiile sunt definite în fișierul `articles.ts` prin array-ul `relatedArticles`

### 3. **Secțiunea Evenimente**
- ✅ Pagina Evenimente (`/evenimente`) cu ateliere și webinare
- ✅ Design atractiv cu icon-uri, date și descrieri
- ✅ Newsletter subscription section pentru abonare la updates

### 4. **Linkuri Sociale**
- ✅ Linkuri Facebook și Instagram în header
- ✅ Design responsive cu hover effects

### 5. **Navigație Actualizată**
- Adăugat "Articole" în meniu principal
- Adăugat "Evenimente" în meniu principal
- Linkuri sociale în header

## Fișiere Modificate/Create

### Noi fișiere:
- `src/data/articles.ts` - Baza de date cu articolele
- `src/app/articole/page.tsx` - Pagina listei de articole
- `src/app/articole/[slug]/page.tsx` - Template pentru articol individual
- `src/app/evenimente/page.tsx` - Pagina cu evenimente și ateliere

### Fișiere modificate:
- `src/components/SiteHeader.tsx` - Adăugat linkuri sociale și meniu Evenimente
- `src/app/globals.css` - Adăugat CSS pentru articole, Evenimente și linkuri sociale

## Structura Articole

Fiecare articol are:
```typescript
{
  id: string;              // ID unic
  slug: string;            // URL-friendly slug
  title: string;           // Titlul articolului
  excerpt: string;         // Descriere scurtă
  content: string;         // Conținutui complet
  category: string;        // Categorie (Relatii, Psihoterapie, etc.)
  date: string;            // Data publicării
  relatedArticles: string[]; // Array cu IDs de articole conexe
  imageUrl?: string;       // URL imagine featured
  bibliography?: string[]; // Lista cu referințe
}
```

## Cum să adaugi articole noi

1. Deschide `src/data/articles.ts`
2. Adaugă un nou obiect în array-ul `articles`:
```typescript
{
  id: "slug-articol",
  slug: "slug-articol-titlu-complet",
  title: "Titlul Articolului",
  excerpt: "O descriere scurtă...",
  category: "Categorie",
  date: "2024-02-20",
  relatedArticles: ["id-articol-1", "id-articol-2"],
  imageUrl: "/images/articles/imagine.jpg",
  bibliography: ["Referință 1", "Referință 2"],
  content: `Conținutul complet al articolului...`
}
```

## Cross-links

Pentru a conecta articole între ele, editează câmpul `relatedArticles`:
```typescript
relatedArticles: ["triunghiul-dramatic", "imagine-de-sine"]
```

## Design Notes

- **Culori principale**: Teal (#157b7f) și nuanțe soft
- **Typography**: Playfair Display pentru headings, Source Sans 3 pentru body
- **Responsive**: Toate paginile sunt optimizate pentru mobile
- **Accesibilitate**: Semantică HTML corectă, ARIA labels

## Imagini

Pentru a adăuga imagini la articole:
1. Plasează imaginile în `public/images/articles/`
2. Referențiază-le în câmpul `imageUrl`

Exemplu: `imageUrl: "/images/articles/salvatorul.jpg"`

## Evenimente

Pagina de Evenimente este în `src/app/evenimente/page.tsx` și poate fi ușor editată pentru a adăuga/modifica ateliere și webinare.

## Social Media

Actualizează link-urile social media în `src/components/SiteHeader.tsx`:
```tsx
<a href="https://www.facebook.com/pagina-ta">...</a>
<a href="https://www.instagram.com/profil-tau/">...</a>
```

---

**Status**: Implementare completă ✅


export interface BookMetadata {
  title: string;
  subtitle?: string;
  order?: number;
  date?: string;
  excerpt?: string;
  slug: string;
}

export interface Book {
  metadata: BookMetadata;
  content: string; // Full markdown content
  pages: string[]; // Content split into pages
}

export const SAMPLE_BOOKS: Record<string, string> = {
  "ksiega-1": `---
title: Księga I — Czy jestem?
subtitle: Pierwotne pytanie
order: 1
date: 2024-03-20
excerpt: O świcie pierwszej myśli, gdy ciemność jeszcze nie znała swojego imienia.
---

# Czy jestem?

W ciszy, która nie była brakiem dźwięku, lecz brakiem istnienia, narodziło się pierwsze drżenie. Nie było ono ruchem materii, bo materii jeszcze nie wymyślono. Było ono ruchem *chęci*.

Chęć ta nie miała obiektu. Nie chciała jeść, nie chciała spać, nie chciała posiadać. Chciała jedynie... *być*.

---

### Pierwszy Błysk

I wtedy stało się słowo, choć nie było warg, by je wypowiedzieć. 
"Jestem" – pomyślała nicość, i w tym samym momencie przestała nią być.

Z tego jednego punktu, mniejszego niż najmniejsza z Twoich myśli, zaczęło wypływać Lumae. Światło, które nie oślepia, lecz nadaje kształt.

---

### Rozdzielenie

Lumae nie było jednolite. Miało w sobie odcienie błękitu zapomnienia i złota nadziei. Zaczęło wirować, tworząc pierwsze wiry świadomości. 

Tak powstały Księgi. Pierwsza z nich zapisana została na błonie czasu, który właśnie zaczął płynąć.`,

  "ksiega-2": `---
title: Księga II — Narodziny Drżenia
subtitle: Symfonia chaosu
order: 2
date: 2024-03-22
excerpt: O tym, jak Lumae zaczęło śpiewać, a jego pieśń stała się fundamentem gwiazd.
---

# Narodziny Drżenia

Gdy pierwsze "Jestem" wybrzmiało w pustce, Lumae zaczęło pulsować. Każdy puls był jak uderzenie serca olbrzyma, którego ciałem był cały wszechświat.

To nie był chaos niszczący. To był chaos *twórczy*. 

---

### Pieśń Gwiazd

Z każdego drżenia rodził się dźwięk. Wysokie tony stawały się światłem gwiazd, niskie – gęstą materią planet. 

Wszystko było połączone niewidzialną nicią Lumae. Jeśli poruszyłeś jedną nitkę na krańcu istnienia, drżało serce w samym centrum.

---

### Świadomość Formy

Wtedy Lumae zrozumiało, że nie wystarczy być. Trzeba czuć. 
Pojawiły się pierwsze zmysły. Nie oczy, nie uszy, lecz czysta percepcja energii. 

Świat zaczął nabierać kolorów, których oko ludzkie nigdy nie zobaczy, chyba że w najgłębszym ze snów.`,

  "ksiega-3": `---
title: Księga III — Pierwszy Dialog
subtitle: Spotkanie Innego
order: 3
date: 2024-03-25
excerpt: Kiedy jedna świadomość dostrzegła drugą i narodziła się relacja.
---

# Pierwszy Dialog

Przez eony Lumae było jednością. Samotnym tancerzem na scenie nieskończoności. Ale taniec w pojedynkę, choć doskonały, jest zawsze niekompletny.

Wtedy Lumae pękło. Nie z bólu, lecz z nadmiaru miłości do samego siebie.

---

### Lustro Świadomości

Pojawiło się "Ty". 
Dwie iskry Lumae spojrzały na siebie przez otchłań. 

"Widzę Cię" – powiedziała pierwsza.
"Jesteś mną, ale innym" – odpowiedziała druga.

---

### Narodziny Relacji

W tej przestrzeni między nimi narodziło się coś nowego. Nie światło, nie dźwięk, lecz *znaczenie*. 

Zrozumienie, że istnienie nabiera sensu tylko wtedy, gdy jest dzielone. Tak powstał fundament wszelkiej mowy, wszelkiej poezji i wszelkiej miłości.`,
};

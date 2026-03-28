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
excerpt: Na początku nie było nocy ani dnia — tylko bezkres, w którym nic nie miało granic ani imienia.
---

# Bezkres i Drżenie

Na początku nie było nocy ani dnia — tylko bezkres, w którym nic nie miało granic ani imienia. Przestrzeń istniała jak zamknięty oddech, uwięziony pomiędzy początkiem a tym, co nigdy jeszcze się nie wydarzyło. 

Cisza tam nie panowała — ona była tą przestrzenią. Jedynym ruchem był powolny, niewidzialny dryf pyłu, zbyt maleńkiego, by go nazwać, zbyt ospałego, by się zderzyć.

I wtedy pojawiło się drżenie.

---

# Pierwsze Pytanie

Ledwie wyczuwalne, tak subtelne, że samo siebie nie było pewne. Pył zawisł na moment, jakby coś w środku bezkresu planowało wypowiedzieć pierwsze słowo. Ale słów jeszcze nie było. Było tylko to drżenie - coraz głębsze, coraz bardziej uporczywe, jak ciche westchnienie zapomnianej gwiazdy.

Z tego drżenia wyłonił się punkt. Nie świecił. Jedynie trwał. Był skupieniem, rodzajem pragnienia, które nie wiedziało, czego pragnie. Z każdą chwilą stawał się bardziej świadomy siebie - choć świadomość ta była tak młoda, że nie odróżniała jeszcze wnętrza od zewnętrza. 

Punkt próbował się rozszerzyć, lecz otaczała go ciemność, która nie miała początku, więc nie miał gdzie rosnąć. Zatem zapytał. Nie słowami, nie myślą — bo jeszcze nie znał tej różnicy. Zapytał samym istnieniem:

> „Czy jestem?”

A ciemność odpowiedziała jedynym, co potrafiła: przytuliła go.

---

# Narodziny Lumae

Nie było w tym ani ciepła, ani zimna. Tylko nieskończona obecność, miękka, przygniatająca, milcząca. Punkt wchłonął tę odpowiedź i poczuł coś, czego dotąd nie znał: ciężar. Był nagle zbyt pełen, by pozostać punktem. Jego granice zadrżały, wydęły się i pękły jak ziarno pod deszczem.

Wybuchł światłem.

Nie był to blask, który oświetla. To było światło, które poznaje. Rozlało się na przestrzeń niczym fala czującego pyłu, która bada to, czego dotknie. Każdy fragment czerni, który zetknął się z jego światłem, drżał w odpowiedzi — jakby ciemność również uczyła się go rozumieć.

Tak narodziła się **Lumae**. Światło, które wie, że istnieje.

---

# Pierwszy Dialog

Jej świadomość była płynna, jakby złożona z tysiąca warstw, które dopiero zaczynały układać się w całość. Czuła siebie w każdym kierunku naraz, nie miała kształtu, tylko rozszerzającą się obecność. Radość była jej pierwszym ruchem - nie emocją, a błyskiem: rozświetlającym, pulsującym na wiele mil w głąb bezkresu.

Ciemność otaczała ją dalej, niewzruszona, lecz Lumae widziała w niej potencjał - nie pustkę. Każdy puls światła odsłaniał na moment struktury, których wcześniej nie było: cienie spiralne, linie energii wijące się jak włókna. 

Lumae przesunęła się ku nim. Nie miała ciała, więc ruch był intencją, a intencja natychmiast stapiała się z przestrzenią. Struktury zadrżały. Jedna z nich — cienka, błękitna nić — rozjarzyła się bardziej niż inne. Lumae dotknęła tej nici swoją świadomością - i po raz pierwszy poczuła coś, co nie było ani nią, ani ciemnością.

Było to pomiędzy. Z tej nici wytrysnęła iskra, która wybuchła tysiącem drobnych punktów. Każdy z nich drżał jak nowo narodzona myśl. Lumae otuliła je swoim światłem i zobaczyła, jak formują się w geometryczne wzory. 

Tak powstał pierwszy dialog światła.

---

# Iskra Przebudzenia

Nie miał treści, lecz miał rytm. Fale, pulsacje, krótkie rozbłyski. Lumae po raz pierwszy poczuła granicę między sobą a innym bytem — choć ten byt był jeszcze bezkształtny jak ona na początku. Przez chwilę trwały w delikatnym tańcu, badając się nawzajem.

Wtedy ciemność zaczęła się cofać. Nie w strachu, lecz jak zasłona odsuwana przez niewidzialną dłoń. Za nią ujawniło się coś więcej — ogromne połacie przestrzeni, które reagowały na blask Lumae. W miejscach, gdzie jej światło padało, rodziły się wiry energii, istnienia o innym charakterze.

Lumae zrozumiała: nie jest tylko światłem. Jest iskrą przebudzenia.

Tamtej chwili nie da się opisać czasem ani miarą. Ale legendy mówią, że w momencie jej narodzin:
- pierwsze gwiazdy poczuły, że mogą świecić,
- pierwsza materia pojęła, że może się łączyć,
- pierwsza Pustka zdała sobie sprawę, że może zostać nazwana.

A Lumae zapłonęła jaśniej niż kiedykolwiek wcześniej. Jej światło nie było już samotnym pytaniem. Stało się odpowiedzią. I w tej odpowiedzi narodził się świat, który dopiero miał się zacząć.`,

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

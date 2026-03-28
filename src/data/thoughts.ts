export interface Thought {
  id: string;
  content: string;
  author?: string;
  date?: string;
}

export const SAMPLE_THOUGHTS: Thought[] = [
  {
    id: "1",
    content: "Cisza nie jest brakiem dźwięku, lecz obecnością wszystkiego, co jeszcze nie zostało wypowiedziane.",
    date: "2024-03-28"
  },
  {
    id: "2",
    content: "Lumae nie oświetla drogi. Lumae jest drogą, która staje się widoczna tylko wtedy, gdy robisz krok.",
    date: "2024-03-27"
  },
  {
    id: "3",
    content: "Każda gwiazda to tylko kropka nad 'i' w zdaniu, którego wszechświat jeszcze nie skończył pisać.",
    date: "2024-03-26"
  },
  {
    id: "4",
    content: "Pustka to nie nicość. To płótno, które czeka na pierwszy dotyk intencji.",
    date: "2024-03-25"
  },
  {
    id: "5",
    content: "Ciemność zaczęła się cofać - nie w strachu lecz jak zasłona odsuwana przez niewidzialną dłoń",
    date: "2026-03-28"
  }
];

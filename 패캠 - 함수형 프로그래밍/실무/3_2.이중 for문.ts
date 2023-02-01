const suits = ["♠", "♥", "♣", "♦"];
const numbers = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A"
];



const cards: Array<string> = []
// 중첩된 for 구무
for (const suit of suits) {
  for (const number of numbers) {
    cards.push(suit+number)
  }
}

// 우리가 원하는 작업 정리

// 모든 카드 목록 아래의 작업이 완료
const card2=
// 아래의 작업을 모든 무늬에 적용
  suits.map((suit)=> // 문자열 배열에 리턴된 함수를 다시 map에 적용해 배열이 중첩된 문자열 리턴
  // 아래의 작업을 모든 숫자에 적용
  numbers.map((number)=> // 최종적 리턴은 문자열의 배열
    // 한장의 카드는 무늬외 숫자를 연결한 문자열
    suit + number))

    // 무늬별로 나누어진 카드를 하나로 합침
    // Array<Array<T>> = Array<T>
    .flat()
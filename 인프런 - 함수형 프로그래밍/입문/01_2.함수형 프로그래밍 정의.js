// 회원목록, map, filter

var users = [
  { id: 1, name: 'ID', age: 36 },
  { id: 2, name: 'BJ', age: 32 },
  { id: 3, name: 'JM', age: 32 },
  { id: 4, name: 'PJ', age: 27 },
  { id: 5, name: 'HA', age: 25 },
  { id: 6, name: 'JE', age: 26 },
  { id: 7, name: 'JI', age: 31 },
  { id: 8, name: 'MP', age: 23 }
];

// 명령형 코드

let temp_users = []
  for(var i = 0; i< users.length; i++){
  if (users[i].age >= 30){
     temp_users.push(users[i]) 
  }
}
temp_users

let names = []
for(let i =0;i<temp_users.length;i++){
  if (temp_users[i].age >= 30){
     names.push(users[i].name) 
  }
}
names

temp_users= []
for(var i = 0; i< users.length; i++){
  if (users[i].age < 30){
     temp_users.push(users[i]) 
  }
}
temp_users

let ages = []

for(let i =0;i<temp_users.length;i++){
  if (temp_users[i].age < 30){
     ages.push(temp_users[i].age) 
  }
}
ages


// 함수형 프로그래밍을 통해 중복 줄이기

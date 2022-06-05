// 첫번째 내장함수(Built-in function):'prompt'


id=prompt("아이디입력");
console.log("case 1.id:", id);      //입력, 확인 ---- admin
console.log("case 2.id:", id);      //입력, 취소 --- null
console.log("case 3.id:", id);      //입력x, 확인 --- 빈문자열
    result=(id==="")?"공백":"null";
    console.log(result);
console.log("case 4.id:", id);      //입력x, 취소 --- null


// ---
console.group("group 1");
    if(id == 'admin'){
        password = prompt("비밀번호 입력");

        if(password === '123456'){
            // location.href = "http://www.naver.com";
            console.log("접속성공");
        } else {
            console.log("비밀번호가 틀렸습니다.");
        }//if-else

    } else {
        console.log("아이디가 틀렸습니다.");
    }//if-else
console.groupEnd("group 1");
var objId = document.getElementById("sign_id"); //아이디
var objPwd = document.getElementById("sign_pw"); //비밀번호
var objPwd2 = document.getElementById("sign_pw2"); //비밀번호확인
var RegExp = /^[a-zA-Z0-9]{4,12}$/; //id와 password 유효성 검사 정규식 {갯수}
//reset focus

function blank() {
    if (objId.value == "" || objId.value == "" || objPwd2.value == "") {
        alert("필수 입력칸을 채워주세요");
        return false; //스크립트 구문이 끝났다는 소리;만약 return true면 맞아도 안넘어감
    }
}
function idValid() {
    if (objId.value == "") {
        alert("ID를 입력해주세요.");
        return false;
    }
    if (!RegExp.test(objId.value)) {
        //아이디 유효성검사
        alert("ID는 4~12자의 영문 대소문자와 숫자로만 입력하여 주세요.");
        objId.value = "";
        return false;
    }
}
function pwValid() {
    if (objPwd.value == "") {
        // 비밀번호 입력여부 검사
        alert("Password를 입력해주세요.");
        return false;
    }
    if (!RegExp.test(objPwd.value)) {
        //패스워드 유효성검사
        alert("Password는 4~12자의 영문 대소문자와 숫자로만 입력하여 주세요.");
        return false;
    }
    if (objPwd.value == objId.value) {
        //패스워드와 ID가 동일한지 검사
        alert("Password는 ID와 동일하면 안됩니다.");
        return false;
    }
}
function pw2Valid() {
    if (objPwd2.value != objPwd.value) {
        //비밀번호와 비밀번호확인이 동일한지 검사
        alert("작성하신 비밀번호와 틀립니다. 다시 확인하여 입력해주세요.");
        return false;
    }
}

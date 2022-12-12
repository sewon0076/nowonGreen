var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "seomoon_notice",
});
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected!");
});
//메모를 추출할때
function getNotice(callback) {
    connection.query("SELECT * FROM seomoon_db ORDER BY id desc", (err, rows) => {
        if (err) throw err;
        callback(rows);
    });
}
//메모를 입력할때
function insertNotice(title, name, content, callback) {
    connection.query(`insert into seomoon_db (create_time, name,title,content) values (NOW(), '${name}','${title}','${content}')`, (err) => {
        if (err) throw err;
        callback();
    });
}
//메모중 아이디가 일치하는 데이터 추출(내보내는 건 못함)
//아이디는 프라이머리 키로 공통된 숫자 불가능
function getNoticeByid(id, callback) {
    //한줄을 다 불러올때는 from + 'table 이름" + 없음
    connection.query(`SELECT * FROM seomoon_db where id=${id}`, (err, row) => {
        if (err) throw err;
        callback(row);
    });
}
//아이디가 일치하는 부분을 update한 내용 내보내기
function updateNotice(id, title, name, content, callback) {
    connection.query(`UPDATE seomoon_db set create_time=now(), name='${name}',title='${title}',content='${content}' where id=${id}`, (err) => {
        if (err) throw err;
        callback();
    });
}
//아이디가 일치하면 삭제하기
function deleteNotice(id, callback) {
    connection.query(`DELETE from seomoon_db WHERE id=${id}`, (err) => {
        if (err) throw err;
        callback();
    });
}
//로그인 회원가입 페이지=============================================
//회원정보를 받아올때
function accountInfo(callback) {
    connection.query("SELECT * FROM seomoonaccount", (err, rows) => {
        if (err) throw err;
        callback(rows);
    });
}
//받아온 회원정보를 입력할때
function createAccount(id, pw, confirmPw, phoneNum, callback) {
    connection.query(`insert into seomoonaccount (id, pw, confirmPw, phoneNum) values ('${id}','${pw}','${confirmPw}','${phoneNum}')`, (err) => {
        if (err) throw err;
        callback();
    });
}
//login
function loginAccount(id, pw, callback) {
    connection.query(`SELECT * FROM seomoonaccount where id='${id}' and pw='${pw}'`, (err, results) => {
        if (err) throw err;
        callback(results);
    });
}
module.exports = {
    //여러 함수가 다 들어갈 수 있다
    getNotice,
    insertNotice,
    getNoticeByid,
    updateNotice,
    deleteNotice,
    accountInfo,
    createAccount,
    loginAccount,
};

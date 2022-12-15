var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "seomoon_notice",
    multipleStatements: true, //데이터 여러개 넣는것
});
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected!");
});
//store=================================================
//상품를 입력할때
function insertProduct(password, img, p_name, p_store, p_detail, price, category, callback) {
    connection.query(
        `insert into store (password, product_name, store_name, product_detail, product_img, price, category) values (${password}, '${p_name}','${p_store}', '${p_detail}','${img}','${price}','${category}' )`,
        (err) => {
            if (err) throw err;
            callback();
        }
    );
}
//메모를 추출할때
function getProduct(callback) {
    connection.query("SELECT * FROM store ORDER BY id;" + "SELECT * FROM store2 ORDER BY id;", (err, rows) => {
        if (err) throw err;
        let rows1 = rows[0];
        let rows2 = rows[1];
        callback(rows1, rows2);
    });
}
function getProductByid(id, callback) {
    connection.query(`SELECT * FROM store where id=${id}`, (err, row) => {
        if (err) throw err;
        callback(row);
    });
}
//아이디가 일치하는 부분을 update한 내용 내보내기
function updateProduct(id, password, img, p_name, p_store, p_detail, price, category, callback) {
    connection.query(
        `UPDATE store set password=${password}, product_name ='${p_name}', store_name ='${p_store}', product_detail='${p_detail}', product_img ='${img}', price ='${price}', category ='${category}' where id=${id}`,
        (err) => {
            if (err) throw err;
            callback();
        }
    );
}
//아이디가 일치하면 삭제하기
function deleteProduct(id, callback) {
    connection.query(`DELETE from store WHERE id=${id}`, (err) => {
        if (err) throw err;
        callback();
    });
}
//================================================================
//store2=================================================
//상품를 입력할때
function insertProduct2(password, img, p_name, p_store, p_detail, price, category, callback) {
    connection.query(
        `insert into store2 (password, product_name, store_name, product_detail, product_img, price ,category ) values (${password}, '${p_name}','${p_store}', '${p_detail}','${img}','${price}','${category}' )`,
        (err) => {
            if (err) throw err;
            callback();
        }
    );
}
//메모를 추출할때
function getProduct2(callback) {
    connection.query("SELECT * FROM store2 ORDER BY id", (err, rows) => {
        if (err) throw err;
        callback(rows);
    });
}
//================================================================notice=============
//메모를 추출할때
function getNotice(callback) {
    connection.query("SELECT * FROM seomoon_db ORDER BY id", (err, rows) => {
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
    insertProduct,
    getProduct,
    insertProduct2,
    getProduct2,
    getProductByid,
    updateProduct,
    deleteProduct,
};

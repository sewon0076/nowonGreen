//page 연결이 쉬워지도록
//
const { json } = require("body-parser");
const { Domain } = require("domain");
const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
    res.render("main");
});
router.get("/about_us", (req, res) => {
    res.render("about_us");
});
router.get("/login", (req, res) => {
    res.render("login");
});
router.post("/login_info", (req, res) => {
    let paramL = JSON.parse(JSON.stringify(req.body));
    let id = paramL["id"];
    let pw = paramL["password"];
    console.log(id);
    console.log(pw);
});

router.get("/sign_up", (req, res) => {
    res.render("sign_up");
});
router.post("/sign_up_info", (req, res) => {
    let param = JSON.parse(JSON.stringify(req.body));
    let id = param["id"];
    let pw = param["password"];
    let confimPw = param["confirmPw"];
    let phoneNum = param["phonenumber"];
    console.log(id);
    console.log(pw);
    console.log(confimPw);
    console.log(phoneNum);
});
router.get("/notice", (req, res) => {
    res.render("notice");
});
router.get("/notice_write", (req, res) => {
    res.render("notice_write");
});
router.get("/notice_content", (req, res) => {
    res.render("notice_content");
});
router.get("/notice_write_result", (req, res) => {
    res.render("notice_write_result");
});
router.get("/notice_write_info", (req, res) => {
    let id = param["userId"];
    let pw = param["userPw"];
    let title = param["title"];
    res.render("notice_write_info");
});
router.post("/notice_write_info", (req, res) => {
    let param = JSON.parse(JSON.stringify(req.body));
    let id = param["userId"];
    let pw = param["userPw"];
    let title = param["title"];
    let content = param["content"];
    console.log(id);
    console.log(pw);
    console.log(title);
    //내가 원하는 페이지로 보내는 역할
    //내가 원하는 페이지{내가 보낼것} 나는 notice_detail.ejs 페이지에 notice_write_info라는 이름으로 보낼거야
    res.render("notice_write_result.ejs", { "notice_write_info": param });
    // res.render("notice.ejs", { "notice_write_info": param });
});

// router.post('/notice_write_form',(req, res) => {
//     let param = JSON.parse(JSON.stringify(req.body));
//     let id = param['userId'];
//     let title = param['title'];
//     console.log(id);
//     console.log(title);
//     //내가 원하는 페이지로 보내는 역할
//     //내가 원하는 페이지{내가 보낼것} 나는 viewer페이지에 writeMemo_emend라는 이름으로 보낼거야
//     res.render('notice_write_form',{'notice_detail' : param})
//   });
// router.post('/result_page', function(req, res, next) {
//     var id = req.body.userId;
//     var age = req.body.title;
//     console.log("## post request");
//     res.render('result_page', { title: 'Express', id: id, title: title, method: "post" });
// });
// router.get("/community", (req, res) => {
//     res.render("community");
// });
// router.post("/name", (req, res) => {
//     let paramname = req.body.name;
//     res.writeHead(200, { "content-type": "text/html;charset=utf-8" });
//     res.write(`${paramname} 님 반갑습니다`);
//     res.end();
// });

// router.post("/commuWrite", (req, res, next) => {
//     let param = JSON.parse(JSON.stringify(req.body));
//     //post는 parsing을 해줘야함,  get은 필요없음
//     let id = param["id"];
//     let title = param["title"];
//     let content = param["content"];
//     let pw = param["password"];

//     console.log(id);
//     console.log(title);
//     console.log(content);
//     console.log(pw);
// });

// // ========sign up .ejs==========seomoon==================
// router.get("/sign_up", (req, res) => {
//     res.render("sign_up");
// });

// router.post("/sign_up_form", (req, res) => {
//     let paramS = JSON.parse(JSON.stringify(req.body));
//     let id = paramS["id"];
//     let pw = paramS["pw"];
//     let pwC = paramS["pw_confirm"];
//     let birth = paramS["birth"];
//     console.log(id);
//     console.log(pw);
//     console.log(pwC);
//     console.log(birth);
// }),
//게시판 리스트 페이지
router.get("/notice_list", (req, res) => {
    res.render("notice_list");
});

//게시판 리스트 뷰어 페이지
router.get("/viewer", (req, res) => {
    res.render("viewer");
});

//게시판 작성 페이지
router.get("/notice_write", (req, res) => {
    res.render("notice_write");
});
//게시판 수정 페이지
router.get("/notice_write_emend", (req, res) => {
    res.render("notice_write_emend");
});
//게시판 작성 페이지에서 작성하면 뷰어에서 나오도록 연결을 시켜주자!!!!!
//제목 관리자 날짜 조회수 컨텐츠 순서로 기입
//수정페이지
router.post("/writeMemo_emend", (req, res) => {
    let param = JSON.parse(JSON.stringify(req.body));
    let write_list_emend_title = param["write_list_emend_title"];
    let write_list_emend_name = param["write_list_emend_name"];
    let write_list_emend_day = param["write_list_emend_day"];
    let write_list_emend_view = param["write_list_emend_view"];
    let write_emend_memo_cont = param["write_emend_memo_cont"];
    console.log(write_list_emend_title);
    console.log(write_list_emend_name);
    console.log(write_list_emend_day);
    console.log(write_list_emend_view);
    console.log(write_emend_memo_cont);
    //내가 원하는 페이지로 보내는 역할
    //내가 원하는 페이지{내가 보낼것} 나는 viewer페이지에 writeMemo_emend라는 이름으로 보낼거야
    res.render("viewer.ejs", { writeMemo_emend: param });
});
module.exports = router;

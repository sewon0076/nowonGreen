//page 연결이 쉬워지도록
//
const express = require("express");
const router = express.Router();
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const db = require("./../db.js");

router.get("/", (req, res) => {
    res.render("main");
});
router.get("/about_us", (req, res) => {
    res.render("about_us");
});
router.get("/store", (req, res) => {
    res.render("store");
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

// ===========================================notice======================================
router.get("/notice", (req, res) => {
    db.getNotice((rows) => {
        res.render("notice", { rows: rows });
    });
});
//노티스 적는 페이지 받아오기
router.get("/notice_write", (req, res) => {
    res.render("notice_write");
});
//노티스 적는 페이지의 폼 받아 노티스 리스트로 다시 보내기
router.post("/notice_write_info", (req, res) => {
    let param = JSON.parse(JSON.stringify(req.body));
    let title = param["title"];
    let name = param["userId"];
    let content = param["content"];
    db.insertNotice(title, name, content, () => {
        res.redirect("/notice"); //redirect 에는 / 붙인다
    });
    //내가 원하는 페이지{내가 보낼것} 나는 notice_detail.ejs 페이지에 notice_write_info라는 이름으로 보낼거야
    // res.render("memoList.ejs", { "writeMemo": param });
    // res.render("notice.ejs", { "notice_write_info": param });
});
router.get("/notice_content", (req, res) => {
    res.render("notice_content");
});
//id에 맞는 내용 부르기
router.get("/notice_detail", (req, res) => {
    let id = req.query.id;

    //getMemobyId는 그냥 지어준 이름
    db.getNoticeByid(id, (row) => {
        res.render("notice_content", { row: row[0] }); //테이블의 한 행만 보내줄거기 때문에
    });
});
router.get("/updateNotice", (req, res) => {
    let id = req.query.id;
    console.log(id);
    //getMemobyId는 그냥 지어준 이름
    db.getNoticeByid(id, (row) => {
        res.render("notice_rewrite", { row: row[0] });
    });
});
//삭제하기======================================================
router.get("/deleteN", (req, res) => {
    let id = req.query.id;
    db.deleteNotice(id, () => {
        res.redirect("/notice");
    });
});

// 업데이트 된 내용 내보내기=================================================
router.post("/notice_rewrite", (req, res) => {
    let param = JSON.parse(JSON.stringify(req.body));
    let id = param["id"];
    console.log("id 는" + id);
    let title = param["title"];
    let name = param["userId"];
    let content = param["content"];
    db.updateNotice(id, title, name, content, () => {
        console.log("id 는" + id);
        res.redirect("/notice");
    });
});
router.get("/notice_write_result", (req, res) => {
    res.render("notice_write_result");
});
router.get("/notice_write_info", (req, res) => {
    db.getNotice((rows) => {
        res.render("notice_write", { rows: rows }); //ejs의 rows를 받아서 rows라는 이름으로 보낸다
    });
});

module.exports = router;

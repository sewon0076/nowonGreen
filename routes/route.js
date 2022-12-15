//page 연결이 쉬워지도록
//
const express = require("express");
const router = express.Router();
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const db = require("./../db.js");

//=============
const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, "../public/uploads/");
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname); //파일의 확장자
            done(null, path.basename(file.originalname, ext) + Date.now() + ext); //파일명 + 날짜 _ 확장자명
        },
    }),
    limits: { fileSize: 1920 * 1024 * 5 }, //2메가 까지 업로드 가능
});

router.get("/about_us", (req, res) => {
    res.render("about_us");
});
router.get("/product_detail", (req, res) => {
    res.render("product_detail");
});

router.get("/performance", (req, res) => {
    res.render("performance");
});
router.get("/promotion", (req, res) => {
    res.render("promotion");
});
//================================store1===============================================
router.get("/store", (req, res) => {
    db.getProduct((rows1, rows2) => {
        res.render("store", { rows1: rows1, rows2: rows2 }); //ejs의 rows를 받아서 rows라는 이름으로 보낸다
    });
});
router.get("/product_insert", (req, res) => {
    res.render("product_insert");
});
router.post("/p_insert", upload.single("product_img"), (req, res) => {
    let param = JSON.parse(JSON.stringify(req.body));
    let img = "uploads/" + req.file.filename;
    let password = param["password"];
    let p_name = param["p_name"];
    let p_store = param["p_store"];
    let p_detail = param["p_detail"];
    let price = param["price"];
    let category = param["category"];
    db.insertProduct(password, img, p_name, p_store, p_detail, price, category, () => {
        res.redirect("/store"); //redirect 에는 / 붙인다
    });
});

//id에 맞는 내용 부르기
router.get("/product_d", (req, res) => {
    let id = req.query.id;
    db.getProductByid(id, (row) => {
        res.render("product_detail", { row: row[0] });
    });
});
router.get("/product_update", (req, res) => {
    res.render("product_update");
});
router.get("/updateP", (req, res) => {
    let id = req.query.id;
    console.log(id);
    //getMemobyId는 그냥 지어준 이름
    db.getProductByid(id, (row) => {
        res.render("product_update", { row: row[0] });
    });
});
router.post("/p_rewrite", upload.single("product_img"), (req, res) => {
    let param = JSON.parse(JSON.stringify(req.body));
    let img = "uploads/" + req.file.filename;
    let id = req.query.id;
    let password = param["password"];
    let p_name = param["p_name"];
    let p_store = param["p_store"];
    let p_detail = param["p_detail"];
    let price = param["price"];
    let category = param["category"];
    db.updateProduct(id, password, img, p_name, p_store, p_detail, price, category, () => {
        res.redirect("/store"); //redirect 에는 / 붙인다
    });
});

//삭제하기======================================================
router.get("/deleteP", (req, res) => {
    let id = req.query.id;
    db.deleteProduct(id, () => {
        res.redirect("/store");
    });
});
// ======================================================
//================================store2===============================================

router.get("/product_insert2", (req, res) => {
    res.render("product_insert2");
});
router.post("/p_insert2", upload.single("product_img"), (req, res) => {
    let param = JSON.parse(JSON.stringify(req.body));
    let img = "uploads/" + req.file.filename;
    let password = param["password"];
    let p_name = param["p_name"];
    let p_store = param["p_store"];
    let p_detail = param["p_detail"];
    let price = param["price"];
    let category = param["category"];
    db.insertProduct2(password, img, p_name, p_store, p_detail, price, category, () => {
        res.redirect("/store"); //redirect 에는 / 붙인다
    });
});

// ======================================================

// ===========================================notice======================================
router.get("/notice", (req, res) => {
    db.getNotice((rows) => {
        res.render("notice", { rows: rows });
    });
});
router.get("/", (req, res) => {
    db.getNotice((rows) => {
        res.render("main", { rows: rows });
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
//=======================login/sign_up===========================================

router.get("/sign_up", (req, res) => {
    db.accountInfo((rows) => {
        res.render("sign_up", { rows: rows }); //ejs의 rows를 받아서 rows라는 이름으로 보낸다
    });
});
router.post("/sign_up_info", (req, res) => {
    let param = JSON.parse(JSON.stringify(req.body));
    let id = param["id"];
    let pw = param["password"];
    let confirmPw = param["confirmPw"];
    let phoneNum = param["phonenumber"];
    console.log(id);
    console.log(pw);
    console.log(confirmPw);
    console.log(phoneNum);
    db.createAccount(id, pw, confirmPw, phoneNum, () => {
        res.redirect("/login");
    });
});
router.get("/login", (req, res) => {
    res.render("login"); //ejs의 rows를 받아서 rows라는 이름으로 보낸다
});
router.post("/login_info", (req, res) => {
    let param = JSON.parse(JSON.stringify(req.body));
    let id = param["id"];
    let pw = param["password"];
    db.loginAccount(id, pw, (results) => {
        //result값이 있으면 complete_login페이지로 가고 없으면 alert이 뜨고 다시 login페이지로 가라
        if (results.length > 0) {
            res.redirect("/");
        } else {
            res.send(`<script>alert('LOGIN INFORMATION IS INVALID');document.location.href="/login"</script>`);
            // res.redirect("login");
        }
    });
});
module.exports = router;

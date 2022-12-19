//실행시켜주는 애
let app = require("../app");
let hostname = "0.0.0.0";
let port = process.env.PORT || 10121;
app.listen(process.env.PORT || port, () => {
    console.log(`Example app listening on port http://${hostname}:${port}/`);
    console.log(`${port}로 express 실행`);
});

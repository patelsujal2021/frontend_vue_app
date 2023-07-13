export default function isLogin({next}) {
    var user_token = localStorage.getItem("stock_management_token");
    if(user_token !== null) {
        return next();
    } else {
        localStorage.removeItem('user_details');
        localStorage.removeItem('stock_management_token');
        return next({ name:"login" });
    }
}
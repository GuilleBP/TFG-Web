const Auth = (asd) => {
        let flag = false;
        localStorage.getItem("token") ? flag = true : flag = false
        return flag
};
export default Auth;
const Logout = (req,res)=>{
    res.clearCookie('jwt');
    res.redirect('/')
}

export default Logout
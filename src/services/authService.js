
export const isUserLogged= () =>{
    if(localStorage.getItem("sessionId")){
        return true
    }
    return false
}
const client_id='7bsvancpl4tio60600pn6hnr58';
const client_secret='1d5bssl48phc3vjfh5ljntkl9b2u6a0r80kit6vg08f9kpf70ch9';
const API_BASE_URL = "https://apidev.facechain.org";
const pathUrl = window.location.pathname;
const baseUrl = window.location.origin;
const pathUrlArray1 = pathUrl.split("/");
const pathUrlArray = pathUrlArray1.filter(function (el) {
    return el != '';
});
var newPath=pathUrlArray.join("/");
localStorage.setItem("client_id",client_id);
localStorage.setItem("client_secret",client_secret);
function getToken(type){
    const API_URL = API_BASE_URL+"/auth/api/access-token?clientId="+client_id+"&clientSecret="+client_secret;
    fetch(API_URL, {
        method: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    }).then(response=>{
        return response.json();
    }).then(function(res){
        console.log('res',res.data.access_token);
        if(type=='login'){
            showFacekiLoginWindow(type,res.data.access_token)
        }else if(type == 'pre_signup'){
            showFacekiPreSignUpWindow(type,res.data.access_token)
        }else if(type == 'signup'){
            pathUrlArray.pop();
            newPath=pathUrlArray.join("/");
            showFacekiSignUpWindow(type,res.data.access_token)
        }
    })
}

function showFacekiLoginWindow(type,token){
    url = baseUrl+'/'+newPath+"/faceki-sign-in.html?route=login&auth="+token;
    window.location.replace(url);
}

function showFacekiPreSignUpWindow(type,token){
    url = baseUrl+'/'+newPath+"/faceki-pre-sign-up.html";
    window.location.replace(url);
}

function showFacekiSignUpWindow(type,token){
    url = baseUrl+'/'+newPath+"/faceki-sign-up.html?route=signup&auth="+token;
    window.location.replace(url);
}


const pathUrl = window.location.pathname;
const baseUrl = window.location.origin;
const pathUrlArray1 = pathUrl.split("/");
const pathUrlArray = pathUrlArray1.filter(function (el) {
    return el != '';
});
pathUrlArray.pop();
const newPath=pathUrlArray.join("/");
const client_id=localStorage.getItem("client_id");
const client_secret=localStorage.getItem("client_secret");
const API_BASE_URL = "https://apidev.facechain.org";

function onSignupFormNext(){
        const API_URL = API_BASE_URL+"/auth/api/access-token?clientId="+client_id+"&clientSecret="+client_secret;
        fetch(API_URL, {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(response=>{
            return response.json()
        }).then(function(res){
            console.log('res2',res.data.access_token);
            localStorage.setItem("firstname", document.querySelector('#fname').value);
            localStorage.setItem("lastname", document.querySelector('#lname').value);
            localStorage.setItem("email_id", document.querySelector('#email_id').value);
            localStorage.setItem("mobile_number", document.querySelector('#mobile_number').value);
            localStorage.setItem("type","signup");
            if(document.querySelector('#fname').value!='' &&
                document.querySelector('#lname').value!='' &&
                document.querySelector('#email_id').value!='' &&
                document.querySelector('#mobile_number').value!=''){
                url = baseUrl+'/'+newPath+"/faceki-sign-in.html?route=signup&auth="+res.data.access_token;
                window.location.replace(url);
            }else{
                alert("fill all information.")
            }
           
        });
    
}

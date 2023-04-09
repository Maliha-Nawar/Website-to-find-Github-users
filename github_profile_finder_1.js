//api.github.com/users/a

let searchBtn=document.querySelector('#searchBtn'), 

searchUser=document.querySelector('#searchUser'),ui=new UI();

searchBtn.addEventListener('click',(e)=>
{let userText=searchUser.value;
if(userText != '')
{//fetch API
fetch
(`https://api.github.com/users/${userText}`)
.then(result=>result.json())
//result (coming from github) will be passed as json
.then(data=>
   { 
    //if data is not found then->
    if (data.message=='Not Found')
    {
        //we will show an alert
        ui.showAlert("User not Found!", "alert alert-danger");
    }  
    else
    {
        //we will show the profile
        ui.showProfile(data);
    }
})

}
else
//if user doesn't type anything
{
    //clear profile
    ui.clearProfile();
}})
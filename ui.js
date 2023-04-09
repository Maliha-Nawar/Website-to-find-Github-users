class UI
{constructor()
    {this.profile=document.querySelector('#profile');
//it will save profile div under itself
          }
          
    showProfile(user) {

        this.clearAlert();
        //it will remove the current alert if there is any

        this.profile.innerHTML = `
        <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-success">Followers: ${user.followers}</span>
            <span class="badge badge-info">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website/Blog: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
        
        `;}
// it will accept user which we will get from API
clearProfile()
{this.profile.innerHTML=''}
//if search button is pressed after keeping the input section empty, it will clear profile data
showAlert(message,className)
{this.clearAlert();
   //it will remove the current alert if there is any
   //'this' is stated to identify that it is in the same class!
  this.clearProfile();
  //to remove the previously found profile!!

 
  let div=document.createElement('div');
div.className=className;
//this created element's className will be className...which will be connected through function variable during function call
// (VVVVVVI) ~~like ui.showAlert("User not Found!", "alert alert-danger");
div.appendChild(document.createTextNode(message));
let searchContainer=document.querySelector('.searchContainer');
//course container~~searchContainer
let title=document.querySelector('.title');
//course search~~title
searchContainer.insertBefore(div,title);
}
//for this showAlert(message,className) function, alert stacks will occur continuosly in user interface after every click...to avoid this->
clearAlert()
{let currentAlert=document.querySelector('.alert');
// (VVVVVVI) ~~like ui.showAlert("User not Found!", "alert alert-danger");
if(currentAlert){currentAlert.remove();}}

}

//for practice purpose, 
// https://api.github.com/users/a/repos
//to get the individual's repository list
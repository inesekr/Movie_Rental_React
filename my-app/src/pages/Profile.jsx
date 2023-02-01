

function Profile () {
  return (
    // <h1>Here will be my profile page</h1>

    <main id="profile-main">
   
    
     <div class="profile-heading">Profile</div>
      
     <div class="profile-info-grid" >
      
        <div class="profile-image-container">
           
          <img class="profile-image" src={require("../icons/default-profile-picture.png")} alt=""/>
        
        </div>
    
        <div class="profile-info" id="profile-info">
        <p>
            <strong>Name:</strong> John
          </p>

          <p>
            <strong>Surname:</strong> Newman
          </p>

          <p>
            <strong>Email:</strong> john.newman@gmail.com
          </p>
        </div>
      </div>
    <div class="buttons">
      <button class="button" id="reset-password">Reset password</button>
      <button class="button" id="reset-email">Reset email</button>
    </div>
   
  </main>

  );
};

export default Profile;
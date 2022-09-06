<template>
  <div class="user-settings">
    <div class="profile-darkButton">
      <div class="user-profile">
        <img src="images/profile-pic.png" alt="">
        <div>
          <p> Alex Carry</p>
          <a href="#">See your profile</a>
        </div>
      </div>
      <div id="dark-button" onclick="darkModeON()">
        <span></span>
      </div>
    </div>
    <hr>
    <div class="user-profile">
      <img src="images/feedback.png" alt="">
      <div>
        <p> Give Feedback</p>
        <a href="#">Help us to improve</a>
      </div>
    </div>
    <hr>
    <div class="settings-links">
      <img src="images/setting.png" alt="" class="settings-icon">
      <a href="#">Settings & Privary <img src="images/arrow.png" alt=""></a>
    </div>

    <div class="settings-links">
      <img src="images/help.png" alt="" class="settings-icon">
      <a href="#">Help & Support <img src="images/arrow.png" alt=""></a>
    </div>

    <div class="settings-links">
      <img src="images/Display.png" alt="" class="settings-icon">
      <a href="#">Display & Accessibility <img src="images/arrow.png" alt=""></a>
    </div>

    <div class="settings-links">
      <img src="images/logout.png" alt="" class="settings-icon">
      <a href="#">Logout <img src="images/arrow.png" alt=""></a>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="css" scoped>
.user-settings {
    position: absolute;
    right: 5%;
    background: var(--bg-color);
    top: 110%;
    max-width: 350px;
    width: 90%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
    border-radius: 4px;
    overflow: hidden;
    max-height: 0px;
    transition: max-height 0.3s;
}

.user-setting-showup-toggle {
    max-height: 439px;
}

.user-settings .user-profile {
    padding: 20px;
}

.user-profile div p {
    color: #6a6a6a;
    font-weight: 600;
}

.user-settings .user-profile a {
    font-size: 13px;
    text-decoration: none;
    color: #626262;
}

.user-settings hr {
    width: 90%;
    margin: auto;
    background: #dbdbdb;
    border: 0px;
    height: 1px;
}

.settings-links {
    display: flex;
    align-items: center;
    margin: 15px 20px 25px 20px;
}

.settings-links img {
    width: 38px;
    margin-right: 10px;
}

.settings-links a img {
    width: 7px;
}

.settings-links a {
    color: #626262;
    flex: 1;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.profile-darkButton {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

div#dark-button {
    background: #ccc;
    margin-right: 20px;
    padding: 2px 3px;
    border-radius: 15px;
    width: 45px;
    cursor: pointer;
}

div#dark-button span {
    background: var(--bg-color);
    border-radius: 50%;
    width: 18px;
    height: 18px;
    display: block;
}

div#dark-button.dark-mode-on {
    background: #464545;
    padding: 2px 22px;
}

.btn-LoadMore.loadMoreToggle {
    background: red;
    color: white;
}

/* --------------profile-page-------------- */

img.coverImage {
    overflow: hidden;
    width: 100%;
    border-radius: 6px;
    margin-bottom: 20px;
}

.profile-container {
    padding: 20px 15%;
    color: #626262;
}

.left-dashboard {
    display: flex;
    align-items: center;
}

.left-dashboard .dashboard-img {
    width: 100px;
    margin-right: 15px;
    border-radius: 10px;
}

.dashboard {
    padding: 15px;
    background: var(--bg-color);
    justify-content: space-between;
    display: flex;
    border-radius: 5px;
}

.mutual-friend-images img {
    width: 25px;
    border-radius: 50%;
}

.left-dashboard-info h3 {
    font-size: 25px;
}

.left-dashboard-info p {
    font-size: 13px;
    margin-bottom: 12px;
}

.right-dashboard-info-top {
    display: flex;
    align-items: center;
}

.right-dashboard-info-top button,
.right-div-single-logo {
    padding: 5px;
    border-radius: 5px;
    margin-left: 8px;
    font-size: 15px;
    border: none;
    cursor: pointer;
}

.right-dashboard-info-top button:nth-child(2) {
    background: #1876f2;
    color: white;
}

.right-div-single-logo {
    align-self: end;
    font-size: 18px;
    margin-top: 16px;
    padding: 2px 16px;
    background: #EFEFEF;
}

.right-dashboard-info {
    display: flex;
    flex-direction: column;
}

.container.content-profile-container {
    padding: 25px 0px;
}

.left-sidebar.profile-left-sidebar {
    flex-basis: 32%;
}

.content-area.profile-content-area {
    flex-basis: 65%;
}

.left-profile-sidebar-top {
    background: var(--bg-color);
    padding: 15px 15px 30px 15px;
    border-radius: 5px;
}

.intro-bio h4 {
    font-weight: 600;
    font-size: 18px;
}

.intro-bio p {
    font-size: 16px;
    text-align: center;
    margin: 5px;
}

.intro-bio i {
    color: rgb(255, 196, 0);
}

.intro-bio hr {
    border: 0px;
    margin: 20px auto;
    height: 1px;
    background: #ccc;
}

.background-details a {
    display: flex;
    color: #636362;
    text-decoration: none;
    font-size: 15px;
    align-items: center;
    margin-top: 20px;
}

.background-details a i {
    margin-right: 10px;
}
.left-profile-sidebar-top.gallery{
    margin-top:18px
}
.gallery-photos-rowFirst {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
}

.gallery-photos-rowFirst img {
    width: 100%;
    border-radius: 10px;
}
.gallery-photos-rowFirst div p {
    font-size: 14px;
}
</style>
<template>
  <div>
    <nav>
  <div class="nav-wrapper pur">
    <a href="#!" class="brand-logo">Logo</a>
    <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
    <ul class="right hide-on-med-and-down">
      <li><a href="./home.html">Home</a></li>
      <li><a href="./profile.html">Profile</a></li>
      <li><a href="./price.html">price</a></li>
      <li><a href="./payment.html">payment</a></li>
      <li><a href="./support.html">Online Support</a></li>
      <li><a id="signout">Sign Out</a></li>
    </ul>
  </div>
</nav>

<ul class="sidenav" id="mobile-demo">
  <li>
    <div class="user-view">
      <div class="background">
        <div class="pur" style=" height: 100%;"></div>
      </div>
      <a href=""><img id="profileImg" class="circle" src="@/assets/profile.png"></a>
      <a href="#name"><span class="white-text name"></span></a>
      <a href="#email"><span class="white-text email" id="usermail"></span></a>
    </div>
  </li>
  <li><a href="./home.html">Home</a></li>
  <li><a href="./profile.html">Profile</a></li>
  <li><a href="./price.html">price</a></li>
  <li><a href="./payment.html">payment</a></li>
  <li><a href="./support.html">Online Support</a></li>
  <li class="page-footer"><a class="btn pur" id="signout2">Sign Out</a></li>
</ul>

<body class="grey lighten-2">
  <p class="center hide-on-med-and-down">You currently signed in as <span class="blue-text" id="usermail2"></span></p>

  <section>


    <div class="input-field col " style="margin: 3rem;">
      <select class="icons" id="plan">
        <option value="" disabled selected>free Sem plan</option>
        <option value="basic" class="left">Basic Sem Plan</option>
        <option value="premium" class=" left">Premium Sem plan</option>
      </select>
      <label>Select Your Sem Plan</label>
    </div>

    <div class="input-field" style="margin: 3rem;">
      <input id="email" type="text" placeholder="Email" class="validate" required>
      <label for="email">Email</label>
    </div>

    <div class="input-field" style="margin: 3rem;">
      <input id="fullName" type="text" placeholder="full Name" class="validate" required>
      <label for="fullName">Full Name</label>
    </div>

    <div class="input-field" style="margin: 3rem;">
      <input id="phoneNum" type="text" placeholder="phone Number" class="validate" required>
      <label for="phoneNum">Phone Number</label>
    </div>




    <div class="row center">
      <a class="waves-effect waves-pur btn btn-large pur-text white " id="payment"
        style="border-radius: 5rem; width: 10rem;">Pay</a>
    </div>
  </section>


</body>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
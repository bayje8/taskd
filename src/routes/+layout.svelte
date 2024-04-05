
<style>
    /* Reset styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  /* Global styles */
  body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
  }
  
  .container {
    width: 80%;
    margin: 0 auto;
  }
  
  /* Header styles */
  header {
    background: #c5f6e7;
    color: #fff;
    padding: 20px 0;
      display: flex;
  align-items: center;
  }
  
  header h1 {
    font-size: 2em;
  }
  
  /* Navigation styles
  nav {
    background: #f4f4f4;
  } */
  
  nav ul {
    list-style: none;
    display: flex;
  }
  
  nav ul li {
    margin-right: 20px;
  }
  
  nav ul li a {
    color: #fff;
    text-decoration: none;
  }
  
  /* Hero section styles */
  .hero {
    background: #f4f4f4;
    text-align: center;
    padding: 50px 0;
  }
  
  .hero h2 {
    font-size: 2em;
  }
  
  .hero p {
    margin-bottom: 20px;
  }
  
  .btn {
    display: inline-block;
    background: #333;
    color: #fff;
    padding: 10px 20px;
    text-decoration: none;
  }
  
  .btn:hover {
    background: #555;
  }
  
  /* Features section styles */
  .features {
    padding: 50px 0;
  }
  
  .features h2 {
    text-align: center;
    margin-bottom: 30px;
  }
  
  .feature {
    text-align: center;
    margin-bottom: 30px;
  }
  
  .feature h3 {
    font-size: 1.5em;
  }
  
  /* Footer styles */
  footer {
    background: #17a2b8;
    color: #fff;
    text-align: center;
    padding: 20px 0;
  }

  img {
  object-fit: cover;
  width: 50%;
  height: 50%;
}
  .logocontainer {
  width: 300px; 
  height: 150px;
}

.logocontainer,
.logocontainer + a {
  display: inline-block;
}

</style>

<header>
    <nav>
    <div>
    <div class="logocontainer">
        <a href='/'><img src="/images/TASKd.png" alt="Home"></a>
        </div>
        <a href='/postjob'>Post Job</a>
        <a href='/browsejob'>Browse Job</a>
        <a href='/browsefreelancer'>Browse Freelancer</a>
        <a href='/about'>About</a>
        </div>
    </nav>
  </header>

<slot />

<footer>
    <div class="container">
    <p>Follow us on:-</p>
    <a href='https://twitter.com/j_balachandar'>Medium</a>
    <a href='https://twitter.com/j_balachandar'>X</a>
    <a href='https://twitter.com/j_balachandar'>Open Chat</a>
    <a href='https://twitter.com/j_balachandar'>Telegram</a>
    <a href='https://twitter.com/j_balachandar'>Discord</a>
    <a href='https://twitter.com/j_balachandar'>Facebook</a>
    <p>Thank you for visting TASKd. We encourage people to share this other OGs in the community and get it popular.</p>
    </div>
</footer>

import React from 'react';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header>
        <h1>Welcome to Our Blogging Platform</h1>
        <p>Where your thoughts and ideas come to life.</p>
      </header>
      <section>
        <h2>Discover and Share</h2>
        <p>Explore a world of diverse blogs and share your own.</p>
      </section>
      <section>
        <h2>Join Us Today</h2>
        <p>Create an account to start sharing your blogs with the world.</p>
        <a href="/signup">Sign Up</a>
      </section>
    </div>
  );
};

export default LandingPage;
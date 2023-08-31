import React from 'react';
import Navigation from './Navigation'

function HomePage() {
  console.log("HomePage rendered")
  return (
    <div>
      <Navigation />
      <h1 className="text-3xl">Welcome to the Homepage</h1>
    </div>
  );
}

export default HomePage;
import React from 'react'

function Home() {
  return (
    <div className="glasscard" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2rem", padding: "2rem" }}>
      <h1>Welcome to the Home Page</h1>
      <form style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem", maxWidth: "400px" }}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" />

        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </form>
    </div>
  )
}

export default Home

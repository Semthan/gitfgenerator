import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <img src="" alt="" />

      <h2>Holiday Gift Generator</h2>

      <Link to="/age" className="btn btn-secondary">
          Start
      </Link>
    </div>
  );
}

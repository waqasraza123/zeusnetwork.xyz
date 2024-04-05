import React from 'react';
import logo from '../assets/images/zeus-logo-primary.svg';

function Header() {
  return (
    <header className="text-primary py-4 header-navbar">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Primary Zeus Logo" className="h-8 mr-4" />
          <nav>
            <a href="#network" className="mr-4 text-primary">How Zeus Works</a>
            <a href="#investors" className="mr-4 text-primary">Backers</a>
            <a href="#why" className="mr-4 text-primary">Why Zeus</a>
            <a href="#ecosystem" className="mr-4 text-primary">Ecosystem</a>
            <a href="https://docs.zeusnetwork.xyz text-primary">Docs</a>
          </nav>
        </div>
        <a href="https://apollo.zeusnetwork.xyz" className="flex items-center">
          <div className="rounded-full border-gradient-color border-2 border-linear-gradient-color animate-pulse text-sm mr-2 px-4 py-1 text-primary">
            Beta
          </div>

          <span>Apollo Testnet is Live</span>
          <div className="ml-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 5C9.44772 5 9 5.44772 9 6C9 6.55228 9.44772 7 10 7H15.5858L5.29289 17.2929C4.90237 17.6834 4.90237 18.3166 5.29289 18.7071C5.68342 19.0976 6.31658 19.0976 6.70711 18.7071L17 8.41421V14C17 14.5523 17.4477 15 18 15C18.5523 15 19 14.5523 19 14V6C19 5.44772 18.5523 5 18 5H10Z" fill="currentColor"></path>
            </svg>
          </div>
        </a>
      </div>
    </header>
  );
}

export default Header;
import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
        <ul>
        <a href='/home'><li>HOME</li></a>
       </ul>
        Import
       <ul>
        <a href='/s'><li>Category</li></a>
        <a href='/c'><li>Add Products</li></a>
       </ul>
       Checkout
       <ul>
       <a href="/sview"><li>Added Categories</li></a>
       <a href="/viewdetails"><li>View Products</li></a>
      
      </ul>
      
    </div>
  );
};

export default Sidebar;
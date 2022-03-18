import React from 'react';
import { RepositoryItem } from './components/RepoItem';
import { Repository } from './components/Repository';

import logoImg from './assets/image.png'

export function App() {
  return (
    <>
    <div className="header">
     <img src={logoImg} alt="github-logo" />
      <h1>Explore</h1> 
    </div>   

     <Repository /> 
     </>
  );
}


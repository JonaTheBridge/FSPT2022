import React from 'react';
import ReactDOM from "react-dom/client";
import './styles.scss';
import { GenerateBoard } from './elements/reusables/map';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GenerateBoard />
  </React.StrictMode>
);
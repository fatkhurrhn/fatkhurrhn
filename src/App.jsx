import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Tes from './PagesCoding/Tes';
import HomePage from './PagesCoding/HomePage';
import Project from './PagesCoding/Project';
import Certificate from './PagesCoding/Certificate';
import Writing from './PagesCoding/Writings';
import Guestbook from './PagesCoding/Guestbook';

import Writings1 from './PagesCoding/DetailWritings/tailwind-ui-is-now-tailwind-plus';

import Home from './Home';
import Template from './Template';
import Tess from './tes';
import Maintenance from './Maintenance';

import Creator from "./PagesCreator/HomePage";
import MentahanVideo from "./PagesCreator/MentahanVideo";
import MentahanFoto from "./PagesCreator/MentahanFoto";
import Product from "./PagesCreator/Product";

import Store from "./PageStore/HomePage";
import DataCustomer from "./PageStore/DataCustomer";
import DetailNetflix from "./PageStore/DetailNetflix";
import CoomingSoon from "./PageStore/ComingSoon";
import DetailPulsa from "./PageStore/DetailPulsa";
import DetailDM from "./PageStore/DetailDiamondML";
import DetailCanva from "./PageStore/DetailCanva";
import DetailCapcut from "./PageStore/DetailCapcut";
import DetailAM from "./PageStore/DetailAlightMotion";
import DetailBS from "./PageStore/DetailBstation";
import DetailYT from "./PageStore/DetailYoutube";
import DetailViu from "./PageStore/DetailViu";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/tes" element={<Tess />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/project" element={<Project />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/writings" element={<Writing />} />
        <Route path="/guestbook" element={<Guestbook />} />

        <Route path="/writings/tailwind-ui-is-now-tailwind-plus" element={<Writings1 />} />

        <Route path="/links" element={<Home />} />
        <Route path="/template" element={<Template />} />
        <Route path="/" element={<Maintenance />} />
        
        <Route path="/creator" element={<Creator />} />
        <Route path="/creator/product/mentahan-video" element={<MentahanVideo />} />
        <Route path="/creator/product/mentahan-foto" element={<MentahanFoto />} />
        <Route path="/creator/product" element={<Product />} />

        <Route path="/store" element={<Store />} />
        <Route path="/store/customer" element={<DataCustomer />} />
        <Route path="/store/netflix" element={<DetailNetflix />} />
        <Route path="/store/coming-soon" element={<CoomingSoon />} />
        <Route path="/store/pulsa" element={<DetailPulsa />} />
        <Route path="/store/diamond-ml" element={<DetailDM />} />
        <Route path="/store/canva" element={<DetailCanva />} />
        <Route path="/store/capcut" element={<DetailCapcut />} />
        <Route path="/store/alight-motion" element={<DetailAM />} />
        <Route path="/store/bstation" element={<DetailBS />} />
        <Route path="/store/youtube" element={<DetailYT />} />
        <Route path="/store/viu" element={<DetailViu />} />
      </Routes>
    </Router>
  );
}

export default App;

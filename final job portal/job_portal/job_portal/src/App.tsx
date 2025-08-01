import { createTheme, MantineProvider} from '@mantine/core';
import '@mantine/core/styles.css';
import './App.css';
import HomePage from './Pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Findjob from './Pages/Findjob';
import Header from './Header/header';
import Footer from './Footer/Footer';
import FindTalent from './Pages/FindTalent';
import PostJob from './Pages/PostJob';
import AboutUs from './Pages/AboutUs';
import ApplyJob from './Pages/ApplyJob';

export default function App() {
  const theme = createTheme({
    colors:{
      'bright-sun': ['#fffbeb','#fff3c6','#ffe588','#ffd149','#ffbd20','#f99b07','#dd7302','#b75006','#943c0c','#7a330d','#461902',],
      'mine-shaft': ['#f6f6f6','#e7e7e7','#d1d1d1','#b0b0b0','#888888','#6d6d6d','#5d5d5d','#4f4f4f','#454545','#3d3d3d','#2d2d2d',]
    }
  })
  return (
    <MantineProvider theme={theme}>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/find-jobs' element={<Findjob/>}/>
        <Route path='/find-talents' element={<FindTalent/>}/>
        <Route path='/post-jobs' element={<PostJob/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path="/apply/:jobId" element={<ApplyJob />} />
        <Route path='*' element={<HomePage/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </MantineProvider>
  );
}
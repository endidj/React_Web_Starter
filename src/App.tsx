
import React from "react";
import './styles/App.css';
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";


import styled from 'styled-components';
import { Sidebar } from "./components/Layout/Sidebar";
import { Header } from "./components/Layout/Header"
import { Home } from "./pages/Home";
import { First } from "./pages/First";
import { Second } from './pages/Second';
import { Outlet } from "react-router-dom"; //외부 컨테이너 소환
import { Footer } from "./components/Layout/Footer";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 900px;
`
const Center = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
`
const Contents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const Spacer = styled.div`
  flex-grow: 1;
`

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Layout>
          <Center>
            <Sidebar/>
            <Contents>
                <Routes>
                  <Route path="/" element={ <Home/> } />
                  <Route path="/first" element={ <First/> } />
                  <Route path="/second" element={ <Second/> } />
                  
                  <Route path="/third/*" element={ <>중첩 Router를 테스트합니다. 주소뒤에 /(아무거나) 입력해주세요. <Outlet/></> }>
                    <Route path=":id" element={ <> <br/>[ 입력했습니다. ]</> } />
                  </Route>
                  <Route path="/*" element={ <>잘못된 url입니다.</>} />
                </Routes>
                <Spacer/>
                <Footer/>
            </Contents>
          </Center>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;

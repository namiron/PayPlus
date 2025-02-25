import React from "react";


import Header from "../widgets/header/Header";
import Main from "../widgets/main/Main";
import Footer from "../widgets/footer/Footer";
import WrapperLayout from "../widgets/layouts/wrapper-layout";

const App:React.FC=()=> {
  return <WrapperLayout>
    <Header/>
    <Main/>
    <Footer/>
  </WrapperLayout>;
}

export default App;

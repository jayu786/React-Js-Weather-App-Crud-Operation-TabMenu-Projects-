import React from "react";
import Tabs from "./component/TabMenu/Tabs";
import GalleryReact from "./component/TabMenu/GalleryReact";
import Todo from "./component/TodoProject/Todo";
import Weather from "../src/component/weather/Temp";

const App = () => {
  return (
    <>
      <Weather />
      {/* 
       <Todo />
       <GalleryReact />      
       
         <Tabs />
       */}
    </>
  );
};

export default App;

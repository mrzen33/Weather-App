"use client";
import { useState } from 'react';
import App from '@/component/App'; 

export default function Home() {
  const [background, setBackground] = useState();
  const app_props = {
    setBackground: setBackground
  }

  return (
    <div className="">
      <App {...app_props}>
        <></>
      </App> 
    </div>
  )
}

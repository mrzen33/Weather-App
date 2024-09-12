"use client";
import { useState } from 'react';
import App from '@/component/App';
import cloudy from './cloudy.jpg'

export default function Home() {
  const [background, setBackground] = useState('');
  const app_props = {
    setBackground: setBackground
  }


  return (
    <div className="vw-100 vh-100" style={{
      backgroundImage: background, backgroundSize: 'cover'
    }}>

      <App {...app_props}>
        <></>
      </App>
    </div>
  )
}

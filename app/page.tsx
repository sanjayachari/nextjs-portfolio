import Header from './components/Header.jsx'
import About from './components/About.jsx'
import Project from './components/Project.jsx'
import Resume from './components/Resume.jsx'
import Experience from './components/Experience';
import "./components/header.css";
import ProductOverview from './components/ProductOverview';
// import Contact from './components/Contact';
import AnimatedCursor from "react-animated-cursor"

export default function Home() {
  return (
    <main className="fo h-full w-full">
      <AnimatedCursor
 innerSize={8}
 outerSize={35}
 innerScale={1}
 outerScale={1.7}
//  outerAlpha={0}
 outerStyle={{
   border: '3px solid var(--cursor-color)'
 }}
 
//  innerStyle={{
//    backgroundColor: 'var(--cursor-color)'
//  }}      
/>
    <Header/>
    <div className="bg-[#0C0C0C] md:p-5 p-0">

    <About />
    </ div>
    <Experience/>
    <ProductOverview/>
    <Project/>
    {/* <Contact/> */}
    <Resume/>

    </main>
  );
}

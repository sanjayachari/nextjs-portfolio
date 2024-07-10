import Header from './components/Header.jsx'
import About from './components/About.jsx'
import Project from './components/Project.jsx'
import Resume from './components/Resume.jsx'
import Experience from './components/Experience';
import "./components/header.css";
import ProductOverview from './components/ProductOverview';

export default function Home() {
  return (
    <main className="fo h-full w-full">

    <Header/>
    <div className="bg-[#0C0C0C] md:p-5 p-0">

    <About />
    </ div>
    <Experience/>
    <ProductOverview/>
    <Project/>
    <Resume/>

    </main>
  );
}

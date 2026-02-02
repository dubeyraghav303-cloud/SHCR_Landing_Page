import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Architecture from '../components/Architecture';
import Demo from '../components/Demo';
import Download from '../components/Download';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';

const Home = () => {
    return (
        <div className="relative min-h-screen text-white">
            <AnimatedBackground />
            <Navbar />
            <main>
                <Hero />
                <Features />
                <Architecture />
                <Demo />
                <Download />
            </main>
            <Footer />
        </div>
    );
};

export default Home;

'use client';

import React, { useState, useEffect, useRef } from 'react';

const AliceStudiosPortfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const [currentExpertSlide, setCurrentExpertSlide] = useState(0);
  const statsRef = useRef(null);
  
  // Expert data
  const experts = [
    {
      name: "Codie Sanchez",
      handle: "@CodieSanchezCT", 
      subscribers: "1.49M subscribers",
      avatar: "👩‍💼"
    },
    {
      name: "Mike Posner",
      handle: "@MikePosner",
      subscribers: "3.5M subscribers", 
      avatar: "👨‍🎤"
    },
    {
      name: "Dr. Izzy Sealey",
      handle: "@IzzySealey",
      subscribers: "675K subscribers",
      avatar: "👩‍⚕️"
    },
    {
      name: "Neil Patel", 
      handle: "@NeilPatel",
      subscribers: "1.35M subscribers",
      avatar: "👨‍💼"
    },
    {
      name: "Ali Abdaal",
      handle: "@aliabdaal",
      subscribers: "5.93M subscribers",
      avatar: "👨‍💻"
    },
    {
      name: "Chris Williamson",
      handle: "@ChrisWillx", 
      subscribers: "2.91M subscribers",
      avatar: "🎙️"
    },
    {
      name: "Beast Philanthropy",
      handle: "@BeastPhilanthropy",
      subscribers: "26.4M subscribers",
      avatar: "🤝"
    },
    {
      name: "Emma Chamberlain",
      handle: "@emmachamberlain",
      subscribers: "11.9M subscribers", 
      avatar: "👩‍🎨"
    }
  ];

  const nextSlide = () => {
    setCurrentExpertSlide((prev) => (prev + 1) % experts.length);
  };

  const prevSlide = () => {
    setCurrentExpertSlide((prev) => (prev - 1 + experts.length) % experts.length);
  };

  // Get 4 visible experts based on current slide
  const getVisibleExperts = () => {
    const visibleExperts = [];
    for (let i = 0; i < 4; i++) {
      const index = (currentExpertSlide + i) % experts.length;
      visibleExperts.push(experts[index]);
    }
    return visibleExperts;
  };

  // Automatically scroll up after 8 seconds on front page
  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  // Stats section intersection observer for counter animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isStatsVisible) {
          setIsStatsVisible(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [isStatsVisible]);

  type ButtonProps = {
    children: React.ReactNode;
    className?: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    variant?: 'primary' | 'secondary' | 'outline';
  };
  const Button = ({ children, className = '', onClick, variant = 'primary' }: ButtonProps) => {
    const baseClasses = 'px-8 py-4 font-semibold transition-all duration-300 rounded-lg';
    let variantClasses = '';
    
    switch(variant) {
      case 'primary':
        variantClasses = 'bg-red-600 text-white hover:bg-red-700 shadow-lg hover:shadow-red-500/25';
        break;
      case 'secondary':
        variantClasses = 'bg-transparent text-white border-2 border-white hover:bg-white hover:text-black';
        break;
      case 'outline':
        variantClasses = 'bg-transparent border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white';
        break;
    }

    return (
      <button
        className={`${baseClasses} ${variantClasses} ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  };

  type ServiceCardProps = {
    title: string;
    description: string;
    icon: React.ReactNode;
  };
  const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
    return (
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-red-500 hover:shadow-lg hover:shadow-red-500/10 transition-all duration-500 group">
        <div className="text-center">
          <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{icon}</div>
          <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
          <p className="text-gray-400 leading-relaxed">{description}</p>
        </div>
      </div>
    );
  };

  type CountingNumberProps = {
    end: number;
    suffix?: string;
    duration?: number;
  };
  const CountingNumber = ({ end, suffix = '', duration = 2000 }: CountingNumberProps) => {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
      if (isStatsVisible && !hasStarted) {
        setHasStarted(true);
        let startTime: number | undefined;
        const animate = (currentTime: number) => {
          if (!startTime) startTime = currentTime;
          const progress = (currentTime - startTime) / duration;
          if (progress < 1) {
            setCount(Math.floor(end * progress));
            requestAnimationFrame(animate);
          } else {
            setCount(end);
          }
        };
        requestAnimationFrame(animate);
      }
  }, [end, duration, hasStarted]);

    return <span>{count}{suffix}</span>;
  };

  type StatCardProps = {
    number: number;
    suffix?: string;
    label: string;
  };
  const StatCard = ({ number, suffix = '', label }: StatCardProps) => {
    return (
      <div className="text-center p-6 bg-gray-900 rounded-lg border border-gray-800 hover:border-red-500 transition-all duration-300">
        <div className="text-4xl font-bold text-red-500 mb-2">
          <CountingNumber end={number} suffix={suffix} duration={2000} />
        </div>
        <div className="text-gray-300 font-medium">{label}</div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        @keyframes hop {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .rabbit-hop {
          animation: hop 0.6s ease-in-out;
        }
      `}</style>
      {/* Logo Only - Top Left */}
      <div className="fixed top-8 left-8 z-40">
        <div className="text-4xl font-light text-white tracking-wide" style={{fontFamily: 'Helvetica Neue, Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em'}}>
          ALICE STUDIOS
        </div>
      </div>

      {/* Hero Section with Full Background Video */}
      <section className="h-screen relative overflow-hidden">
        {/* Full Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <video 
            className="w-full h-full object-cover"
            src="/video.mp4"
            autoPlay 
            muted 
            loop
            playsInline
          >
            Your browser does not support the video tag.
          </video>
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 h-screen flex items-center justify-center px-6">
          <div className="max-w-7xl mx-auto w-full">
            <div className="text-center">
              {/* Main Heading */}
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-tight">
                <span className="text-white">Creative</span>
                <br />
                <span className="text-red-500">Digital Studio</span>
              </h1>
              
              {/* Subheading */}
              <p className="text-xl md:text-2xl text-white mb-12 leading-relaxed max-w-4xl mx-auto font-medium">
                We help creators and businesses grow their digital presence through strategic content creation, 
                YouTube channel growth, and innovative web solutions.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button 
                  onClick={() => setActiveSection('services')}
                  className="relative bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-12 py-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-red-500/25 group overflow-hidden"
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="flex flex-col items-start transition-transform duration-300 group-hover:-translate-x-4">
                      <span className="text-lg font-bold">RESERVE YOUR SPOT</span>
                      <div className="flex items-center gap-2 text-sm opacity-90">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span>2 slots left for Aug</span>
                      </div>
                    </div>
                    <div className="bg-white/20 rounded-full p-2 group-hover:bg-white/30 transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-white/5 to-red-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                </button>
                <Button 
                  variant="secondary" 
                  onClick={() => setActiveSection('contact')}
                  className="text-lg px-10 py-5"
                >
                  Get In Touch
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Moving Logos Section */}
      <section className="bg-gray-950/95 py-8 overflow-hidden border-y border-gray-800/50">
        <div className="flex animate-scroll">
          <div className="flex items-center space-x-20 whitespace-nowrap">
            {/* First set of logos */}
            <div className="text-xl font-light text-gray-400 tracking-widest opacity-70 hover:opacity-100 transition-opacity duration-300">NETFLIX</div>
            <div className="text-xl font-light text-gray-400 tracking-widest opacity-70 hover:opacity-100 transition-opacity duration-300">SPOTIFY</div>
            <div className="text-xl font-light text-gray-400 tracking-widest opacity-70 hover:opacity-100 transition-opacity duration-300">ADOBE</div>
            <div className="text-xl font-light text-gray-400 tracking-widest opacity-70 hover:opacity-100 transition-opacity duration-300">MICROSOFT</div>
            <div className="text-xl font-light text-gray-400 tracking-widest opacity-70 hover:opacity-100 transition-opacity duration-300">GOOGLE</div>
            <div className="text-xl font-light text-gray-400 tracking-widest opacity-70 hover:opacity-100 transition-opacity duration-300">APPLE</div>
            <div className="text-xl font-light text-gray-400 tracking-widest opacity-70 hover:opacity-100 transition-opacity duration-300">TESLA</div>
            <div className="text-xl font-light text-gray-400 tracking-widest opacity-70 hover:opacity-100 transition-opacity duration-300">META</div>
            
            {/* Duplicate set for seamless loop */}
            <div className="text-xl font-light text-gray-400 tracking-widest opacity-70 hover:opacity-100 transition-opacity duration-300 ml-20">NETFLIX</div>
            <div className="text-xl font-light text-gray-400 tracking-widest opacity-70 hover:opacity-100 transition-opacity duration-300">SPOTIFY</div>
            <div className="text-xl font-light text-gray-400 tracking-widest opacity-70 hover:opacity-100 transition-opacity duration-300">ADOBE</div>
            <div className="text-xl font-light text-gray-400 tracking-widest opacity-70 hover:opacity-100 transition-opacity duration-300">MICROSOFT</div>
            <div className="text-xl font-light text-gray-400 tracking-widest opacity-70 hover:opacity-100 transition-opacity duration-300">GOOGLE</div>
            <div className="text-xl font-light text-gray-400 tracking-widest opacity-70 hover:opacity-100 transition-opacity duration-300">APPLE</div>
            <div className="text-xl font-light text-gray-400 tracking-widest opacity-70 hover:opacity-100 transition-opacity duration-300">TESLA</div>
            <div className="text-xl font-light text-gray-400 tracking-widest opacity-70 hover:opacity-100 transition-opacity duration-300">META</div>
          </div>
        </div>
      </section>

      {/* Stats Section with Rolling Counters */}
      <section ref={statsRef} className="py-20 px-6 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <StatCard number={100} suffix="+" label="Projects Completed" />
            <StatCard number={50} suffix="+" label="Happy Clients" />
            <StatCard number={1} suffix="M+" label="Views Generated" />
            <StatCard number={5} suffix="+" label="Years Experience" />
          </div>
        </div>
      </section>

     

      {/* YouTube Video Section */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-wide">
              SEE OUR WORK IN ACTION
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Watch how we&apos;ve helped creators achieve 4x growth in their subscriber base through our proven strategies and creative solutions.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-red-500/20 border border-gray-800 hover:border-red-500 transition-all duration-500">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Alice Studios - 4x Your Subscriber Base"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-4 bg-gray-900 rounded-full px-6 py-3 border border-gray-700">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-gray-300 font-medium">Live Case Study: 4x Subscriber Growth</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AliceStudiosPortfolio;
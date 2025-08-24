'use client';

import React, { useState, useEffect, useRef } from 'react';

const AliceStudiosPortfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const statsRef = useRef(null);
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
      {/* Navigation */}
      <nav className="bg-black/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-40 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-white">
            ALICE STUDIOS
          </div>
          <div className="hidden md:flex gap-2">
            {['Home', 'Services', 'About', 'Portfolio', 'Contact'].map((item) => (
              <button
                key={item}
                className={`px-6 py-2 font-medium transition-all duration-300 rounded-lg ${
                  activeSection === item.toLowerCase() 
                    ? 'bg-red-600 text-white' 
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
                onClick={() => setActiveSection(item.toLowerCase())}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section with Full Background Video */}
      <section className="min-h-screen relative overflow-hidden">
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
        <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
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
                <Button 
                  variant="primary" 
                  onClick={() => setActiveSection('services')}
                  className="text-lg px-10 py-5"
                >
                  View Our Services
                </Button>
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

      {/* Services Section */}
      <section className="py-20 px-6 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center text-white mb-4">
            Our Services
          </h2>
          <p className="text-center text-gray-400 mb-16 text-lg max-w-2xl mx-auto">
            We offer comprehensive digital solutions to help you succeed in the online world
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="YouTube Growth"
              icon="📺"
              description="Transform your YouTube channel with proven strategies that drive subscriber growth, increase engagement, and maximize revenue potential."
            />
            <ServiceCard
              title="Content Creation"
              icon="🎬"
              description="Professional video production, editing, and content strategy that captivates audiences and builds lasting connections with your brand."
            />
            <ServiceCard
              title="Web Development"
              icon="💻"
              description="Custom websites and web applications built with modern technologies, optimized for performance, SEO, and user experience."
            />
            <ServiceCard
              title="Brand Identity"
              icon="✨"
              description="Complete brand identity design including logos, visual guidelines, and marketing materials that make your business stand out."
            />
            <ServiceCard
              title="Digital Marketing"
              icon="📈"
              description="Strategic digital marketing campaigns across multiple platforms to grow your audience and drive conversions."
            />
            <ServiceCard
              title="Consulting"
              icon="🎯"
              description="Expert guidance and consulting services to help you navigate the digital landscape and achieve your business goals."
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold text-white mb-6">About Alice Studios</h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                We are a creative digital studio passionate about helping creators and businesses thrive in the digital world. 
                Our team combines technical expertise with creative vision to deliver exceptional results.
              </p>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                From growing YouTube channels from zero to millions of views, to building stunning websites that convert, 
                we&apos;re your partners in digital success.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg border border-gray-800">
                  <div className="text-2xl">🏆</div>
                  <div>
                    <h4 className="font-bold text-white">Award-Winning Work</h4>
                    <p className="text-gray-400 text-sm">Recognized for excellence in digital creative solutions</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg border border-gray-800">
                  <div className="text-2xl">🚀</div>
                  <div>
                    <h4 className="font-bold text-white">Results-Driven</h4>
                    <p className="text-gray-400 text-sm">Focused on delivering measurable growth and success</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg border border-gray-800">
                  <div className="text-2xl">🤝</div>
                  <div>
                    <h4 className="font-bold text-white">Client Partnership</h4>
                    <p className="text-gray-400 text-sm">We work closely with you to achieve your vision</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="text-center p-4 bg-black rounded-lg">
                    <div className="text-3xl font-bold text-red-500">98%</div>
                    <div className="text-gray-400 text-sm">Client Satisfaction</div>
                  </div>
                  <div className="text-center p-4 bg-black rounded-lg">
                    <div className="text-3xl font-bold text-red-500">24/7</div>
                    <div className="text-gray-400 text-sm">Support Available</div>
                  </div>
                  <div className="text-center p-4 bg-black rounded-lg">
                    <div className="text-3xl font-bold text-red-500">2-4</div>
                    <div className="text-gray-400 text-sm">Week Delivery</div>
                  </div>
                  <div className="text-center p-4 bg-black rounded-lg">
                    <div className="text-3xl font-bold text-red-500">100%</div>
                    <div className="text-gray-400 text-sm">Custom Solutions</div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-white font-bold text-xl mb-2">Why Choose Us?</h3>
                  <p className="text-gray-400">We deliver exceptional results through creativity, expertise, and dedication to your success.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-red-900 to-red-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Ready to Grow?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Let&apos;s work together to take your digital presence to the next level. 
            Contact us today to discuss your project and see how we can help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button variant="secondary" className="text-xl px-10 py-5" onClick={() => {}}>Start Your Project</Button>
            <Button variant="outline" className="text-xl px-10 py-5 border-white text-white hover:bg-white hover:text-red-700" onClick={() => {}}>View Portfolio</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Alice Studios</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Creative digital studio specializing in YouTube growth, web development, and brand building.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-red-500 transition-colors">YouTube Growth</a></li>
                <li><a href="#" className="text-gray-400 hover:text-red-500 transition-colors">Content Creation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-red-500 transition-colors">Web Development</a></li>
                <li><a href="#" className="text-gray-400 hover:text-red-500 transition-colors">Brand Identity</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-red-500 transition-colors">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-red-500 transition-colors">Portfolio</a></li>
                <li><a href="#" className="text-gray-400 hover:text-red-500 transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-red-500 transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>hello@alicestudios.com</li>
                <li>+1 (555) 123-4567</li>
                <li>Follow us on social media</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Alice Studios. All rights reserved.
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors text-sm">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AliceStudiosPortfolio;
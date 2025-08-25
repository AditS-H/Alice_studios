'use client';

import React from 'react';

const AliceStudiosPortfolio1 = () => {
  
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

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
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

      {/* Courses Section */}
      <section className="py-20 bg-gradient-to-br from-gray-950 to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-wide">
              LEARN FROM THE <span className="text-red-500">EXPERTS</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Master the art of YouTube growth with our comprehensive courses. Learn the exact strategies that helped us grow channels to millions of subscribers.
            </p>
          </div>

          {/* Course Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Course 1 */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-red-500 hover:shadow-lg hover:shadow-red-500/20 transition-all duration-500 group">
              <div className="relative h-48 bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center">
                <div className="text-6xl text-white/20 group-hover:text-white/30 transition-colors">📈</div>
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  BESTSELLER
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">YouTube Growth Mastery</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Complete blueprint to grow from 0 to 100K subscribers. Algorithm secrets, content strategy, and optimization techniques.
                </p>
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-bold text-white">$297</span>
                    <span className="text-gray-400 line-through">$497</span>
                  </div>
                  <div className="text-sm text-green-400 font-semibold">40% OFF - Limited Time</div>
                </div>
                <ul className="space-y-2 mb-8 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                    8+ Hours of Video Content
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                    Downloadable Resources & Templates
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                    Private Community Access
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                    Lifetime Access & Updates
                  </li>
                </ul>
                <Button variant="primary" className="w-full" onClick={() => {}}>
                  Enroll Now
                </Button>
              </div>
            </div>

            {/* Course 2 */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-red-500 hover:shadow-lg hover:shadow-red-500/20 transition-all duration-500 group">
              <div className="relative h-48 bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center">
                <div className="text-6xl text-white/20 group-hover:text-white/30 transition-colors">🎬</div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Content Creation Pro</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Master video production, storytelling, and editing. Create engaging content that keeps viewers coming back for more.
                </p>
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-bold text-white">$197</span>
                    <span className="text-gray-400 line-through">$297</span>
                  </div>
                  <div className="text-sm text-green-400 font-semibold">Early Bird Price</div>
                </div>
                <ul className="space-y-2 mb-8 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    6+ Hours of Training
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    Editing Software Tutorials
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    Content Planning Worksheets
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    1-on-1 Feedback Session
                  </li>
                </ul>
                <Button variant="outline" className="w-full border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white" onClick={() => {}}>
                  Learn More
                </Button>
              </div>
            </div>

            {/* Course 3 */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-red-500 hover:shadow-lg hover:shadow-red-500/20 transition-all duration-500 group md:col-span-2 lg:col-span-1">
              <div className="relative h-48 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                <div className="text-6xl text-white/20 group-hover:text-white/30 transition-colors">💰</div>
                <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                  NEW
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Monetization Masterclass</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Turn your channel into a profitable business. Sponsorships, merchandise, courses, and multiple revenue streams.
                </p>
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-bold text-white">$397</span>
                  </div>
                  <div className="text-sm text-blue-400 font-semibold">Premium Course</div>
                </div>
                <ul className="space-y-2 mb-8 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    10+ Revenue Strategies
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    Brand Partnership Templates
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    Business Setup Guide
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    Tax & Legal Considerations
                  </li>
                </ul>
                <Button variant="outline" className="w-full border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white" onClick={() => {}}>
                  Coming Soon
                </Button>
              </div>
            </div>
          </div>

          {/* Bundle Offer */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-red-900/50 to-red-800/50 border-2 border-red-500 rounded-2xl p-8 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-red-400/10"></div>
              <div className="relative z-10">
                <div className="inline-block bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                  🔥 LIMITED TIME BUNDLE
                </div>
                <h3 className="text-4xl font-bold text-white mb-4">Complete Creator Bundle</h3>
                <p className="text-xl text-gray-200 mb-6 max-w-2xl mx-auto">
                  Get all three courses plus exclusive bonuses. Everything you need to build a successful YouTube channel from scratch.
                </p>
                <div className="flex items-center justify-center gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-2xl text-gray-400 line-through">$891</div>
                    <div className="text-sm text-gray-400">Individual Price</div>
                  </div>
                  <div className="text-6xl text-red-500">→</div>
                  <div className="text-center">
                    <div className="text-5xl font-bold text-white">$497</div>
                    <div className="text-sm text-green-400 font-semibold">Save $394 (44% OFF)</div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 text-sm">
                  <div className="bg-black/30 rounded-lg p-4 border border-gray-700">
                    <div className="text-white font-semibold mb-2">🎁 Bonus #1</div>
                    <div className="text-gray-300">1-Hour Strategy Call ($500 Value)</div>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4 border border-gray-700">
                    <div className="text-white font-semibold mb-2">🎁 Bonus #2</div>
                    <div className="text-gray-300">Channel Audit & Review ($300 Value)</div>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4 border border-gray-700">
                    <div className="text-white font-semibold mb-2">🎁 Bonus #3</div>
                    <div className="text-gray-300">Private Mastermind Access ($200 Value)</div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="primary" className="text-xl px-12 py-4 bg-red-600 hover:bg-red-700" onClick={() => {}}>
                    Get Bundle Now - $497
                  </Button>
                  <Button variant="secondary" className="text-xl px-12 py-4" onClick={() => {}}>
                    Payment Plan Available
                  </Button>
                </div>
                <div className="mt-4 text-sm text-gray-300">
                  ⏰ Offer expires in 48 hours | 30-day money-back guarantee
                </div>
              </div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="mt-16 text-center">
            <h4 className="text-2xl font-bold text-white mb-8">Join 2,500+ Successful Creators</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold">
                    JD
                  </div>
                  <div>
                    <div className="text-white font-semibold">Jake Davis</div>
                    <div className="text-gray-400 text-sm">Tech Channel • 500K subs</div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed italic">
                  "Went from 10K to 500K subscribers in 8 months using these strategies. The ROI on this course was incredible."
                </p>
                <div className="flex text-yellow-400 mt-3 text-sm">
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    SM
                  </div>
                  <div>
                    <div className="text-white font-semibold">Sarah Miller</div>
                    <div className="text-gray-400 text-sm">Lifestyle Channel • 1.2M subs</div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed italic">
                  "The monetization course alone made me 6 figures this year. Best investment I've made for my business."
                </p>
                <div className="flex text-yellow-400 mt-3 text-sm">
                  ⭐⭐⭐⭐⭐
                </div>
              </div>

              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    MR
                  </div>
                  <div>
                    <div className="text-white font-semibold">Mike Rodriguez</div>
                    <div className="text-gray-400 text-sm">Gaming Channel • 800K subs</div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed italic">
                  "Clear, actionable strategies that actually work. My engagement and subscriber growth skyrocketed!"
                </p>
                <div className="flex text-yellow-400 mt-3 text-sm">
                  ⭐⭐⭐⭐⭐
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

export default AliceStudiosPortfolio1;
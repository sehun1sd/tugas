import React, { useEffect, useRef, useState } from 'react';
import { ShoppingCart, MessageSquare, Camera, Lightbulb } from 'lucide-react';

const Background: React.FC = () => {
  // State untuk mengontrol animasi
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const currentRef = sectionRef.current;

    // Intersection Observer untuk mendeteksi kapan section masuk viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Trigger animasi ketika 20% dari section terlihat
          if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
            setIsVisible(true);
            // Unobserve setelah animasi dipicu untuk performa yang lebih baik
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2, // Trigger ketika 20% section terlihat
        rootMargin: '-50px 0px', // Offset untuk trigger yang lebih natural
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    // Cleanup observer saat component unmount
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section
      id="why"
      ref={sectionRef}
      className={`py-20 bg-gray-900 relative transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      {/* Decorative elements dengan animasi delay */}
      <div
        className={`absolute top-1/4 right-0 w-64 h-64 bg-purple-600/10 rounded-full filter blur-3xl transition-all duration-1200 ease-out ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`}
        style={{ transitionDelay: '200ms' }}
      ></div>
      <div
        className={`absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full filter blur-3xl transition-all duration-1200 ease-out ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`}
        style={{ transitionDelay: '400ms' }}
      ></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Our Why Box */}
          <div
            className={`order-2 lg:order-1 transition-all duration-1000 ease-out ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-8'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="relative">
              <div className="border border-gray-800 rounded-lg p-6 md:p-8 bg-gray-900/70 backdrop-blur-sm shadow-[0_0_30px_rgba(139,92,246,0.15)]">
                <h2
                  className={`text-3xl font-bold text-white mb-6 transition-all duration-800 ease-out ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: '500ms' }}
                >
                  Our Why
                </h2>
                <div className="space-y-6 text-gray-300">
                  {[
                    'Di banyak swalayan, kita terbiasa mengambil barang tanpa tahu pasti berapa total yang akan dibayar. Tak jarang, niat belanja hemat berujung pada over budget.',
                    'Dari keresahan ini, lahirlah VoiceCart—bukan sekadar aplikasi, tapi solusi praktis untuk semua orang yang ingin berbelanja dengan lebih terkontrol.',
                    'Awalnya, kami mencoba pendekatan scanning kamera. Tapi, ternyata ada banyak kendala teknis: dari daftar harga yang buram, font yang tidak konsisten, sampai posisi angka yang tidak terdeteksi dengan baik.',
                    'Kami lalu menemukan jawaban lewat pendekatan suara. Dengan menyebutkan nama barang dan harganya, sistem langsung mengenali dan menghitung secara otomatis. Lebih simpel, cepat, dan akurat.',
                    'Inilah bentuk kecil inovasi yang kami harap bisa diterapkan di berbagai tempat belanja tanpa perlu membuat sistem yang mahal dan rumit.',
                  ].map((text, index) => (
                    <p
                      key={index}
                      className={`transition-all duration-800 ease-out ${
                        isVisible
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-4'
                      }`}
                      style={{ transitionDelay: `${600 + index * 100}ms` }}
                    >
                      {text}
                    </p>
                  ))}
                </div>
              </div>

              {/* Decorative corner accents dengan animasi stagger */}
              {[
                {
                  position: '-top-3 -left-3',
                  border: 'border-t-2 border-l-2',
                  delay: '800ms',
                },
                {
                  position: '-top-3 -right-3',
                  border: 'border-t-2 border-r-2',
                  delay: '850ms',
                },
                {
                  position: '-bottom-3 -left-3',
                  border: 'border-b-2 border-l-2',
                  delay: '900ms',
                },
                {
                  position: '-bottom-3 -right-3',
                  border: 'border-b-2 border-r-2',
                  delay: '950ms',
                },
              ].map((corner, index) => (
                <div
                  key={index}
                  className={`absolute ${corner.position} w-6 h-6 ${
                    corner.border
                  } border-purple-500 transition-all duration-600 ease-out ${
                    isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                  }`}
                  style={{ transitionDelay: corner.delay }}
                ></div>
              ))}
            </div>
          </div>

          {/* Right Column - The Journey */}
          <div
            className={`order-1 lg:order-2 transition-all duration-1000 ease-out ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-8'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="space-y-6">
              <h2
                className={`text-3xl md:text-4xl font-bold text-white mb-4 transition-all duration-800 ease-out ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: '600ms' }}
              >
                The Journey
              </h2>
              <p
                className={`text-gray-400 text-lg mb-8 transition-all duration-800 ease-out ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: '700ms' }}
              >
                Our path to creating VoiceCart wasn't straightforward. Here's
                the story behind our innovation.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: ShoppingCart,
                    title: 'The Problem',
                    description:
                      'Shopping without knowing your running total leads to budget surprises at checkout.',
                    color: 'blue',
                  },
                  {
                    icon: Camera,
                    title: 'First Attempt',
                    description:
                      'We tried camera-based scanning, but encountered issues with blurry price tags, inconsistent fonts, and detection challenges.',
                    color: 'yellow',
                  },
                  {
                    icon: MessageSquare,
                    title: 'The Breakthrough',
                    description:
                      'Voice input emerged as the simpler, more accurate solution - just speak the product and price.',
                    color: 'purple',
                  },
                  {
                    icon: Lightbulb,
                    title: 'The Solution',
                    description:
                      'VoiceCart was born - a simple, accessible way to track shopping expenses in real-time using just your voice.',
                    color: 'green',
                  },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className={`flex gap-4 transition-all duration-800 ease-out ${
                        isVisible
                          ? 'opacity-100 translate-x-0'
                          : 'opacity-0 translate-x-4'
                      }`}
                      style={{ transitionDelay: `${800 + index * 150}ms` }}
                    >
                      <div className="flex-shrink-0">
                        <div
                          className={`w-12 h-12 rounded-full bg-${
                            item.color
                          }-500/10 flex items-center justify-center text-${
                            item.color
                          }-400 transition-all duration-600 ease-out ${
                            isVisible
                              ? 'scale-100 rotate-0'
                              : 'scale-75 rotate-12'
                          }`}
                          style={{ transitionDelay: `${900 + index * 150}ms` }}
                        >
                          <Icon className="h-6 w-6" />
                        </div>
                      </div>
                      <div>
                        <h3
                          className={`text-xl font-medium text-white mb-2 transition-all duration-600 ease-out ${
                            isVisible
                              ? 'opacity-100 translate-y-0'
                              : 'opacity-0 translate-y-2'
                          }`}
                          style={{ transitionDelay: `${950 + index * 150}ms` }}
                        >
                          {item.title}
                        </h3>
                        <p
                          className={`text-gray-400 transition-all duration-600 ease-out ${
                            isVisible
                              ? 'opacity-100 translate-y-0'
                              : 'opacity-0 translate-y-2'
                          }`}
                          style={{ transitionDelay: `${1000 + index * 150}ms` }}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Background;

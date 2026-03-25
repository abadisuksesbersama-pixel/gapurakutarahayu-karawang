import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  ShieldCheck, 
  TrendingUp, 
  Maximize, 
  Bed, 
  Bath, 
  Car, 
  CheckCircle2, 
  MessageCircle, 
  Phone, 
  ChevronRight, 
  Menu, 
  X,
  Droplets,
  Trees,
  Wind
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formState, setFormState] = useState({ nama: '', hp: '', tipe: 'Emerald (Tipe 70)' });
  const [submitted, setSubmitted] = useState(false);

  // Handle scroll for navbar effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const unitTypes = [
    {
      name: "The Emerald Estate",
      type: "Tipe 70",
      lt: "120m²",
      lb: "70m²",
      beds: 3,
      baths: 2,
      price: "1.2M",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "The Diamond Deluxe",
      type: "Tipe 90",
      lt: "150m²",
      lb: "90m²",
      beds: 4,
      baths: 3,
      price: "1.8M",
      image: "https://images.unsplash.com/photo-1600607687940-4e7a6a353679?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "The Royal Residence",
      type: "Tipe 120",
      lt: "200m²",
      lb: "120m²",
      beds: "4+1",
      baths: 4,
      price: "2.5M",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden">
      
      {/* NAVIGATION */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className={`text-2xl font-black tracking-tighter ${scrolled ? 'text-slate-900' : 'text-white'}`}>
            EMERALD<span className="text-emerald-500">KARAWANG</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 font-medium">
            {['Keunggulan', 'Unit', 'Fasilitas', 'Testimoni'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className={`transition hover:text-emerald-500 ${scrolled ? 'text-slate-600' : 'text-slate-200'}`}
              >
                {item}
              </a>
            ))}
            <a href="#konsultasi" className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-full font-bold transition transform hover:scale-105 active:scale-95 shadow-lg">
              Konsultasi
            </a>
          </div>

          <button className="md:hidden text-emerald-500" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-6 px-6 flex flex-col space-y-4 border-t animate-fade-in-down">
            {['Keunggulan', 'Unit', 'Fasilitas', 'Testimoni'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="text-lg font-semibold text-slate-800 border-b pb-2">{item}</a>
            ))}
            <a href="https://wa.me/628XXXXXXXXXX" className="bg-emerald-600 text-white text-center py-3 rounded-xl font-bold">WhatsApp Sekarang</a>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80" 
            className="w-full h-full object-cover" 
            alt="Premium House"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-white">
          <div className="max-w-3xl">
            <span className="inline-block bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 text-emerald-400 px-4 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase mb-6 animate-bounce">
              Launching Tahap 3 - Unit Terbatas
            </span>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Definisi Baru <span className="text-emerald-400">Kemewahan</span> di Karawang
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
              Sanctuary eksklusif yang memadukan keasrian alam dengan fasilitas modern kelas dunia. Investasi properti paling bernilai di pusat pertumbuhan ekonomi Jawa Barat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#unit" className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-4 rounded-2xl font-bold text-lg transition flex items-center justify-center group shadow-2xl">
                Eksplorasi Unit <ChevronRight className="ml-2 group-hover:translate-x-1 transition" />
              </a>
              <a href="https://wa.me/628XXXXXXXXXX" className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-10 py-4 rounded-2xl font-bold text-lg transition flex items-center justify-center">
                <Phone className="mr-2 w-5 h-5" /> Hubungi Marketing
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM STATS */}
        <div className="absolute bottom-10 left-0 w-full hidden lg:block">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-4 gap-8 bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl">
              <div>
                <p className="text-emerald-400 font-bold text-2xl">5 Menit</p>
                <p className="text-slate-300 text-sm">Ke Gerbang Tol Karawang Barat</p>
              </div>
              <div>
                <p className="text-emerald-400 font-bold text-2xl">40%</p>
                <p className="text-slate-300 text-sm">Area Hijau & Terbuka</p>
              </div>
              <div>
                <p className="text-emerald-400 font-bold text-2xl">24/7</p>
                <p className="text-slate-300 text-sm">Sistem Keamanan Berlapis</p>
              </div>
              <div>
                <p className="text-emerald-400 font-bold text-2xl">15%</p>
                <p className="text-slate-300 text-sm">Capital Gain per Tahun</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KEUNGGULAN SECTION */}
      <section id="keunggulan" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-amber-600 font-bold tracking-widest uppercase mb-4 text-sm">Mengapa Memilih Kami?</h2>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">Standar Hidup Tertinggi di Kota Industri</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { 
                icon: <MapPin className="text-emerald-600" size={32} />, 
                title: "Lokasi Strategis", 
                desc: "Hanya selangkah menuju kawasan industri KIIC, Suryacipta, dan pusat perbelanjaan Galuh Mas." 
              },
              { 
                icon: <ShieldCheck className="text-emerald-600" size={32} />, 
                title: "Keamanan Maksimal", 
                desc: "Sistem One Gate dengan akses card, CCTV di setiap sudut cluster, dan patroli keamanan 24 jam." 
              },
              { 
                icon: <TrendingUp className="text-emerald-600" size={32} />, 
                title: "Nilai Investasi", 
                desc: "Berada di area sunrise Karawang yang terus berkembang pesat, menjamin kenaikan harga tiap tahunnya." 
              }
            ].map((item, idx) => (
              <div key={idx} className="p-10 rounded-3xl bg-slate-50 border border-slate-100 hover:border-emerald-200 transition-all hover:shadow-2xl group">
                <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-md mb-8 group-hover:scale-110 transition">
                  {item.icon}
                </div>
                <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM & SOLUTION SECTION */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-600/10 skew-x-12 translate-x-1/2"></div>
        <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-emerald-500 font-bold mb-4 uppercase tracking-wider">Zen Living Concept</h2>
            <h3 className="text-3xl md:text-5xl font-black mb-8 leading-tight">Rehat Sejenak Dari Hiruk Pikuk Industri</h3>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Kami memahami kesibukan Anda di Karawang. Itulah mengapa kami merancang hunian yang memberikan ketenangan jiwa dan udara bersih bagi keluarga tercinta.
            </p>
            <div className="space-y-6">
              {[
                { icon: <Wind />, text: "Udara Bersih dengan Filter Vegetasi" },
                { icon: <Trees />, text: "Taman Tematik di Setiap Sudut" },
                { icon: <Droplets />, text: "Sistem Biopori & Anti Banjir" }
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-4 bg-slate-800/50 p-4 rounded-2xl border border-slate-700">
                  <div className="text-emerald-400">{item.icon}</div>
                  <span className="font-semibold">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
             <img src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=600&q=80" className="rounded-3xl shadow-2xl mt-12" alt="House Detail" />
             <img src="https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=600&q=80" className="rounded-3xl shadow-2xl" alt="House Interior" />
          </div>
        </div>
      </section>

      {/* UNIT CARDS SECTION */}
      <section id="unit" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4 text-slate-900">Pilihan Unit Eksklusif</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Tersedia berbagai pilihan tipe dengan konsep modern minimalis dan pencahayaan alami yang optimal.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {unitTypes.map((unit, i) => (
              <div key={i} className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 group">
                <div className="relative h-72 overflow-hidden">
                  <img src={unit.image} alt={unit.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm text-emerald-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider">
                    {unit.type}
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="text-2xl font-bold mb-4">{unit.name}</h4>
                  <div className="flex justify-between mb-6 text-slate-500 text-sm">
                    <div className="flex items-center"><Maximize className="w-4 h-4 mr-2" /> LT: {unit.lt}</div>
                    <div className="flex items-center"><Maximize className="w-4 h-4 mr-2" /> LB: {unit.lb}</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mb-8 py-4 border-y border-slate-100">
                    <div className="text-center">
                      <Bed className="mx-auto text-emerald-600 mb-1" />
                      <span className="text-xs font-bold">{unit.beds} Kamar</span>
                    </div>
                    <div className="text-center">
                      <Bath className="mx-auto text-emerald-600 mb-1" />
                      <span className="text-xs font-bold">{unit.baths} Mandi</span>
                    </div>
                    <div className="text-center">
                      <Car className="mx-auto text-emerald-600 mb-1" />
                      <span className="text-xs font-bold">2 Carport</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-widest">Harga Mulai</p>
                      <p className="text-2xl font-black text-slate-900">Rp {unit.price}<span className="text-sm font-normal text-slate-500">-an</span></p>
                    </div>
                    <a href="#konsultasi" className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-emerald-600 transition shadow-lg">
                      <ChevronRight />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FACILITIES GRID */}
      <section id="fasilitas" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Fasilitas Bintang Lima</h2>
              <p className="text-slate-600">Kami menyediakan segala yang Anda butuhkan untuk gaya hidup sehat dan berkualitas.</p>
            </div>
            <a href="https://wa.me/628XXXXXXXXXX" className="text-emerald-600 font-bold flex items-center group">
              Lihat Master Plan <ChevronRight className="ml-1 group-hover:translate-x-1 transition" />
            </a>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Exclusive Clubhouse", icon: "🏢" },
              { label: "Infinity Pool", icon: "🏊" },
              { label: "Jogging Track", icon: "🏃" },
              { label: "Kids Playground", icon: "🧸" },
              { label: "Fitness Center", icon: "🏋️" },
              { label: "Outdoor Gym", icon: "🏸" },
              { label: "BBQ Area", icon: "🍖" },
              { label: "CCTV 24 Jam", icon: "📹" },
            ].map((f, i) => (
              <div key={i} className="group p-8 border border-slate-100 rounded-3xl text-center hover:bg-emerald-50 transition-all cursor-default">
                <div className="text-4xl mb-4 group-hover:scale-125 transition duration-300">{f.icon}</div>
                <p className="font-bold text-slate-800">{f.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section id="testimoni" className="py-24 bg-slate-50 overflow-hidden relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white p-12 md:p-20 rounded-[3rem] shadow-2xl shadow-emerald-900/10 relative">
            <div className="absolute top-10 left-10 text-emerald-100 text-9xl font-serif">“</div>
            <div className="relative z-10 text-center">
              <div className="flex justify-center mb-8">
                {[1,2,3,4,5].map(s => <span key={s} className="text-amber-400 text-2xl">★</span>)}
              </div>
              <p className="text-xl md:text-3xl italic text-slate-700 mb-10 leading-relaxed font-light">
                "Emerald Karawang bukan sekadar rumah, tapi kebanggaan. Kualitas bangunannya sangat kokoh dan desainnya tidak lekang oleh waktu. Sangat dekat dengan kantor saya di KIIC."
              </p>
              <div>
                <h5 className="text-2xl font-bold text-slate-900">Bapak Andre Setiawan</h5>
                <p className="text-emerald-600 font-semibold tracking-widest uppercase text-sm mt-1">General Manager - MNC Automotive</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT & FORM SECTION */}
      <section id="konsultasi" className="py-24 bg-emerald-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full border-[100px] border-white rounded-full scale-150"></div>
        </div>
        
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 relative z-10 text-white">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Wujudkan Impian Anda Hari Ini</h2>
            <p className="text-emerald-100 text-lg mb-12 leading-relaxed">
              Dapatkan penawaran eksklusif khusus bulan ini:
            </p>
            <div className="grid gap-4 mb-12">
              {["DP 0% (Langsung Akad)", "Bebas Biaya BPHTB & AJB", "Gratis Smart Home System", "Gratis AC Setiap Kamar Tidur"].map((promo, idx) => (
                <div key={idx} className="flex items-center space-x-3 bg-white/10 p-4 rounded-2xl border border-white/20">
                  <CheckCircle2 className="text-emerald-200 shrink-0" />
                  <span className="font-bold">{promo}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center space-x-4">
               <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl">
                  <MessageCircle className="text-emerald-600" size={32} />
               </div>
               <div>
                  <p className="font-bold text-xl leading-none mb-1">Butuh Respon Cepat?</p>
                  <a href="https://wa.me/628XXXXXXXXXX" className="text-emerald-100 underline hover:text-white transition">Hubungi VIP Marketing Representative</a>
               </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl text-slate-900">
              <h3 className="text-2xl font-black mb-8">Form Konsultasi Gratis</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Nama Lengkap</label>
                  <input 
                    type="text" 
                    className="w-full px-6 py-4 bg-slate-50 border-0 rounded-2xl focus:ring-4 focus:ring-emerald-500/10 outline-none transition" 
                    placeholder="Contoh: Budi Santoso"
                    required
                    value={formState.nama}
                    onChange={(e) => setFormState({...formState, nama: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Nomor WhatsApp</label>
                  <input 
                    type="tel" 
                    className="w-full px-6 py-4 bg-slate-50 border-0 rounded-2xl focus:ring-4 focus:ring-emerald-500/10 outline-none transition" 
                    placeholder="Contoh: 081234567890"
                    required
                    value={formState.hp}
                    onChange={(e) => setFormState({...formState, hp: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Pilihan Tipe Unit</label>
                  <select 
                    className="w-full px-6 py-4 bg-slate-50 border-0 rounded-2xl focus:ring-4 focus:ring-emerald-500/10 outline-none transition appearance-none"
                    value={formState.tipe}
                    onChange={(e) => setFormState({...formState, tipe: e.target.value})}
                  >
                    <option>Emerald (Tipe 70)</option>
                    <option>Diamond (Tipe 90)</option>
                    <option>Royal (Tipe 120)</option>
                  </select>
                </div>
                <button type="submit" className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-lg hover:bg-slate-800 transition transform active:scale-95 shadow-xl shadow-slate-900/20">
                  Dapatkan Brosur & Penawaran
                </button>
                {submitted && (
                  <div className="p-4 bg-emerald-50 text-emerald-700 rounded-xl text-center font-bold animate-pulse">
                    Terima kasih! Tim kami akan menghubungi Anda sebentar lagi.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-16 mb-20 border-b border-white/5 pb-20">
            <div className="md:col-span-2">
              <div className="text-3xl font-black tracking-tighter mb-8">
                EMERALD<span className="text-emerald-500">KARAWANG</span>
              </div>
              <p className="text-slate-400 max-w-sm mb-10 leading-relaxed">
                Kawasan hunian paling bergengsi di Karawang yang mengedepankan kualitas hidup, keberlanjutan lingkungan, dan kenyamanan keluarga.
              </p>
              <div className="flex space-x-4">
                {['IG', 'FB', 'YT', 'IN'].map(social => (
                  <div key={social} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-emerald-600 hover:border-emerald-600 transition cursor-pointer text-xs font-bold">
                    {social}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h6 className="font-black uppercase tracking-widest text-sm mb-8 text-emerald-500">Tautan Cepat</h6>
              <ul className="space-y-4 text-slate-400 font-medium">
                <li><a href="#" className="hover:text-white transition">Tentang Kami</a></li>
                <li><a href="#unit" className="hover:text-white transition">Pilihan Unit</a></li>
                <li><a href="#fasilitas" className="hover:text-white transition">Fasilitas Cluster</a></li>
                <li><a href="#testimoni" className="hover:text-white transition">Ulasan Penghuni</a></li>
              </ul>
            </div>
            <div>
              <h6 className="font-black uppercase tracking-widest text-sm mb-8 text-emerald-500">Kantor Pemasaran</h6>
              <p className="text-slate-400 mb-4 leading-relaxed">
                Jl. Galuh Mas Raya No. 88, Karawang Barat, Jawa Barat 41361
              </p>
              <p className="text-slate-400 font-bold italic mb-2">Buka Setiap Hari:</p>
              <p className="text-slate-300">09:00 — 19:00 WIB</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm gap-4">
            <p>&copy; 2026 The Emerald Karawang. Dikembangkan oleh Premium Property Group.</p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP FOR MOBILE */}
      <a 
        href="https://wa.me/628XXXXXXXXXX" 
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-green-600 transition-all transform hover:scale-110 active:scale-95 md:hidden"
      >
        <MessageCircle size={32} />
      </a>
    </div>
  );
};

export default App;
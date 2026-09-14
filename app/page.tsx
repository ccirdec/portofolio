"use client";
import React, { useState, useEffect } from "react";
import {
  Map,
  Laptop,
  ChevronRight,
  Mail,
  GraduationCap,
  Briefcase,
  MessageCircle,
  ShoppingCart,
  User,
  X,
  ChevronLeft,
  Menu,
} from "lucide-react";

// --- CUSTOM SOCIAL ICONS ---
const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const GithubIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4"></path>
  </svg>
);

// --- KOMPONEN: MOCKUP DEVICE DENGAN SLIDER (Untuk Proyek) ---
const DeviceSlider = ({ type, images }: { type: string; images: string[] }) => {
  const [idx, setIdx] = useState(0);
  const nextImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  const prevImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const hasMultiple = images.length > 1;

  if (type === "mobile") {
    return (
      <div className="w-40 h-80 bg-slate-900 rounded-[2.5rem] border-[8px] border-slate-800 relative shadow-2xl flex items-center justify-center shrink-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-5 bg-slate-800 rounded-b-xl z-20"></div>
        <div className="w-full h-full bg-slate-200 rounded-[1.8rem] overflow-hidden relative flex items-center justify-center text-slate-400 text-xs">
          {images[idx] ? (
            <img
              src={images[idx]}
              alt="Mobile App"
              className="w-full h-full object-contain"
            />
          ) : (
            "Mobile SS"
          )}
        </div>
        {hasMultiple && (
          <>
            <button
              onClick={prevImg}
              className="absolute -left-12 p-2 bg-white/10 hover:bg-white/30 backdrop-blur-sm rounded-full text-white transition-all z-30"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImg}
              className="absolute -right-12 p-2 bg-white/10 hover:bg-white/30 backdrop-blur-sm rounded-full text-white transition-all z-30"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center shrink-0">
      <div className="w-[300px] sm:w-[400px] h-[200px] sm:h-[250px] bg-slate-900 rounded-t-xl border-[6px] border-slate-800 relative shadow-2xl flex items-center justify-center">
        <div className="w-full h-full bg-slate-200 overflow-hidden relative flex items-center justify-center text-slate-400 text-xs">
          {images[idx] ? (
            <img
              src={images[idx]}
              alt="Web App"
              className="w-full h-full object-contain"
            />
          ) : (
            "Web SS"
          )}
        </div>
        {hasMultiple && (
          <>
            <button
              onClick={prevImg}
              className="absolute -left-12 p-2 bg-white/10 hover:bg-white/30 backdrop-blur-sm rounded-full text-white transition-all z-30"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImg}
              className="absolute -right-12 p-2 bg-white/10 hover:bg-white/30 backdrop-blur-sm rounded-full text-white transition-all z-30"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}
      </div>
      <div className="w-[340px] sm:w-[460px] h-4 bg-slate-400 rounded-b-2xl shadow-xl"></div>
    </div>
  );
};

// --- KOMPONEN: PHOTO SLIDER (Untuk Foto Dokumentasi) ---
const PhotoSlider = ({ images }: { images: string[] }) => {
  const [idx, setIdx] = useState(0);
  const nextImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  const prevImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const hasMultiple = images.length > 1;

  return (
    <div className="w-full h-64 sm:h-96 bg-slate-200 rounded-2xl relative shadow-lg flex items-center justify-center overflow-hidden shrink-0 group">
      {images[idx] ? (
        <img
          src={images[idx]}
          alt="Dokumentasi"
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="text-slate-400 font-medium">Foto Dokumentasi</div>
      )}

      {hasMultiple && (
        <>
          <button
            onClick={prevImg}
            className="absolute left-4 p-2 bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-full text-white opacity-0 group-hover:opacity-100 transition-all z-30"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextImg}
            className="absolute right-4 p-2 bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-full text-white opacity-0 group-hover:opacity-100 transition-all z-30"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}
    </div>
  );
};

export default function Portfolio() {
  const [lang, setLang] = useState<"id" | "en">("id");
  const [isScrolled, setIsScrolled] = useState(false);
  const [filter, setFilter] = useState("All");
  const [activeView, setActiveView] = useState<"home" | "about" | "projects">(
    "home",
  );
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [infoModal, setInfoModal] = useState<any | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow =
      selectedProject || infoModal ? "hidden" : "unset";
  }, [selectedProject, infoModal]);

  const content = {
    en: {
      nav: { home: "Home", about: "About Me", projects: "Projects" },
      btnMore: "See Details",
      heroBadge: "Available for New Opportunities",
      heroTitle: "Engineering",
      heroSub: "Digital",
      heroHighlight: "Solutions",
      heroDesc:
        "Hi, I m Cedric Mitchell Yehaziel. A Computer Science graduate bridging the gap between Full-Stack Web Development, Mobile Apps, and Machine Learning algorithms.",
      coreTech: "Core Technologies",
      modal: {
        overview: "Overview",
        features: "Key Features",
        tech: "Tech Stack",
      },
      bio: "Hello! I am Cedric Mitchell Yehaziel, born on April 19, 2004, and currently residing in Bogor Selatan. I am a highly motivated Computer Science graduate from Pakuan University (GPA 3.97/4.00) specializing in Full-Stack Web Development, Mobile Development, Cloud Architecture, and Machine Learning. I am a fast learner, capable of working in teams, and passionate about solving complex problems through technology.",
      education: {
        title: "Education",
        univ: {
          name: "Pakuan University",
          degree: "Bachelor of Computer Science   Sep 2022 - Jul 2026",
          score: "GPA: 3.97 / 4.00 (Cum Laude)",
        },
        sma: {
          name: "Budi Mulia Bogor High School",
          period: "July 2019 - May 2022",
        },
        modalData: {
          type: "education",
          title: "Education History",
          images: ["", ""],
          history: [
            {
              school: "Pakuan University",
              period: "Sep 2022 - Jul 2026",
              details:
                "Bachelor of Computer Science. GPA 3.97 (Cum Laude). Thesis focused on Deep Learning for weather prediction integrated with Ant Colony Optimization for route mapping.",
            },
            {
              school: "SMA Budi Mulia Bogor",
              period: "2019 - 2022",
              details:
                "Senior High School. Focused on Science and Mathematics.",
            },
            {
              school: "SMP Mardi Waluya Bogor",
              period: "2016 - 2019",
              details: "Junior High School.",
            },
            {
              school: "SD Mardi Waluya Bogor",
              period: "Graduated 2016",
              details: "Primary School.",
            },
          ],
        },
      },
      experience: {
        title: "Experience & Certificate",
        intern: {
          role: "IT Intern",
          desc: "PT. Communication Cable System Tbk   Jul 2025 - Sep 2025",
        },
        cert: {
          role: "Fundamental Deep Learning",
          desc: "NVIDIA Deep Learning Institute   Jul 2026",
        },
        modalData: {
          type: "experience",
          title: "Professional Experience",
          images: ["/experience.jpg"],
          companyName: "PT. Communication Cable Systems Indonesia Tbk",
          companyDesc:
            "A leading telecommunications technology and manufacturing company in Indonesia specializing in fiber optic communication cables.",
          projectName: "Web-based Asset Management System",
          projectDesc:
            "Developed an enterprise-scale web application to digitalize internal asset management. Designed to track equipment history, prevent asset loss, and generate structured reports, streamlining the overall administrative pipeline.",
          certTitle: "Fundamental Deep Learning - NVIDIA Institute",
          certDesc:
            "Acquired hands-on competency in constructing, training, and deploying deep learning neural network architectures using modern machine learning frameworks.",
        },
      },
      projects: [
        {
          id: 1,
          title: "Asset Management System",
          categories: ["Web Development"],
          type: "web",
          desc: "Built during an IT internship at PT CCSI Tbk to streamline internal asset tracking.",
          icon: <Laptop className="w-6 h-6" />,
          images: [
            "/ams/Picture18.png",
            "/ams/Picture19.png",
            "/ams/Picture20.png",
            "/ams/Picture21.png",
            "/ams/Picture22.png",
            "/ams/Picture23.png",
            "/ams/Picture24.png",
            "/ams/Picture25.png",
            "/ams/Picture26.png",
            "/ams/Picture27.png",
            "/ams/Picture28.png",
            "/ams/Picture29.png",
            "/ams/Picture30.png",
            "/ams/Picture31.png",
          ],
          fullDesc:
            "An enterprise-scale web application developed to digitalize the asset tracking and management pipeline at PT Communication Cable Systems Indonesia Tbk. This system replaced manual record-keeping, significantly reducing errors caused by asset loss or damage.",
          features: [
            "Dashboard & Analytics",
            "Asset Tracking & History",
            "Role-based Access Control (RBAC)",
            "Exportable Reports (PDF)",
          ],
          techStack: ["Next.js", "Tailwind CSS", "Database"],
          github: "https://github.com/ccirdec/asset-management-system",
        },
        {
          id: 2,
          title: "Smart Travel Planner",
          categories: ["Deep Learning", "Web Development"],
          type: "web",
          desc: "A web-based intelligent travel planner integrating RNN, CPI, and ACO algorithms.",
          icon: <Map className="w-6 h-6" />,
          images: [
            "/stp/Picture33.png",
            "/stp/Picture34.png",
            "/stp/Picture35.png",
            "/stp/Picture36.png",
            "/stp/Picture37.png",
            "/stp/Picture38.png",
          ],
          fullDesc:
            "My undergraduate thesis project. It is a smart travel recommendation platform designed for the Greater Bogor area. It uniquely combines deep learning for weather prediction and heuristic algorithms for optimizing travel routes.",
          features: [
            "Real-time Weather Prediction (RNN)",
            "Dynamic Route Optimization (ACO)",
            "Destination Scoring (CPI)",
          ],
          techStack: ["Next.js", "Open-Meteo API"],
          github: "https://github.com/ccirdec/smart-tourism"
        },
        {
          id: 3,
          title: "Sabuo (Sayur Buah Online)",
          categories: ["Mobile Development"],
          type: "mobile",
          desc: "An Android e-commerce application for fresh produce with real-time stock monitoring.",
          icon: <ShoppingCart className="w-6 h-6" />,
          images: [
            "/sabuo/Picture1.jpg",
            "/sabuo/Picture2.jpg",
            "/sabuo/Picture3.jpg",
            "/sabuo/Picture4.jpg",
            "/sabuo/Picture5.jpg",
            "/sabuo/Picture6.jpg",
            "/sabuo/Picture7.jpg",
            "/sabuo/Picture8.jpg",
            "/sabuo/Picture9.jpg",
            "/sabuo/Picture10.jpg",
            "/sabuo/Picture11.jpg",
            "/sabuo/Picture12.jpg",
            "/sabuo/Picture13.jpg",
            "/sabuo/Picture14.jpg",
            "/sabuo/Picture15.jpg",
            "/sabuo/Picture16.jpg",
          ],
          fullDesc:
            "An integrated e-commerce platform specifically built for selling fresh groceries such as vegetables, fruits, and meat. It allows users to flexibly choose between home delivery or self-pickup while tracking multi-branch inventory.",
          features: [
            "Multi-branch Stock Monitoring",
            "Delivery & Self-Pickup Options",
            "User-friendly Mobile UI",
          ],
          techStack: ["Flutter", "Dart", "Firebase"],
          github: "https://github.com/ccirdec/asset-management-system",
          demo: "https://youtu.be/aPt-HwhW2KU?si=FR7IdinRx2kpMR0j"
        },
        {
          id: 4,
          title: "Discorso",
          categories: ["Mobile Development"],
          type: "mobile",
          desc: "An Android-based social platform enabling users to broadcast posts and engage in real-time.",
          icon: <MessageCircle className="w-6 h-6" />,
          images: [
            "/discorso/Picture1.jpg",
            "/discorso/Picture2.jpg",
            "/discorso/Picture3.jpg",
            "/discorso/Picture4.jpg",
            "/discorso/Picture5.jpg",
            "/discorso/Picture6.jpg",
            "/discorso/Picture7.jpg",
            "/discorso/Picture8.jpg",
            "/discorso/Picture9.jpg",
            "/discorso/Picture10.jpg",
            "/discorso/Picture11.jpg",
            "/discorso/Picture12.jpg",
            "/discorso/Picture13.jpg",
            "/discorso/Picture14.jpg",
            "/discorso/Picture15.jpg",
            "/discorso/Picture16.jpg",
            "/discorso/Picture17.jpg",
          ],
          fullDesc:
            "A modern microblogging and social media platform built for Android. It focuses on facilitating structured public discussions, real-time information sharing, and community engagement.",
          features: [
            "Real-time Feed & Post Broadcasting",
            "Like, Comment & Reply",
            "User Profile Management",
          ],
          techStack: ["Flutter", "Dart", "Firebase"],
          github: "https://github.com/ccirdec/discorso"
        },
      ],
    },
    id: {
      nav: { home: "Beranda", about: "Tentang Saya", projects: "Proyek" },
      btnMore: "Lihat Detail",
      heroBadge: "Tersedia untuk Peluang Baru",
      heroTitle: "Solusi",
      heroSub: "Teknologi",
      heroHighlight: "Digital",
      heroDesc:
        "Hai, saya Cedric Mitchell Yehaziel. Lulusan Ilmu Komputer yang memadukan pengembangan Web Full-Stack, Aplikasi Mobile, dan penerapan algoritma Machine Learning.",
      coreTech: "Tekensi Utama",
      modal: {
        overview: "Ringkasan",
        features: "Fitur Utama",
        tech: "Teknologi",
      },
      bio: "Halo! Saya Cedric Mitchell Yehaziel, lahir pada 19 April 2004 dan berdomisili di Bogor Selatan. Saya adalah lulusan Ilmu Komputer dari Universitas Pakuan (IPK 3.97/4.00) yang berfokus pada Full-Stack Web Development, Cloud Architecture, dan Machine Learning. Saya memiliki kemampuan belajar yang cepat, dapat bekerja sama dalam tim, dan sangat antusias dalam memecahkan masalah kompleks melalui teknologi.",
      education: {
        title: "Pendidikan",
        univ: {
          name: "Universitas Pakuan",
          degree: "Sarjana Ilmu Komputer   Sep 2022 - Jul 2026",
          score: "IPK: 3.97 / 4.00 (Cum Laude)",
        },
        sma: { name: "SMA Budi Mulia Bogor", period: "Juli 2019 - Mei 2022" },
        modalData: {
          type: "education",
          title: "Riwayat Pendidikan",
          images: ["", ""],
          history: [
            {
              school: "Universitas Pakuan",
              period: "Sep 2022 - Jul 2026",
              details:
                "Sarjana Ilmu Komputer. Lulus dengan predikat Cum Laude (IPK 3.97). Tugas akhir meneliti implementasi Deep Learning untuk prediksi cuaca terintegrasi algoritma Ant Colony Optimization.",
            },
            {
              school: "SMA Budi Mulia Bogor",
              period: "2019 - 2022",
              details:
                "Pendidikan Menengah Atas. Fokus pada program Ilmu Pengetahuan Alam (IPA).",
            },
            {
              school: "SMP Mardi Waluya Bogor",
              period: "2016 - 2019",
              details: "Pendidikan Menengah Pertama.",
            },
            {
              school: "SD Mardi Waluya Bogor",
              period: "Lulus 2016",
              details: "Pendidikan Dasar.",
            },
          ],
        },
      },
      experience: {
        title: "Pengalaman & Sertifikat",
        intern: {
          role: "IT Intern",
          desc: "PT. Communication Cable System Tbk   Jul 2025 - Sep 2025",
        },
        cert: {
          role: "Fundamental Deep Learning",
          desc: "NVIDIA Deep Learning Institute   Jul 2026",
        },
        modalData: {
          type: "experience",
          title: "Pengalaman Profesional",
          images: ["", ""],
          companyName: "PT. Communication Cable Systems Indonesia Tbk",
          companyDesc:
            "Perusahaan manufaktur dan teknologi terkemuka di Indonesia yang bergerak di bidang infrastruktur kabel fiber optik untuk telekomunikasi.",
          projectName: "Web-based Asset Management System",
          projectDesc:
            "Membangun sistem informasi berbasis web skala perusahaan untuk mendigitalisasi alur pengelolaan aset. Sistem dirancang untuk melacak riwayat inventaris, meminimalkan kehilangan aset, dan mencetak laporan terstruktur guna mempermudah bagian administrasi.",
          certTitle: "Fundamental Deep Learning - NVIDIA Institute",
          certDesc:
            "Mendapatkan kompetensi praktis dalam merancang, melatih, serta menerapkan arsitektur neural network menggunakan standar teknologi AI modern.",
        },
      },
      projects: [
        {
          id: 1,
          title: "Asset Management System",
          categories: ["Web Development"],
          type: "web",
          desc: "Dikembangkan saat magang IT di PT CCSI Tbk untuk merampingkan pelacakan aset internal.",
          icon: <Laptop className="w-6 h-6" />,
          images: [
            "/ams/Picture18.png",
            "/ams/Picture19.png",
            "/ams/Picture20.png",
            "/ams/Picture21.png",
            "/ams/Picture22.png",
            "/ams/Picture23.png",
            "/ams/Picture24.png",
            "/ams/Picture25.png",
            "/ams/Picture26.png",
            "/ams/Picture27.png",
            "/ams/Picture28.png",
            "/ams/Picture29.png",
            "/ams/Picture30.png",
            "/ams/Picture31.png",
          ],
          fullDesc:
            "Aplikasi web skala perusahaan yang dikembangkan untuk mendigitalisasi alur pengelolaan aset di PT Communication Cable Systems Indonesia Tbk. Sistem ini menggantikan pencatatan manual, sehingga meminimalkan kesalahan pencatatan akibat barang hilang atau rusak.",
          features: [
            "Dashboard & Analitik",
            "Pelacakan Riwayat Aset",
            "Manajemen Hak Akses (RBAC)",
            "Ekspor Laporan (PDF)",
          ],
          techStack: ["Next.js", "Tailwind CSS", "Database"],
          github: "https://github.com/ccirdec/asset-management-system",
        },
        {
          id: 2,
          title: "Smart Travel Planner",
          categories: ["Deep Learning", "Web Development"],
          type: "web",
          desc: "Platform perencanaan rute wisata yang mengintegrasikan algoritma RNN, CPI, dan ACO.",
          icon: <Map className="w-6 h-6" />,
          images: [
            "/stp/Picture33.png",
            "/stp/Picture34.png",
            "/stp/Picture35.png",
            "/stp/Picture36.png",
            "/stp/Picture37.png",
            "/stp/Picture38.png",
          ],
          fullDesc:
            "Proyek Skripsi: Platform rekomendasi wisata cerdas untuk wilayah Bogor Raya. Sistem ini menggabungkan model Deep Learning untuk memprediksi cuaca secara presisi dengan algoritma heuristik untuk optimasi rute perjalanan antar destinasi.",
          features: [
            "Prediksi Cuaca Real-time (RNN)",
            "Optimasi Rute Dinamis (ACO)",
            "Penilaian Destinasi (CPI)",
            "Visualisasi Peta Interaktif",
          ],
          techStack: [ "Next.js", "Open-Meteo API"],
          github: "https://github.com/ccirdec/smart-tourism"
        },
        {
          id: 3,
          title: "Sabuo (Sayur Buah Online)",
          categories: ["Mobile Development"],
          type: "mobile",
          desc: "Aplikasi Android e-commerce untuk pembelian bahan segar dengan pemantauan stok real-time.",
          icon: <ShoppingCart className="w-6 h-6" />,
          images: [
            "/sabuo/Picture1.jpg",
            "/sabuo/Picture2.jpg",
            "/sabuo/Picture3.jpg",
            "/sabuo/Picture4.jpg",
            "/sabuo/Picture5.jpg",
            "/sabuo/Picture6.jpg",
            "/sabuo/Picture7.jpg",
            "/sabuo/Picture8.jpg",
            "/sabuo/Picture9.jpg",
            "/sabuo/Picture10.jpg",
            "/sabuo/Picture11.jpg",
            "/sabuo/Picture12.jpg",
            "/sabuo/Picture13.jpg",
            "/sabuo/Picture14.jpg",
            "/sabuo/Picture15.jpg",
            "/sabuo/Picture16.jpg",
          ],
          fullDesc:
            "Platform e-commerce yang dirancang khusus untuk menjual bahan pangan segar (sayur, buah, lauk pauk). Aplikasi ini memungkinkan pengguna memilih opsi pengiriman kurir atau ambil sendiri (self-pickup) sembari menampilkan stok barang dari berbagai cabang secara real-time.",
          features: [
            "Pemantauan Stok Multi-Cabang",
            "Opsi Delivery & Self-Pickup",

            "Antarmuka Mobile Modern",
          ],
          techStack: ["Flutter", "Dart", "Firebase"],
          github: "https://github.com/ccirdec/asset-management-system",
          demo: "https://youtu.be/aPt-HwhW2KU?si=FR7IdinRx2kpMR0j"
        },
        {
          id: 4,
          title: "Discorso",
          categories: ["Mobile Development"],
          type: "mobile",
          desc: "Platform media sosial berbasis Android untuk membagikan postingan dan berinteraksi.",
          icon: <MessageCircle className="w-6 h-6" />,
          images: [
            "/discorso/Picture1.jpg",
            "/discorso/Picture2.jpg",
            "/discorso/Picture3.jpg",
            "/discorso/Picture4.jpg",
            "/discorso/Picture5.jpg",
            "/discorso/Picture6.jpg",
            "/discorso/Picture7.jpg",
            "/discorso/Picture8.jpg",
            "/discorso/Picture9.jpg",
            "/discorso/Picture10.jpg",
            "/discorso/Picture11.jpg",
            "/discorso/Picture12.jpg",
            "/discorso/Picture13.jpg",
            "/discorso/Picture14.jpg",
            "/discorso/Picture15.jpg",
            "/discorso/Picture16.jpg",
            "/discorso/Picture17.jpg",
          ],
          fullDesc:
            "Platform media sosial dan microblogging modern berbasis Android. Berfokus pada kemudahan berbagi informasi singkat, memfasilitasi diskusi publik yang terstruktur, dan interaksi komunitas secara real-time.",
          features: [
            "Feed Interaktif & Postingan Teks",
            "Fitur Like, Komentar, Reply",
            "Manajemen Profil Pengguna",
          ],
          techStack: ["Flutter", "Dart", "Firebase"],
          github: "https://github.com/ccirdec/discorso"
        },
      ],
    },
  };

  const t = content[lang];
  const categoriesTabs = [
    "All",
    "Web Development",
    "Mobile Development",
    "Deep Learning",
  ];
  const filteredProjects =
    filter === "All"
      ? t.projects
      : t.projects.filter((p) => p.categories.includes(filter));

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans relative">
      {/* --- NAVBAR --- */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-slate-900/95 backdrop-blur-md shadow-lg" : "bg-transparent"} relative`}
      >
        <div
          className={`px-6 md:px-12 flex justify-between items-center ${isScrolled ? "py-3" : "py-6"} transition-all`}
        >
          <h1
            onClick={() => {
              setActiveView("home");
              setMobileMenuOpen(false);
            }}
            className="text-xl md:text-2xl font-black tracking-wider text-blue-600 cursor-pointer"
          >
            CMY
            <span className={isScrolled ? "text-white" : "text-slate-900"}>
              .
            </span>
          </h1>

          <div className="flex items-center gap-4 md:gap-6">
            {/* Menu Desktop */}
            <ul
              className={`hidden md:flex space-x-6 text-sm font-medium ${isScrolled ? "text-slate-300" : "text-slate-800"}`}
            >
              <li
                onClick={() => setActiveView("home")}
                className={`cursor-pointer transition-colors ${activeView === "home" ? "text-blue-500" : "hover:text-blue-500"}`}
              >
                {t.nav.home}
              </li>
              <li
                onClick={() => setActiveView("about")}
                className={`cursor-pointer transition-colors ${activeView === "about" ? "text-blue-500" : "hover:text-blue-500"}`}
              >
                {t.nav.about}
              </li>
              <li
                onClick={() => setActiveView("projects")}
                className={`cursor-pointer transition-colors ${activeView === "projects" ? "text-blue-500" : "hover:text-blue-500"}`}
              >
                {t.nav.projects}
              </li>
            </ul>
            {/* Toggle Bahasa */}
            <div
              onClick={() => setLang(lang === "id" ? "en" : "id")}
              className={`relative flex items-center p-1 rounded-full cursor-pointer w-[72px] sm:w-24 h-8 transition-colors ${isScrolled ? "bg-slate-800 border border-slate-700" : "bg-slate-200/80 border border-slate-300"}`}
            >
              <div
                className={`absolute w-[32px] sm:w-[44px] h-6 bg-blue-600 rounded-full shadow-md transition-transform duration-300 ease-in-out ${lang === "en" ? "translate-x-[32px] sm:translate-x-[44px]" : "translate-x-0"}`}
              ></div>
              <span
                className={`relative z-10 w-1/2 text-center text-[10px] sm:text-xs font-bold transition-colors ${lang === "id" ? "text-white" : isScrolled ? "text-slate-400" : "text-slate-500"}`}
              >
                ID
              </span>
              <span
                className={`relative z-10 w-1/2 text-center text-[10px] sm:text-xs font-bold transition-colors ${lang === "en" ? "text-white" : isScrolled ? "text-slate-400" : "text-slate-500"}`}
              >
                EN
              </span>
            </div>
            {/* Tombol Hamburger Mobile */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 -mr-2 rounded-lg ${isScrolled ? "text-white hover:bg-slate-800" : "text-slate-800 hover:bg-slate-200/50"}`}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
        {/* Dropdown Menu Mobile */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-md border-t border-slate-800 shadow-xl md:hidden flex flex-col px-6 py-4 gap-4 animate-in slide-in-from-top-4 duration-300">
            <span
              onClick={() => {
                setActiveView("home");
                setMobileMenuOpen(false);
              }}
              className={`font-semibold cursor-pointer ${activeView === "home" ? "text-blue-400" : "text-white"}`}
            >
              {t.nav.home}
            </span>
            <span
              onClick={() => {
                setActiveView("about");
                setMobileMenuOpen(false);
              }}
              className={`font-semibold cursor-pointer ${activeView === "about" ? "text-blue-400" : "text-white"}`}
            >
              {t.nav.about}
            </span>
            <span
              onClick={() => {
                setActiveView("projects");
                setMobileMenuOpen(false);
              }}
              className={`font-semibold cursor-pointer ${activeView === "projects" ? "text-blue-400" : "text-white"}`}
            >
              {t.nav.projects}
            </span>
          </div>
        )}
      </nav>

      <div className="pt-24 pb-12">
        {/* --- VIEW: HOME --- */}
        {activeView === "home" && (
          <header className="relative pt-12 pb-24 md:pt-24 md:pb-36 px-6 md:px-12 text-center min-h-[85vh] flex flex-col justify-center overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold tracking-wide uppercase mb-8 shadow-sm">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                </span>
                {t.heroBadge}
              </div>

              <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-slate-900 leading-tight">
                {t.heroTitle} <br className="md:hidden" /> {t.heroSub}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  {t.heroHighlight}
                </span>
              </h2>
              <p className="text-lg md:text-xl font-medium text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                {t.heroDesc}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
                <button
                  onClick={() => setActiveView("projects")}
                  className="bg-slate-900 hover:bg-blue-600 text-white text-sm font-semibold py-3.5 px-8 rounded-full shadow-xl transition-all flex items-center gap-2 group"
                >
                  {t.nav.projects}{" "}
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => setActiveView("about")}
                  className="bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 text-sm font-semibold py-3.5 px-8 rounded-full shadow-sm transition-all"
                >
                  {t.nav.about}
                </button>
              </div>

              <div className="pt-8 border-t border-slate-200/60 max-w-3xl mx-auto">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
                  {t.coreTech}
                </p>
                <div className="flex flex-wrap justify-center gap-3 md:gap-6 opacity-70">
                  {[
                    "Next.js",
                    "React",
                    "TypeScript",
                    "Tailwind CSS",
                    "Flutter",
                    "Python",
                    "PyTorch",
                    "Firebase",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-white rounded-lg text-sm font-semibold text-slate-600 shadow-sm border border-slate-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </header>
        )}

        {/* --- VIEW: ABOUT ME --- */}
        {activeView === "about" && (
          <section className="px-6 md:px-12 max-w-5xl mx-auto py-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex flex-col md:flex-row gap-12 items-start mb-16">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-slate-200 border-8 border-white shadow-xl overflow-hidden shrink-0 mx-auto md:mx-0">
                <img
                  src="/foto-profil.jpg"
                  alt="Profile Cedric"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-4">{t.nav.about}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{t.bio}</p>

                <div className="flex gap-4">
                  <a
                    href="mailto:cedric.my04@gmail.com"
                    className="p-3 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                    title="Email"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/cedric-mitchell-yehaziel/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                    title="LinkedIn"
                  >
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                  <a
                    href="https://github.com/ccirdec"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                    title="GitHub"
                  >
                    <GithubIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Kartu Edukasi (Klik untuk pop-up) */}
              <div
                onClick={() => setInfoModal(t.education.modalData)}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="text-blue-600 w-6 h-6" />
                    <h4 className="font-bold text-xl">{t.education.title}</h4>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                </div>
                <div className="mb-4">
                  <h5 className="font-bold">{t.education.univ.name}</h5>
                  <p className="text-sm text-slate-500">
                    {t.education.univ.degree}
                  </p>
                  <p className="text-sm text-blue-600 font-semibold mt-1">
                    {t.education.univ.score}
                  </p>
                </div>
                <div>
                  <h5 className="font-bold">{t.education.sma.name}</h5>
                  <p className="text-sm text-slate-500">
                    {t.education.sma.period}
                  </p>
                </div>
              </div>

              {/* Kartu Pengalaman (Klik untuk pop-up) */}
              <div
                onClick={() => setInfoModal(t.experience.modalData)}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <Briefcase className="text-blue-600 w-6 h-6" />
                    <h4 className="font-bold text-xl">{t.experience.title}</h4>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                </div>
                <div className="mb-6">
                  <h5 className="font-bold">{t.experience.intern.role}</h5>
                  <p className="text-sm text-slate-500">
                    {t.experience.intern.desc}
                  </p>
                </div>
                <div>
                  <h5 className="font-bold">{t.experience.cert.role}</h5>
                  <p className="text-sm text-slate-500">
                    {t.experience.cert.desc}
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* --- VIEW: PROJECTS --- */}
        {activeView === "projects" && (
          <section className="px-6 md:px-12 max-w-6xl mx-auto py-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex flex-wrap gap-2 mb-10 bg-slate-200/50 p-1 rounded-xl inline-flex">
              {categoriesTabs.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${filter === cat ? "bg-white text-blue-600 shadow-sm" : "text-slate-600 hover:text-slate-900"}`}
                >
                  {cat === "All" ? (lang === "en" ? "All" : "Semua") : cat}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((proj) => (
                <div
                  key={proj.id}
                  onClick={() => setSelectedProject(proj)}
                  className="group relative bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden h-[320px] flex flex-col justify-between cursor-pointer"
                >
                  <div className="relative z-10 transition-opacity duration-300 group-hover:opacity-0 pointer-events-none">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                      {proj.icon}
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">
                      {proj.title}
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {proj.desc}
                    </p>
                  </div>

                  <div className="absolute inset-0 bg-slate-900/95 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 backdrop-blur-sm">
                    <div className="scale-75 pointer-events-none">
                      <DeviceSlider
                        type={proj.type}
                        images={[proj.images[0]]}
                      />
                    </div>
                    <div className="absolute bottom-6 bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      {t.btnMore}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* --- POP-UP MODAL INFO (Edukasi & Pengalaman) --- */}
      {infoModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-5xl max-h-[95vh] rounded-[2rem] overflow-hidden flex flex-col lg:flex-row relative shadow-2xl">
            <button
              onClick={() => setInfoModal(null)}
              className="absolute top-4 right-4 z-50 p-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Bagian Kiri: Photo Slider */}
            <div className="w-full lg:w-5/12 bg-slate-50 relative flex items-center justify-center p-8 border-r border-slate-100 min-h-[300px]">
              <PhotoSlider images={infoModal.images} />
            </div>

            {/* Bagian Kanan: Text Content */}
            <div className="w-full lg:w-7/12 p-8 lg:p-12 overflow-y-auto max-h-[50vh] lg:max-h-[95vh]">
              <h3 className="text-3xl font-black text-slate-900 mb-8">
                {infoModal.title}
              </h3>

              {/* Jika tipe Education */}
              {infoModal.type === "education" &&
                infoModal.history.map((edu: any, i: number) => (
                  <div
                    key={i}
                    className="mb-6 relative pl-6 border-l-2 border-blue-100"
                  >
                    <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-1.5 ring-4 ring-white"></div>
                    <h4 className="text-lg font-bold text-slate-800">
                      {edu.school}
                    </h4>
                    <p className="text-sm font-semibold text-blue-600 mb-2">
                      {edu.period}
                    </p>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {edu.details}
                    </p>
                  </div>
                ))}

              {/* Jika tipe Experience */}
              {infoModal.type === "experience" && (
                <>
                  <div className="mb-8">
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">
                      {lang === "en" ? "Company Info" : "Info Perusahaan"}
                    </h4>
                    <h5 className="text-lg font-bold text-slate-800">
                      {infoModal.companyName}
                    </h5>
                    <p className="text-slate-600 leading-relaxed text-sm mt-2">
                      {infoModal.companyDesc}
                    </p>
                  </div>
                  <div className="mb-8">
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">
                      {lang === "en" ? "Project Details" : "Detail Proyek"}
                    </h4>
                    <h5 className="text-lg font-bold text-slate-800">
                      {infoModal.projectName}
                    </h5>
                    <p className="text-slate-600 leading-relaxed text-sm mt-2">
                      {infoModal.projectDesc}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">
                      {lang === "en" ? "Certification" : "Sertifikasi"}
                    </h4>
                    <h5 className="text-lg font-bold text-slate-800">
                      {infoModal.certTitle}
                    </h5>
                    <p className="text-slate-600 leading-relaxed text-sm mt-2">
                      {infoModal.certDesc}
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* --- POP-UP MODAL PROYEK --- */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-6xl max-h-[95vh] rounded-[2rem] overflow-hidden flex flex-col lg:flex-row relative shadow-2xl">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-50 p-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="w-full lg:w-1/2 bg-slate-100 relative flex items-center justify-center p-8 lg:p-12 min-h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/10"></div>
              <div className="relative z-10 w-full flex justify-center">
                <DeviceSlider
                  type={selectedProject.type}
                  images={selectedProject.images}
                />
              </div>
            </div>

            <div className="w-full lg:w-1/2 p-8 lg:p-12 overflow-y-auto max-h-[50vh] lg:max-h-[95vh]">
              <div className="inline-flex gap-2 mb-4">
                {selectedProject.categories.map((c: string) => (
                  <span
                    key={c}
                    className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full"
                  >
                    {c}
                  </span>
                ))}
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-6">
                {selectedProject.title}
              </h3>

              <div className="flex flex-wrap gap-3 mb-8">
  {selectedProject.github && (
    <a 
      href={selectedProject.github} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-xl hover:bg-slate-800 transition-colors shadow-sm"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4"></path></svg>
      GitHub Repo
    </a>
  )}
  {selectedProject.demo && (
    <a 
      href={selectedProject.demo} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-sm"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
      Demo
    </a>
  )}
</div>

              <div className="mb-8">
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">
                  {t.modal.overview}
                </h4>
                <p className="text-slate-600 leading-relaxed text-[15px]">
                  {selectedProject.fullDesc}
                </p>
              </div>

              <div className="mb-8">
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">
                  {t.modal.features}
                </h4>
                <ul className="space-y-2">
                  {selectedProject.features.map((feat: string, i: number) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-slate-600 text-[15px]"
                    >
                      <ChevronRight className="w-5 h-5 text-blue-500 shrink-0" />{" "}
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">
                  {t.modal.tech}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech: string) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-slate-100 text-slate-700 text-xs font-semibold rounded-lg border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

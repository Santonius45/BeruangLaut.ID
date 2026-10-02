export const projects = [
  {
    "number": "01",
    "category": "COMPUTER VISION",
    "title": "Sistem Penyortiran Lemon Berbasis IoT",
    "summary": "Sistem penyortiran berbasis visi menggunakan ESP32-CAM, mekanisme conveyor, dan servo untuk membedakan lemon kuning dan hijau lalu mengarahkannya ke posisi yang ditentukan.",
    "tags": [
      "ESP32-CAM",
      "Computer Vision",
      "Conveyor",
      "Servo Motor",
      "IoT"
    ],
    "outcome": "Selesai & diserahkan",
    "slug": "iot-lemon-sorting"
  },
  {
    "number": "02",
    "category": "ROBOTIKA",
    "title": "Lengan Robot Prostetik Kendali Suara",
    "summary": "Lengan robot prostetik untuk dokter ortopedi menggunakan Arduino Nano dan input suara untuk mengendalikan dua gerakan utama: membuka dan menutup.",
    "tags": [
      "Arduino Nano",
      "Robotics",
      "Voice Control",
      "Embedded"
    ],
    "outcome": "Selesai",
    "slug": "prosthetic-robotic-arm"
  },
  {
    "number": "03",
    "category": "AI ROBOTIKA",
    "title": "Robot Pelayan Berbasis AI",
    "summary": "Pengembangan mekanik untuk proyek robot pelayan berbasis AI di lingkungan layanan makanan modern di Gading Serpong.",
    "tags": [
      "Robotics",
      "AI",
      "Mechanical",
      "Automation"
    ],
    "outcome": "Selesai",
    "slug": "ai-waiter-robot"
  },
  {
    "number": "04",
    "category": "IoT INDUSTRI",
    "title": "Pemantauan Getaran Motor 3 Fasa",
    "summary": "Pengukuran getaran secara real-time pada sumbu X, Y, dan Z menggunakan RMS, Peak-to-Peak, serta spektrum frekuensi FFT, dengan dashboard industri / SCADA / endpoint cloud dan opsi publikasi MQTT.",
    "tags": [
      "Vibration",
      "FFT",
      "SCADA",
      "Cloud",
      "MQTT"
    ],
    "outcome": "Selesai",
    "slug": "motor-vibration-monitoring"
  },
  {
    "number": "05",
    "category": "AI / WEB",
    "title": "Sistem Absensi Pengenalan Wajah",
    "summary": "Sistem absensi berbasis pengenalan wajah yang mengintegrasikan C#, MySQL, tampilan web Python, ekspor dokumen, dan display Arduino UNO.",
    "tags": [
      "Face Recognition",
      "C#",
      "Python",
      "MySQL",
      "Arduino"
    ],
    "outcome": "Proyek selesai dan terdokumentasi",
    "slug": "face-recognition-attendance"
  },
  {
    "number": "06",
    "category": "OTOMASI INDUSTRI",
    "title": "Pemantauan & Kendali Oven Online",
    "summary": "Pemantauan oven secara online menggunakan server dan sensor termodinamika, dengan kendali otomatis berdasarkan kondisi suhu yang ditentukan.",
    "tags": [
      "Sensors",
      "Monitoring",
      "Server",
      "Control"
    ],
    "outcome": "Selesai",
    "slug": "oven-monitoring-control"
  },
  {
    "number": "07",
    "category": "IoT",
    "title": "Pemberi Pakan Ikan Otomatis",
    "summary": "Sistem pemberian pakan ikan otomatis menggunakan Arduino dan NodeMCU ESP8266-12E yang terhubung ke Blynk IoT / Blynk 2.0.",
    "tags": [
      "Arduino",
      "ESP8266",
      "Blynk",
      "IoT"
    ],
    "outcome": "Selesai",
    "slug": "automated-fish-feeding"
  },
  {
    "number": "08",
    "category": "ROBOTIKA / IoT",
    "title": "Robot Keamanan Gudang",
    "summary": "Robot keamanan gudang berbasis IoT menggunakan sensor RFID dan sidik jari untuk akses yang terkontrol.",
    "tags": [
      "RFID",
      "Fingerprint",
      "IoT",
      "Robotics"
    ],
    "outcome": "Selesai",
    "slug": "warehouse-security-robot"
  }
] as const;

export const clients = [
  { number: "01", mark: "SB", logo: "/images/clients/1.jpg", name: "PT. Satnusa Batam"},
  { number: "02", mark: "PLN", logo: "/images/clients/2.jpg", name: "PT. PLN Bright Batam" },
  { number: "03", mark: "VMU", logo: "/images/clients/112.jpg", name: "PT. Virya Mitra" },
  { number: "04", mark: "NG", logo: "/images/clients/113.png", name: "PT. Nuvasa Group" },
  { number: "05", mark: "MOI", logo: "/images/clients/111.jpg", name: "PT Momentum Otomasi Indonesia" },
  { number: "06", mark: "UT", logo: "/images/clients/4.png", name: "Universitas Telkom Indonesia" },
  { number: "07", mark: "UI", logo: "/images/clients/5.png", name: "Universitas Indonesia" },
  { number: "08", mark: "UID", logo: "/images/clients/6.jpg", name: "Universitas Pertahanan Indonesia" },
  { number: "09", mark: "ITB", logo: "/images/clients/7.png", name: "Institut Teknologi Bandung" },
  { number: "10", mark: "ITEBA", logo: "/images/clients/8.png", name: "ITEBA" },
  
  
] as const;

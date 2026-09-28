import ProjectCard from "../components/ProjectCard";
import { clients, projects } from "./data";

export default function Home() {
  return (
    <>
      <main>
        <section className="hero hero-image">
          <div className="hero-overlay" aria-hidden="true"></div>
          <div className="hero-content">
            <div className="eyebrow">CV BERUANGLAUT.ID / PERUSAHAAN TEKNOLOGI</div>
            <p className="hero-copy">
              Kecerdasan Buatan, Robotika, Otomasi, IoT, Computer Vision, dan Rekayasa Perangkat Lunak —
              mengubah tantangan teknis yang kompleks menjadi sistem yang dapat digunakan.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="#work">Lihat Proyek ↘</a>
              <a className="btn glass" href="#contact">Hubungi Kami ↗</a>
            </div>
          </div>
          <div className="hero-bottom-meta" aria-hidden="true">
            <span>BERUANGLAUT / 001</span>
            <span>KETANGGUHAN • INOVASI • REKAYASA</span>
            <span>HARI INI → MASA DEPAN</span>
          </div>
        </section>

        <div className="marquee"><div className="marquee-inner">
          KECERDASAN BUATAN <b>×</b> ROBOTIKA <b>×</b> OTOMASI <b>×</b> IoT <b>×</b> COMPUTER VISION <b>×</b> REKAYASA PERANGKAT LUNAK <b>×</b>
          KECERDASAN BUATAN <b>×</b> ROBOTIKA <b>×</b> OTOMASI <b>×</b> IoT <b>×</b> COMPUTER VISION <b>×</b> REKAYASA PERANGKAT LUNAK <b>×</b>
        </div></div>

        <section className="section" id="work">
          <div className="section-head section-head-clean">
            <p className="section-intro">Kumpulan proyek rekayasa kami di bidang robotika, computer vision, IoT, pemantauan industri, dan sistem perangkat lunak.</p>
          </div>
          <div className="project-grid">{projects.slice(0,6).map(p => <ProjectCard key={p.slug} project={p} />)}</div>
        </section>

        <section className="section clients-section" id="clients">
          <div className="section-head section-head-clean">
            <p className="section-intro">Organisasi dan institusi yang terhubung dengan proyek rekayasa, perangkat lunak, robotika, IoT, dan teknologi yang terdokumentasi.</p>
          </div>
          <div className="client-grid">
            {clients.map((client) => (
              <article className="client-card" key={client.name}>
                <div className="client-mark">
                  <img src={client.logo} alt={`Logo ${client.name}`} />
                </div>
                <div className="client-info">
                  <span className="client-index">{client.number} / REFERENSI</span>
                  <h3>{client.name}</h3>
                  <p>{client.project}</p>
                </div>
                <span className="client-arrow">↗</span>
              </article>
            ))}
          </div>
          <p className="client-note">Logo ditampilkan sebagai identitas visual referensi yang terkait dengan proyek dan pengalaman yang terdokumentasi.</p>
        </section>

        <section className="section" id="capabilities">
          <div className="section-head section-head-clean">
            <p className="section-intro">Perangkat keras, perangkat lunak, dan kecerdasan dipandang sebagai satu kesatuan sistem rekayasa — bukan layanan yang berdiri sendiri.</p>
          </div>
          <div className="cap-grid">
            {[
              ["01","KECERDASAN BUATAN","Machine learning, computer vision, dan sistem cerdas."],
              ["02","ROBOTIKA","Lengan robot, robot bergerak, kendali tertanam, dan sistem gerak."],
              ["03","OTOMASI","Sistem kendali, integrasi mesin, dan otomasi proses."],
              ["04","IoT","Sensor, pemantauan jarak jauh, perangkat terhubung cloud, dan MQTT."],
              ["05","REKAYASA PERANGKAT LUNAK","Aplikasi web, API, database, dan integrasi sistem."],
              ["06","SISTEM INDUSTRI","Pemantauan, pengukuran, dashboard, dan antarmuka rekayasa."]
            ].map(([n,t,d]) => <div className="cap" key={n}><span className="cap-num">{n}</span><h3>{t}</h3><p>{d}</p></div>)}
          </div>
        </section>

        <section className="section" id="about">
          <div className="split">
            <div>
              <div className="section-kicker">Tentang BeruangLaut / 004</div>
              <div className="stats">
                <div className="stat"><strong>AI</strong><span>KECERDASAN</span></div>
                <div className="stat"><strong>IoT</strong><span>SISTEM TERHUBUNG</span></div>
                <div className="stat"><strong>∞</strong><span>RUANG REKAYASA</span></div>
              </div>
            </div>
            <div>
              <div className="philosophy-card"><h3>BER-UANG LAUT</h3><p>Lautan sumber daya — sebuah gambaran tentang banyaknya kemungkinan, ide, dan kemampuan yang dapat dikembangkan.</p></div>
              <div className="philosophy-card"><h3>BER-RUANG LAUT</h3><p>Lautan ruang — menciptakan ruang bagi sistem, eksperimen, dan teknologi untuk berkembang melampaui batas yang umum.</p></div>
              <div className="philosophy-card"><h3>BERUANG LAUT / TARDIGRADE</h3><p>Organisme kecil dan tangguh yang menjadi simbol untuk skala, ketahanan, serta tantangan terhadap batas.</p></div>
              <div className="philosophy-card"><h3>HARI INI → MASA DEPAN</h3><p>CV BeruangLaut.ID berada di antara apa yang dapat dibangun hari ini dan apa yang dapat direkayasa untuk masa depan.</p></div>
            </div>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="contact-box">
            <div>
              <div className="section-kicker">Mulai Proyek / 005</div>
              <p className="section-intro">Ceritakan apa yang ingin Anda bangun, otomasi, pantau, atau kembangkan.</p>
              <div className="hero-actions"><a className="btn primary" href="mailto:hello@beruanglaut.id">Mulai Percakapan ↗</a></div>
            </div>
            <div className="contact-links">
              <a className="contact-link" href="mailto:hello@beruanglaut.id"><span>EMAIL</span><span>hello@beruanglaut.id ↗</span></a>
              <a className="contact-link" href="#work"><span>PORTOFOLIO</span><span>LIHAT PROYEK ↗</span></a>
              <a className="contact-link" href="#about"><span>PERUSAHAAN</span><span>TENTANG KAMI ↗</span></a>
            </div>
          </div>
        </section>
      </main>
      <footer><span>© 2026 CV BERUANGLAUT.ID</span><span>AI / ROBOTIKA / OTOMASI / IoT / PERANGKAT LUNAK</span></footer>
    </>
  );
}

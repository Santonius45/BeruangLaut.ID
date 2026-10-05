import { clients } from "./data";

export default function Home() {
  return (
    <>
      <main>
        {/* =========================================
            HERO
            ========================================= */}
        <section className="hero hero-image">
          <div className="hero-overlay" aria-hidden="true"></div>

          <div className="hero-content">
            <div className="eyebrow">
              CV BERUANGLAUT.ID / PERUSAHAAN TEKNOLOGI
            </div>

            <p className="hero-copy">
              Artificial Intelligence, Robotika, Otomasi, IoT, Computer Vision,
              dan Rekayasa Perangkat Lunak — mengubah tantangan teknis yang
              kompleks menjadi sistem yang dapat digunakan.
            </p>

            <div className="hero-actions">
              <a className="btn primary" href="#clients">
                Our Client ↘
              </a>

              <a className="btn glass" href="#contact">
                Hubungi Kami ↗
              </a>
            </div>
          </div>

          <div className="hero-bottom-meta" aria-hidden="true">
            <span>BERUANGLAUT / 001</span>
            <span>KETANGGUHAN • INOVASI • REKAYASA</span>
            <span>HARI INI → MASA DEPAN</span>
          </div>
        </section>

        {/* =========================================
            MARQUEE
            ========================================= */}
        <div className="marquee">
          <div className="marquee-inner">
            ARTIFICIAL INTELLIGENCE <b>×</b> ROBOTIKA <b>×</b> OTOMASI{" "}
            <b>×</b> IoT <b>×</b> COMPUTER VISION <b>×</b> REKAYASA PERANGKAT
            LUNAK <b>×</b>
            ARTIFICIAL INTELLIGENCE <b>×</b> ROBOTIKA <b>×</b> OTOMASI{" "}
            <b>×</b> IoT <b>×</b> COMPUTER VISION <b>×</b> REKAYASA PERANGKAT
            LUNAK <b>×</b>
          </div>
        </div>

        {/* =========================================
            OUR CLIENT
            ========================================= */}
        <section className="section clients-section" id="clients">
          <div className="section-head section-head-clean">
            <p className="section-intro">Our Client</p>
          </div>

          <div className="client-grid">
            {clients.map((client) => (
              <article className="client-card" key={client.name}>
                <div className="client-mark">
                  <img
                    src={client.logo}
                    alt={`Logo ${client.name}`}
                  />
                </div>

                <div className="client-info">
                  <span className="client-index">
                    {client.number} / REFERENSI
                  </span>

                  <h3>{client.name}</h3>
                </div>

                <span className="client-arrow">↗</span>
              </article>
            ))}
          </div>

          <p className="client-note"></p>
        </section>

        {/* =========================================
            OUR CAPABILITIES
            ========================================= */}
        <section className="section" id="capabilities">
          <div className="section-head section-head-clean">
            <p className="section-intro">Our Capabilities</p>
          </div>

          <div className="cap-grid">
            {[
              [
                "01",
                "KECERDASAN BUATAN",
                "Machine learning, computer vision, dan sistem cerdas.",
              ],
              [
                "02",
                "ROBOTIKA",
                "Lengan robot, robot bergerak, kendali tertanam, dan sistem gerak.",
              ],
              [
                "03",
                "OTOMASI",
                "Sistem kendali, integrasi mesin, dan otomasi proses.",
              ],
              [
                "04",
                "IoT",
                "Sensor, pemantauan jarak jauh, perangkat terhubung cloud, dan MQTT.",
              ],
              [
                "05",
                "REKAYASA PERANGKAT LUNAK",
                "Aplikasi web, API, database, dan integrasi sistem.",
              ],
              [
                "06",
                "SISTEM INDUSTRI",
                "Pemantauan, pengukuran, dashboard, dan antarmuka rekayasa.",
              ],
            ].map(([number, title, description]) => (
              <div className="cap" key={number}>
                <span className="cap-num">{number}</span>

                <h3>{title}</h3>

                <p>{description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================
            ABOUT + CONTACT
            ========================================= */}
        <section className="section" id="about">
          <div className="split">

            {/* =====================================
                LEFT COLUMN
                ===================================== */}
            <div>
              <div className="section-kicker">
                Tentang BeruangLaut / 004
              </div>

              {/* AI / IoT / INFINITY */}
              <div className="stats">
                <div className="stat">
                  <strong>A.I</strong>
                  <span>KECERDASAN</span>
                </div>

                <div className="stat">
                  <strong>I.o.T</strong>
                  <span>SISTEM TERHUBUNG</span>
                </div>

                <div className="stat">
                  <strong>R.P.L</strong>
                  <span>REKAYASA PERANGKAT</span>
                </div>
              </div>

              {/* =================================
                  CONTACT
                  ================================= */}
              <div className="about-contact" id="contact">
                <div className="contact-label">
                  CONTACT
                </div>

                <div className="contact-profile">
                  {/* FOTO */}
                  <div className="contact-photo">
                    <img
                      src="/images/117.jpeg"
                      alt="Samuel Hasiholan Omega"
                    />
                  </div>

                  {/* INFORMASI CONTACT */}
                  <div className="contact-details">
                    <h2 className="contact-name">
                      Samuel Hasiholan Omega, S. Tr. T.
                    </h2>

                    <div className="contact-role">
                      Founder &amp; C.E.O — CV BeruangLaut.ID
                    </div>

                    <div className="contact-info">
                      <a href="tel:+628217600172">
                        <span>☎</span>
                        <span>(+62) 8217600172</span>
                      </a>

                      <a href="mailto:spurba563@gmail.com">
                        <span>✉</span>
                        <span>spurba563@gmail.com</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* =====================================
                RIGHT COLUMN — PHILOSOPHY
                ===================================== */}
            <div>
              <div className="philosophy-card">
                <h3>BER-UANG LAUT</h3>

                <p>
                  CV Kami Mempunyai Uang sebanyak Lautan yang tidak Bisa ditelusuri
                </p>
              </div>

              <div className="philosophy-card">
                <h3>BER-RUANG LAUT</h3>

                <p>
                  CV Kami mempunyai Tempat sebanyak Lautan
                </p>
              </div>

              <div className="philosophy-card">
                <h3>BERUANG LAUT / TARDIGRADE</h3>

                <p>
                  Mahluk terkecil di Dunia, jika ada yang lebih kecil dari Beruang Laut berarti masuk ke Dunia Kuantum. 
                </p>
                 <p>
                  Jika ada yang lebih kecil atau lebih Cepat dari Beruang Laut berarti Bisa menembus Waktu
                </p>
              </div>

              <div className="philosophy-card">
                <h3>HARI INI MENUJU MASA DEPAN</h3>

                <p>
                  CV BeruangLaut.ID menjadi pembatas antara Masa sekarang dan Masa depan
                </p>
              </div>
            </div>

          </div>
        </section>
      </main>

      {/* =========================================
          FOOTER
          ========================================= */}
      <footer>
        <span>© 2026 CV BERUANGLAUT.ID</span>

        <span>
          AI / ROBOTIKA / OTOMASI / IoT / PERANGKAT LUNAK
        </span>
      </footer>
    </>
  );
}
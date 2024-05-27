import React from 'react'

const About = () => {
  return (
    <>
      <div className="vision-mission-content">
      <div className="visi-misi-dan-tujuan-wrapper">
        <h1 className="visi-misi-dan">Visi, Misi, dan Tujuan</h1>
      </div>
      <div className="vision-content-parent">
        <div className="vision-content">
          <div className="vision-content-inner">
            <div className="frame-group">
              <div className="vision-label-wrapper">
                <button className="vision-label">
                  <div className="visi">Visi</div>
                </button>
              </div>
              <div className="menciptakan-platform-online">
                Menciptakan platform online yang dapat membantu pengguna melalui
                pengalaman digital yang inovatif, edukatif, dan berdaya guna.
                Kami bertekad untuk menjadi lingkungan yang inklusif, mendukung
                pertumbuhan pribadi dan profesional, serta mendorong kolaborasi
                yang positif
              </div>
            </div>
          </div>
          <div className="frame-container">
            <div className="frame-wrapper">
              <button className="tujuan-wrapper">
                <div className="tujuan">Tujuan</div>
              </button>
            </div>
            <div className="membantu-masyarakat-mencari">
              Membantu masyarakat mencari informasi lokasi kuliner Sumatera
              utara dalam suatu platform website
            </div>
          </div>
        </div>
        <div className="goal-content-parent">
          <button className="goal-content">
            <div className="misi">Misi</div>
          </button>
          <div className="frame-div">
            <div className="frame-parent1">
              <div className="frame-wrapper1">
                <div className="frame-parent2">
                  <div className="vector-parent">
                    <img
                      className="frame-child"
                      loading="lazy"
                      alt=""
                      src="/ellipse-142.svg"
                    />
                    <img
                      className="frame-item"
                      loading="lazy"
                      alt=""
                      src="/ellipse-143.svg"
                    />
                  </div>
                  <img
                    className="frame-inner"
                    loading="lazy"
                    alt=""
                    src="/ellipse-144.svg"
                  />
                  <div className="vector-group">
                    <img
                      className="ellipse-icon"
                      loading="lazy"
                      alt=""
                      src="/ellipse-146.svg"
                    />
                    <img
                      className="frame-child1"
                      loading="lazy"
                      alt=""
                      src="/ellipse-145.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="mengembangkan-konten-edukatif-container">
                <p className="mengembangkan-konten-edukatif">
                  Mengembangkan konten edukatif berkualitas
                </p>
                <p className="blank-line">&nbsp;</p>
                <p className="desain-antarmuka-ramah">{`Desain antarmuka ramah pengguna dan inovasi `}</p>
                <p className="blank-line1">&nbsp;</p>
                <p className="teknologi-untuk-menciptakan">{`Teknologi untuk menciptakan platform inklusif yang memfasilitasi kolaborasi positif `}</p>
                <p className="blank-line2">&nbsp;</p>
                <p className="memberdayakan-pengguna">{`Memberdayakan pengguna `}</p>
                <p className="blank-line3">&nbsp;</p>
                <p className="memberikan-dampak-positif">
                  Memberikan dampak positif pada pertumbuhan pribadi
                  dan profesional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default About

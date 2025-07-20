import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const Mentahan = () => {
  useEffect(() => {
    // Removing Preloader
    setTimeout(() => {
      const preloader = document.getElementById("preloader");
      if (preloader) {
        preloader.classList.add("preloader-hide");
      }
    }, 150);

    // Load external JS
    const loadJS = () => {
      const scripts = [
        'https://kuyka.com/scripts/bootstrap.min.js',
        'https://kuyka.com/scripts/kuyka.js',
        'https://kuyka.com/scripts/preset/content.js'
      ];
      
      scripts.forEach(src => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        document.body.appendChild(script);
      });
    };

    loadJS();

    return () => {
      // Cleanup scripts if needed
    };
  }, []);

  return (
    <div className="theme-light refreshable" data-highlight="highlight-red" data-gradient="body-default">
      <Helmet>
        {/* Meta Tags */}
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover" />
        
        {/* CSS Files */}
        <link rel="stylesheet" type="text/css" href="https://kuyka.com/styles/bootstrap.css" />
        <link rel="stylesheet" type="text/css" href="https://kuyka.com/styles/kuyka.css" />
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700,700i,900,900i|Source+Sans+Pro:300,300i,400,400i,600,600i,700,700i,900,900i&display=swap" rel="stylesheet" />
        <link rel="stylesheet" type="text/css" href="https://kuyka.com/fonts/css/fontawesome-all.min.css" />
        <link rel="manifest" href="_manifest.json" data-pwa-version="set_in_manifest_and_pwa_js" />
        <link rel="apple-touch-icon" sizes="180x180" href="app/icons/icon-192x192.png" />
      </Helmet>

      {/* Preloader */}
      <div id="preloader" className="preloader-hide">
        <div className="spinner-border color-highlight" role="status"></div>
      </div>

      {/* Konten lainnya sama seperti sebelumnya */}
      <div id="page">
        {/* Header */}
        <header className="header-auto-show" backbutton="preset-alight-motion"></header>
        
        {/* Footer */}
        <footer activelink="pages"></footer>

        {/* Main Content */}
        <div className="page-content header-clear-small">
          <div className="card card-style rounded-sm shadow-xl mb-3">
            <div className="content">
              <div className="d-flex">
                <div className="align-self-center pe-3">
                  <a href="preset-alight-motion.html" className="icon icon-xs rounded-sm bg-highlight">
                    <i className="fa fa-angle-left color-white"></i>
                  </a>
                </div>
                <div className="align-self-center">
                  <h3 className="font-700 mb-0 title">Ryuzawda Preset 059</h3>
                </div>
                <div className="align-self-center ms-auto">
                  <a href="#" data-toggle-theme="" className="show-on-theme-dark icon icon-xs rounded-sm bg-highlight">
                    <i className="fa fa-lightbulb font-14 color-white"></i>
                  </a>
                  <a href="#" data-toggle-theme="" className="show-on-theme-light icon icon-xs rounded-sm bg-highlight">
                    <i className="fa fa-moon font-14 color-white"></i>
                  </a>
                </div>
                <div className="align-self-center ms-2">
                  <a href="#" data-menu="menu-share" className="icon icon-xs rounded-sm bg-highlight">
                    <i className="fa fa-share-alt font-12 color-white"></i>
                  </a>
                </div>
              </div>
              
              <div className="iframe-vertical my-3">
                <iframe 
                  className="rounded-sm" 
                  style={{height: '590px', width: '332px'}} 
                  src="https://www.tiktok.com/embed/v3/7516773863015877944?&rel=0"
                  title="TikTok Video"
                  allowFullScreen
                ></iframe>
              </div>  
              
              <div className="d-flex">
                <div className="m-auto text-center">
                  <a href="#" className="btn next btn-full btn-m rounded-sm bg-highlight">
                    <i className="fa fa-angle-left color-white"></i>
                  </a>
                </div>
                <div className="m-auto text-center w-100 mx-2">
                  <a 
                    href="https://safelink.kuyka.com/2024/01/ryuzawa.html#?link=aHR0cHM6Ly9hbGlnaHRjcmVhdGl2ZS5jb20vYW0vc2hhcmUvdS9SSWNPYjJtNnhiZnVsOWFZNUhWcUlKVWJvTVIyL3AvRWt3ck9scHFrZi02ZTNlNjFjNTdjYjc1YThl" 
                    className="btn redirect btn-full btn-m font-900 text-uppercase rounded-sm bg-highlight"
                  >
                    Download Preset
                  </a>
                </div>
                <div className="m-auto text-center">
                  <a href="#" className="btn prev btn-full btn-m rounded-sm bg-highlight">
                    <i className="fa fa-angle-right color-white"></i>
                  </a>
                </div>
              </div>
              
              <p className="color-theme opacity-50 mt-2 font-11 line-height-xs">
                *Semua Preset Sudah Di Bawah 5 MB & Sound!
              </p>
            </div>
          </div>

          {/* Footer Preset */}
          <div className="card card-style rounded-sm shadow-xl my-3">
            <div className="d-flex px-3 py-3">
              <div className="align-self-center">
                <img src="https://kuyka.com/images/aplikasi-mod/alight-motion/logo.png" width="60" className="rounded-sm me-3" alt="Alight Motion Logo" />
              </div>
              <div className="align-self-center">
                <h4>Alight Motion Mod</h4>
                <p className="mb-0 mt-n2 opacity-70 font-11">Versi Terbaru & Terupdate</p>
              </div>
              <div className="ms-auto align-self-center">
                <a href="alight-motion-mod.html" className="btn btn-xs rounded-xs text-uppercase scale-box font-900 bg-highlight">Download</a>
              </div>
            </div>
          </div>

          <div className="card card-style rounded-sm shadow-xl">
            <div className="content mb-0">
              <h3 className="text-center mb-0">Yuk Follow Sosial Media Kami!</h3>
              <p className="text-center color-highlight mt-n1 font-12">Biar Ga Ketinggalan Update Preset Terbaru!</p>
              <div className="mt-n3">
                <div className="row mb-0">
                  <div className="col-6">
                    <a href="https://whatsapp.com/channel/0029VabuukRJuyA5ilHphS1l" className="mb-3 text-start btn btn-m btn-full bg-whatsapp btn-icon rounded-s text-uppercase font-700">
                      <i className="fab fa-whatsapp rounded-s font-19 text-center"></i> WhatsApp
                    </a>
                    <a href="https://www.youtube.com/@kuykapreset" className="mb-3 text-start btn btn-m btn-full bg-red-dark btn-icon rounded-s text-uppercase font-700">
                      <i className="fab fa-youtube rounded-s font-16 text-center"></i> Youtube
                    </a>
                  </div>
                  <div className="col-6">
                    <a href="https://t.me/kuykapreset" className="mb-3 text-start btn btn-m btn-full bg-blue-dark btn-icon rounded-s text-uppercase font-700">
                      <i className="fa-brands fa-telegram rounded-s font-19 text-center"></i> Telegram
                    </a>
                    <a href="https://www.tiktok.com/@kuykapreset" className="mb-3 text-start btn btn-m btn-full bg-dark color-white btn-icon rounded-s text-uppercase font-700">
                      <i className="fab fa-tiktok rounded-s font-16 text-center"></i> TikTok
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <a href="tutorial-download-preset.html" className="fixed-card btn btn-xs rounded-sm font-800 bg-highlight">
            <i className="fa-solid fa-gear fa-spin color-white me-2"></i>Tutorial Download
          </a>
        </div>
      </div>
    </div>
  );
};

export default Mentahan;
import React, { useEffect, useState } from "react";
import logo66 from "../assets/66.jpg"; // 👈 add this

const CustomStyles = () => (
  <style>{`
    /* Keyframes */
    @keyframes drive {
      0% { transform: translateX(0) scale(1.0); }
      50% { transform: translateX(20px) scale(1.02); }
      100% { transform: translateX(0) scale(1.0); }
    }

    @keyframes wheel-spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    @keyframes road-move {
      from { background-position-x: 0; }
      to { background-position-x: -30px; }
    }

    @keyframes progress-fill {
      0% { width: 0%; opacity: 0.5; }
      50% { width: 100%; opacity: 1; }
      100% { width: 0%; opacity: 0.5; }
    }

    /* Base Loader Container */
    .loader-container {
      position: fixed;
      inset: 0;
      background: #0f172a; /* Deep navy */
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
      overflow: hidden;
    }

    .loader-inner {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .loader-top {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 2rem;
    }

    /* Road – slightly wider for bigger truck */
    .loader-road {
      width: 420px;
      height: 6px;
      background: repeating-linear-gradient(
        90deg,
        #1e293b,
        #1e293b 15px,
        #475569 15px,
        #475569 30px
      );
      margin: 0 auto 30px;
      border-radius: 999px;
      animation: road-move 0.8s linear infinite;
    }

    /* Truck – made a bit bigger */
    .loader-truck {
      position: relative;
      width: 380px;   /* was 320px */
      height: 115px;  /* was 100px */
      margin: 0 auto;
      animation: drive 2s ease-in-out infinite alternate;
    }

    .loader-trailer {
      position: absolute;
      right: 0;
      top: 15px;
      width: 280px;   /* was 240px */
      height: 80px;   /* was 70px */
      background: #475569;
      border-radius: 8px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10;
      border: 2px solid #334155;
      overflow: hidden;
    }

    /* ====== LOGO AREA ON TRAILER ====== */
    .loader-logo-area {
      width: 100%;
      height: 100%;
      background: #ffffff;
      margin: 6px;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 6px;
    }

    .loader-logo-img {
      max-width: 90%;
      max-height: 90%;
      object-fit: contain;
      display: block;
    }

    .loader-cab {
      position: absolute;
      left: 10px;
      top: 18px;
      width: 95px;    /* was 80px */
      height: 80px;   /* was 70px */
      background: #475569;
      border-radius: 10px 20px 0 10px;
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
      z-index: 20;
      border: 2px solid #334155;
      clip-path: polygon(0 0, 100% 0, 100% 100%, 15% 100%);
    }

    .loader-window {
      position: absolute;
      top: 6px;
      left: 24px;
      width: 46px;
      height: 38px;
      background: #e0f2f7;
      border-radius: 4px;
      z-index: 25;
      transform: skewX(-5deg);
      border: 1px solid #94a3b8;
    }

    .loader-lights {
      position: absolute;
      bottom: 6px;
      left: 6px;
      width: 9px;
      height: 9px;
      background: #fde047;
      border-radius: 50%;
      box-shadow: 0 0 8px 1px #fde047;
      z-index: 30;
    }

    /* Wheels – slightly larger & repositioned */
    .loader-wheel {
      position: absolute;
      bottom: -18px;         /* was -15px */
      width: 46px;           /* was 40px */
      height: 46px;          /* was 40px */
      border-radius: 50%;
      background: #1e293b;
      border: 4px solid #cbd5e1;
      box-shadow: inset 0 0 5px rgba(0,0,0,0.5);
      animation: wheel-spin 0.4s linear infinite;
      z-index: 30;
    }

    .loader-wheel-cab       { left: 36px; }
    .loader-wheel-trailer-1 { right: 150px; }
    .loader-wheel-trailer-2 { right: 90px; }
    .loader-wheel-trailer-3 { right: 30px; }

    .loader-connection {
      position: absolute;
      left: 90px;
      top: 55px;
      width: 18px;
      height: 12px;
      background: #334155;
      z-index: 15;
    }

    /* Text + progress bar */
    .loader-text {
      margin-top: 0.25rem;
      margin-bottom: 0.9rem;
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
      font-size: 0.85rem;
      letter-spacing: 0.27em;
      text-transform: uppercase;
      color: #67e8f9;
      text-align: center;
      opacity: 0.95;
    }

    @media (min-width: 768px) {
      .loader-text {
        font-size: 1rem;
      }
    }

    .loader-progress {
      width: 320px;
      max-width: 80vw;
      height: 10px;
      background: #1f2937;
      border-radius: 999px;
      overflow: hidden;
      box-shadow: inset 0 0 6px rgba(15,23,42,0.9);
    }

    .loader-progress-bar {
      height: 100%;
      border-radius: inherit;
      background: linear-gradient(90deg, #22d3ee, #0ea5e9);
      animation: progress-fill 2.4s ease-in-out infinite;
    }
  `}</style>
);

export default function TruckLoader() {
  const [loadingText, setLoadingText] = useState("Loading your experience...");

  useEffect(() => {
    const messages = [
      "PREPARING YOUR DELIVERY...",
      "CHECKING STOCK & ROUTES...",
      "ALMOST THERE..."
    ];
    let index = 0;

    const intervalId = setInterval(() => {
      index = (index + 1) % messages.length;
      setLoadingText(messages[index]);
    }, 2600);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="loader-container">
      <CustomStyles />
      <div className="loader-inner">
        {/* Truck + road */}
        <div className="loader-top">
          <div className="loader-truck">
            {/* Cab */}
            <div className="loader-cab">
              <div className="loader-window" />
              <div className="loader-lights" />
            </div>

            {/* Connector */}
            <div className="loader-connection" />

            {/* Trailer */}
            <div className="loader-trailer">
              <div className="loader-logo-area">
                <img
                  src={logo66}
                  alt="Future Foodstuff Trading Co. LLC logo"
                  className="loader-logo-img"
                />
              </div>
            </div>

            {/* Wheels */}
            <div className="loader-wheel loader-wheel-cab" />
            <div className="loader-wheel loader-wheel-trailer-1" />
            <div className="loader-wheel loader-wheel-trailer-2" />
            <div className="loader-wheel loader-wheel-trailer-3" />
          </div>

          {/* Road */}
          <div className="loader-road" />
        </div>

        {/* Text */}
        <p className="loader-text">{loadingText}</p>

        {/* Progress bar */}
        <div
          className="loader-progress"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div className="loader-progress-bar" />
        </div>
      </div>
    </div>
  );
}

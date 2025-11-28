// src/components/WhatsAppFloat.jsx
export default function WhatsAppFloat() {
  const whatsappNumber = "971566037687"; // same as Contact.jsx
  const message = encodeURIComponent(
    "Hi, I’d like to know more about your products and services."
  );

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      className="wa-float"
    >
      <div className="wa-float-inner">
        <div className="wa-float-icon">
          {/* simple WhatsApp icon SVG */}
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="wa-float-icon-svg"
          >
            <path d="M12.04 2C6.58 2 2.2 6.37 2.2 11.83c0 2.09.61 4.02 1.78 5.72L2 22l4.58-1.91a9.9 9.9 0 0 0 5.46 1.6h.01c5.46 0 9.84-4.37 9.84-9.83C21.9 6.37 17.5 2 12.04 2Zm0 17.75c-1.73 0-3.42-.47-4.89-1.36l-.35-.21-2.72 1.13 1.04-2.84-.23-.37A7.62 7.62 0 0 1 4.4 11.8c0-4.21 3.43-7.63 7.65-7.63 4.21 0 7.64 3.42 7.64 7.63 0 4.2-3.43 7.63-7.64 7.63Zm4.22-5.68c-.23-.11-1.37-.68-1.58-.76-.21-.08-.36-.11-.52.11-.16.23-.6.76-.73.92-.13.15-.27.17-.5.06-.23-.11-.96-.35-1.82-1.12-.67-.6-1.12-1.34-1.25-1.57-.13-.23-.01-.35.1-.46.1-.1.23-.27.35-.4.12-.13.16-.23.24-.38.08-.15.04-.28-.02-.4-.06-.11-.52-1.25-.71-1.71-.19-.46-.39-.4-.52-.4h-.44c-.15 0-.4.06-.61.28-.21.23-.8.78-.8 1.9 0 1.12.82 2.2.94 2.35.11.15 1.6 2.44 3.9 3.42.55.24.97.39 1.3.5.55.18 1.05.15 1.44.09.44-.07 1.37-.56 1.57-1.1.19-.54.19-1 .13-1.1-.06-.1-.21-.16-.44-.27Z" />
          </svg>
        </div>
        <div className="wa-float-text">
          <span className="wa-float-label">WhatsApp us</span>
          <span className="wa-float-number">+971 56 603 7687</span>
        </div>
      </div>
    </a>
  );
}

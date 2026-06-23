export default function Contact() {
  return (
    <div style={{ 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px',
      background: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
      color: 'white',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>
        📞 Contact Us
      </h1>
      <p style={{ fontSize: '1.5rem' }}>Email: example@email.com</p>
      <p style={{ fontSize: '1.2rem' }}>Phone: +123 456 7890</p>
    </div>
  );
}
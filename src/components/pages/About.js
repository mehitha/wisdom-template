export default function About() {
  return (
    <div style={{ 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px',
      background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      color: 'white',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>
        📖 About Us
      </h1>
      <p style={{ fontSize: '1.5rem', maxWidth: '600px', lineHeight: '1.6' }}>
        Welcome to Wisdom Template! We are building amazing things with Next.js.
      </p>
    </div>
  );
}

import './Demo.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="demo-navbar" style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.03)', borderBottom: '1px solid #e5e7eb', padding: '24px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#fff' }}>
      <div className="demo-navbar-logo" style={{ fontSize: '1.5rem', fontWeight: 700, color: '#222', letterSpacing: '1px', fontFamily: 'Segoe UI, Arial, sans-serif' }}>XinAI</div>
      <ul className="demo-navbar-links" style={{ display: 'flex', gap: '40px', listStyle: 'none', margin: 0, padding: 0 }}>
        <li style={{ fontSize: '1.08rem', color: '#444', fontWeight: 500, fontFamily: 'Segoe UI, Arial, sans-serif', cursor: 'pointer' }}>Home</li>
        <li style={{ fontSize: '1.08rem', color: '#444', fontWeight: 500, fontFamily: 'Segoe UI, Arial, sans-serif', cursor: 'pointer' }}>
          <Link to="/courses" style={{ textDecoration: 'none', color: 'inherit' }}>Courses</Link>
        </li>
        <li style={{ fontSize: '1.08rem', color: '#444', fontWeight: 500, fontFamily: 'Segoe UI, Arial, sans-serif', cursor: 'pointer' }}>Community</li>
        <li style={{ fontSize: '1.08rem', color: '#444', fontWeight: 500, fontFamily: 'Segoe UI, Arial, sans-serif', cursor: 'pointer' }}>Profile</li>
      </ul>
    </nav>
  );
}

function Demo() {
  return (
    <Header />
  );
}

export default Demo;

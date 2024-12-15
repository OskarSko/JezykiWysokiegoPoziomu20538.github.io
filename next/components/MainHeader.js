import Link from 'next/link';
import styles from './main-header.module.css';

export default function MainHeader() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  
  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="/">
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img
            src={`${basePath}/images/logo.png`}
            alt="A plate with food on it"
            style={{ height: '40px', width: '40px' }}
          />
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fff' }}>
            Meals Page
          </span>
        </div>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/meals/share">Share</Link>
          </li>
          <li>
            <Link href="/community">Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

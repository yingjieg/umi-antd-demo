import styles from './index.css';
import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';
import SideBar from '@/layouts/SideBar';
import LoginLayout from '@/layouts/LoginLayout';

function BasicLayout(props) {
  const { pathname } = props.location;

  if (pathname === '/login') {
    return <LoginLayout>{props.children}</LoginLayout>;
  }

  return (
    <div className={styles.normal}>
      <Header />
      <div style={{ display: 'flex' }}>
        <SideBar />
        <div>{props.children}</div>
      </div>

      <Footer />
    </div>
  );
}

export default BasicLayout;

import '../styles/globals.css';
import type { AppProps } from 'next/app';
import '../styles/home.scss';
import '../styles/menu.scss';
import '../styles/login.module.scss'

export default function Main({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}


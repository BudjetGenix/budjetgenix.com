import styles from "../../styles/login.module.scss"
import {useEffect, useRef} from "react";


export default function Login() {
    const f = useRef(null);
    const el = f.current!;
    console.log(el);

    return (
        <>
            <div className={styles.login}>
                <div className={styles.form}>
                    <div className={styles.header}>
                        Hei! Kirjaudu sisään.
                    </div>
                    <div className={styles.form_container}>
                        <div className={styles.left}>

                        </div>
                        <div className={styles.right} ref={f} />
                    </div>
                </div>
            </div>
        </>
    )
}
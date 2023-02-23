/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import styles from "../styles/Home.module.css";

function Footer() {
	return (
		<footer 
         className={styles.left}>
        <div>
          <Link href="/" passHref role="button">
            <img
              src={`/logo.png`}
              alt="Thirdweb Logo"
              width={135}
              style={{ cursor: "pointer" }}
            />
          </Link>
        </div>
        <p className='text-sm text-slate-500'>&copy; 2023 Donuts Protocol. All rights reserved.</p>
        </footer>
	);
}

export default Footer;
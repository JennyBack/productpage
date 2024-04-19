import React from 'react';
import styles from './FooterSection.module.css';

const FooterSection = () => {
    return (
        <>
            <p
                className={'paragraph-regular'}
                style={{ color: 'var(--lightgrey--)', padding: '0.3rem 1rem' }}
            >
                This is a portfolio project, not a real e-commerce site.
            </p>
            <ul className={styles.linkList}>
                <li>
                    <a
                        className={'heading-h5-regular'}
                        style={{ textDecoration: 'none', color: 'var(--white--)' }}
                        href="https://jennydev.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Portfolio site
                    </a>
                </li>
                <li>
                    <a
                        className={'heading-h5-regular'}
                        style={{ textDecoration: 'none', color: 'var(--white--)' }}
                        href="https://www.linkedin.com/in/jennybäcklin"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>
                </li>
                <li>
                    <a
                        className={'heading-h5-regular'}
                        style={{ textDecoration: 'none', color: 'var(--white--)' }}
                        href="https://github.com/JennyBack"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Github
                    </a>
                </li>
            </ul>
        </>
    );
};

export default FooterSection;

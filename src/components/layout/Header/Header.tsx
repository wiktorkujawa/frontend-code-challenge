import React, { FC } from 'react';
import Link from 'next/link';

import { Logo } from '@/atoms/logo/Logo';
import styles from './Header.module.sass'

export const Header: FC= () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/">
          <Logo type='core'/>
        </Link>
      </div>
    </header>
  )
}
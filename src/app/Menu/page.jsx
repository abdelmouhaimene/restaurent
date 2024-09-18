import React from 'react';

import MenuHeader from './sections/MenuHeader';

// import { useTranslations } from 'next-intl'
// import {unstable_setRequestLocale} from 'next-intl/server';

const MenuPage = () => {
  // unstable_setRequestLocale(locale);
  // const t = useTranslations('Index');
  return (
    // <div>{t('title')}</div>
    <div className=' padding'>
      <MenuHeader />
    </div>
  )
}

export default MenuPage


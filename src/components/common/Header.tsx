import * as React from 'react';

// css
import './Header.scss';
import logoImg from '../../asset/logo_crimsoned.svg';
import logoText from '../../asset/logo_text.svg';

// i18n
import { useTranslation } from "react-i18next";

function Header() {
    const { t } = useTranslation();

    return (
        <div className='menu'>
            <div className='inner'>
                <button className='logoBtn'>
                    <img className='logoImg' src={logoImg} alt='logo' />
                    <img className='logoText' src={logoText} alt='logo' />
                </button>
                <nav className='gnb no-drag'>
                    <ul className='gnbList'>
                        <div className='menuList spotLight'>
                            {t('hello')}
                            <div className='spotInner, inner01'>
                                <li>스포트 12 ~ 15W</li>
                                <li>스포트 21 ~ 25W</li>
                                <li>스포트 30 ~ 40W</li>
                                <li>스포트 50W</li>
                            </div>
                        </div>
                        <div className='menuList downLight'>
                            LED 다운라이트
                            <div className='spotInner, inner02'>
                                <li>45타공 이하</li>
                                <li>55 ~ 65 타공</li>
                                <li>70 ~ 80 타공</li>
                                <li>50 ~ 70 타공</li>
                                <li>70 ~ 80 타공</li>
                                <li>80 ~ 90 타공</li>
                                <li>90 ~ 100 타공</li>
                                <li>105 ~ 125 타공</li>
                                <li>130 타공이상</li>
                            </div>
                        </div>
                        <div className='menuList spotLight'>
                            할로겐 다운라이트
                        </div>
                        <div className='menuList spotLight'>
                            Product
                        </div>
                        <div className='menuList spotLight'>
                            HOT SALE
                        </div>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header;
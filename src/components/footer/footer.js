import React from 'react';
import {FooterStyledComponent} from './footer.theme';

const Footer = ({footerQuote='Copyright © 2019 Merck KGaA, Darmstadt, Germany. All Rights Reserved.', ...props}) => {
    return (
        <FooterStyledComponent {...props}>
            <div>
                <small>{footerQuote}</small>
            </div>
            <div>
                <img src="assets/footer/footer-logo.png" alt="Merck" width="30vw" />
            </div>
        </FooterStyledComponent>
            )
        }
        
export default Footer;
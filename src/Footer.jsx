import React from 'react';

function Footer() {
    const currentYear = new Date().getFullYear();
    return <Footer>
        Copyright © {currentYear}
    </Footer>
}

export default Footer;
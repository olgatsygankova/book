import React, { Component } from 'react';
import './footer.less';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer__copyright">2017 &copy; BookAddict</div>
                <div className="footer__copyright-description">Все права защищены</div>
            </footer>
        );
    }
}

export default Footer;
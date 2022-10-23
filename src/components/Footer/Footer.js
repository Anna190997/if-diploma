import './Footer.css';
import { CUSTOMERSERVICE, CONTACTUS, INFO, FOLLOWUS } from '../../constants';
import FooterLinks from '../FooterLinks/FooterLinks';
import Icon from '../Icon/Icon';
import { useState } from 'react';

const Footer = () => {
  const [menuFooter, setMenuFooter] = useState({
    customer: false,
    info: false,
    follow: false,
    contact: false,
  });

  const changeMenuFooter = (field) => {
    setMenuFooter((prevState) => ({ ...prevState, [field]: true }));
  };
  const changeFooter = (field) => {
    setMenuFooter((prevState) => ({ ...prevState, [field]: false }));
  };

  return (
    <div>
      <div className="footer">
        <div className="container">
          <div className="footer_elements">
            <div className="footer_menu">
              <div className="footer_items first col-2">
                <ul className="service">
                  <div className="adaptive_footer">
                    {!menuFooter.customer ? (
                      <Icon
                        id="expand-icon"
                        icon="icon_list_invisible"
                        show={() => changeMenuFooter('customer')}
                      />
                    ) : (
                      <Icon
                        id="hide-icon"
                        icon="icon_list_invisible"
                        show={() => changeFooter('customer')}
                      />
                    )}
                    <li className="service_items">CUSTOMER SERVICE</li>
                  </div>
                  <div className="invisible">
                    {CUSTOMERSERVICE.map((item) => (
                      <FooterLinks linksName={item} />
                    ))}
                  </div>
                  {menuFooter.customer && (
                    <>
                      <ul className="service_adaptive">
                        {CUSTOMERSERVICE.map((item) => (
                          <FooterLinks linksName={item} />
                        ))}
                      </ul>
                    </>
                  )}
                </ul>
              </div>
              <div className="footer_items col-2">
                <ul className="info">
                  <div className="adaptive_footer">
                    {!menuFooter.info ? (
                      <Icon
                        id="expand-icon"
                        icon="icon_list_invisible"
                        show={() => changeMenuFooter('info')}
                      />
                    ) : (
                      <Icon
                        id="hide-icon"
                        icon="icon_list_invisible"
                        show={() => changeFooter('info')}
                      />
                    )}
                    <li className="info_items">INFO</li>
                  </div>
                  <div className="invisible">
                    {INFO.map((item) => (
                      <FooterLinks linksName={item} />
                    ))}
                  </div>
                  {menuFooter.info && (
                    <>
                      <ul className="service_adaptive">
                        {INFO.map((item) => (
                          <FooterLinks linksName={item} />
                        ))}
                      </ul>
                    </>
                  )}
                </ul>
              </div>
              <div className="footer_items col-2">
                <ul className="follow">
                  <div className="adaptive_footer">
                    {!menuFooter.follow ? (
                      <Icon
                        id="expand-icon"
                        icon="icon_list_invisible"
                        show={() => changeMenuFooter('follow')}
                      />
                    ) : (
                      <Icon
                        id="hide-icon"
                        icon="icon_list_invisible"
                        show={() => changeFooter('follow')}
                      />
                    )}
                    <li className="follow_items">FOLLOW US</li>
                  </div>
                  <div className="footer_img">
                    <div className="links_logo">
                      <Icon id="facebok-logo" icon="footer_logo invisible" />
                      <Icon id="odonklassniki-logo" icon="footer_logo invisible" />
                      <Icon id="instagram-logo" icon="footer_logo invisible" />
                    </div>
                    <div className="contacts_links">
                      <div className="invisible">
                        {FOLLOWUS.map((item) => (
                          <FooterLinks linksName={item} />
                        ))}
                      </div>
                      {menuFooter.follow && (
                        <>
                          <ul className="service_adaptive">
                            {FOLLOWUS.map((item) => (
                              <FooterLinks linksName={item} />
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                  </div>
                </ul>
              </div>
              <div className="footer_items col-2">
                <ul className="contact">
                  <div className="adaptive_footer">
                    {!menuFooter.contact ? (
                      <Icon
                        id="expand-icon"
                        icon="icon_list_invisible"
                        show={() => changeMenuFooter('contact')}
                      />
                    ) : (
                      <Icon
                        id="hide-icon"
                        icon="icon_list_invisible"
                        show={() => changeFooter('contact')}
                      />
                    )}
                    <li className="contact_items">CONTACT US</li>
                  </div>
                  <div className="invisible">
                    {CONTACTUS.map((item) => (
                      <FooterLinks linksName={item} />
                    ))}
                  </div>
                  {menuFooter.contact && (
                    <>
                      <ul className="service_adaptive">
                        {CONTACTUS.map((item) => (
                          <FooterLinks linksName={item} />
                        ))}
                      </ul>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

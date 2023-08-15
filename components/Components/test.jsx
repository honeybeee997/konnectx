import React from 'react';
import "../../src/main.scss"

const Test = () => {
  return (
    
    <div className="heade_homepage">
      <div className="container">
        <HeaderMenuMain />
        <div className="display__on_mobile">
          <MenuIconContainer />
          <MobileMenuContainer />
        </div>
      </div>
      <div className="container">
        <YearsContainer />
        <div className="in_text-withline">in</div>
        <div className="performing_research">
          Performing research &amp; constant development
        </div>
      </div>
      <div style={{ position: 'relative' }}>
        <ListItemsHeaderHompage />
        <div className="circles-left">
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
          <div className="circle circle-3"></div>
        </div>
        <div className="circles-right">
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
          <div className="circle circle-3"></div>
        </div>
      </div>
    </div>
  );
};

const HeaderMenuMain = () => {
  return (
    <div className="header_menu_main display_none_on_mobile">
      <div className="menu-main-header-container">
        <ul id="menu-main-header-2" className="menu">
          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-5 current_page_item menu-item-19">
            <a href="http://localhost/villaextechnologies/" aria-current="page">Home</a>
          </li>
          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16">
            <a href="http://localhost/villaextechnologies/case-study/">Case studies</a>
          </li>
          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17">
            <a href="http://localhost/villaextechnologies/career/">Careers</a>
          </li>
          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-18">
            <a href="http://localhost/villaextechnologies/blog/">Blog</a>
          </li>
          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-348">
            <a href="http://localhost/villaextechnologies/contact-us/">Contact Us</a>
          </li>
        </ul>
      </div>
      <span className="lets-work-wrapper">
        <a href="http://localhost/villaextechnologies/start-project" className="lets-work lets-work-banner">Let's Work</a>
      </span>
    </div>
  );
};

const MenuIconContainer = () => {
  return (
    <span className="menu_icon_container">
      <i className="fas fa-bars"></i>
    </span>
  );
};

const MobileMenuContainer = () => {
  return (
    <div className="menu-container_mobile_home">
      <div className="menu-main-header-container">
        <ul id="menu-main-header-3" className="menu">
          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-5 current_page_item menu-item-19">
            <a href="http://localhost/villaextechnologies/" aria-current="page">Home</a>
          </li>
          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16">
            <a href="http://localhost/villaextechnologies/case-study/">Case studies</a>
          </li>
          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17">
            <a href="http://localhost/villaextechnologies/career/">Careers</a>
          </li>
          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-18">
            <a href="http://localhost/villaextechnologies/blog/">Blog</a>
          </li>
          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-348">
            <a href="http://localhost/villaextechnologies/contact-us/">Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="row icons_container_social">
        <ul>
          <li>
            <a href="https://www.facebook.com/VillaexTechnologies/">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/villaextech">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/villaex-technologies/about/">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

const YearsContainer = () => {
  return (
    <div className="years_container">
      <span className="compnaY_name">
        <img src="https://villaextechnologies.com/wp-content/uploads/2022/10/Pure-White.png" alt="logo" />
      </span>
      <div className="years_inmarket">
        <span className="more_than">
          more than
        </span>
        <span className="actual_years">
          9
        </span>
        <span className="year_text">
          years
        </span>
      </div>
    </div>
  );
};

const ListItemsHeaderHompage = () => {
  return (
    <ul className="list_items_header_hompage">
      <li>
        <a>
          <img className="branding-list-icon" src="http://localhost/villaextechnologies/wp-content/themes/villaex/icons/1.png" alt="Automation" />
          Automation
          <span>
            CRM, Chat-bots and task trackers
          </span>
        </a>
      </li>
      <li>
        <a>
          <img className="branding-list-icon" src="http://localhost/villaextechnologies/wp-content/themes/villaex/icons/3.png" style={{ width: '20px' }} alt="Mobile Applications" />
          Mobile Applications
          <span>
            Feature-rich mobile apps backed by intuitive UI and UX
          </span>
        </a>
      </li>
      <li>
        <a>
          <img className="branding-list-icon" src="http://localhost/villaextechnologies/wp-content/themes/villaex/icons/2.png" alt="Web Applications" />
          Web Applications
          <span>
            Develop, Deploy and Scale Apps with Cross-Platform
          </span>
        </a>
      </li>
      <li>
        <a>
          <img className="branding-list-icon" src="http://localhost/villaextechnologies/wp-content/themes/villaex/icons/4.png" alt="Blockchain" />
          Blockchain
          <span>
            Delivering AI and Blockchain Solutions
          </span>
        </a>
      </li>
      <li>
        <a>
          <img className="branding-list-icon" src="http://localhost/villaextechnologies/wp-content/themes/villaex/icons/5.png" alt="E-Commerce" />
          E-Commerce
          <span>
            Magento, Shopify, Woo or Custom Coding
          </span>
        </a>
      </li>
    </ul>
  );
};

export default Test;

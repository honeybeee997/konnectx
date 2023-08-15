import React from 'react';
import { useLocation } from 'react-router-dom';
import { generateSitemap } from './generateSitemap';

const Sitemap = () => {
  const location = useLocation();
  const xml = generateSitemap();

  const parseXML = () => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xml, 'text/xml');
    const urlElements = xmlDoc.getElementsByTagName('url');
   

    
    const urls = [];
    for (let i = 0; i < urlElements.length; i++) {
      const url = urlElements[i].getElementsByTagName('loc')[0].textContent;
      urls.push(url);
      const date = urlElements[i].getElementsByTagName('lastmod')[0].textContent;
      urls.push(date);
    }
    
    return urls;
  };

  if (location.pathname === '/sitemap.xml') {
    const urls = parseXML();

    return (
      <div>
        <h1>Sitemap</h1>
        <ul>
          {urls.map((url, index) => (
            <li key={index}>
              <a href={url}>{url}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return null;
};

export default Sitemap;

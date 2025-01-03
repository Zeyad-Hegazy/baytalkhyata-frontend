import React, { Fragment, useState, useEffect } from "react";
import PerfectScrollbar from 'react-perfect-scrollbar';
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { imagesData } from "../../common/commonimages";

const MENUITEMS = [
  {
    menutitle: "Main Menu",
    Items: [
      {
        title: "Dashboard",
        path: "/dashboard",
        type: "link",
        icon: <i className="fe fe-home"></i>,
        active: false,
        selected: false,
      },
      {
        title: "Students",
        path: "/students",
        type: "link",
        icon: <i className="fa fa-graduation-cap"></i>,
        active: false,
        selected: false,
      }
    ]
  },

];

const Sidebar = () => {
  const location = useLocation();
  const [menuitems, setMenuitems] = useState(MENUITEMS);

  useEffect(() => {
    setSidemenu();
  }, [location]);

  function setSidemenu() {
    setMenuitems(prevItems => {
      return prevItems.map(mainlevel => {
        if (mainlevel.Items) {
          mainlevel.Items.forEach(item => {
            item.active = location.pathname === item.path;
            item.selected = location.pathname === item.path;

            if (item.children) {
              item.children.forEach(subitem => {
                subitem.active = location.pathname === subitem.path;
                subitem.selected = location.pathname === subitem.path;
              });
            }
          });
        }
        return mainlevel;
      });
    });
  }

  function toggleSidemenu(item) {
    if (!item.active) {
      setMenuitems(prevItems => {
        return prevItems.map(mainlevel => {
          if (mainlevel.Items) {
            mainlevel.Items.forEach(sublevel => {
              sublevel.active = sublevel === item;
              if (sublevel.children) {
                sublevel.children.forEach(sublevel1 => {
                  sublevel1.active = sublevel1 === item;
                });
              }
            });
          }
          return mainlevel;
        });
      });
    } else {
      item.active = !item.active;
    }
    setMenuitems(arr => [...arr]);
  }

  return (
    <div className="sticky">
      <aside className="app-sidebar">
        <PerfectScrollbar options={{ suppressScrollX: true }} className="hor-scroll">
          <div className="main-sidebar-header active">
            <NavLink className="header-logo active" to="/dashboard">
              <img src={imagesData('logo_btk')} className="main-logo desktop-logo" alt="logo" />
              <img src={imagesData('logo_btk')} className="main-logo desktop-dark" alt="logo" />
              <img src={imagesData('logo_btk')} className="main-logo mobile-logo" alt="logo" />
              <img src={imagesData('logo_btk')} className="main-logo mobile-dark" alt="logo" />
            </NavLink>
          </div>
          <div className="main-sidemenu">
            <ul className="side-menu">
              {menuitems.map((Item, itemi) => (
                <Fragment key={itemi}>
                  <li className="side-item side-item-category">{Item.menutitle}</li>
                  {Item.Items.map((menuItem, i) => (
                    <li className={`slide ${menuItem.active ? "is-expanded" : ""}`} key={i}>
                      {menuItem.type === "link" ? (
                        <NavLink to={menuItem.path} className={`side-menu__item ${menuItem.selected ? " active" : ""}`}>
                          {menuItem.icon}
                          <span className="side-menu__label" style={{marginLeft:"15px"}}>{menuItem.title}</span>
                        </NavLink>
                      ) : (
                        <a href="javascript" onClick={(event) => { event.preventDefault(); toggleSidemenu(menuItem); }} className={`side-menu__item ${menuItem.selected ? "active is-expanded" : ""}`}>
                          {menuItem.icon}
                          <span className="side-menu__label" style={{marginLeft:"15px"}}>{menuItem.title}</span>
                          <i className="angle fe fe-chevron-right"></i>
                        </a>
                      )}

                      {menuItem.children && (
                        <ul className={`slide-menu ${menuItem.active ? "open" : ""}`} style={menuItem.active ? { display: "block" } : { display: "none" }}>
                          {menuItem.children.map((childrenItem, index) => (
                            <li key={index} className={`sub-slide ${childrenItem.selected ? "is-expanded" : ""} ${childrenItem.active ? "is-expanded" : ""}`}>
                              <NavLink to={childrenItem.path} className="slide-item">
                                <span className="sub-side-menu__label" style={{marginLeft:"15px"}}>{childrenItem.title}</span>
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </Fragment>
              ))}
            </ul>
          </div>
        </PerfectScrollbar>
      </aside>
    </div>
  );
}

export default Sidebar;

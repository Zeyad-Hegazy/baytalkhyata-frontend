import React,{ useEffect} from "react";
import { Outlet } from "react-router-dom";
import * as Switcherdata from'../common/switcherdata';
import Custompagesswitcher from "../components/pages/switcher/custompagesswitcher/custompagesswitcher";

export default function Custompages() {
  useEffect(() => {
    Switcherdata.localStorageBackUp2();
  },[]);

  document.querySelector("body").classList.add("error-page1", "bg-primary","light-theme")
  document.querySelector("body").classList.remove( "main-body", "app", "sidebar-mini", "layout-boxed");
  
  return (
    <React.Fragment>
            <Custompagesswitcher />
            <Outlet />
    </React.Fragment>
  );
}

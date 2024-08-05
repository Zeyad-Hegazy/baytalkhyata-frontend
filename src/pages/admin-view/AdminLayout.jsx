import { Outlet } from "react-router-dom";
import TabToTop from "../../layout/layoutcomponent/tabtotop";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";
import RightSidebar from "../../layout/layoutcomponent/rightsidebar";
import Switcher from "../../layout/layoutcomponent/switcher";
import Footer from "../../layout/layoutcomponent/footer";

export default function AdminLayout() {
	//The created store
	document
		.querySelector("body")
		.classList.add("ltr", "main-body", "app", "sidebar-mini");
	document.querySelector("body").classList.remove("error-page1", "bg-primary");
	const responsiveSidebarclose = () => {
		//leftsidemenu
		document.querySelector(".app").classList.remove("sidenav-toggled");

		//rightsidebar
		document.querySelector(".sidebar-right").classList.remove("sidebar-open");
	};
	function Sidebargone(gone) {
		if (gone.matches) {
			// If media query matches
			document.querySelector("body").classList.add("sidebar-gone");
		} else {
			document.querySelector("body").classList.remove("sidebar-gone");
			document.querySelector("body").classList.remove("sidenav-toggled");
		}
	}

	var gone = window.matchMedia("(max-width: 1024px)");
	Sidebargone(gone); // Call listener function at run time
	gone.addListener(Sidebargone);
	return (
		<div className="horizontalMenucontainer">
			<TabToTop />
			<div className="page">
				<div className="open">
					<AdminHeader />
					<AdminSidebar />
				</div>
				<div
					className="main-content app-content"
					onClick={() => {
						responsiveSidebarclose();
					}}
				>
					<div className="side-app">
						<div className="main-container container-fluid">
							<Outlet />
						</div>
					</div>
				</div>
				<RightSidebar />
				<Switcher />
				{/* <Footer /> */}
			</div>
		</div>
	);
}

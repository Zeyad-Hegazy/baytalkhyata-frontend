
import Dashboard from '../components/dashboard/dashboard1/dashboard';
import Dashboard2 from '../components/dashboard/dashboard2/dashboard2';
import Dashboard3 from '../components/dashboard/dashboard3/dashboard3';
import Cards from '../components/app/cards/cards';

import Calendar from '../components/app/calendar/calendar';
import Contacts from '../components/app/contacts/contacts';
import Rangeslider from '../components/app/rangeslider/rangeslider';
import Imagecompare from '../components/app/imagecompare/imagecompare';
import Notification from '../components/app/notification/notification';
import Widgetnotification from '../components/app/widgetnotification/widgetnotification';
import Treeview from '../components/app/treeview/treeview';
import Filemanager from '../components/app/filemanager/filemanager';
import Filemanager1 from '../components/app/filemanager1/filemanager1';
import Filedetails from '../components/app/filedetails/filedetails';
import Alerts from '../components/elements/alerts/alerts';
import Avatar from '../components/elements/avatar/avatar';
import Breadcrumbs from '../components/elements/breadcrumbs/breadcrumbs';
import Buttons from '../components/elements/buttons/buttons';
import Badges from '../components/elements/badge/badge';
import Dropdowns from '../components/elements/dropdown/dropdown';
import Thumbnails from '../components/elements/thumbnails/thumbnails';
import ListGroups from '../components/elements/listgroup/listgroup';
import Navigation from '../components/elements/navigation/navigation';
import Images from '../components/elements/images/images';
import Paginations from '../components/elements/pagination/pagination';
import Popovers from '../components/elements/popover/popover';
import Progressbar from '../components/elements/progress/progress';
import Spinners from '../components/elements/spinners/spinners';
import Mediaobject from '../components/elements/mediaobject/mediaobject';
import Typography from '../components/elements/typography/typography';
import Tooltips from '../components/elements/tooltip/tooltip';
import Toasts from '../components/elements/toast/toast';
import Tags from '../components/elements/tags/tags';
import Tabss from '../components/elements/tabs/tabs';
import Accordions from '../components/advancedui/accordion/accordion';
import Carousels from '../components/advancedui/carousel/carousel';
import Collapse from '../components/advancedui/collapse/collapse';
import Modals from '../components/advancedui/modals/modals';
import Timeline from '../components/advancedui/timeline/timeline';
import Sweetalert from '../components/advancedui/sweetalert/sweetalert';
import Ratings from '../components/advancedui/ratings/ratings';
import Counters from '../components/advancedui/counters/counters';
import Search from '../components/advancedui/search/search';
import Userlist from '../components/advancedui/userlist/userlist';
import Blog from '../components/advancedui/blog/blog';
import Blogdetails from '../components/advancedui/blogdetails/blogdetails';
import Editpost from '../components/advancedui/editpost/editpost';
import Attachments from '../components/advancedui/fileattachments/fileattachments';
import Shop from '../components/pages/ecommerce/shop/shop';
import ProductDetails from '../components/pages/ecommerce/productdetails/productdetails';
import Cart from '../components/pages/ecommerce/cart/cart';
import Checkout from '../components/pages/ecommerce/checkout/checkout';
import Wishlist from '../components/pages/ecommerce/wishlist/wishlist';
import Profile from '../components/pages/profile/profile';
import Notificationslist from '../components/pages/notificationslist/notificationslist';
import Aboutus from '../components/pages/aboutus/aboutus';
import Settings from '../components/pages/settings/settings';
import Mail from '../components/pages/mail/mail/mail';
import MailCompose from '../components/pages/mail/mailcompose/mailcompose';
import Readmail from '../components/pages/mail/readmail/readmail';
import Mailsettings from '../components/pages/mail/mailsettings/mailsettings';
import Chat from '../components/pages/mail/chat/chat'; 
import Invoice from '../components/pages/invoice/invoice';
import Pricing from '../components/pages/pricing/pricing';
import Gallery from '../components/pages/gallery/gallery';
import Todotask from '../components/pages/todotask/todotask';
import Faqs from '../components/pages/faqs/faqs';
import EmptyPage from '../components/pages/emptypage/emptypage';
import Background from '../components/utilities/background/background';
import Border from '../components/utilities/border/border';
import Display from '../components/utilities/display/display';
import Flex from '../components/utilities/flex/flex';
import Height from '../components/utilities/height/height';
import Margin from '../components/utilities/margin/margin';
import Padding from '../components/utilities/padding/padding';
import Position from '../components/utilities/position/position';
import Width from '../components/utilities/width/width';
import Extras from '../components/utilities/extras/extras';
import FontAwesome from '../components/icons/fontawesome/fontawesome';
import MaterialDesignIcons from '../components/icons/materialdesignicons/materialdesignicons';
import SimpleLineIcons from '../components/icons/simplelineicons/simplelineicons';
import FeatherIcons from '../components/icons/feathericons/feathericons';
import IonicIcons from '../components/icons/ionicicons/ionicicons';
import FlagIcons from '../components/icons/flagicons/flagicons';
import Pe7Icons from '../components/icons/pe7icons/pe7icons';
import ThemifyIcons from '../components/icons/themifyicons/themifyicons';
import TypiconsIcons from '../components/icons/typiconsicons/typiconsicons';
import WeatherIcons from '../components/icons/weathericons/weathericons';
import MaterialIcons from '../components/icons/materialicons/materialicons';
import BootstrapIcons from '../components/icons/bootstrapicons/bootstrapIcons';
import ChartJS from '../components/charts/chartjs/chartjs';
import Echart from '../components/charts/echart/echart';
import Apexcharts from '../components/charts/apexcharts/apexcharts';
import FormElements from '../components/forms/formelements/formelements';
import AdvancedForms from '../components/forms/advancedforms/advancedforms';
import FormLayouts from '../components/forms/formlayouts/formlayouts';
import FormValidation from '../components/forms/formvalidation/formvalidation';
import FormWizard from '../components/forms/formwizard/formwizard';
import FormEditor from '../components/forms/formeditor/formeditor';
import Formelementsizes from '../components/forms/formelementsizes/formelementsizes';
import FormInputSpinners from '../components/forms/forminputspinners/forminputspinners';
import DefaultTables from '../components/tables/defaulttables/defaulttables';
import DataTables from '../components/tables/datatables/datatables';
import Widgets from '../components/widgets/widgets';
import LeafletMaps from '../components/maps/leafletmaps/leafletmaps';
import Simplemaps from '../components/maps/simplemaps/simplemaps';
import Error501 from '../components/pages/authentication/501error/501error';


export const Routingdata = [
//Dashboard
  { path:`${import.meta.env.BASE_URL}dashboard/dashboard1`, element: <Dashboard /> },
  { path:`${import.meta.env.BASE_URL}dashboard/dashboard2`, element: <Dashboard2 />},
  { path:`${import.meta.env.BASE_URL}dashboard/dashboard3`, element: <Dashboard3 />},

  { path:`${import.meta.env.BASE_URL}app/cards`, element: <Cards />},
  { path:`${import.meta.env.BASE_URL}app/rangeslider`, element: <Rangeslider />},
  { path:`${import.meta.env.BASE_URL}app/calendar`, element: <Calendar /> },
  { path:`${import.meta.env.BASE_URL}app/contacts`, element: <Contacts /> },
  { path:`${import.meta.env.BASE_URL}app/imagecompare`, element: <Imagecompare /> },
  { path:`${import.meta.env.BASE_URL}app/notification`, element: <Notification /> },
  { path:`${import.meta.env.BASE_URL}app/widgetnotification`, element: <Widgetnotification /> },
  { path:`${import.meta.env.BASE_URL}app/treeview`, element: <Treeview /> },
  { path:`${import.meta.env.BASE_URL}app/filemanager`, element: <Filemanager /> },
  { path:`${import.meta.env.BASE_URL}app/filemanager1`, element: <Filemanager1 /> },
  { path:`${import.meta.env.BASE_URL}app/filedetails`, element: <Filedetails /> },

  { path:`${import.meta.env.BASE_URL}elements/alerts`, element: <Alerts /> },
  { path:`${import.meta.env.BASE_URL}elements/avatar`, element: <Avatar /> },
  { path:`${import.meta.env.BASE_URL}elements/breadcrumbs`, element: <Breadcrumbs /> },
  { path:`${import.meta.env.BASE_URL}elements/buttons`, element: <Buttons /> },
  { path:`${import.meta.env.BASE_URL}elements/badge`, element: <Badges /> },
  { path:`${import.meta.env.BASE_URL}elements/dropdown`, element: <Dropdowns /> },
  { path:`${import.meta.env.BASE_URL}elements/thumbnails`, element: <Thumbnails /> },
  { path:`${import.meta.env.BASE_URL}elements/listGroup`, element: <ListGroups /> },
  { path:`${import.meta.env.BASE_URL}elements/navigation`, element: <Navigation /> },
  { path:`${import.meta.env.BASE_URL}elements/images`, element: <Images /> },
  { path:`${import.meta.env.BASE_URL}elements/pagination`, element: <Paginations /> },
  { path:`${import.meta.env.BASE_URL}elements/popover`, element: <Popovers /> },
  { path:`${import.meta.env.BASE_URL}elements/progress`, element: <Progressbar /> },
  { path:`${import.meta.env.BASE_URL}elements/spinners`, element: <Spinners /> },
  { path:`${import.meta.env.BASE_URL}elements/mediaobject`, element: <Mediaobject /> },
  { path:`${import.meta.env.BASE_URL}elements/typography`, element: <Typography /> },
  { path:`${import.meta.env.BASE_URL}elements/tooltip`, element: <Tooltips /> },
  { path:`${import.meta.env.BASE_URL}elements/toast`, element: <Toasts /> },
  { path:`${import.meta.env.BASE_URL}elements/tags`, element: <Tags /> },
  { path:`${import.meta.env.BASE_URL}elements/tabs`, element: <Tabss /> },

  { path:`${import.meta.env.BASE_URL}advancedui/accordion`, element: <Accordions /> },
  { path:`${import.meta.env.BASE_URL}advancedui/carousel`, element: <Carousels /> },
  { path:`${import.meta.env.BASE_URL}advancedui/collapse`, element: <Collapse /> },
  { path:`${import.meta.env.BASE_URL}advancedui/modals`, element: <Modals /> },
  { path:`${import.meta.env.BASE_URL}advancedui/timeline`, element: <Timeline /> },
  { path:`${import.meta.env.BASE_URL}advancedui/sweetalert`, element: <Sweetalert /> },
  { path:`${import.meta.env.BASE_URL}advancedui/ratings`, element: <Ratings /> },
  { path:`${import.meta.env.BASE_URL}advancedui/counters`, element: <Counters /> },
  { path:`${import.meta.env.BASE_URL}advancedui/search`, element: <Search /> },
  { path:`${import.meta.env.BASE_URL}advancedui/userlist`, element: <Userlist /> },
  { path:`${import.meta.env.BASE_URL}advancedui/blog`, element: <Blog /> },
  { path:`${import.meta.env.BASE_URL}advancedui/blogdetails`, element: <Blogdetails /> },
  { path:`${import.meta.env.BASE_URL}advancedui/editPost`, element: <Editpost /> },
  { path:`${import.meta.env.BASE_URL}advancedui/fileattachments`, element: <Attachments /> },

  { path:`${import.meta.env.BASE_URL}pages/ecommerce/shop`, element: <Shop /> },
  { path:`${import.meta.env.BASE_URL}pages/ecommerce/productdetails`, element: <ProductDetails /> },
  { path:`${import.meta.env.BASE_URL}pages/ecommerce/cart`, element: <Cart /> },
  { path:`${import.meta.env.BASE_URL}pages/ecommerce/checkout`, element:<Checkout/> },
  { path:`${import.meta.env.BASE_URL}pages/ecommerce/wishlist`, element: <Wishlist /> },

  { path:`${import.meta.env.BASE_URL}pages/profile`, element: <Profile /> },
  { path:`${import.meta.env.BASE_URL}pages/notificationslist`, element: <Notificationslist /> },
  { path:`${import.meta.env.BASE_URL}pages/aboutus`, element: <Aboutus /> },
  { path:`${import.meta.env.BASE_URL}pages/settings`, element: <Settings /> },

  { path:`${import.meta.env.BASE_URL}pages/mail/mail`, element: <Mail /> },
  { path:`${import.meta.env.BASE_URL}pages/mail/mailcompose`, element: <MailCompose /> },
  { path:`${import.meta.env.BASE_URL}pages/mail/readmail`, element: <Readmail /> },
  { path:`${import.meta.env.BASE_URL}pages/mail/mailsettings`, element: <Mailsettings /> },
  { path:`${import.meta.env.BASE_URL}pages/mail/chat`, element: <Chat /> },

  { path:`${import.meta.env.BASE_URL}pages/invoice`, element: <Invoice /> },
  { path:`${import.meta.env.BASE_URL}pages/pricing`, element: <Pricing /> },
  { path:`${import.meta.env.BASE_URL}pages/gallery`, element: <Gallery /> },
  { path:`${import.meta.env.BASE_URL}pages/todotask`, element: <Todotask /> },
  { path:`${import.meta.env.BASE_URL}pages/faqs`, element: <Faqs /> },
  { path:`${import.meta.env.BASE_URL}pages/emptypage`, element: <EmptyPage /> },

  { path:`${import.meta.env.BASE_URL}utilities/background`, element: <Background /> },
  { path:`${import.meta.env.BASE_URL}utilities/border`, element: <Border /> },
  { path:`${import.meta.env.BASE_URL}utilities/display`, element: <Display /> },
  { path:`${import.meta.env.BASE_URL}utilities/flex`, element: <Flex /> },
  { path:`${import.meta.env.BASE_URL}utilities/height`, element: <Height /> },
  { path:`${import.meta.env.BASE_URL}utilities/margin`, element: <Margin /> },
  { path:`${import.meta.env.BASE_URL}utilities/padding`, element: <Padding /> },
  { path:`${import.meta.env.BASE_URL}utilities/position`, element: <Position /> },
  { path:`${import.meta.env.BASE_URL}utilities/width`, element: <Width /> },
  { path:`${import.meta.env.BASE_URL}utilities/extras`, element: <Extras /> },

  { path:`${import.meta.env.BASE_URL}icons/fontawesome`, element: <FontAwesome /> },
  { path:`${import.meta.env.BASE_URL}icons/materialdesignicons`, element: <MaterialDesignIcons /> },
  { path:`${import.meta.env.BASE_URL}icons/simplelineicons`, element: <SimpleLineIcons /> },
  { path:`${import.meta.env.BASE_URL}icons/feathericons`, element: <FeatherIcons /> },
  { path:`${import.meta.env.BASE_URL}icons/ionicicons`, element: <IonicIcons /> },
  { path:`${import.meta.env.BASE_URL}icons/flagicons`, element: <FlagIcons /> },
  { path:`${import.meta.env.BASE_URL}icons/pe7icons`, element: <Pe7Icons /> },
  { path:`${import.meta.env.BASE_URL}icons/themifyicons`, element: <ThemifyIcons /> },
  { path:`${import.meta.env.BASE_URL}icons/typiconsicons`, element: <TypiconsIcons /> },
  { path:`${import.meta.env.BASE_URL}icons/weathericons`, element: <WeatherIcons /> },
  { path:`${import.meta.env.BASE_URL}icons/materialicons`, element: <MaterialIcons /> },
  { path:`${import.meta.env.BASE_URL}icons/bootstrapicons`, element: <BootstrapIcons /> },

  { path:`${import.meta.env.BASE_URL}charts/chartjs`, element: <ChartJS /> },
  { path:`${import.meta.env.BASE_URL}charts/echart`, element: <Echart /> },
  { path:`${import.meta.env.BASE_URL}charts/apexcharts`, element: <Apexcharts /> },

  { path:`${import.meta.env.BASE_URL}forms/formelements`, element: <FormElements /> },
  { path:`${import.meta.env.BASE_URL}forms/advancedforms`, element: <AdvancedForms /> },
  { path:`${import.meta.env.BASE_URL}forms/formlayouts`, element: <FormLayouts /> },
  { path:`${import.meta.env.BASE_URL}forms/formvalidation`, element: <FormValidation /> },
  { path:`${import.meta.env.BASE_URL}forms/formwizard`, element: <FormWizard /> },
  { path:`${import.meta.env.BASE_URL}forms/formeditor`, element: <FormEditor /> },
  { path:`${import.meta.env.BASE_URL}forms/formelementsizes`, element: <Formelementsizes /> },
  { path:`${import.meta.env.BASE_URL}forms/forminputspinners`, element: <FormInputSpinners /> },

  { path:`${import.meta.env.BASE_URL}tables/defaulttables`, element: <DefaultTables /> },
  { path:`${import.meta.env.BASE_URL}tables/datatables`, element: <DataTables /> },

  { path:`${import.meta.env.BASE_URL}widgets`, element: <Widgets /> },

  { path:`${import.meta.env.BASE_URL}maps/leafletmaps`, element: <LeafletMaps /> },
  { path:`${import.meta.env.BASE_URL}maps/simplemaps`, element: <Simplemaps /> },
  { path:`${import.meta.env.BASE_URL}pages/authentication/501error`, element:<Error501 />}

];

export const Sidebarcomponents=[

  { path:`${import.meta.env.BASE_URL}dashboard/dashboard1`, title:'Dashboard-1' },
  { path:`${import.meta.env.BASE_URL}dashboard/dashboard2`, title:'Dashboard-2' },
  { path:`${import.meta.env.BASE_URL}dashboard/dashboard3`, title:'Dashboard-3' },

  { path:`${import.meta.env.BASE_URL}app/cards`, title:'Cards' },
  { path:`${import.meta.env.BASE_URL}app/rangeslider`, title:'Range-slider' },
  { path:`${import.meta.env.BASE_URL}app/calendar`, title:'Calendar' },
  { path:`${import.meta.env.BASE_URL}app/contacts`, title:'Contacts' },
  { path:`${import.meta.env.BASE_URL}app/imagecompare`, title:'Image-compare' },
  { path:`${import.meta.env.BASE_URL}app/notification`, title:'Notification' },
  { path:`${import.meta.env.BASE_URL}app/widgetnotification`, title:'Widget-notification' },
  { path:`${import.meta.env.BASE_URL}app/treeview`, title:'Treeview' },
  { path:`${import.meta.env.BASE_URL}app/filemanager`, title:'File-manager' },
  { path:`${import.meta.env.BASE_URL}app/filemanager1`, title:'File-manager1' },
  { path:`${import.meta.env.BASE_URL}app/filedetails`, title:'File-details' },

  { path:`${import.meta.env.BASE_URL}elements/alerts`,title: "Alerts" },
  { path:`${import.meta.env.BASE_URL}elements/avatar`, title: "Avatar" },

  {  path:`${import.meta.env.BASE_URL}elements/breadcrumbs`, title: "Breadcrumbs"},
  {  path:`${import.meta.env.BASE_URL}elements/buttons`, title: "Buttons"},
  {  path:`${import.meta.env.BASE_URL}elements/badge`, title: "Badges"},
  {  path:`${import.meta.env.BASE_URL}elements/dropdown`, title: "Dropdown"},
  {  path:`${import.meta.env.BASE_URL}elements/thumbnails`, title: "Thumbnails"},
  {  path:`${import.meta.env.BASE_URL}elements/listgroup`, title: "List Group"},
  {  path:`${import.meta.env.BASE_URL}elements/navigation`, title: "Navigation"},
  {  path:`${import.meta.env.BASE_URL}elements/images`, title: "Images"},
  {  path:`${import.meta.env.BASE_URL}elements/pagination`, title: "Pagination"},
  {  path:`${import.meta.env.BASE_URL}elements/popover`, title: "Popover"},
  {  path:`${import.meta.env.BASE_URL}elements/progress`, title: "Progress"},
  {  path:`${import.meta.env.BASE_URL}elements/spinners`, title: "Spinners"},
  {  path:`${import.meta.env.BASE_URL}elements/mediaObject`, title: "Media Object"},
  {  path:`${import.meta.env.BASE_URL}elements/typography`, title: "Typography"},
  {  path:`${import.meta.env.BASE_URL}elements/tooltip`, title: "Tooltip"},
  {  path:`${import.meta.env.BASE_URL}elements/toast`, title: "Toast"},
  {  path:`${import.meta.env.BASE_URL}elements/tags`, title: "Tags"},
  {  path:`${import.meta.env.BASE_URL}elements/tabs`, title: "Tabs"},

  { path:`${import.meta.env.BASE_URL}advancedui/accordion`, title: "Accordions" },
  { path:`${import.meta.env.BASE_URL}advancedui/carousel`, title: "Carousel" },
  { path:`${import.meta.env.BASE_URL}advancedui/collapse`, title: "Collapse" },
  { path:`${import.meta.env.BASE_URL}advancedui/modals`, title: "Modal" },
  { path:`${import.meta.env.BASE_URL}advancedui/timeline`, title: "Timeline" },
  { path:`${import.meta.env.BASE_URL}advancedui/sweetalert`, title: "Sweet Alert" },
  { path:`${import.meta.env.BASE_URL}advancedui/ratings`, title: "Rating" },
  { path:`${import.meta.env.BASE_URL}advancedui/counters`, title: "Counters" },
  { path:`${import.meta.env.BASE_URL}advancedui/search`, title: "Search" },
  { path:`${import.meta.env.BASE_URL}advancedui/userlist`, title: "Userlist" },
  { path:`${import.meta.env.BASE_URL}advancedui/blog`, title: "Blog" },
  { path:`${import.meta.env.BASE_URL}advancedui/blogdetails`, title: "Blog-details" },
  { path:`${import.meta.env.BASE_URL}advancedui/editPost`, title: "Edit-post" },
  { path:`${import.meta.env.BASE_URL}advancedui/fileattachments`, title: "File Attachments" },

  { path:`${import.meta.env.BASE_URL}pages/ecommerce/shop`, title: "Shop" },
  { path:`${import.meta.env.BASE_URL}pages/ecommerce/productdetails`, title: "Product Details" },
  { path:`${import.meta.env.BASE_URL}pages/ecommerce/cart`, title: "Cart" },
  { path:`${import.meta.env.BASE_URL}pages/ecommerce/checkout`, title: "Checkout" },
  { path:`${import.meta.env.BASE_URL}pages/ecommerce/wishlist`, title: "Wish-list" },

  { path:`${import.meta.env.BASE_URL}pages/profile`, title:'Profile' },
  { path:`${import.meta.env.BASE_URL}pages/notificationslist`, title:'Notificationslist' },
  { path:`${import.meta.env.BASE_URL}pages/aboutus`, title:'Aboutus' },
  { path:`${import.meta.env.BASE_URL}pages/settings`, title:'Settings' },

  { path:`${import.meta.env.BASE_URL}pages/mail/mail`, title:'Mail' },
  { path:`${import.meta.env.BASE_URL}pages/mail/mailcompose`, title:'MailCompose' },
  { path:`${import.meta.env.BASE_URL}pages/mail/readmail`, title:'Readmail' },
  { path:`${import.meta.env.BASE_URL}pages/mail/mailsettings`, title:'Mailsettings' },
  { path:`${import.meta.env.BASE_URL}pages/mail/chat`, title:'Chat' },

  { path:`${import.meta.env.BASE_URL}pages/invoice`, title:'Invoice' },
  { path:`${import.meta.env.BASE_URL}pages/pricing`, title:'Pricing' },
  { path:`${import.meta.env.BASE_URL}pages/gallery`, title:'Gallery' },
  { path:`${import.meta.env.BASE_URL}pages/todotask`, title:'Todotask' },
  { path:`${import.meta.env.BASE_URL}pages/faqs`, title:'Faqs' },
  { path:`${import.meta.env.BASE_URL}pages/emptypage`, title:'EmptyPage' },
  { path:`${import.meta.env.BASE_URL}pages/switcher/switcher1`,title: 'Switcher-1' } ,

  { path:`${import.meta.env.BASE_URL}utilities/background`, title: "Background"  },
  { path:`${import.meta.env.BASE_URL}utilities/border`, title: "Border"  },
  { path:`${import.meta.env.BASE_URL}utilities/display`, title: "Display"  },
  { path:`${import.meta.env.BASE_URL}utilities/flex`, title: "Flex"  },
  { path:`${import.meta.env.BASE_URL}utilities/height`, title: "Height"  },
  { path:`${import.meta.env.BASE_URL}utilities/margin`, title: "Margin"  },
  { path:`${import.meta.env.BASE_URL}utilities/padding`, title: "Padding"  },
  { path:`${import.meta.env.BASE_URL}utilities/position`, title: "Position"  },
  { path:`${import.meta.env.BASE_URL}utilities/width`, title: "Width"  },
  { path:`${import.meta.env.BASE_URL}utilities/extras`, title: "Extras"  },

  { path:`${import.meta.env.BASE_URL}icons/fontAwesome`, title: "Font Awesome"  },
  { path:`${import.meta.env.BASE_URL}icons/materialDesignicons`, title: "Material Design Icons"  },
  { path:`${import.meta.env.BASE_URL}icons/simpleLineicons`, title: "Simple Line Icons"  },
  { path:`${import.meta.env.BASE_URL}icons/feathericons`, title: "Feather Icons"  },
  { path:`${import.meta.env.BASE_URL}icons/ionicicons`, title: "Ionic Icons"  },
  { path:`${import.meta.env.BASE_URL}icons/flagicons`, title: "Flag Icons"  },
  { path:`${import.meta.env.BASE_URL}icons/pe7icons`, title: "Pe7 Icons"  },
  { path:`${import.meta.env.BASE_URL}icons/themifyicons`, title: "Themify Icons"  },
  { path:`${import.meta.env.BASE_URL}icons/typiconsicons`, title: "Typicons Icons"  },
  { path:`${import.meta.env.BASE_URL}icons/weathericons`, title: "Weather Icons"  },
  { path:`${import.meta.env.BASE_URL}icons/materialicons`, title: "Material Icons"  },
  { path:`${import.meta.env.BASE_URL}icons/bootstrapicons`, title: "Bootstrap Icons"  },

  { path:`${import.meta.env.BASE_URL}charts/chartjs`, title:'ChartJS' },
  { path:`${import.meta.env.BASE_URL}charts/echart`, title:'Echart' },
  { path:`${import.meta.env.BASE_URL}charts/apexcharts`, title:'Apexcharts'},

  { path:`${import.meta.env.BASE_URL}forms/formelements`, title: "Form Elements"},
  { path:`${import.meta.env.BASE_URL}forms/advancedforms`, title: "Advanced Forms"},
  { path:`${import.meta.env.BASE_URL}forms/formlayouts`, title: "Form Layouts"},
  { path:`${import.meta.env.BASE_URL}forms/formvalidation`, title: "Form Validation"},
  { path:`${import.meta.env.BASE_URL}forms/formwizard`, title: "Form Wizard"},
  { path:`${import.meta.env.BASE_URL}forms/formeditor`, title: "Form Editor"},
  { path:`${import.meta.env.BASE_URL}forms/formelementsizes`, title: "Form-element-sizes"},
  { path:`${import.meta.env.BASE_URL}forms/forminputspinners`, title: "Form Input Spinners"},

  { path:`${import.meta.env.BASE_URL}tables/defaulttables`, title:'DefaultTables' },
  { path:`${import.meta.env.BASE_URL}tables/datatables`, title:'DataTables' },

  { path:`${import.meta.env.BASE_URL}widgets`, title:'Widgets'},

  { path:`${import.meta.env.BASE_URL}maps/leafletmaps`, title:'LeafletMaps' },
  { path:`${import.meta.env.BASE_URL}maps/simplemaps`, title:'SimpleMaps' },

{ path:`${import.meta.env.BASE_URL}pages/authentication/sigin`, title: "Sing In"},
{ path:`${import.meta.env.BASE_URL}pages/authentication/sigup`, title: "Sign Up"},
{ path:`${import.meta.env.BASE_URL}pages/authentication/forgotpassword`, title: "Forgot Password"},
{ path:`${import.meta.env.BASE_URL}pages/authentication/resetpassword`, title: "Reset Password"},
{ path:`${import.meta.env.BASE_URL}pages/authentication/lockscreen`, title: "Lockscreen"},
{ path:`${import.meta.env.BASE_URL}pages/authentication/underconstruction`, title: "UnderConstruction"},
{ path:`${import.meta.env.BASE_URL}pages/authentication/404error`, title: "404 Error"},
{ path:`${import.meta.env.BASE_URL}pages/authentication/500error`, title: "500 Error"},
{ path:`${import.meta.env.BASE_URL}pages/authentication/501error`, title: "501 Error"},

];

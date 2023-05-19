export default class SidebarHelper {
  static sidebar = [
    {
      sectionTitle: "Admin Layout Pages",
      elements: [
        { icon: "fas fa-tv", title: "Dashboard", link: "/admin/dashboard" },
        { icon: "fas fa-tools", title: "Settings", link: "/admin/settings" },
        { icon: "fas fa-table", title: "Tables", link: "/admin/tables" },
        { icon: "fas fa-map-marked", title: "Maps", link: "/admin/maps" },
      ],
    },
    {
      sectionTitle: "Auth Layout Pages",
      elements: [
        { icon: "fas fa-fingerprint", title: "Login", link: "/auth/login" },
        { icon: "fas fa-clipboard", title: "Register", link: "/auth/register" },
      ],
    },
  ];

  static getSidebar = () => {
    return this.sidebar;
  };
}

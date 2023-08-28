interface SideNav {
  name: string;
  router_link?: string;
}
interface Children extends SideNav {
    icon?: string;
}
export interface HomeSideNav extends SideNav {
  children?: Children[];
}

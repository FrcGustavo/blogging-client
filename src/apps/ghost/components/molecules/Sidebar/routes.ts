import { ReactNode } from 'react';
import {
  AiOutlineHome,
  AiOutlineUserSwitch,
  AiFillSetting,
} from 'react-icons/ai';
import { HiOutlineDocument } from 'react-icons/hi';

type LinkItem = {
  label: string;
  href: string;
  Icon?: ReactNode | false | any;
};

type NavLinkItem = LinkItem & { items: false };

type NavStaticItem = {
  Icon: false;
  label: string;
  href: false;
  items: Array<LinkItem>;
};

type NavRoutes = Array<NavLinkItem | NavStaticItem>;

const SITE: NavLinkItem = {
  Icon: AiOutlineHome,
  label: 'View site',
  href: '/ghost',
  items: false,
};

const MANAGE: NavStaticItem = {
  Icon: false,
  label: 'Manage',
  href: false,
  items: [
    {
      Icon: HiOutlineDocument,
      label: 'Posts',
      href: '/ghost/posts',
    },
    {
      Icon: AiOutlineUserSwitch,
      label: 'Staff',
      href: '/ghost/staff',
    },
  ],
};

const SETTINGS: NavStaticItem = {
  Icon: false,
  label: 'Settings',
  href: false,
  items: [
    {
      Icon: AiFillSetting,
      label: 'General',
      href: '/ghost/general',
    },
  ],
};

const NAV_ROUTES: NavRoutes = [SITE, MANAGE, SETTINGS];

export default NAV_ROUTES;

import { LazyExoticComponent, ReactNode, lazy } from 'react';
import { INavLink, IRoutesList } from '../types';
import { Routes } from './enums';

export const BanksPage = lazy(() => import('@pages/banks'));
export const ContactsPage = lazy(() => import('@pages/contacts'));
export const ErrorPage = lazy(() => import('@pages/error'));
export const HomePage = lazy(() => import('@pages/home'));
export const TimelinePage = lazy(() => import('@pages/timeline'));

export const routes: IRoutesList[] = [
  { path: Routes.MAIN, element: HomePage, index: true },
  { path: Routes.TIMELINE, element: TimelinePage, index: false },
  { path: Routes.BANKS, element: BanksPage, index: false },
  { path: Routes.CONTACTS, element: ContactsPage, index: false },
  { path: Routes.UNKNOWN, element: ErrorPage, index: false },
];

export const pagesList: INavLink[] = [
  { name: 'Home', route: Routes.MAIN },
  { name: 'Timeline', route: Routes.TIMELINE },
  { name: 'Bank card', route: Routes.BANKS },
  { name: 'Contacts', route: Routes.CONTACTS },
];

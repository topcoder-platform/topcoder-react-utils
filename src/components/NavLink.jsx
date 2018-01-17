/**
 * The NavLink wraps around React Router's NavLink component, to automatically
 * replace it by the regular <a> element when:
 * - The target reference points to another domain;
 * - User opts to open the reference in a new tab;
 * - User explicitely opts to use <a>.
 */

import React from 'react';
import { NavLink as RrNavLink } from 'react-router-dom';

import GenericLink from './GenericLink';

export default function NavLink(props) {
  return <GenericLink {...props} routerLinkType={RrNavLink} />;
}


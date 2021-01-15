import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faFacebookF, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faMoon, faSun, faTimes, faBars, faPlug, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon, FontAwesomeIconProps, } from '@fortawesome/react-fontawesome';

/**
 * add any additional icon to the library
 */
library.add(fab, faMoon, faSun, faTimes, faBars, faFacebook, faFacebookF, faPlug, faSearch);

/**
 * Icon component
 *
 * @param {FontAwesomeIconProps} props
 */
const Icon: React.FC<FontAwesomeIconProps> = ({ ...props }) => <FontAwesomeIcon {...props} />;

export default Icon;

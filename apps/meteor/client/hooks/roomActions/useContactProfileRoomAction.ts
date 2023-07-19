import { lazy } from 'react';

import type { ToolboxAction } from '../../views/room/lib/Toolbox';

const ContactsContextualBar = lazy(() => import('../../views/omnichannel/directory/contacts/contextualBar/ContactsContextualBar'));

export const useContactProfileRoomAction = (): ToolboxAction => {
	return {
		id: 'contact-profile',
		groups: ['live' /* , 'voip'*/],
		title: 'Contact_Info',
		icon: 'user',
		template: ContactsContextualBar,
		order: 1,
	};
};

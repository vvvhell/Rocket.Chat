import { lazy } from 'react';

import type { ToolboxAction } from '../../views/room/lib/Toolbox';

const ContactHistory = lazy(() => import('../../views/omnichannel/contactHistory/ContactHistory'));

export const useContactChatHistoryRoomAction = (): ToolboxAction => {
	return {
		id: 'contact-chat-history',
		groups: ['live'],
		title: 'Contact_Chat_History',
		icon: 'clock',
		template: ContactHistory,
		order: 11,
	};
};

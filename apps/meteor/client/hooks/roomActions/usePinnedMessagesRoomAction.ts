import { isRoomFederated } from '@rocket.chat/core-typings';
import { useSetting } from '@rocket.chat/ui-contexts';
import { lazy, useEffect } from 'react';

import { ui } from '../../lib/ui';
import { useRoom } from '../../views/room/contexts/RoomContext';

const PinnedMessagesTab = lazy(() => import('../../views/room/contextualBar/PinnedMessagesTab'));

export const usePinnedMessagesRoomAction = () => {
	const room = useRoom();
	const federated = isRoomFederated(room);
	const enabled = useSetting('Message_AllowPinning', false);

	useEffect(() => {
		if (!enabled) {
			return;
		}

		return ui.addRoomAction('pinned-messages', {
			groups: ['channel', 'group', 'direct', 'direct_multiple', 'team'],
			id: 'pinned-messages',
			title: 'Pinned_Messages',
			icon: 'pin',
			template: PinnedMessagesTab,
			...(federated && {
				'data-tooltip': 'Pinned_messages_unavailable_for_federation',
				'disabled': true,
			}),
			order: 11,
		});
	}, [enabled, federated]);
};

import { isRoomFederated } from '@rocket.chat/core-typings';
import { useSetting } from '@rocket.chat/ui-contexts';
import { lazy } from 'react';
import { useTranslation } from 'react-i18next';

import { useRoom } from '../../views/room/contexts/RoomContext';
import type { ToolboxAction } from '../../views/room/lib/Toolbox';

const PinnedMessagesTab = lazy(() => import('../../views/room/contextualBar/PinnedMessagesTab'));

export const usePinnedMessagesRoomAction = (): ToolboxAction | undefined => {
	const room = useRoom();
	const federated = isRoomFederated(room);
	const enabled = useSetting('Message_AllowPinning', false);
	const { t } = useTranslation();

	if (!enabled) {
		return undefined;
	}

	return {
		id: 'pinned-messages',
		groups: ['channel', 'group', 'direct', 'direct_multiple', 'team'],
		title: 'Pinned_Messages',
		icon: 'pin',
		template: PinnedMessagesTab,
		...(federated && {
			tooltip: t('core.Pinned_messages_unavailable_for_federation'),
			disabled: true,
		}),
		order: 11,
	};
};

import { isRoomFederated } from '@rocket.chat/core-typings';
import { usePermission } from '@rocket.chat/ui-contexts';
import { lazy } from 'react';
import { useTranslation } from 'react-i18next';

import { useRoom } from '../../views/room/contexts/RoomContext';
import type { ToolboxAction } from '../../views/room/lib/Toolbox';

const PruneMessages = lazy(() => import('../../views/room/contextualBar/PruneMessages'));

export const useCleanHistoryRoomAction = (): ToolboxAction | undefined => {
	const room = useRoom();
	const federated = isRoomFederated(room);
	const permitted = usePermission('clean-channel-history', room._id);
	const { t } = useTranslation();

	if (!permitted) {
		return undefined;
	}
	return {
		id: 'clean-history',
		groups: ['channel', 'group', 'team', 'direct_multiple', 'direct'],
		full: true,
		title: 'Prune_Messages',
		icon: 'eraser',
		...(federated && {
			tooltip: t('core.Clean_History_unavailable_for_federation'),
			disabled: true,
		}),
		template: PruneMessages,
		order: 250,
	};
};

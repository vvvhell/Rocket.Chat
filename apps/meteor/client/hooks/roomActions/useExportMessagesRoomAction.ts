import { usePermission } from '@rocket.chat/ui-contexts';
import { lazy } from 'react';

import { useRoom } from '../../views/room/contexts/RoomContext';
import type { ToolboxAction } from '../../views/room/lib/Toolbox';

const ExportMessages = lazy(() => import('../../views/room/contextualBar/ExportMessages'));

export const useExportMessagesRoomAction = (): ToolboxAction | undefined => {
	const room = useRoom();
	const permitted = usePermission('mail-messages', room._id);

	if (!permitted) {
		return undefined;
	}

	return {
		id: 'export-messages',
		groups: ['channel', 'group', 'direct', 'direct_multiple', 'team'],
		anonymous: true,
		title: 'Export_Messages',
		icon: 'mail',
		template: ExportMessages,
		full: true,
		order: 12,
	};
};

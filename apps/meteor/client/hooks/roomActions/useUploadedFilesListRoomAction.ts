import { lazy } from 'react';

import type { ToolboxAction } from '../../views/room/lib/Toolbox';

const RoomFiles = lazy(() => import('../../views/room/contextualBar/RoomFiles'));

export const useUploadedFilesListRoomAction = (): ToolboxAction => {
	return {
		id: 'uploaded-files-list',
		groups: ['channel', 'group', 'direct', 'direct_multiple', 'live', 'team'],
		title: 'Files',
		icon: 'clip',
		template: RoomFiles,
		order: 7,
	};
};

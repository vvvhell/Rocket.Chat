import { useSetting, usePermission } from '@rocket.chat/ui-contexts';
import { lazy } from 'react';

import type { ToolboxAction } from '../../views/room/lib/Toolbox';

const AutoTranslate = lazy(() => import('../../views/room/contextualBar/AutoTranslate'));

export const useAutotranslateRoomAction = (): ToolboxAction | undefined => {
	const permitted = usePermission('auto-translate');
	const enabled = useSetting('AutoTranslate_Enabled', false);

	if (!permitted || !enabled) {
		return undefined;
	}

	return {
		id: 'autotranslate',
		groups: ['channel', 'group', 'direct', 'direct_multiple', 'team'],
		title: 'Auto_Translate',
		icon: 'language',
		template: AutoTranslate,
		order: 20,
		full: true,
	};
};

import { lazy } from 'react';

import type { ToolboxAction } from '../../views/room/lib/Toolbox';

const KeyboardShortcuts = lazy(() => import('../../views/room/contextualBar/KeyboardShortcuts'));

export const useKeyboardShortcutListRoomAction = (): ToolboxAction => {
	return {
		id: 'keyboard-shortcut-list',
		groups: ['channel', 'group', 'direct', 'direct_multiple', 'team'],
		title: 'Keyboard_Shortcuts_Title',
		icon: 'keyboard',
		template: KeyboardShortcuts,
		order: 99,
	};
};

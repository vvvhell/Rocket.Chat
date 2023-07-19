import { useEffect } from 'react';

import { ui } from '../../../../../client/lib/ui';

export const useFederationSlashCommand = () => {
	useEffect(() => {
		return ui.addSlashCommand({
			command: 'federation',
			callback: undefined,
			options: {
				description: 'Federation_slash_commands',
				params: '#command (dm) #user',
			},
			result: undefined,
			providesPreview: false,
			previewer: undefined,
			previewCallback: undefined,
		});
	}, []);
};
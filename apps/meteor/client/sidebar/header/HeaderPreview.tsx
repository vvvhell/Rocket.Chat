import { Sidebar } from '@rocket.chat/fuselage';
import { useUser, useTranslation } from '@rocket.chat/ui-contexts';
import type { ReactElement } from 'react';
import React, { memo } from 'react';

import CreateRoom from './actions/CreateRoom';
import Directory from './actions/Directory';
import Login from './actions/Login';
import Search from './actions/Search';
import Sort from './actions/Sort';

const Header = (): ReactElement => {
	const t = useTranslation();
	const user = useUser();

	return (
		<Sidebar.TopBar.Section>
			<Sidebar.TopBar.Actions justifyContent='end' width='100%'>
				<Search title={t('Search')} />
				{user && (
					<>
						<Directory title={t('Directory')} />
						<Sort title={t('Display')} />
						<CreateRoom title={t('Create_new')} data-qa='sidebar-create' />
					</>
				)}
				{!user && <Login title={t('Login')} />}
			</Sidebar.TopBar.Actions>
		</Sidebar.TopBar.Section>
	);
};

export default memo(Header);

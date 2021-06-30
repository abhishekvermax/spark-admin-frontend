import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useHistory } from 'react-router-dom';
import SLUGS from 'resources/slugs';
import {
    IconAgents,
    IconContacts,
    IconIdeas,
    IconLogout,
    IconOverview,
    IconSettings,
    IconCheckboxOff

} from 'assets/icons';
import { convertSlugToUrl } from 'resources/utilities';
import LogoComponent from './LogoComponent';
import Menu from './MenuComponent';
import MenuItem from './MenuItemComponent';

const useStyles = createUseStyles({
    separator: {
        borderTop: ({ theme }) => `1px solid ${theme.color.lightGrayishBlue}`,
        marginTop: 16,
        marginBottom: 16,
        opacity: 0.06
    }
});

function SidebarComponent() {
    const { push } = useHistory();
    const theme = useTheme();
    const classes = useStyles({ theme });
    const isMobile = window.innerWidth <= 1080;

    async function logout() {
        push(SLUGS.login);
    }

    function onClick(slug, parameters = {}) {
        push(convertSlugToUrl(slug, parameters));
    }

    return (
        <Menu isMobile={isMobile}>
            <div style={{ paddingTop: 30, paddingBottom: 30 }}>
                <LogoComponent />
            </div>
            <MenuItem
                id={SLUGS.dashboard}
                title='Dashboard'
                icon={IconIdeas}
                onClick={() => onClick(SLUGS.dashboard)}
            />

            <MenuItem
                id={SLUGS.Data}
                items={[SLUGS.referenceData]}
                title='Data'
                icon={IconIdeas}
            >
                <MenuItem
                    id={SLUGS.Data}
                    title='Source Systems'
                    level={2}
                    icon={IconAgents}
                    onClick={() => onClick(SLUGS.Data)}
                />
                <MenuItem
                    id={SLUGS.referenceData}
                    title='Reference Data'
                    level={2}
                    icon={IconContacts}
                    onClick={() => onClick(SLUGS.referenceData)}
                />

            </MenuItem>

            <MenuItem
                id={SLUGS.projects}
                title='Projects'
                icon={IconIdeas}
                onClick={() => onClick(SLUGS.projects)}
            />
            <MenuItem
                id={SLUGS.transforms}
                items={[SLUGS.dataLineage]}
                title='Transforms'
                icon={IconOverview}
            >
                <MenuItem
                    id={SLUGS.transforms}
                    title='Databricks Notebooks'
                    level={2}
                    icon={IconAgents}
                    onClick={() => onClick(SLUGS.transforms)}
                />
                <MenuItem
                    id={SLUGS.dataLineage}
                    title='Data Lineage'
                    level={2}
                    icon={IconContacts}
                    onClick={() => onClick(SLUGS.dataLineage)}
                />
            </MenuItem>


            <MenuItem
                id={SLUGS.Builds}
                title='Builds'
                icon={IconCheckboxOff}
                onClick={() => onClick(SLUGS.Builds)}
            />

            <div className={classes.separator}/>
            <MenuItem
                id={SLUGS.settings}
                title='Settings'
                icon={IconSettings}
                onClick={() => onClick(SLUGS.Settings)}
            />

            <MenuItem id='logout' title='Logout' icon={IconLogout} onClick={logout} />
        </Menu>
    );
}

export default SidebarComponent;

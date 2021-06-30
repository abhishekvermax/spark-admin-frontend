import React from 'react';
import { Row } from 'simple-flexbox';
import { createUseStyles, useTheme } from 'react-jss';
import CardComponent from 'components/cards/CardComponent';

const useStyles = createUseStyles((theme) => ({
    itemTitle: {
        ...theme.typography.itemTitle,
        color: theme.color.veryDarkGrayishBlue
    },
    itemValue: {
        color: theme.color.grayishBlue2
    }
}));

function DocumentationPanel({ containerStyles }) {
    const theme = useTheme();
    const classes = useStyles({ theme });

    function renderStat(title, value) {
        return (
            <Row horizontal='space-between' vertical='center'>
                <span className={classes.itemTitle}>{title}</span>
                <span className={[classes.itemTitle, classes.itemValue].join(' ')}>{"Count: "+value}</span>
            </Row>
        );
    }

    return (
        <CardComponent
            containerStyles={containerStyles}
            title='Confluence Documents'
            link='View details'
            subtitle='Group:'
            subtitleTwo='Support'
            items={[
                renderStat('How to use the Platform', 2),
                renderStat('Links and Underlying Architecture', 6),
                renderStat('Awaiting Documents approvals', 5),
                renderStat('Pending', 6)
            ]}
        />
    );
}

export default DocumentationPanel;

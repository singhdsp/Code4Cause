import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return "#FFFFFF";
}

function stringAvatar(name) {
    return {
        sx: {
            bgcolor: stringToColor(name),
            color: "#16A34A",
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
}

export default function AvatarsGLS(props) {
    const PROFILE_URL = "";
    return (
        <>
            {PROFILE_URL.length === 0 &&
                <>
                    <Avatar {...stringAvatar(props.Name)} className={props.className}/>
                </>
            }
            {PROFILE_URL.length > 0 &&
                <>
                    <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                        sx={{ width: 56, height: 56 }}
                    />
                </>
            }
        </>
    );
}
import React from 'react';
import { Display } from "./styled";
import { useCurrentTime } from "./useCurrentTime";
import { formatTime } from "./formatTime";

const Clock = () => {
    const currentTime = useCurrentTime();

    return (
        <Display>
            Dzisiaj jest {formatTime(currentTime)}
        </Display>
    )
};
export default Clock;
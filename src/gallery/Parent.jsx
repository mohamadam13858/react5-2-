import React, { useCallback, useState } from 'react';
import Countbutton from './CountButton';
import Title from './Title';
import Count from './Count';
const Parent = () => {
    const [title, setTitle] = useState("سلام به دوستان کدیادی")
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(5)
    const hendleSetFirstCount = useCallback(() => {
        setCount(count + 1)
    }, [count])
    const hendleSetSecondCount = useCallback(() => {
        setCount2(count2 + 1)
    }, [count2])
    return (
        <div>
            <Title title={title} />
            <Count title="مجموعه1" count={count} />
            <Countbutton title="مجموعه1" handleClick={hendleSetFirstCount} />
            <Count title="مجموعه2" count={count2} />
            <Countbutton title="مجموعه2" handleClick={hendleSetSecondCount} />
        </div>
    );
}
export default Parent;
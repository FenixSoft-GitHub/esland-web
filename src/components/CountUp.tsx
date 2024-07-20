import { useProgressiveNumber } from '@/hooks/useProgressiveNumber';

import { useEffect } from 'preact/hooks'

export const CountUp = (
    { initial, final, decimal, duration }:
    { initial: number, final: number, decimal?: number,  duration?: number }
) => {
    const [count, setCount] = useProgressiveNumber(initial, duration, decimal)

    useEffect(() => {
        setCount(final)
    }, [])
    
    return <span>{count}</span>
}
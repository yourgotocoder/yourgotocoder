import { createContext, useEffect, useState } from "react";

type AnimationContextType = {
    animationStep?: number;
};

const AnimationContext = createContext<AnimationContextType>({
    animationStep: 0,
});

type Props = {
    children: React.ReactNode;
};

export function AnimationContextProvider(props: Props) {
    const [animationStepCount, setAnimationStepCount] = useState(0);

    useEffect(() => {
        let timer;
        if (animationStepCount < 10) {
            timer = setTimeout(() => {
                const animationStep = localStorage.getItem("animation-step");
                if (animationStep && +animationStep > 5) {
                    setAnimationStepCount(+animationStep);
                } else {
                    setAnimationStepCount((prevValue) => prevValue + 1);
                }
            }, 1000);
        }
        return () => {
            clearTimeout(timer);
        };
    }, [animationStepCount]);

    const context = {
        animationStep: animationStepCount,
    };

    return (
        <AnimationContext.Provider value={context}>
            {props.children}
        </AnimationContext.Provider>
    );
}

export default AnimationContext;

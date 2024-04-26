import {LevelContext} from "./LevelContext";
import {useContext} from "react";

export default function Section({children, isFancy}) {
    const level = useContext(LevelContext)
    return (
        <>
            <LevelContext.Provider value={level + 1}>
                <section className={isFancy ? 'dashed-margin width' : 'solid-margin width'}>
                    {children}
                </section>
            </LevelContext.Provider>
        </>
    )
}
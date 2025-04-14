'use client'
import {useContext, createContext} from "react"

export const GlobalTheme = {
	padding: "86px",
};

export const GlobalSettings = createContext ({
	theme: GlobalTheme
});


export default function Settings({children}:{children: React.ReactNode}){
	const theContext = useContext(GlobalSettings);

	return (
		<> <GlobalSettings value={theContext}> {children} </GlobalSettings> </>
	);
}

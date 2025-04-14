'use client'

import {useContext} from "react";
import {GlobalSettings} from "./settings"

export default function SomeButton(){
	const settings = useContext(GlobalSettings);
	return (
		<button style={{padding: settings.theme.padding + ";"}}>{"just a globally-padded button."}</button>
	);

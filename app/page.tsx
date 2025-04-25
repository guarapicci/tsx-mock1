import Image from "next/image";
import styles from "./page.module.css";
import Settings from "./lib/settings";
import SomeButton from "./lib/someButton";
import {TopBar} from "./lib/components";

export default function Home() {
  return (
	  <Settings>
	 <TopBar> hello there.</TopBar>
        </Settings>
  );
}

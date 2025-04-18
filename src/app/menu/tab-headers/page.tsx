import styles from "./TabHeader.module.scss";
import InsetShadowCard from "@/components/InsetShadowCard/InsetShadowCard";
import HoverableTabHeader from "@/components/TabHeaders/HoverableTabHeader/HoverableTabHeader";
import TabHeadersComp from "@/components/TabHeaders/TabHeadersComp";

export default function TabHeaders () {
  return (
    <div className={styles.mainCon}>
      <InsetShadowCard title="Tab Header" />
      <TabHeadersComp />

      <div className={styles.hoverableTabHeader}>
        <InsetShadowCard title="Hoverable Tab Header" />
        <HoverableTabHeader />
      </div>
    </div>
  );
}
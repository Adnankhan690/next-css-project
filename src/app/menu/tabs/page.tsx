import InsetShadowCard from "@/components/InsetShadowCard/InsetShadowCard";
import Tab from "@/components/tab/Tab";
import styles from "./tabs.module.scss";
import VerticalTab from "@/components/tab/VerticalTab/VerticalTab";

export default function Tabs () {
  return (
    <div className={styles.mainCon}>
      <InsetShadowCard title="Tabs" />
      <Tab />

      <div className={styles.verticalCon}>
        <InsetShadowCard title="Vertical Tab" />
        <VerticalTab />
      </div>
    </div>
  );
}
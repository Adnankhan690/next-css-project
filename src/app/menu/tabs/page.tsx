import InsetShadowCard from "@/components/InsetShadowCard/InsetShadowCard";
import Tab from "@/components/tab/Tab";
import styles from "./tabs.module.scss";

export default function Tabs () {
  return (
    <div className={styles.mainCon}>
      <InsetShadowCard title="Tabs" />
      <Tab />
    </div>
  );
}
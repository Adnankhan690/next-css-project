import InsetShadowCard from "@/components/InsetShadowCard/InsetShadowCard";
import TopNavigation from "./topNavigation";
import styles from "./topNavigation.module.scss";

export default function TopNavigationScreen () { 
  return (
    <div className={styles.topNavCon}>
      <InsetShadowCard title="Top Navigation" />
      <TopNavigation />
    </div>
  )
}
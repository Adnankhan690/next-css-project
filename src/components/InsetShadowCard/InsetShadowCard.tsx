import styles from "./InsetShadowCard.module.scss";

export default function InsetShadowCard ({title}: {title: string}) {
  return (
    <div className={styles.cardCon}>
      <p>{title}</p>
    </div>
  )
}
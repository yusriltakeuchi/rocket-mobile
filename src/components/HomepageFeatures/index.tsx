import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Panduan Praktis',
    Svg: require('@site/static/img/undraw_simple.svg').default,
    description: (
      <>
        Langkah-langkah jelas untuk publish ke App Store & Play Store tanpa ribet.
      </>
    ),
  },
  {
    title: 'Tips Penting & Efisien',
    Svg: require('@site/static/img/undraw_tips.svg').default,
    description: (
      <>
        Fokus pada hal-hal yang benar-benar penting agar proses rilis jadi lebih cepat dan minim error.
      </>
    ),
  },
  {
    title: 'Selalu Update',
    Svg: require('@site/static/img/undraw_uptodate.svg').default,
    description: (
      <>
        Dibuat dengan teknologi modern dan terus diperbarui mengikuti standar terbaru dari Apple & Google.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

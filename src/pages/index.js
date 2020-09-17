import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Build',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        The Helium Blockchain creates a unique incentive model, rewarding anyone who builds wireless network coverage.
        Hundreds of compatible gateways can be used to build a wireless network for billions of Internet of Things (IoT) devices around the world.
      </>
    ),
  },
  {
    title: 'Use',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Hundreds of companies and thousands of developers are already building IoT applications that use The People’s Network to connect and send data over the Internet.
        Thousands of existing solutions, sensors, devices and gateways can be easily configured to run 'LongFi' - a powerful blend of LoRaWAN and the Helium Blockchain.
      </>
    ),
  },
  {
    title: 'Earn',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
       Anyone can earn HNT by simply building The People’s Network and participating in Proof-of-Coverage, a novel proof-of-work model. HNT is also earned for transferring IoT device data.
       In order to use the network and transfer data, IoT devices must use Data Credits. Fixed in value, Data Credits are created by burning HNT, reducing the total supply of 5 million HNT mined each month, to achieve a Burn and Mint Equilibrium.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;

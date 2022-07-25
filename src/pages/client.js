import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import DefaultLayout from '../layouts/DefaultLayout';

import { ClientConfig, fetchContent, strapiImage } from '../api';

export default function Client({ data }) {
  console.log(data);

  return (
    <>
      <Head>
        <title>DION – Для клієнта</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <DefaultLayout>
        <section className="hero-banner">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-8 text-center">
                <h1 dangerouslySetInnerHTML={{__html: data.HeroBanner.Title}} />
                <p dangerouslySetInnerHTML={{__html: data.HeroBanner.Description}} />
                <button className="btn btn-primary">
                  {data.HeroBanner.ButtonTitle}
                </button>
              </div>
            </div>
          </div>
        </section>
        {
          data.ClientSection.map((section, sectionIndex) => (
            <section className={`client-information ${sectionIndex % 2 && 'reverse'}`}>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-10">
                    <div className="row">
                      <div className="col-6 left-column">
                        <div className="row">
                          <div className="col-12 pb-4">
                            <div className="title-with-icon">
                              <div className="icon">
                                <Image src={strapiImage(section.Icon.data.attributes.url)} width={18} height={18} alt="Fire Icon"/>
                              </div>
                              <h4 className="title">
                                {section.Title}
                              </h4>
                            </div>
                          </div>
                          <div className="col-12">
                            <p dangerouslySetInnerHTML={{__html: section.Description}} />
                          </div>
                        </div>
                      </div>
                      <div className="col-6 right-column">
                        <div className="client-information-image">
                          <Image src={strapiImage(section.Image.data.attributes.url)} layout="fill" alt="Infromation Image"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))
        }
      </DefaultLayout>
    </>
  );
}

export const getStaticProps = async () => {
  try {
    const data = await fetchContent('client', ClientConfig);

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error(error);
  }

  return {
    props: {},
  };
};
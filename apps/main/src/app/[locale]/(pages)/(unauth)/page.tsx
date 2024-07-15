import { getTranslations } from 'next-intl/server';

/* eslint-disable jsx-a11y/media-has-caption */
export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Discover',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function Index() {
  return (
    <>
      Index
    </>
  );
}

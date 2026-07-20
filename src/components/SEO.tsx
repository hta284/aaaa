import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
}

export function SEO({ 
  title = 'CÔNG TY QUANG HẢI | Thi Công Tháo Dỡ, San Lấp Mặt Bằng', 
  description = 'Công ty Quang Hải chuyên thi công tháo dỡ nhà, đào móng, đóng cừ, ép cừ, san lấp mặt bằng, đục nền bê tông uy tín chuyên nghiệp tại TP.HCM.',
  url = 'https://quanghai.vn',
  image = '/thao-do-nha.jpg'
}: SEOProps) {
  const siteTitle = title.includes('QUANG HẢI') ? title : `${title} | QUANG HẢI`;
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="title" content={siteTitle} />
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Helmet>
  );
}

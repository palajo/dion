import axios from 'axios';

export const headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer 8cf71596d2cb6e89a92b67edba3f3032a2c7d8aaf0b95c5788538a57838c1a18cd6d070cfcfec6b1dd8b6431f06251cb7584cb34dddad27fd602a0944cfde0dc2e9cba75075fa329dbd5f56dab92eaf44f8ae6f898c8c4557d95bec65ca20cd059454341a7f3c13b3d12e1c3fbdc19c21e260140e9c19d88808520d5ded0c91a'
};

export const fetchContent = async (path, headers) => {
  const res = await axios.get(`http://localhost:1337/api/${path}`, headers);
  return res.data.data.attributes;
};

export const strapiImage = (url) => {
  return `http://localhost:1337${url}`
}

export const HomepageConfig = {
  headers: headers,
  params: {
    'populate[0]=': 'HeroBanner',
    'populate[1]': 'PopularProducts',
    'populate[2]': 'PopularProducts.Icon',
    'populate[3]': 'PopularProducts.Products.FeaturedImage',
    'populate[4]': 'ProductBenefits',
    'populate[5]': 'ProductBenefits.Benefits.Icon',
    'populate[6]': 'Slider',
    'populate[7]': 'Slider.Slides',
    'populate[8]': 'AboutCompany',
    'populate[9]': 'AboutCompany.Statistics.Icon',
    'populate[10]': 'Contacts',
    'populate[11]': 'Contacts.Contacts.Icon',
    'populate[12]': 'Form',
  }
}

export const ProductConfig = {
  headers: headers,
  params: {
    'populate[0]=': 'Information',
    'populate[1]': 'Information.RelatedProducts.FeaturedImage',
    'populate[4]': 'Information.ImageGallery',
    'populate[2]': 'Specifications',
    'populate[7]': 'Specifications.Icon',
    'populate[5]': 'Specifications.Table',
    'populate[3]': 'Safety',
    'populate[8]': 'Safety.Icon',
    'populate[6]': 'Safety.Table',
  }
}

export const CatalogConfig = {
  headers: headers,
  params: {
    'populate[0]=': 'HeroBanner',
    'populate[1]': 'Category.Icon',
    'populate[2]': 'Category.Products.FeaturedImage',
  }
}

export const ClientConfig = {
  headers: headers,
  params: {
    'populate[0]=': 'HeroBanner',
    'populate[1]': 'ClientSection',
    'populate[2]': 'ClientSection.Icon',
    'populate[3]': 'ClientSection.Image',
  }
}

export const ContactsConfig = {
  headers: headers,
  params: {
    'populate[0]=': 'ContactsSection',
    'populate[1]': 'ContactsSection.Contacts.Icon',
    'populate[2]': 'Form',
  }
}
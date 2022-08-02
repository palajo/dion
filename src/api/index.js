import axios from 'axios';

export const headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer efc6ef76aa3905be2872b2534bfb4cd8ddef44c834629935492b0ff3e06fc89a1b122465a79c79b913dbce9ac7c199f76ab4a3b5a3c05cf8c027ac243ceb3e224c014b63cd00ca0a77bbd9e7b4867bde96bb46da71c6d4bc99158e5b385444c04940b3244d22d65cf4299e2305d0984d80c2af3048937423d84119107c54798e'
};

export const fetchContent = async (path, headers) => {
  const res = await axios.get(`https://api.dion.lviv.ua/api/${path}`, headers);
  return res.data.data.attributes;
};

export const strapiImage = (url) => {
  return `https://api.dion.lviv.ua${url}`
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
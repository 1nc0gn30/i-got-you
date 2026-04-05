import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://igotyou.757tech.pro';
const SITE_NAME = 'I Got You';
const DEFAULT_TITLE = 'I Got You | Premium Service Provider';
const DEFAULT_DESCRIPTION =
  'I Got You is a premium service provider sponsored by Tech Pro, delivering fast digital support, in-person assistance, and curated resources.';
const OG_IMAGE_PATH = '/og-image.png';
const AUTHOR = 'Tech Pro';

type SeoMeta = {
  title: string;
  description: string;
  type?: 'website' | 'article';
};

function upsertMetaByName(name: string, content: string) {
  let tag = document.head.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function upsertMetaByProperty(property: string, content: string) {
  let tag = document.head.querySelector(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('property', property);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function upsertCanonical(href: string) {
  let canonical = document.head.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', href);
}

function resourceTitleFromSlug(slug: string) {
  return slug
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function getSeoForPath(pathname: string): SeoMeta {
  if (pathname === '/') {
    return {
      title: DEFAULT_TITLE,
      description: DEFAULT_DESCRIPTION,
      type: 'website',
    };
  }

  if (pathname === '/services') {
    return {
      title: 'Services | I Got You',
      description:
        'Explore digital support, in-person assistance, crisis management, and systems integration services from I Got You.',
      type: 'website',
    };
  }

  if (pathname === '/about') {
    return {
      title: 'About | I Got You',
      description:
        'Learn the story behind I Got You and how Tech Pro sponsorship supports premium, fast, and reliable service delivery.',
      type: 'website',
    };
  }

  if (pathname === '/resources') {
    return {
      title: 'Resources | I Got You',
      description:
        'Browse the I Got You knowledge base with practical guides, checklists, and tools for digital and physical problem solving.',
      type: 'website',
    };
  }

  if (pathname.startsWith('/resources/')) {
    const slug = pathname.replace('/resources/', '').trim();
    const resourceTitle = slug ? resourceTitleFromSlug(slug) : 'Resource';
    return {
      title: `${resourceTitle} | I Got You Resources`,
      description:
        'Read practical, actionable resource guides from I Got You to solve digital and operational challenges quickly.',
      type: 'article',
    };
  }

  if (pathname === '/contact') {
    return {
      title: 'Contact | I Got You',
      description:
        'Contact I Got You for premium support and fast response on digital, operational, and in-person service requests.',
      type: 'website',
    };
  }

  if (pathname === '/faq') {
    return {
      title: 'FAQ | I Got You',
      description:
        'Find answers to common questions about I Got You services, response times, pricing approach, and support scope.',
      type: 'website',
    };
  }

  if (pathname === '/privacy') {
    return {
      title: 'Privacy Policy | I Got You',
      description:
        'Review the I Got You privacy policy to understand what data is collected, how it is used, and how it is protected.',
      type: 'website',
    };
  }

  return {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    type: 'website',
  };
}

export default function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const canonicalUrl = pathname === '/' ? `${SITE_URL}/` : `${SITE_URL}${pathname}`;
    const ogImageUrl = `${SITE_URL}${OG_IMAGE_PATH}`;
    const meta = getSeoForPath(pathname);

    document.title = meta.title;
    upsertCanonical(canonicalUrl);

    upsertMetaByName('description', meta.description);
    upsertMetaByName('author', AUTHOR);
    upsertMetaByName('robots', 'index, follow');

    upsertMetaByProperty('og:type', meta.type || 'website');
    upsertMetaByProperty('og:title', meta.title);
    upsertMetaByProperty('og:description', meta.description);
    upsertMetaByProperty('og:url', canonicalUrl);
    upsertMetaByProperty('og:site_name', SITE_NAME);
    upsertMetaByProperty('og:image', ogImageUrl);
    upsertMetaByProperty('og:image:alt', 'I Got You by Tech Pro brand cover image');

    upsertMetaByName('twitter:card', 'summary_large_image');
    upsertMetaByName('twitter:title', meta.title);
    upsertMetaByName('twitter:description', meta.description);
    upsertMetaByName('twitter:image', ogImageUrl);
  }, [pathname]);

  return null;
}

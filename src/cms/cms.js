import CMS from 'netlify-cms-app';
import uploadcare from 'netlify-cms-media-library-uploadcare';
import cloudinary from 'netlify-cms-media-library-cloudinary';

import IndexPagePreview from './preview-templates/IndexPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import CatalogPagePreview from './preview-templates/CatalogPagePreview';
import GalleryPagePreview from './preview-templates/GalleryPagePreview';

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
CMS.registerPreviewTemplate('catalog', CatalogPagePreview);
CMS.registerPreviewTemplate('catalog', GalleryPagePreview);

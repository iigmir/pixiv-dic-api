/**
 * @typedef {Object} PixpediaBreadcumbInterface
 * @property {String|null} name The item's name
 * @property {String|null} position THe item's position
 */

/**
 * Get a breadcrumb interface
 * @param {Element} item
 * @returns {PixpediaBreadcumbInterface}
 */
const generate_breadcumb_interface = item => ({
    name: item.querySelector('*[itemprop="name"]').textContent,
    position: item.querySelector('*[itemprop="position"]').content
});

/**
 *
 * @param {document} document
 * @returns {PixpediaBreadcumbInterface[]}
 */
export const GenerateBreadcrumb = (document = document) => {
    const list = document.querySelectorAll(`*[itemtype="http://schema.org/BreadcrumbList"] *[itemprop="itemListElement"]`);
    // [...list].length < 1 ? empty :
    return [...list].map( generate_breadcumb_interface );
};

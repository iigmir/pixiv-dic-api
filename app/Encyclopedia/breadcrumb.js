/**
 * @typedef {Object} PixpediaBreadcumbInterface
 * @property {String|null} name The item's name
 * @property {Number|null} position THe item's position number
 */

/**
 * Get a breadcrumb interface
 * @param {Element} item
 * @returns {PixpediaBreadcumbInterface}
 */
const generate_breadcumb_interface = item => ({
    name: item.querySelector('*[itemprop="name"]').textContent,
    position: parseInt(item.querySelector('*[itemprop="position"]').content, 10)
});

/**
 *
 * @param {document} document
 * @returns {PixpediaBreadcumbInterface[]}
 */
export const GenerateBreadcrumb = (document = document) => {
    const list = document.querySelectorAll(`*[itemtype="http://schema.org/BreadcrumbList"] *[itemprop="itemListElement"]`);
    return [...list].map( generate_breadcumb_interface );
};

export const main = (status = { message: "document-uninitialised" }, document = Document) => {
    /**
     * @type {PixpediaBreadcumbInterface}
     */
    const empty = [{ name: null, position: null }];
    if( status.message === "normal" ) {
        return GenerateBreadcrumb( document );
    }
    return empty;
};

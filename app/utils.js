export const GenerateBreadcrumb = (document = document) => {
    const list = document.querySelectorAll('*[itemtype="http://schema.org/BreadcrumbList"] *[itemprop="itemListElement"]');
    /**
     * Get a breadcrumb interface
     * @param {Element} item
     * @returns {PixpediaBreadcumbInterface}
     */
    const generate_interface = item => ({
        name: item.querySelector('*[itemprop="name"]').textContent,
        position: item.querySelector('*[itemprop="position"]').content
    });
    // [...list].length < 1 ? empty :
    return [...list].map( generate_interface );
};

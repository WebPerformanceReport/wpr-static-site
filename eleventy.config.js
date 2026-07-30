module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("fonts");
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("apple-touch-icon.png");

  eleventyConfig.addFilter("readableDate", function(dateObj) {
    return new Date(dateObj).toLocaleDateString("en-GB", {
      year: "numeric", month: "long", day: "numeric"
    });
  });

  eleventyConfig.addFilter("htmlDateString", function(dateObj) {
    return new Date(dateObj).toISOString().split("T")[0];
  });

  // The facade is only ever used for a post's hero, which sits above the fold and is
  // the LCP element: it must load eagerly at high priority. `loading="lazy"` here made
  // the browser fetch it at Low priority, costing ~59% of LCP in load delay.
  eleventyConfig.addShortcode("videoFacade", function(videoId, title, thumbnail) {
    return `<div class="ui-post-video-facade" data-yt-id="${videoId}">
  <img src="${thumbnail}" alt="${title}" class="ui-post-video-facade__thumb" width="1600" height="900" loading="eager" fetchpriority="high" decoding="async">
  <button class="ui-post-video-facade__btn" type="button" aria-label="${title}">
    <svg viewBox="0 0 68 48" width="68" height="48" aria-hidden="true">
      <path d="M66.52,7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13,34,0,34,0S12.21.13,6.9,1.55C3.97,2.33,2.27,4.81,1.48,7.74.06,13.05,0,24,0,24s.06,10.95,1.48,16.26c.78,2.93,2.49,5.41,5.42,6.19C12.21,47.87,34,48,34,48s21.79-.13,27.1-1.55c2.93-.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24s-.06-10.95-1.48-16.26z" fill="#f00"/>
      <path d="M45,24 27,14 27,34" fill="#fff"/>
    </svg>
  </button>
</div>`;
  });
};

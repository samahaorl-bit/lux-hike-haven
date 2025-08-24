const BASE_AIRBNB_URL =
  "https://www.airbnb.com/rooms/1429091370025168336?search_mode=regular_search&adults=1&check_in=2025-08-23&check_out=2025-08-28&children=0&infants=0&pets=0&source_impression_id=p3_1755626984_P3-Kj9nslpmHOqS1&previous_page_section_name=1000&federated_search_id=1138e53b-14a1-4296-aa88-5e7bbcaaad82";

export const getAirbnbUrl = (content: string, campaign = "landing-page") => {
  const url = new URL(BASE_AIRBNB_URL);
  url.searchParams.set("utm_source", "lux-hike-haven");
  url.searchParams.set("utm_medium", "website");
  url.searchParams.set("utm_campaign", campaign);
  url.searchParams.set("utm_content", content);
  return url.toString();
};

export const getAirbnbGalleryUrl = (content: string) => {
  const url = new URL(getAirbnbUrl(content, "photo-tour"));
  url.searchParams.set("modal", "PHOTO_TOUR_SCROLLABLE");
  return url.toString();
};

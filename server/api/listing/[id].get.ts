// import detailData from '~/temp/detail.json';

export default defineEventHandler(async (event) => {
  // Return mock data from temp/detail.json instead of calling the API
  // return detailData as ListingDetailResponse;
  const runtimeConfig = useRuntimeConfig(event);
  const listingId = getRouterParam(event, 'id');

  try {
    return await $fetch<ListingDetailResponse>(
      `${runtimeConfig.public.apiBase}/detail/${runtimeConfig.apiKey}/koop/${listingId}`,
    );
  }
  catch {
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch listing',
    });
  }
});

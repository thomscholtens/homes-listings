import type { ListingPageResponse } from '#shared/types/api/listing-overview';

export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig(event);

  try {
    const response = await $fetch<ListingPageResponse>(
      `${runtimeConfig.public.apiBase}/feeds/Aanbod.svc/json/${runtimeConfig.apiKey}/?type=koop`,
    );
    return response;
  }
  catch {
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch listing',
    });
  }
});

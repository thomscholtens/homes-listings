import type { ListingDetailResponse } from '#shared/types/api/listing-detail';

import { FetchError } from 'ofetch';

export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig(event);
  const listingId = getRouterParam(event, 'id');

  try {
    return await $fetch<ListingDetailResponse>(
      `${runtimeConfig.public.apiBase}/detail/${runtimeConfig.apiKey}/koop/${listingId}`,
    );
  }
  catch (error: unknown) {
    const isFetchError = error instanceof FetchError;
    throw createError({
      statusCode: isFetchError ? error.statusCode : 500,
      statusMessage: isFetchError ? error.statusMessage : 'Internal Server Error',
    });
  }
});

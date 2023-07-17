export function createApiUrl() {
  const URL = import.meta.env.VITE_BASE_URL
  const ENDPOINT = import.meta.env.VITE_API_ENDPOINT
  const VERSION = import.meta.env.VITE_API_VERSION
  return `${URL}/${ENDPOINT}/${VERSION}`
}

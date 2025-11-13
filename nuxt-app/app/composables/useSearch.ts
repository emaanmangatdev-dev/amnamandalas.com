import { ref, watch } from 'vue'
import { queryContent } from '#content'

export function useSearch() {
  const query = ref('')
  const items = ref<any[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  const search = async () => {
    loading.value = true
    error.value = null
    try {
      const { data } = await queryContent('/articles').find()
      const docs = data?.value || []

      items.value = docs.filter((a: any) => {
        const q = query.value.toLowerCase()
        return (
          (a.title || '').toLowerCase().includes(q) ||
          (a.description || '').toLowerCase().includes(q) ||
          (a.bodyText || '').toLowerCase().includes(q) ||
          (a.tags || []).join(' ').toLowerCase().includes(q)
        )
      })
    } catch (e: any) {
      error.value = 'Could not load articles 😢'
      console.error(e)
    } finally {
      loading.value = false
    }
  }

  watch(query, () => {
    if (query.value.trim() !== '') search()
    else items.value = []
  })

  return { query, items, loading, error }
}

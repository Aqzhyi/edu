import axios from 'axios'
import { useAsync, useAsyncFn } from 'react-use'
import $ from 'jquery'
import { map, sortBy } from 'lodash'

export const useData = (options: { desc: boolean }) => {
  return useAsync(async () => {
    const html = await axios.get(`${location.origin}/data.txt`, {})

    const $html = $(html.data)

    const one = map($html.find('.one table tbody tr'), element => {
      const $el = $(element).find('td')

      return {
        displayName: $el.eq(0).text(),
        value: Number($el.eq(1).text().replace('%', '')),
      }
    })

    const two = map($html.find('.two table tbody tr'), element => {
      const $el = $(element).find('td')

      return {
        displayName: $el.eq(0).text(),
        value: Number($el.eq(1).text().replace('%', '')),
      }
    })

    const three = map($html.find('.three table tbody tr'), element => {
      const $el = $(element).find('td')

      return {
        displayName: $el.eq(0).text(),
        value: Number($el.eq(1).text().replace('%', '')),
      }
    })

    const four = map($html.find('.four table tbody tr'), element => {
      const $el = $(element).find('td')

      return {
        displayName: $el.eq(0).text(),
        value: Number($el.eq(1).text().replace('%', '')),
      }
    })

    return {
      one: sortBy(one, datum => (options.desc ? -datum.value : datum.value)),
      two: sortBy(two, datum => (options.desc ? -datum.value : datum.value)),
      three: sortBy(three, datum => (options.desc ? -datum.value : datum.value)),
      four: sortBy(four, datum => (options.desc ? -datum.value : datum.value)),
    }
  }, [options.desc])
}

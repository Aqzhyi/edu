import { css } from '@emotion/react'
import { Button } from '@mantine/core'
import { map } from 'lodash'
import { useState } from 'react'
import { useData } from '~/pages/index/useData'

export default function Page() {
  const [desc, setDesc] = useState(true)
  const data = useData({ desc })

  return (
    <div>
      <div>
        <Button
          onClick={() => {
            setDesc(true)
          }}
        >
          降序
        </Button>
        <Button
          onClick={() => {
            setDesc(false)
          }}
        >
          升序
        </Button>
      </div>

      <div
        css={css`
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
        `}
      >
        <div>
          <h2>公立一般大學</h2>
          <table>
            <tbody>
              {map(data.value?.one || [], (datum, key) => {
                return (
                  <tr key={key}>
                    <td>{datum.displayName}</td>
                    <td>{datum.value}％</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        <div>
          <h2>公立技專校院</h2>
          <table>
            <tbody>
              {map(data.value?.two || [], (datum, key) => {
                return (
                  <tr key={key}>
                    <td>{datum.displayName}</td>
                    <td>{datum.value}％</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        <div>
          <h2>私立一般大學</h2>
          <table>
            <tbody>
              {map(data.value?.three || [], (datum, key) => {
                return (
                  <tr key={key}>
                    <td>{datum.displayName}</td>
                    <td>{datum.value}％</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        <div>
          <h2>私立技專校院</h2>
          <table>
            <tbody>
              {map(data.value?.four || [], (datum, key) => {
                return (
                  <tr key={key}>
                    <td>{datum.displayName}</td>
                    <td>{datum.value}％</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

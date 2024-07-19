import React from 'react'
import { Button } from '@mui/material'

import ProTip from '~/components/ProTip'
import RemoteControl from '~/components/RemoteControl'

import AirConditioner from '~/components/ac/AirConditioner'
import Toast from '~/components/Toast'

import { useDetectStorage } from '~/hooks'
import { useAcCtx } from '~/context'

/**
 * 主页
 */
const Home: React.FC = () => {
  const { state: ac } = useAcCtx()

  useDetectStorage()

  /**
   * 根据模式返回对应的色温
   */
  function getClassByMode() {
    if (ac.status)
      return ac.mode === 'hot' ? 'hot-color' : 'cold-color'
    else
      return ''
  }

  return (
    <div className={`max-w-600px m-auto ${getClassByMode()}`}>
      <div className="pt-6">
        <h1 className="text-center text-3xl">
          小空调
        </h1>
        <ProTip />
        <AirConditioner
          status={ac.status}
          temperature={ac.temperature}
          mode={ac.mode}
        />

        <RemoteControl />
      </div>

      <Toast />
    </div>
  )
}

export default Home

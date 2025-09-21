import { View, ViewStyle } from 'react-native'
import React from 'react'

type SpacerProps = {
    width?: number | string
    height?: number | string
}


const Spacer: React.FC<SpacerProps> = ({ width = "100%", height = 40}) => {
  return (
    <View style={{ width, height} as ViewStyle} />
  )
}

export default Spacer
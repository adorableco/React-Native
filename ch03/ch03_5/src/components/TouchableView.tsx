import React from 'react'
import type {ComponentProps, FC, ReactNode} from 'react'
import {TouchableOpacity, View} from 'react-native'
import type {StyleProp, ViewStyle} from 'react-native'

export type TouchableOpacityProps = ComponentProps<typeof TouchableOpacity>

export type TouchableViewProps = TouchableOpacityProps & {
  viewStyle?: StyleProp<ViewStyle>
}

//prettier-ignore
export const TouchableView: FC<TouchableViewProps> = ({
    children, ...touchableProps}) => {

    return (
    <TouchableOpacity {...touchableProps}>
        <View>{children}</View>
    </TouchableOpacity>)
}

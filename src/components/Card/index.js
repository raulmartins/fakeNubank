import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Animated } from 'react-native'
import { PanGestureHandler, State } from 'react-native-gesture-handler'
import {
  Container,
  CardHeader,
  CardContent,
  CardFooter,
  Title,
  Description,
  Annotation,
} from './styles'

export default function Card() {
  let offset = 0
  const translateY = new Animated.Value(0)

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: true },
  )

  const onHandleStateChanged = (event) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false
      const { translationY } = event.nativeEvent
      offset += translationY
      if (translationY >= 100) {
        opened = true
      } else {
        translateY.setValue(offset)
        translateY.setOffset(0)
        offset = 0
      }
      Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 380 : 0
        translateY.setOffset(offset)
        translateY.setValue(0)
      })
    }
  }

  return (
    <PanGestureHandler onGestureEvent={animatedEvent} onHandlerStateChange={onHandleStateChanged}>
      <Container
        style={{
          transform: [
            {
              translateY: translateY.interpolate({
                inputRange: [-360, 0, 380],
                outputRange: [-50, 0, 380],
                extrapolate: 'clamp',
              }),
            },
          ],
        }}
      >
        <CardHeader>
          <Icon name="attach-money" size={28} color="#666" />
          <Icon name="visibility-off" size={28} color="#666" />
        </CardHeader>
        <CardContent>
          <Title>Saldo disponivel</Title>
          <Description>R$ 1.189.674,00</Description>
        </CardContent>
        <CardFooter>
          <Annotation>
            Transferência de R$ 1.184.000,00 recebida de OSF Global hoje às 18:00
          </Annotation>
        </CardFooter>
      </Container>
    </PanGestureHandler>
  )
}

import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {
  Container, TabsContainer, TabItem, TabText,
} from './styles'

export default function Tabs() {
  return (
    <Container>
      <TabsContainer>
        <TabItem>
          <Icon name="person-add" size={24} color="#fff" />
          <TabText>Indicar amigos</TabText>
        </TabItem>
        <TabItem>
          <Icon name="chat-bubble-outline" size={24} color="#fff" />
          <TabText>Cobrar amigos</TabText>
        </TabItem>
        <TabItem>
          <Icon name="arrow-downward" size={24} color="#fff" />
          <TabText>Depositar</TabText>
        </TabItem>
        <TabItem>
          <Icon name="arrow-upward" size={24} color="#fff" />
          <TabText>Transferir</TabText>
        </TabItem>
        <TabItem>
          <Icon name="settings-input-composite" size={24} color="#fff" />
          <TabText>Ajustar limites</TabText>
        </TabItem>
        <TabItem>
          <Icon name="attach-money" size={24} color="#fff" />
          <TabText>Pagar</TabText>
        </TabItem>
        <TabItem>
          <Icon name="lock-open" size={24} color="#fff" />
          <TabText>Bloquear cartão</TabText>
        </TabItem>
        <TabItem>
          <Icon name="credit-card" size={24} color="#fff" />
          <TabText>Cartão virtual</TabText>
        </TabItem>
        <TabItem>
          <Icon name="format-line-spacing" size={24} color="#fff" />
          <TabText>Organizar atalhos</TabText>
        </TabItem>
      </TabsContainer>
    </Container>
  )
}

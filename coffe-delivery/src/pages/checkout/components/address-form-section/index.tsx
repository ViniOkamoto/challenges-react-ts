import { MapPinLine } from 'phosphor-react'
import { defaultTheme } from '../../../../core/theme/default'
import { TextM, TextS } from '../../../../core/theme/typography'
import Input from '../../../../shared/components/input'
import { InstructionContainer, SectionContainer } from '../../styles'
import { AddressForm } from './styles'

export default function AddressFormSection() {
  return (
    <SectionContainer>
      <InstructionContainer>
        <MapPinLine size={22} color={defaultTheme.color['yellow-dark']} />
        <div>
          <TextM as="strong">Delivery address</TextM>
          <TextS>Enter the address where you want to receive your order</TextS>
        </div>
      </InstructionContainer>
      <AddressForm>
        <Input placeholder="Postal Code" className="postalCode" />
        <Input placeholder="Address" className="address" />
        <Input placeholder="Number" />
        <Input
          placeholder="Apt, suit, etc"
          className="addressComplement"
          isOptional={true}
        />
        <Input placeholder="City" />
        <Input placeholder="Province" />
      </AddressForm>
    </SectionContainer>
  )
}

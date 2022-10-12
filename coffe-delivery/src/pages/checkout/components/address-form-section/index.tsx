import { MapPinLine } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { defaultTheme } from '../../../../core/theme/default'
import { TextM, TextS } from '../../../../core/theme/typography'
import { InstructionContainer, SectionContainer } from '../../styles'
import { AddressForm } from './styles'
import { Input } from '../../../../shared/components/input'

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

export default function AddressFormSection() {
  const { register, formState } = useFormContext()
  const { errors } = formState as unknown as ErrorsType

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
        <Input
          placeholder="Postal Code"
          className="postalCode"
          {...register('postalCode')}
          error={errors.postalCode?.message}
        />
        <Input
          placeholder="Address"
          className="address"
          {...register('address')}
          error={errors.address?.message}
        />
        <Input
          placeholder="Number"
          {...register('number')}
          error={errors.number?.message}
        />
        <Input
          placeholder="Apt, suit, etc"
          className="addressComplement"
          isOptional={true}
          {...register('complement')}
        />
        <Input
          placeholder="City"
          {...register('city')}
          error={errors.city?.message}
        />
        <Input
          placeholder="Province"
          {...register('province')}
          error={errors.province?.message}
        />
      </AddressForm>
    </SectionContainer>
  )
}

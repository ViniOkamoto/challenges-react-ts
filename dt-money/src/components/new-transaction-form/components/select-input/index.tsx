import * as Select from '@radix-ui/react-select'
import { CaretDown } from 'phosphor-react'
import {
  SelectContainer,
  SelectContent,
  SelectIcon,
  SelectItem,
  SelectViewport,
} from './styles'

export default function SelectInput() {
  return (
    <Select.Root>
      <SelectContainer>
        <Select.Value placeholder="Select a category" />
        <SelectIcon>
          <CaretDown size={16} weight="fill" />
        </SelectIcon>
      </SelectContainer>

      <Select.Portal>
        <SelectContent>
          <SelectViewport>
            <Select.Group>
              <SelectItem value="1" key={'1'}>
                <Select.ItemText>Valor um</Select.ItemText>
              </SelectItem>
              <SelectItem value="2" key={'2'}>
                <Select.ItemText>Valor 2</Select.ItemText>
              </SelectItem>
              <SelectItem value="3" key={'3'}>
                <Select.ItemText>Valor 3</Select.ItemText>
              </SelectItem>
              <SelectItem value="4" key={'4'}>
                <Select.ItemText>Valor 4</Select.ItemText>
              </SelectItem>
            </Select.Group>
          </SelectViewport>
        </SelectContent>
      </Select.Portal>
    </Select.Root>
  )
}

import { DialogForm } from '@Form';
import { EntityTypeField } from 'Entities'
import ConfigItem from '../ConfigItem/Browser';

const inputs = <>
    <EntityTypeField />
    <ConfigItem />
</>

const UpsertEntityConfigItem = () => {

    return <DialogForm
        entityType='EntityConfigItem'
        humanReadableEntityType='Entity Configuration Item'
        inputs={inputs}
    />
}

export default UpsertEntityConfigItem
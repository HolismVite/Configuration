import { DialogForm } from '@Form';
import { EntityTypeBrowserField } from 'Entities'
import ConfigItemBrowser from '../ConfigItem/Browser';

const inputs = <>
    <EntityTypeBrowserField />
    <ConfigItemBrowser />
</>

const UpsertEntityConfigItem = () => {

    return <DialogForm
        entityType='EntityConfigItem'
        humanReadableEntityType='Entity Configuration Item'
        inputs={inputs}
    />
}

export default UpsertEntityConfigItem
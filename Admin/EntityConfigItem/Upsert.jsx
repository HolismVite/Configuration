import { DialogForm } from '@Form';
import { EntityTypeBrowser } from 'Entities'
import ConfigItemBrowser from '../ConfigItem/Browser';

const inputs = <>
    <EntityTypeBrowser />
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
import { DialogForm } from '@Form';
import ConfigItemBrowser from '../ConfigItem/Browser';

const inputs = <>
    <ConfigItemBrowser />
</>

const UpsertEntityConfigItem = () => {

    return <DialogForm
        entityType='EntityTypeConfig'
        humanReadableEntityType='Entity Type Config'
        inputs={inputs}
    />
}

export default UpsertEntityConfigItem
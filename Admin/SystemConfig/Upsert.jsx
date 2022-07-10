import { DialogForm } from '@Form';
import ConfigItemBrowser from '../ConfigItem/Browser';

const inputs = <>
    <ConfigItemBrowser />
</>

const UpsertSystemConfig = () => {
    return <DialogForm
        entityType='SystemConfig'
        humanReadableEntityType='System Config'
        inputs={inputs}
    />
}

export default UpsertSystemConfig
// import EntityBrowser from 'Entities'
// import ConfigItemBrowser from '../ConfigItem/Browser'

import {
    DialogForm,
    Text,
    Browse,
} from '@Form'

const inputs = <>
    {/* <Browse
        browser={EntityBrowser}
    />
    <Browse
        browser={ConfigItemBrowser}
    /> */}
</>

const UpsertEntityConfigItem = () => {
    return <DialogForm
        entityType='EntityConfigItem'
        inputs={inputs}
    />
}

export default UpsertEntityConfigItem
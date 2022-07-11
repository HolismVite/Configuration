import { useState } from 'react'
import {
    DialogForm,
    Text,
} from '@Form';
import ConfigItemBrowser from '../ConfigItem/Browser';

const inputs = <>
    <ConfigItemBrowser />
    <Text
        column='Value'
    />
</>

const UpsertSystemConfig = () => {

    const [configType, setConfigType] = useState()

    const getConfigType = ({ getFieldValue }) => {
        setSelected
    }

    return <DialogForm
        entityType='SystemConfig'
        humanReadableEntityType='System Config'
        onFieldsChanged={getConfigType}
        inputs={inputs}
    />
}

export default UpsertSystemConfig
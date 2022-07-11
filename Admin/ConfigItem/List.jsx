import {
    Enum,
    List,
    Text,
    ValueWithTitle,
} from '@List'
import UpsertConfigItem from './Upsert'
import ConfigTypeIcon from '../ConfigType/Icon'

const filters = <>
    <Text
        column='Key'
    />
    <Text
        column='Name'
    />
    <Enum
        column='ConfigTypeId'
        placeholder='Config Type'
        entityType='ConfigType'
    />
</>

const headers = <>
    <th superAdmin>Key</th>
    <th>Name</th>
    <th>Type</th>
</>

const row = (item) => {

    return <>
        <td superAdmin>{item.key}</td>
        <td>
            <ValueWithTitle
                value={item.name}
                title={item.description}
            />
        </td>
        <td>
            <ConfigTypeIcon type={item.configTypeId} />
        </td>
    </>
}

const ConfigItems = ({ isSuperAdmin }) => {
    return <List
        title='Config Items'
        entityType='ConfigItem'
        filters={filters}
        headers={headers}
        row={row}
        hasDelete={isSuperAdmin}
        hasEdit={isSuperAdmin}
        create={isSuperAdmin && UpsertConfigItem}
    />
}

export default ConfigItems